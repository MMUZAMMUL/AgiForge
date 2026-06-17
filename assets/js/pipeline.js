/* AgentForge — pipeline.js: pipeline builder, sharing, examples, auto-build team, run/stop, exports
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */

function togglePipelineMode(){
  pipelineMode=!pipelineMode;
  const modeBtn=document.getElementById('pipeline-mode-btn');
  modeBtn.classList.toggle('active-tab',pipelineMode);
  modeBtn.setAttribute('aria-pressed',pipelineMode?'true':'false');
  const bar=document.getElementById('pipeline-bar');
  bar.style.display=pipelineMode?'flex':'none';
  renderList();
}
function togglePipelineAgent(id){
  const a=AGENTS.find(x=>x.id===id);if(!a)return;
  const idx=pipeline.findIndex(p=>p.id===id);
  if(idx>=0) pipeline.splice(idx,1);
  else if(pipeline.length<6) pipeline.push(a);
  document.getElementById('pl-count').textContent=pipeline.length;
  renderList(); updatePipelineQueue();
}
function goToPipeline(){
  pipelineMode=false;
  document.getElementById('pipeline-mode-btn').classList.remove('active-tab');
  document.getElementById('pipeline-bar').style.display='none';
  showScreen('pipeline'); updatePipelineQueue();
}
function updatePipelineQueue(){
  const el=document.getElementById('pipeline-queue');
  const runBtn=document.getElementById('run-btn');
  if(!pipeline.length){
    el.innerHTML='<div class="pipeline-hint" id="pl-empty-hint">← Go to 🏠 Agents and tap ⛓️ Add to build your pipeline</div>';
    runBtn.disabled=true; return;
  }
  el.innerHTML=pipeline.map((a,i)=>{
    const h=colorHex(a.color);
    return `<div class="pq-item">
      <div class="pq-num">${i+1}</div>
      <div class="pq-emoji">${a.emoji}</div>
      <div class="pq-info"><div class="pq-name">${a.name}</div><div class="pq-div">${a.division}</div></div>
      <button class="pq-remove" onclick="removePipelineAgent(${i})">×</button>
    </div>`;
  }).join('');
  runBtn.disabled=pipeline.length<1||!document.getElementById('pl-goal').value.trim();
  const shareBtn=document.getElementById('share-btn');
  if(shareBtn) shareBtn.style.display=pipeline.length?'block':'none';
}
function removePipelineAgent(i){ pipeline.splice(i,1); updatePipelineQueue(); renderList(); }

// ── Shareable pipeline URLs ───────────────────────────────────────────────────
function getShareURL(){
  const goal=document.getElementById('pl-goal').value.trim();
  const url=new URL(location.href);
  url.search='';
  url.searchParams.set('pipeline',pipeline.map(a=>a.id).join(','));
  if(goal) url.searchParams.set('goal',goal);
  return url.toString();
}
function sharePipeline(){
  if(!pipeline.length) return;
  const url=getShareURL();
  const done=()=>showShareToast('🔗 Link copied!');
  if(navigator.clipboard){ navigator.clipboard.writeText(url).then(done).catch(()=>fallbackCopy(url,done)); }
  else fallbackCopy(url,done);
}
function fallbackCopy(text,cb){
  const el=document.createElement('textarea');
  el.value=text; el.style.cssText='position:fixed;opacity:0';
  document.body.appendChild(el); el.select();
  try{ document.execCommand('copy'); cb(); }catch(e){ alert(text); }
  el.remove();
}
function showShareToast(msg){
  const t=document.getElementById('share-toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}
function loadPipelineFromURL(){
  const p=new URLSearchParams(location.search);
  const param=p.get('pipeline');
  if(!param) return false;
  const resolved=param.split(',').map(s=>s.trim()).filter(Boolean)
    .map(id=>AGENTS.find(a=>a.id===id)).filter(Boolean);
  if(!resolved.length) return false;
  pipeline=resolved;
  const goal=p.get('goal');
  if(goal) document.getElementById('pl-goal').value=goal;
  updatePipelineQueue();
  return true;
}

document.addEventListener('DOMContentLoaded',()=>{
  const g=document.getElementById('pl-goal');
  if(g) g.addEventListener('input',()=>{
    const runBtn=document.getElementById('run-btn');
    if(runBtn) runBtn.disabled=pipeline.length<1||!g.value.trim();
  });
});

// ── Example pipelines ─────────────────────────────────────────────────────────
const EXAMPLES = {
  saas:{
    goal:'Build a complete SaaS landing page and go-to-market plan for a project management tool targeting remote teams',
    agents:['product-product-manager','engineering-frontend-developer','design-brand-guardian','marketing-growth-hacker']
  },
  security:{
    goal:'Perform a full security audit of a Node.js web application with user authentication and payment processing',
    agents:['security-security-architect','security-application-security-engineer','testing-qa-engineer']
  },
  content:{
    goal:'Create a complete content marketing campaign for a new AI writing tool launch',
    agents:['design-brand-guardian','marketing-content-strategist','marketing-seo-specialist']
  }
};
function loadExample(key){
  const ex=EXAMPLES[key]; if(!ex) return;
  document.getElementById('pl-goal').value=ex.goal;
  pipeline=ex.agents.map(id=>AGENTS.find(a=>a.id===id)).filter(Boolean);
  updatePipelineQueue();
}

// ── Auto-Build Team (orchestrator picks agents) ───────────────────────────────
async function autoBuildTeam(){
  const goal=document.getElementById('pl-goal').value.trim();
  const status=document.getElementById('auto-build-status');
  const btn=document.getElementById('auto-build-btn');
  if(!goal){ status.textContent='↑ Describe your goal first'; return; }
  const _hasKey=(cfg.provider==='groq'&&cfg.groqKey.startsWith('gsk_'))
    ||(cfg.provider==='cerebras'&&cfg.cerebrasKey)
    ||(cfg.provider==='gemini'&&cfg.geminiKey)
    ||(cfg.provider==='openrouter'&&cfg.orKey)
    ||(cfg.provider==='ollama');
  if(!_hasKey){
    status.innerHTML='<span style="color:var(--orange)">Connect AI first — tap ⚙️</span>'; return;
  }
  btn.disabled=true; btn.textContent='✨ Assembling team…';
  status.textContent='Analyzing goal & selecting specialists from 247 agents…';

  // Compact roster: id|name|one-line desc, grouped — fits in context
  const roster=AGENTS.map(a=>`${a.id} | ${a.name} (${a.division}): ${a.description.slice(0,90)}`).join('\n');
  const sys=`You are an expert AI orchestrator. You assemble the optimal team of specialist agents to accomplish a project, choosing from a fixed roster. You understand which specialists must work in which ORDER so each builds on the previous one's output.`;
  const prompt=`PROJECT GOAL:\n${goal}\n\nAVAILABLE SPECIALISTS (id | name (division): description):\n${roster}\n\nSelect the 3-5 BEST specialists to accomplish this goal, in the optimal execution ORDER (earlier agents lay groundwork for later ones). Respond with ONLY a JSON object, no prose:\n{"team":["exact-agent-id-1","exact-agent-id-2","exact-agent-id-3"],"reason":"one sentence why this team & order"}`;

  try{
    const body={
      model:'llama-3.3-70b-versatile',
      max_tokens:512,
      temperature:0.3,
      response_format:{type:'json_object'},
      messages:[{role:'system',content:sys},{role:'user',content:prompt}],
    };
    const res=await groqFetchWithRetry(body, s=>{ status.textContent=s; });
    if(!res.ok){
      const e=await res.json().catch(()=>({}));
      throw new Error(e.error?.message||'AI service '+res.status);
    }
    const data=await res.json();
    const raw=data.choices?.[0]?.message?.content||'{}';
    let parsed; try{ parsed=JSON.parse(raw); }catch{ parsed=JSON.parse(raw.slice(raw.indexOf('{'),raw.lastIndexOf('}')+1)); }
    const ids=Array.isArray(parsed.team)?parsed.team:[];
    const team=ids.map(id=>AGENTS.find(a=>a.id===id)).filter(Boolean);
    if(team.length<1) throw new Error('No matching agents returned');

    pipeline=team.slice(0,6);
    updatePipelineQueue(); renderList();
    status.innerHTML=`<span style="color:var(--green)">✓ Team of ${pipeline.length} assembled</span>${parsed.reason?' — '+esc(parsed.reason):''}`;
  }catch(e){
    status.innerHTML='<span style="color:var(--red)">Auto-build failed: '+esc(e.message)+'</span>';
  }
  btn.disabled=false; btn.textContent='✨ Auto-Build Team';
}

// ── Run Pipeline ──────────────────────────────────────────────────────────────
async function runPipeline(){
  const goal=document.getElementById('pl-goal').value.trim();
  if(!goal||!pipeline.length) return;
  if(cfg.provider==='demo'){ alert('Connect AI first — go to ⚙️ Settings'); return; }

  stopFlag=false; pipelineRunning=true;
  document.getElementById('pipeline-build').style.display='none';
  const execEl=document.getElementById('pipeline-exec');
  execEl.style.display='flex';
  const screen=document.getElementById('exec-screen');
  screen.innerHTML='';

  const outputs=[];
  const blocks=[];

  for(let i=0;i<pipeline.length;i++){
    if(stopFlag) break;
    const agent=pipeline[i];
    document.getElementById('exec-progress').textContent=`${i+1}/${pipeline.length}`;

    // Create block UI
    const h=colorHex(agent.color);
    const blockId='exec-block-'+i;
    const outputId='exec-out-'+i;
    const statusId='exec-status-'+i;
    screen.innerHTML+=`
      <div class="exec-agent-block" id="${blockId}">
        <div class="exec-agent-header">
          <div style="width:32px;height:32px;border-radius:8px;background:${h}22;color:${h};border:1px solid ${h}44;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">${agent.emoji}</div>
          <div style="min-width:0;flex:1"><div style="font-weight:600;font-size:13px">${agent.name}</div><div style="font-size:11px;color:var(--text2)">${agent.division}</div></div>
          <div class="exec-agent-status running" id="${statusId}">● Working…</div>
        </div>
        <div class="exec-output" id="${outputId}"></div>
        <button class="expand-btn" id="exp-${i}" onclick="toggleExpand(${i})" style="display:none">Show more ▾</button>
      </div>`;
    screen.scrollTop=screen.scrollHeight;

    // Build context from previous outputs
    let context='';
    if(outputs.length>0){
      context=`

---
**PREVIOUS AGENTS WORK:**
`;
      outputs.forEach((o,j)=>{
        context+=`
**${pipeline[j].name}** delivered:
${o.slice(0,1500)}
`;
      });
      context+=`
---
**YOUR TURN:** Continue this work. Build on what came before. Be specific and produce real deliverables.`;
    }

    const prompt=i===0
      ? `PROJECT GOAL: ${goal}

As ${agent.name}, deliver your part of this project. Be concrete, specific, and produce real output — not just advice.`
      : `PROJECT GOAL: ${goal}${context}

As ${agent.name}, now deliver YOUR specific contribution to this project. Be concrete and build on the previous work.`;

    // Fetch agent content
    const content=await fetchAgentContent(agent);
    let agentOutput='';

    try{
      await streamInto(content, prompt, (chunk)=>{
        agentOutput+=chunk;
        onStreamFrame(()=>{
          const outEl=document.getElementById(outputId);
          if(outEl){ outEl.innerHTML=md(agentOutput)+'<span class="cursor">▋</span>'; outEl.scrollTop=outEl.scrollHeight; }
          screen.scrollTop=screen.scrollHeight;
        });
      });
    } catch(e){
      agentOutput=`Error: ${e.message}`;
    }

    outputs.push(agentOutput);
    cancelStreamFrame();
    const outEl=document.getElementById(outputId);
    const statusEl=document.getElementById(statusId);
    if(outEl){ outEl.innerHTML=md(agentOutput); }
    if(statusEl){ statusEl.textContent='✓ Done'; statusEl.className='exec-agent-status done'; }
    const expBtn=document.getElementById('exp-'+i);
    if(expBtn&&agentOutput.length>400){ expBtn.style.display='block'; outEl.classList.add('collapsed'); }
  }

  // Final combined output
  if(!stopFlag&&outputs.length>0){
    const combined=pipeline.map((a,i)=>`## ${a.emoji} ${a.name}

${outputs[i]}`).join('\n\n---\n\n');
    screen.innerHTML+=`
      <div class="final-output">
        <h3>✅ Pipeline Complete — Combined Deliverable</h3>
        <div style="font-size:13px;line-height:1.7">${md(combined)}</div>
        <button class="copy-btn" onclick="copyOutput()">📋 Copy Full Output</button>
        <button class="save-btn2" onclick="continueFromPipeline()">💬 Continue in Chat</button>
        <button class="save-btn2" onclick="downloadPipeline()">⬇️ Download .md</button>
        <button class="save-btn2" onclick="savePipelineToMemory('${esc(document.getElementById('pl-goal').value)}')">💾 Save to Memory</button>
        <button class="save-btn2" onclick="gistOutput('pipeline')" style="background:var(--bg3);border-color:var(--border)">🔗 Open as Gist</button>
        <button class="save-btn2" onclick="sendToWebhook('pipeline')" style="background:var(--green)22;border-color:var(--green)44;color:var(--green)">⚡ Send to Automation</button>
      </div>`;
    window._lastPipelineOutput=combined;
    window._lastPipelineGoal=document.getElementById('pl-goal').value;
    screen.scrollTop=screen.scrollHeight;
    document.getElementById('exec-progress').textContent='Complete ✓';
  }
  pipelineRunning=false;
}

function toggleExpand(i){
  const out=document.getElementById('exec-out-'+i);
  const btn=document.getElementById('exp-'+i);
  if(out.classList.contains('collapsed')){ out.classList.remove('collapsed'); btn.textContent='Show less ▴'; }
  else { out.classList.add('collapsed'); btn.textContent='Show more ▾'; }
}
function stopPipeline(){
  stopFlag=true; pipelineRunning=false;
  document.getElementById('pipeline-exec').style.display='none';
  document.getElementById('pipeline-build').style.display='flex';
}
function copyOutput(){
  if(window._lastPipelineOutput) navigator.clipboard?.writeText(window._lastPipelineOutput).then(()=>alert('Copied!')).catch(()=>alert('Long-press to copy'));
}

// ── Export: download text as a file (client-side, free) ───────────────────────
function downloadText(filename, text){
  try{
    const blob=new Blob([text],{type:'text/markdown;charset=utf-8'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url; a.download=filename;
    document.body.appendChild(a); a.click();
    setTimeout(()=>{ URL.revokeObjectURL(url); a.remove(); },500);
  }catch(e){ alert('Download failed: '+e.message); }
}
function slug(s){ return String(s||'export').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,40)||'export'; }
function downloadPipeline(){
  if(!window._lastPipelineOutput){ alert('Nothing to export yet'); return; }
  const goal=window._lastPipelineGoal||'pipeline';
  const header=`# Pipeline: ${goal}\n\n_Generated by AgentForge · ${new Date().toLocaleString()}_\n\n---\n\n`;
  downloadText('pipeline-'+slug(goal)+'.md', header+window._lastPipelineOutput);
}
function downloadDebate(){
  const txt=window._lastDebateEl?.innerText||''; if(!txt){ alert('Nothing to export yet'); return; }
  downloadText('debate-'+slug(window._lastDebateTopic)+'.md', '# Agent Debate\n\n_'+new Date().toLocaleString()+'_\n\n---\n\n'+txt);
}
function downloadBenchmark(){
  if(!window._lastBenchReport){ alert('Nothing to export yet'); return; }
  downloadText('benchmark-'+slug(window._lastBenchPrompt)+'.md', window._lastBenchReport);
}
function downloadChat(){
  if(!curAgent||!chatMsgs.length){ alert('Nothing to export yet'); return; }
  const body=chatMsgs.filter(m=>!(m.role==='assistant'&&m.streaming)).map(m=>{
    const who=m.role==='user'?'**You**':`**${curAgent.emoji} ${curAgent.name}**`;
    const file=m.file?`\n\n> 📎 attached: ${m.file.name} (${m.file.chars} chars)`:'';
    return `${who}:${file}\n\n${m.content}`;
  }).join('\n\n---\n\n');
  const header=`# Chat with ${curAgent.name}\n\n_${new Date().toLocaleString()}_\n\n---\n\n`;
  downloadText('chat-'+slug(curAgent.name)+'.md', header+body);
}

// ── Chat ──────────────────────────────────────────────────────────────────────
