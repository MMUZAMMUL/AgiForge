/* AgentForge — memory.js: saved outputs (localStorage memory)
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */

function getMemory(){ try{return JSON.parse(localStorage.getItem('ag_memory')||'[]');}catch{return[];} }
function setMemory(m){ localStorage.setItem('ag_memory',JSON.stringify(m)); }

function saveToMemory(){
  if(!curAgent||!chatMsgs.length){alert('Nothing to save yet');return;}
  const text=chatMsgs.map(m=>`${m.role==='user'?'You':'Agent'}: ${m.content}`).join('\n\n');
  const mem=getMemory();
  mem.unshift({id:Date.now(),title:`${curAgent.emoji} ${curAgent.name}`,preview:text.slice(0,200),content:text,ts:new Date().toLocaleString(),type:'chat'});
  setMemory(mem.slice(0,50));
  alert('Saved to 🧠 Memory!');
}

function savePipelineToMemory(goal){
  if(!window._lastPipelineOutput)return;
  const mem=getMemory();
  mem.unshift({id:Date.now(),title:`⛓️ Pipeline: ${goal.slice(0,40)}`,preview:window._lastPipelineOutput.slice(0,200),content:window._lastPipelineOutput,ts:new Date().toLocaleString(),type:'pipeline'});
  setMemory(mem.slice(0,50));
  alert('Pipeline saved to 🧠 Memory!');
}

function renderMemory(){
  const mem=getMemory();
  const el=document.getElementById('memory-body'); if(!el)return;
  if(!mem.length){el.innerHTML='<div class="empty-memory">No saved items yet.<br><br>Tap 💾 in a chat to save,<br>or save a pipeline output.</div>';return;}
  el.innerHTML=mem.map(m=>`
    <div class="memory-item">
      <div class="memory-title">${m.title}</div>
      <div class="memory-preview">${esc(m.preview)}</div>
      <div class="memory-meta"><span>${m.ts}</span><span style="background:var(--bg3);padding:1px 7px;border-radius:99px">${m.type}</span></div>
      <div class="memory-actions">
        <button class="mem-btn" onclick="viewMemory(${m.id})">View</button>
        <button class="mem-btn" onclick="copyMemory(${m.id})">Copy</button>
        <button class="mem-btn danger" onclick="deleteMemory(${m.id})">Delete</button>
      </div>
    </div>`).join('');
}
function viewMemory(id){const m=getMemory().find(x=>x.id===id);if(m)alert(m.content.slice(0,2000)+(m.content.length>2000?'\n\n[truncated...]':''));}
function copyMemory(id){const m=getMemory().find(x=>x.id===id);if(m)navigator.clipboard?.writeText(m.content).then(()=>alert('Copied!')).catch(()=>alert('Use View then long-press'));}
function deleteMemory(id){const mem=getMemory().filter(x=>x.id!==id);setMemory(mem);renderMemory();}
function clearAllMemory(){if(confirm('Delete all saved memory?')){localStorage.removeItem('ag_memory');renderMemory();}}

// ── Settings ──────────────────────────────────────────────────────────────────
