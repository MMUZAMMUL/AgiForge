/* AgentForge — agents.js: custom ('My') agents — create, AI-generate, save, delete, render
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */

function getCustomAgents(){ try{ return JSON.parse(localStorage.getItem('ag_custom_agents')||'[]'); }catch(e){ return []; } }
function saveCustomAgents(list){ localStorage.setItem('ag_custom_agents',JSON.stringify(list)); }

function updateCharCount(){
  const v=document.getElementById('cr-prompt').value;
  document.getElementById('cr-char-count').textContent=v.length?`${v.length} chars`:'';
}

async function generateAgentWithAI(){
  const name=document.getElementById('cr-name').value.trim();
  const division=document.getElementById('cr-division').value;
  const expertise=document.getElementById('cr-expertise').value.trim();
  const style=document.getElementById('cr-style').value;
  const deliverables=document.getElementById('cr-deliverables').value.trim();
  const status=document.getElementById('cr-gen-status');
  if(!name||!division){ status.textContent='↑ Name and division are required'; return; }
  if(cfg.provider==='demo'||!cfg.groqKey.startsWith('gsk_')){
    status.innerHTML='<span style="color:var(--orange)">Connect AI first — tap ⚙️ Settings</span>'; return;
  }
  const btn=document.getElementById('cr-gen-btn');
  btn.disabled=true; btn.textContent='✨ Generating…'; status.textContent='Writing system prompt…';
  const styleDesc={direct:'direct and concise — answers fast, no fluff',thorough:'thorough and detailed — comprehensive breakdowns with examples',creative:'creative and energetic — bold ideas, enthusiasm, lateral thinking',academic:'academic and precise — cites reasoning, rigorous structure, nuanced',coaching:'coaching and Socratic — asks clarifying questions, guides the user to think'}[style]||style;
  const sys='You are an expert AI system prompt engineer. You write high-quality, professional agent system prompts.';
  const prompt=`Create a professional AI agent system prompt for a specialist named "${name}" in the ${division} division.

Details:
- Core expertise: ${expertise||'General '+division+' knowledge'}
- Communication style: ${styleDesc}
- Key deliverables: ${deliverables||'Expert analysis and actionable recommendations'}

Write a system prompt of 350–500 words with these sections:
## 🧠 Identity & Memory
## 🎯 Core Mission (3-4 bullet points)
## 🔒 Critical Rules (3-5 non-negotiables)
## 📋 Deliverable Templates (2 concrete output formats with headers)
## 💬 Communication Style

Output ONLY the system prompt text, no extra explanation.`;
  try{
    const res=await groqFetchWithRetry({model:cfg.groqModel,max_tokens:1024,temperature:0.7,messages:[{role:'system',content:sys},{role:'user',content:prompt}]},s=>status.textContent=s);
    const text=res.choices?.[0]?.message?.content||'';
    if(text){ document.getElementById('cr-prompt').value=text; updateCharCount(); status.textContent='✓ System prompt generated! Review and save.'; }
    else status.textContent='No output — try again';
  }catch(e){ status.textContent='Error: '+e.message; }
  btn.disabled=false; btn.textContent='✨ Generate System Prompt with AI';
}

function saveCustomAgent(){
  const name=document.getElementById('cr-name').value.trim();
  const division=document.getElementById('cr-division').value;
  const desc=document.getElementById('cr-desc').value.trim();
  const prompt=document.getElementById('cr-prompt').value.trim();
  const emoji=document.getElementById('cr-emoji').value.trim()||'🤖';
  const vibe=document.getElementById('cr-vibe').value.trim();
  if(!name||!division||!desc){ alert('Name, division, and description are required.'); return; }
  if(!prompt){ alert('System prompt is required. Use ✨ Generate or write your own.'); return; }
  const id='custom-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
  const agent={id,name,division,description:desc,color:'var(--accent)',emoji,vibe,systemPrompt:prompt,_custom:true};
  const list=getCustomAgents().filter(a=>a.id!==id);
  list.unshift(agent);
  saveCustomAgents(list);
  renderList(); renderMyAgents();
  showShareToast('✅ Agent saved! Find it in 🏠 Agents → My Agents');
}

function deleteCustomAgent(id){
  const list=getCustomAgents().filter(a=>a.id!==id);
  saveCustomAgents(list);
  renderMyAgents(); renderList();
}

function renderMyAgents(){
  const list=getCustomAgents();
  const sec=document.getElementById('my-agents-section');
  const el=document.getElementById('my-agents-list');
  if(!sec||!el) return;
  sec.style.display=list.length?'block':'none';
  el.innerHTML=list.map(a=>`
    <div class="my-agent-item" onclick="openAgent('${a.id}')">
      <div class="agi-emoji" style="background:var(--accent)22;color:var(--accent);border:1px solid var(--accent)44;width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${a.emoji}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:600">${a.name}</div>
        <div style="font-size:11px;color:var(--text2)">${a.division}</div>
        <div style="font-size:12px;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.description}</div>
      </div>
      <button class="my-agent-del" onclick="event.stopPropagation();deleteCustomAgent('${a.id}')" title="Delete">✕</button>
    </div>`).join('');
}

function copyAgentMd(){
  const name=document.getElementById('cr-name').value.trim()||'My Agent';
  const division=document.getElementById('cr-division').value||'specialized';
  const desc=document.getElementById('cr-desc').value.trim()||'A custom specialist';
  const emoji=document.getElementById('cr-emoji').value.trim()||'🤖';
  const prompt=document.getElementById('cr-prompt').value.trim();
  if(!prompt){ alert('Generate or write a system prompt first.'); return; }
  const md=`---\nname: ${name}\ndescription: ${desc}\ndivision: ${division}\nemoji: ${emoji}\ncolor: "#f59e0b"\n---\n\n${prompt}`;
  const done=()=>showShareToast('📋 .md copied! Paste into agents/'+division+'/');
  if(navigator.clipboard){ navigator.clipboard.writeText(md).then(done).catch(()=>fallbackCopy(md,done)); }
  else fallbackCopy(md,done);
}

// ── Pipeline mode toggle ──────────────────────────────────────────────────────
