/* AgentForge — settings.js: settings UI, provider selection/keys, connection tests, webhooks, gists
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */

function loadSettingsUI(){
  setProvider(cfg.provider,false);
  document.getElementById('s-groq-key').value=cfg.groqKey;
  document.getElementById('s-ollama-host').value=cfg.ollamaHost;
  document.getElementById('s-brave-key').value=cfg.braveKey;
  const ork=document.getElementById('s-or-key'); if(ork) ork.value=cfg.orKey;
  const cbk=document.getElementById('s-cb-key'); if(cbk) cbk.value=cfg.cerebrasKey;
  const gmk=document.getElementById('s-gm-key'); if(gmk) gmk.value=cfg.geminiKey;
  document.querySelectorAll('#groq-models .mchip').forEach(c=>{
    c.classList.toggle('on',c.dataset.m===cfg.groqModel);
    c.onclick=()=>{document.querySelectorAll('#groq-models .mchip').forEach(x=>x.classList.remove('on'));c.classList.add('on');cfg.groqModel=c.dataset.m;};
  });
  updateHdr();
  const dot=document.getElementById('set-dot'),txt=document.getElementById('set-txt');
  const p=cfg.provider;
  if((p==='groq'&&cfg.groqKey.startsWith('gsk_'))||(p==='cerebras'&&cfg.cerebrasKey)||(p==='gemini'&&cfg.geminiKey)||(p==='openrouter'&&cfg.orKey)||(p==='ollama')){
    dot.className='dot ok';txt.textContent='Connected · '+p.charAt(0).toUpperCase()+p.slice(1);
  } else {
    dot.className='dot warn';txt.textContent=p==='demo'?'Demo mode':'Not connected — add a key below';
  }
  // update search status
  const sd=document.getElementById('search-dot'),ss=document.getElementById('search-status');
  if(sd&&ss){
    if(cfg.braveKey){sd.className='dot ok';ss.textContent='Web search enabled';}
    else{sd.className='dot warn';ss.textContent='Not configured — agents use training data only';}
  }
  // update webhook/automation status
  const whk=document.getElementById('s-webhook-url'); if(whk) whk.value=cfg.webhookUrl;
  const whdot=document.getElementById('wh-dot'),whst=document.getElementById('wh-status');
  if(whdot&&whst){
    if(cfg.webhookUrl){whdot.className='dot ok';whst.textContent='Automation connected — outputs POSTed as JSON';}
    else{whdot.className='dot warn';whst.textContent='Not configured — outputs stay in browser';}
  }
}

async function saveBraveKey(){
  cfg.braveKey=document.getElementById('s-brave-key').value.trim();
  loadSettingsUI();
  alert(cfg.braveKey ? '✓ Search key saved! Agents will now search the web.' : 'Key cleared.');
}

function saveWebhookUrl(){
  cfg.webhookUrl=document.getElementById('s-webhook-url').value.trim();
  loadSettingsUI();
  showShareToast(cfg.webhookUrl ? '⚡ Webhook saved!' : 'Webhook cleared');
}

// ── Output → Action bridges ──────────────────────────────────────────────────
function gistOutput(source){
  let content='';
  if(source==='pipeline') content=window._lastPipelineOutput||'';
  else if(source==='debate') content=window._lastDebateEl?.innerText||'';
  else if(source==='benchmark') content=window._lastBenchReport||'';
  if(!content){ alert('Nothing to export yet'); return; }
  const done=()=>{ window.open('https://gist.github.com/','_blank','noopener'); showShareToast('Copied! Paste into Gist editor ↗'); };
  if(navigator.clipboard){ navigator.clipboard.writeText(content).then(done).catch(()=>fallbackCopy(content,done)); }
  else fallbackCopy(content,done);
}
function gistMsg(idx){
  const m=chatMsgs[idx]; if(!m||!m.content) return;
  const header=`# ${curAgent?.name||'AgentForge'} — ${new Date().toLocaleDateString()}\n\n`;
  const done=()=>{ window.open('https://gist.github.com/','_blank','noopener'); showShareToast('Copied! Paste into Gist editor ↗'); };
  if(navigator.clipboard){ navigator.clipboard.writeText(header+m.content).then(done).catch(()=>fallbackCopy(header+m.content,done)); }
  else fallbackCopy(header+m.content,done);
}
async function sendToWebhook(source){
  if(!cfg.webhookUrl){ showShareToast('⚙️ No webhook — check Settings'); return; }
  let output='',goal='',agents=[];
  if(source==='pipeline'){
    output=window._lastPipelineOutput||''; goal=window._lastPipelineGoal||''; agents=pipeline.map(a=>a.name);
  } else if(source==='debate'){
    output=window._lastDebateEl?.innerText||''; goal=document.getElementById('debate-topic')?.value||'';
  } else if(source==='benchmark'){
    output=window._lastBenchReport||''; goal=document.getElementById('bench-prompt')?.value||'';
  }
  if(!output){ alert('Nothing to send yet'); return; }
  try{
    await fetch(cfg.webhookUrl,{method:'POST',headers:{'Content-Type':'application/json'},mode:'no-cors',
      body:JSON.stringify({source:'agentforge',mode:source,timestamp:new Date().toISOString(),goal,agents,output})});
    showShareToast('⚡ Sent to automation!');
  }catch(e){ alert('Webhook error: '+e.message); }
}
function setProvider(p,save=true){
  if(save) cfg.provider=p;
  ['groq','cerebras','gemini','openrouter','ollama','demo'].forEach(x=>document.getElementById('prov-'+x)?.classList.toggle('on',x===p));
  ['groq','cerebras','gemini','openrouter','ollama'].forEach(x=>{
    const el=document.getElementById('s-'+x); if(el) el.style.display=x===p?'block':'none';
  });
}
async function saveSettings(){
  const p = cfg.provider;
  cfg.groqKey = document.getElementById('s-groq-key').value.trim();
  const cbEl=document.getElementById('s-cb-key'); if(cbEl) cfg.cerebrasKey=cbEl.value.trim();
  const gmEl=document.getElementById('s-gm-key'); if(gmEl) cfg.geminiKey=gmEl.value.trim();
  const orEl=document.getElementById('s-or-key'); if(orEl) cfg.orKey=orEl.value.trim();
  cfg.ollamaHost=(document.getElementById('s-ollama-host')?.value||'').trim().replace(/\/$/,'')||'http://localhost:11434';
  const res=document.getElementById('save-result');
  res.textContent='Testing…';
  let ok=false;
  if(p==='groq') ok=await testGroq(cfg.groqKey);
  else if(p==='cerebras') ok=await testCerebras(cfg.cerebrasKey);
  else if(p==='gemini') ok=await testGemini(cfg.geminiKey);
  else if(p==='openrouter') ok=await testOpenRouter(cfg.orKey);
  else if(p==='ollama') ok=await testOllama();
  else ok=true;
  res.style.color=ok?'var(--green)':'var(--red)';
  res.textContent=ok?'✓ Connected!':'✗ Failed — check your key';
  updateHdr(); loadSettingsUI();
}
// Single GET-and-check helper behind every provider connectivity test — each
// test just supplies its endpoint, headers, and timeout (audit §4 dedup).
async function testEndpoint(url, headers, timeout){
  try{ const r=await fetch(url,{headers,signal:AbortSignal.timeout(timeout)}); return r.ok; }catch{ return false; }
}
async function testGroq(key){ return key?.startsWith('gsk_') ? testEndpoint('https://api.groq.com/openai/v1/models',{'Authorization':'Bearer '+key},5000) : false; }
async function testOllama(){ return testEndpoint(cfg.ollamaHost+'/api/tags',{},4000); }
async function testCerebras(key){ return key ? testEndpoint('https://api.cerebras.ai/v1/models',{'Authorization':'Bearer '+key},6000) : false; }
async function testGemini(key){ return key ? testEndpoint('https://generativelanguage.googleapis.com/v1beta/models?key='+encodeURIComponent(key),{},6000) : false; }
async function testOpenRouter(key){ return key ? testEndpoint('https://openrouter.ai/api/v1/models',{'Authorization':'Bearer '+key},6000) : false; }
