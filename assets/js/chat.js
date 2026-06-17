/* AgentForge — chat.js: single-agent chat, history, attachments, workspace files, message actions
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */

async function openAgent(id){
  const a=AGENTS.find(x=>x.id===id)||getCustomAgents().find(x=>x.id===id); if(!a) return;
  curAgent={...a,content:null}; chatMsgs=loadHistory(a.id); attachedFile=null; renderAttachChip();
  const h=colorHex(a.color);
  document.getElementById('ch-name').textContent=a.name;
  document.getElementById('ch-sub').textContent='Loading…';
  const em=document.getElementById('ch-emoji');
  em.textContent=a.emoji; em.style.cssText=`background:${h}22;color:${h};border:1px solid ${h}44`;
  showScreen('chat'); renderChat();
  const content=await fetchAgentContent(a);
  curAgent.content=content;
  const _eng=cfg.provider==='groq'?engineLabel(cfg.groqModel)
    :cfg.provider==='demo'?'':cfg.provider.charAt(0).toUpperCase()+cfg.provider.slice(1);
  document.getElementById('ch-sub').textContent=a.division+(_eng?' · '+_eng:'');
  renderChat();
  setTimeout(()=>document.getElementById('msg-input').focus(),150);
}
function clearChat(){
  chatMsgs=[]; attachedFile=null; renderAttachChip(); renderChat();
  if(curAgent){ try{ localStorage.removeItem(chatKey(curAgent.id)); }catch(e){} }
}
// ── Conversation history (persists per agent in localStorage) ──────────────────
function chatKey(id){ return 'ag_chat_'+id; }
function saveHistory(){
  if(!curAgent) return;
  try{
    const slim=chatMsgs.filter(m=>!m.streaming).slice(-40).map(m=>{
      const o={role:m.role,content:m.content};
      if(m.meta) o.meta=m.meta;
      if(m.file) o.file={name:m.file.name,chars:m.file.chars}; // drop heavy content to save space
      return o;
    });
    if(slim.length) localStorage.setItem(chatKey(curAgent.id), JSON.stringify({t:Date.now(),msgs:slim}));
    else localStorage.removeItem(chatKey(curAgent.id));
  }catch(e){/* quota — ignore */}
}
function loadHistory(id){
  try{ const d=JSON.parse(localStorage.getItem(chatKey(id))||'null'); return (d&&d.msgs)?d.msgs:[]; }
  catch(e){ return []; }
}

// ── File attachment (client-side, free, offline) ──────────────────────────────
function onFilePicked(e){
  const file=e.target.files?.[0]; e.target.value='';
  if(!file) return;
  const MAX=200*1024; // 200KB of text
  if(file.size>2*1024*1024){ alert('File too large (max ~2MB).'); return; }
  const reader=new FileReader();
  reader.onload=()=>{
    let content=String(reader.result||'');
    let truncated=false;
    if(content.length>MAX){ content=content.slice(0,MAX); truncated=true; }
    attachedFile={name:file.name,content,chars:content.length,truncated};
    renderAttachChip();
  };
  reader.onerror=()=>alert('Could not read file.');
  reader.readAsText(file);
}
function renderAttachChip(){
  const wrap=document.getElementById('attach-chip-wrap');
  if(!wrap) return;
  if(!attachedFile){ wrap.innerHTML=''; return; }
  wrap.innerHTML=`<div class="attach-chip">
    <span>📎</span>
    <span class="ac-name">${esc(attachedFile.name)}</span>
    <span style="opacity:.7">${attachedFile.chars} chars${attachedFile.truncated?' (trimmed)':''}</span>
    <button class="ac-x" onclick="removeAttach()">×</button>
  </div>`;
}
function removeAttach(){ attachedFile=null; renderAttachChip(); }

// ── Build & test: preview HTML + save generated files to a local folder ───────
let workspaceDir=null;
function previewCode(id){
  const el=document.getElementById(id); if(!el) return;
  const raw=decodeURIComponent(el.dataset.raw||'');
  const blob=new Blob([raw],{type:'text/html'});
  const url=URL.createObjectURL(blob);
  const w=window.open(url,'_blank');
  if(!w) toast('Allow pop-ups to preview');
  setTimeout(()=>URL.revokeObjectURL(url),60000);
}
async function connectWorkspace(){
  if(!window.showDirectoryPicker){ toast('Folder saving needs Chrome/Edge on desktop'); return null; }
  try{ workspaceDir=await window.showDirectoryPicker({mode:'readwrite'}); toast('Workspace: '+workspaceDir.name); return workspaceDir; }
  catch(e){ return null; }
}
function guessExt(lang,raw){
  lang=(lang||'').toLowerCase();
  if(lang==='html'||/^\s*<(!doctype|html)/i.test(raw)) return 'html';
  const map={js:'js',javascript:'js',ts:'ts',typescript:'ts',py:'py',python:'py',css:'css',json:'json',
    java:'java',go:'go',rust:'rs',rs:'rs',rb:'rb',ruby:'rb',php:'php',c:'c',cpp:'cpp','c++':'cpp',
    sh:'sh',bash:'sh',sql:'sql',yaml:'yaml',yml:'yml',xml:'xml',md:'md',markdown:'md'};
  return map[lang]||'txt';
}
// Write one file into the connected folder (nested paths supported); else download.
async function writeToWorkspace(fname, raw){
  if(window.showDirectoryPicker && workspaceDir){
    const parts=fname.split('/').filter(Boolean);
    let dir=workspaceDir;
    for(let k=0;k<parts.length-1;k++){ dir=await dir.getDirectoryHandle(parts[k],{create:true}); }
    const fh=await dir.getFileHandle(parts[parts.length-1],{create:true});
    const wr=await fh.createWritable(); await wr.write(raw); await wr.close();
    return true;
  }
  downloadText(fname, raw); // universal fallback (mobile / other browsers)
  return false;
}
async function saveCode(id){
  const el=document.getElementById(id); if(!el) return;
  const raw=decodeURIComponent(el.dataset.raw||'');
  const ext=guessExt(el.dataset.lang,raw);
  const fname=prompt('Save file as:', (ext==='html'?'index':'file')+'.'+ext);
  if(!fname) return;
  if(window.showDirectoryPicker && !workspaceDir){ const d=await connectWorkspace(); if(!d){ downloadText(fname,raw); return; } }
  try{ const wrote=await writeToWorkspace(fname, raw); toast(wrote?('Saved '+fname+' → '+workspaceDir.name):('Downloaded '+fname)); }
  catch(e){ downloadText(fname, raw); toast('Downloaded '+fname); }
}
// Scaffold a whole multi-file project from one answer into the chosen folder.
async function saveAllFiles(i){
  const m=chatMsgs[i]; if(!m) return;
  const blocks=[...m.content.matchAll(/```(\w*)\n?([\s\S]*?)```/g)];
  if(!blocks.length){ toast('No code files in this message'); return; }
  if(window.showDirectoryPicker && !workspaceDir){ const d=await connectWorkspace(); if(!d){ toast('Pick a folder to save the project'); return; } }
  let saved=0, idx=0;
  for(const b of blocks){
    idx++;
    const lang=b[1], raw=(b[2]||'').trim(); if(!raw) continue;
    // Try to infer a filename from the text right before the code fence
    const pre=m.content.slice(Math.max(0,b.index-160), b.index);
    const fnMatch=pre.match(/([A-Za-z0-9_.\-\/]+\.[A-Za-z]{1,5})[`*\s:]*$/);
    const fname=fnMatch?fnMatch[1]:('file'+idx+'.'+guessExt(lang,raw));
    try{ await writeToWorkspace(fname, raw); saved++; }catch(e){}
  }
  toast(`Saved ${saved} file${saved!==1?'s':''}${workspaceDir?(' → '+workspaceDir.name):' (downloaded)'}`);
}

// ── Lightweight toast ─────────────────────────────────────────────────────────
function toast(msg){
  let t=document.getElementById('ag-toast');
  if(!t){ t=document.createElement('div'); t.id='ag-toast';
    t.style.cssText='position:fixed;bottom:84px;left:50%;transform:translateX(-50%);background:var(--bg3);color:var(--text);border:1px solid var(--border);padding:9px 16px;border-radius:10px;font-size:13px;z-index:9999;opacity:0;transition:opacity .2s;pointer-events:none;box-shadow:0 8px 24px -8px #000';
    document.body.appendChild(t); }
  t.textContent=msg; t.style.opacity='1';
  clearTimeout(t._h); t._h=setTimeout(()=>t.style.opacity='0',1500);
}
// ── Message actions: copy & quote-into-input ──────────────────────────────────
function copyMsg(i){
  const m=chatMsgs[i]; if(!m) return;
  navigator.clipboard?.writeText(m.content).then(()=>toast('Copied to clipboard')).catch(()=>toast('Copy not supported'));
}
function quoteMsg(i){
  const m=chatMsgs[i]; if(!m) return;
  const inp=document.getElementById('msg-input');
  const q=m.content.split('\n').slice(0,12).map(l=>'> '+l).join('\n');
  inp.value=q+(m.content.split('\n').length>12?'\n> …':'')+'\n\n'+inp.value;
  inp.focus(); autoResize(inp);
}
// ── Continue a finished pipeline as a normal conversation ──────────────────────
async function continueFromPipeline(){
  const out=window._lastPipelineOutput; if(!out){ return; }
  const lastAgent=pipeline[pipeline.length-1]||AGENTS[0];
  await openAgent(lastAgent.id);
  chatMsgs=[
    {role:'user',content:`We just ran a multi-agent pipeline for this goal: "${window._lastPipelineGoal||''}". Below is the combined deliverable. I'd like to continue refining it with you.`},
    {role:'assistant',content:out}
  ];
  renderChat();
  toast('Continuing in chat — ask a follow-up');
}
// ── Attach a whole local folder / repository as read-only context ──────────────
async function onDirPicked(e){
  const files=[...(e.target.files||[])]; e.target.value='';
  if(!files.length) return;
  const exts=/\.(txt|md|markdown|js|mjs|cjs|ts|jsx|tsx|py|rb|php|go|rs|java|kt|c|cc|cpp|h|hpp|cs|swift|html|htm|css|scss|json|xml|yaml|yml|toml|ini|sql|sh|bash|vue|svelte|env|cfg|conf|gradle|dockerfile|gitignore)$/i;
  const skip=/(^|\/)(node_modules|\.git|dist|build|out|\.next|\.nuxt|vendor|target|\.cache|coverage|__pycache__)(\/|$)/i;
  const picked=files
    .filter(f=>!skip.test(f.webkitRelativePath||f.name))
    .filter(f=>exts.test(f.name)&&f.size<60*1024)
    .sort((a,b)=>(a.webkitRelativePath||a.name).localeCompare(b.webkitRelativePath||b.name))
    .slice(0,80);
  const MAX=190*1024; let buf=''; let used=0, count=0, skipped=0;
  for(const f of picked){
    if(used>=MAX){ skipped++; continue; }
    let txt=''; try{ txt=await f.text(); }catch(err){ continue; }
    if(!txt.trim()) continue;
    const head=`\n\n===== FILE: ${f.webkitRelativePath||f.name} =====\n`;
    const chunk=(head+txt);
    const room=MAX-used;
    buf+=chunk.slice(0,room); used+=Math.min(chunk.length,room); count++;
  }
  const root=(files[0].webkitRelativePath||'folder').split('/')[0]||'folder';
  if(!count){ toast('No readable text files found'); return; }
  attachedFile={name:`📁 ${root} (${count} files)`,content:buf,chars:buf.length,truncated:used>=MAX};
  renderAttachChip();
  toast(`Attached ${count} files from ${root}`);
}
function renderChat(){
  const el=document.getElementById('messages');
  if(!chatMsgs.length){
    el.innerHTML=curAgent?`<div style="text-align:center;color:var(--text2);margin-top:24px;padding:0 18px">
      <div style="font-size:46px;margin-bottom:10px">${curAgent.emoji}</div>
      <div style="font-weight:700;color:var(--text);font-size:16px;margin-bottom:6px">${curAgent.name}</div>
      <div style="font-size:13px;line-height:1.6;max-width:300px;margin:0 auto">${curAgent.description}</div>
      ${curAgent.vibe?`<div style="font-style:italic;margin-top:9px;font-size:12px">"${curAgent.vibe}"</div>`:''}
      ${cfg.provider==='demo'?'<div style="margin-top:14px;font-size:12px;color:var(--orange);background:var(--orange)11;border:1px solid var(--orange)33;padding:9px;border-radius:8px">Demo mode — tap ⚙️ to connect free AI</div>':''}
    </div>`:''; return;
  }
  el.innerHTML=chatMsgs.map((m,idx)=>{
    const u=m.role==='user';
    const hasCode=!u&&/```/.test(m.content||'');
    const acts=(!m.streaming&&m.content)?`<div class="msg-actions">
        <button class="msg-act" onclick="copyMsg(${idx})">📋 Copy</button>
        <button class="msg-act" onclick="quoteMsg(${idx})">❝ Quote</button>
        ${!u?`<button class="msg-act" onclick="gistMsg(${idx})">🔗 Gist</button>`:''}
        ${hasCode?`<button class="msg-act" onclick="saveAllFiles(${idx})">📂 Save all files</button>`:''}
      </div>`:'';
    return `<div class="msg ${u?'user':'assistant'}">
      <div class="msg-av">${u?'You':(curAgent?.emoji||'🤖')}</div>
      <div><div class="bubble">${m.file?`<div style="font-size:11px;opacity:.85;margin-bottom:5px">📎 ${esc(m.file.name)} · ${m.file.chars} chars</div>`:''}${u?esc(m.content):md(m.content)}${m.streaming?'<span class="cursor">▋</span>':''}</div>
      ${m.meta?`<div class="msg-meta">⏱ ${m.meta.t}s${m.meta.tok?' · '+m.meta.tok+' tok':''}</div>`:''}${acts}</div></div>`;
  }).join('');
  el.scrollTop=el.scrollHeight;
}
// Build the message history the LLM sees, inlining any attached file content
function toLLMHistory(){
  return chatMsgs.filter(m=>!(m.role==='assistant'&&m.streaming)).map(m=>{
    if(m.role==='user'&&m.file){
      return {role:'user',content:`The user attached a file "${m.file.name}". Use its contents as context.\n\n--- FILE CONTENT ---\n${m.file.content}\n--- END FILE ---\n\n${m.content}`};
    }
    return {role:m.role,content:m.content};
  });
}
async function sendMsg(){
  const inp=document.getElementById('msg-input');
  const text=inp.value.trim(); if((!text&&!attachedFile)||chatBusy||!curAgent) return;
  inp.value=''; inp.style.height='44px';
  document.getElementById('send-btn').disabled=true;
  const userMsg={role:'user',content:text||'(see attached file)'};
  if(attachedFile){ userMsg.file=attachedFile; attachedFile=null; renderAttachChip(); }
  chatMsgs.push(userMsg);
  const ai={role:'assistant',content:'',streaming:true};
  chatMsgs.push(ai); renderChat(); chatBusy=true;
  const t0=Date.now();
  try{
    if(cfg.provider==='demo'){
      await streamDemo(ai,curAgent);
    } else {
      await streamInto(curAgent.content, null, (chunk)=>{ai.content+=chunk;onStreamFrame(renderChat);}, toLLMHistory());
    }
    ai.meta={t:((Date.now()-t0)/1000).toFixed(1)};
  }catch(e){ai.content='**Error:** '+e.message;}
  ai.streaming=false; chatBusy=false;
  document.getElementById('send-btn').disabled=false; renderChat(); saveHistory();
}

// ── Cloud engine rate-limit helpers ───────────────────────────────────────────────────
