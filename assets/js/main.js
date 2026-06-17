/* AgentForge — main.js: boot/init (runs last) + service worker registration
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */

// ── Boot (relocated here so it runs after every module above is loaded) ──
(()=>{
  applyEdition(); renderDivTabs(); renderList(); loadSettingsUI(); renderMemory();
  const fromURL=loadPipelineFromURL();
  if(fromURL){ showScreen('pipeline'); updateHdr(); }
  else {
    const p=cfg.provider;
    const hasKey=(p==='groq'&&cfg.groqKey.startsWith('gsk_'))
      ||(p==='cerebras'&&cfg.cerebrasKey)
      ||(p==='gemini'&&cfg.geminiKey)
      ||(p==='openrouter'&&cfg.orKey)
      ||(p==='ollama');
    if(hasKey){ showScreen('agents'); updateHdr(); }
  }
})();

/* PWA: register service worker for offline + installability.
   Auto-reload once when a new version takes control, so updates are seamless. */
if('serviceWorker' in navigator){
  let _reloaded=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    if(_reloaded) return; _reloaded=true; location.reload();
  });
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js').then((reg)=>{ reg.update(); }).catch(()=>{});
  });
}
