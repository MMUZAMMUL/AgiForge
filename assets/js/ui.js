/* AgentForge — ui.js: screens, header, escaping/markdown, division tabs, favorites, agent list & cards
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */


// ── Screens ───────────────────────────────────────────────────────────────────
function showScreen(n){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+n).classList.add('active');
  ['agents','pipeline','memory','debate','benchmark','creator','settings'].forEach(t=>{
    const el=document.getElementById('tab-'+t);
    if(el) el.classList.toggle('active-tab',t===n);
  });
  if(n==='memory') renderMemory();
  if(n==='debate') initDebateSelects();
  if(n==='benchmark') initBenchmarkAgents();
  if(n==='creator') renderMyAgents();
}

function updateHdr(){
  const dot=document.getElementById('hdr-dot'), txt=document.getElementById('hdr-txt');
  const p=cfg.provider;
  if(p==='groq'&&cfg.groqKey.startsWith('gsk_')){dot.className='dot ok';txt.textContent='Groq · '+engineLabel(cfg.groqModel);}
  else if(p==='cerebras'&&cfg.cerebrasKey){dot.className='dot ok';txt.textContent='Cerebras';}
  else if(p==='gemini'&&cfg.geminiKey){dot.className='dot ok';txt.textContent='Gemini';}
  else if(p==='openrouter'&&cfg.orKey){dot.className='dot ok';txt.textContent='OpenRouter';}
  else if(p==='ollama'){dot.className='dot warn';txt.textContent='Ollama Local';}
  else{dot.className='dot warn';txt.textContent='Demo';}
}

// ── Setup ─────────────────────────────────────────────────────────────────────
let _setupProvider = 'groq';

function selectSetupProvider(p){
  _setupProvider = p;
  ['groq','cerebras','gemini','openrouter','ollama'].forEach(x=>{
    document.getElementById('sp-'+x)?.classList.toggle('on', x===p);
    const info = document.getElementById('setup-'+x+'-info');
    if(info) info.style.display = x===p ? 'block' : 'none';
  });
}

async function connectProvider(){
  const btn = document.getElementById('setup-connect-btn');
  const res = document.getElementById('setup-result');
  const p = _setupProvider;
  let key = '', host = '';

  if(p==='groq') key = document.getElementById('setup-groq-key').value.trim();
  else if(p==='cerebras') key = document.getElementById('setup-cerebras-key').value.trim();
  else if(p==='gemini') key = document.getElementById('setup-gemini-key').value.trim();
  else if(p==='openrouter') key = document.getElementById('setup-openrouter-key').value.trim();
  else if(p==='ollama') host = document.getElementById('setup-ollama-host').value.trim() || 'http://localhost:11434';

  if(p !== 'ollama' && !key){ res.style.color='var(--red)'; res.textContent='Please paste your API key.'; return; }

  btn.textContent='Testing…'; btn.disabled=true; res.textContent='';

  let ok = false;
  try {
    if(p==='groq'){ ok = await testGroq(key); if(ok){ cfg.groqKey=key; cfg.provider='groq'; } }
    else if(p==='cerebras'){ ok = await testCerebras(key); if(ok){ cfg.cerebrasKey=key; cfg.provider='cerebras'; } }
    else if(p==='gemini'){ ok = await testGemini(key); if(ok){ cfg.geminiKey=key; cfg.provider='gemini'; } }
    else if(p==='openrouter'){ ok = await testOpenRouter(key); if(ok){ cfg.orKey=key; cfg.provider='openrouter'; } }
    else if(p==='ollama'){ cfg.ollamaHost=host; ok = await testOllama(); if(ok) cfg.provider='ollama'; }
  } catch(e){}

  if(ok){
    btn.textContent='✓ Connected!'; btn.style.background='var(--green)';
    res.style.color='var(--green)'; res.textContent='Connected! Loading agents…';
    setTimeout(()=>{ showScreen('agents'); updateHdr(); }, 700);
  } else {
    btn.textContent='✗ Failed — try again'; btn.style.background='var(--red)';
    res.style.color='var(--red)'; res.textContent='Could not connect. Check your key and try again.';
    setTimeout(()=>{ btn.textContent='Connect & Start →'; btn.disabled=false; btn.style.background=''; }, 2500);
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function colorHex(c){
  const m={red:'#ef4444',blue:'#3b82f6',green:'#22c55e',purple:'#a855f7',
    yellow:'#eab308',orange:'#f97316',pink:'#ec4899',indigo:'#6366f1',
    teal:'#14b8a6',cyan:'#06b6d4',violet:'#8b5cf6',emerald:'#10b981',amber:'#f59e0b'};
  return m[c?.toLowerCase()]||(c?.startsWith('#')?c:'#6366f1');
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')}
function md(s){
  return String(s)
    .replace(/```(\w*)\n?([\s\S]*?)```/g,(_,lang,c)=>{
      const raw=c.trim();
      const id='code-'+Math.random().toString(36).slice(2,8);
      const isHTML=(lang||'').toLowerCase()==='html'||/^\s*<(!doctype|html|div|body|head|section|main)/i.test(raw);
      const preview=isHTML?`<button class="ctool prev" onclick="previewCode('${id}')">⬚ Preview</button>`:'';
      return `<div class="code-block-wrap"><pre><code id="${id}" data-lang="${lang||''}" data-raw="${encodeURIComponent(raw)}">${esc(raw)}</code></pre><div class="code-tools">${preview}<button class="ctool save" onclick="saveCode('${id}')">💾 Save</button><button class="run-code-btn" onclick="runCode('${id}')">▶ Run</button></div></div>`;
    })
    .replace(/`([^`\n]+)`/g,(_,c)=>`<code>${esc(c)}</code>`)
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/^### (.+)$/gm,'<h3>$1</h3>').replace(/^## (.+)$/gm,'<h2>$1</h2>').replace(/^# (.+)$/gm,'<h1>$1</h1>')
    .replace(/^---$/gm,'<hr>').replace(/^[-*] (.+)$/gm,'<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g,'<ul>$1</ul>')
    .replace(/\n\n+/g,'</p><p>').replace(/^(?!<[hupoli])(.+)$/gm,s=>s?`<p>${s}</p>`:'');
}
function handleKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,120)+'px';}

// ── Fetch full agent content ───────────────────────────────────────────────────
const _agentContentCache = {}; // id -> system prompt (avoids re-fetching on every open/run)
async function fetchAgentContent(a){
  // Custom agents have their system prompt stored directly
  if(a._custom && a.systemPrompt) return a.systemPrompt;
  // Serve from in-memory cache when we already fetched this agent this session
  if(_agentContentCache[a.id]) return _agentContentCache[a.id];
  // Try GitHub raw — agents live in this repo alongside index.html
  try{
    const url=`${GITHUB_RAW}/${a.division}/${a.id}.md`;
    const r=await fetch(url,{signal:AbortSignal.timeout(8000)});
    if(r.ok){
      const text=await r.text();
      // Strip YAML frontmatter (content after second ---)
      const parts=text.split(/^---\s*$/m);
      const out=parts.length>=3 ? parts.slice(2).join('---').trim() : text.trim();
      _agentContentCache[a.id]=out; // cache only successful fetches (let failures retry)
      return out;
    }
  }catch{}
  // Fallback to description
  return a.description||`You are ${a.name}, a specialist in ${a.division}.`;
}

// Debounce search typing so we don't rebuild the full ~221-card list on every keystroke
let _searchT=null;
function onSearchInput(){ clearTimeout(_searchT); _searchT=setTimeout(renderList,120); }

// ── Agent list ────────────────────────────────────────────────────────────────
function renderDivTabs(){
  const agents=getEditionAgents();
  const divCounts={};
  agents.forEach(a=>{divCounts[a.division]=(divCounts[a.division]||0)+1;});
  const tabs=Object.entries(divCounts).sort((a,b)=>a[0].localeCompare(b[0]));
  document.getElementById('div-tabs').innerHTML=
    `<button class="div-tab on" onclick="setDiv('')">All</button>`+
    tabs.map(([name,count])=>`<button class="div-tab" onclick="setDiv('${name}')">${name} <span style="opacity:.6">${count}</span></button>`).join('');
}
function setDiv(d){
  selectedDiv=d;
  document.querySelectorAll('.div-tab').forEach(b=>b.classList.toggle('on',(!d&&b.textContent.trim().startsWith('All'))||(d&&b.textContent.trim().startsWith(d))));
  renderList();
}
// ── Favorites ─────────────────────────────────────────────────────────────────
function getFavs(){ try{ return JSON.parse(localStorage.getItem('ag_favs')||'[]'); }catch(e){ return []; } }
function isFav(id){ return getFavs().includes(id); }
function toggleFav(id){
  const favs=getFavs(); const i=favs.indexOf(id);
  if(i>=0) favs.splice(i,1); else favs.unshift(id);
  localStorage.setItem('ag_favs', JSON.stringify(favs));
  renderList();
}
// Curated "Popular" picks shown on the home screen (ids that exist in AGENTS)
const POPULAR_IDS=['engineering-backend-architect','engineering-frontend-developer','engineering-ai-engineer','marketing-growth-hacker','product-manager','design-ui-designer','marketing-seo-specialist','security-penetration-tester','business-strategist','marketing-content-creator'];

function agentCard(a){
  const h=colorHex(a.color);
  const plIdx=pipeline.findIndex(p=>p.id===a.id);
  const badge=plIdx>=0?`<div class="pipeline-badge">${plIdx+1}</div>`:'';
  const cls=plIdx>=0?'agent-item in-pipeline':'agent-item';
  const fav=isFav(a.id);
  return `<div class="${cls}" onclick="agentTap('${a.id}')">
      <div class="agi-emoji" style="background:${h}22;color:${h};border:1px solid ${h}44">${a.emoji}</div>
      <div class="agi-info">
        <div class="agi-name">${a.name}</div>
        <div class="agi-div">${a.division}</div>
        <div class="agi-desc">${a.description}</div>
      </div>
      <button class="fav-btn ${fav?'on':''}" onclick="event.stopPropagation();toggleFav('${a.id}')" title="${fav?'Remove favorite':'Add favorite'}">${fav?'★':'☆'}</button>${badge}</div>`;
}
function section(label){ return `<div class="list-section">${label}<span class="ls-line"></span></div>`; }

function renderList(){
  const q=document.getElementById('search').value.toLowerCase();
  const el=document.getElementById('agent-list');
  const customs=getCustomAgents();
  const base=getEditionAgents();
  const allAgents=[...base,...customs];
  const edLabel=EDITIONS[EDITION_KEY];
  // Home view (no search, no division filter, not in pipeline mode): show shelves
  if(!q && !selectedDiv && !pipelineMode){
    const favs=getFavs().map(id=>allAgents.find(a=>a.id===id)).filter(Boolean);
    const popular=POPULAR_IDS.map(id=>base.find(a=>a.id===id)).filter(Boolean);
    let html='';
    if(customs.length) html+=section(`🛠️ My Agents · ${customs.length}`)+customs.map(agentCard).join('');
    if(favs.length) html+=section('⭐ Your Favorites')+favs.map(agentCard).join('');
    if(!edLabel && popular.length) html+=section('🔥 Popular')+popular.map(agentCard).join('');
    html+=section(`📁 ${edLabel?edLabel.label+' Specialists':' All Specialists'} · ${base.length}`)+base.map(agentCard).join('');
    el.innerHTML=html;
    return;
  }
  const f=allAgents.filter(a=>(!q||a.name.toLowerCase().includes(q)||a.description.toLowerCase().includes(q)||a.division.includes(q))&&(!selectedDiv||a.division===selectedDiv));
  if(!f.length){el.innerHTML='<div style="padding:24px;text-align:center;color:var(--text2)">No agents found</div>';return;}
  el.innerHTML=f.map(agentCard).join('');
}
function agentTap(id){
  if(pipelineMode){ togglePipelineAgent(id); }
  else { openAgent(id); }
}

// ── Agent Creator Studio ──────────────────────────────────────────────────────
