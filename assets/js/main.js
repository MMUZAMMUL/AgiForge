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

/* PWA: "Install app" banner — surfaces the home-screen install option that
   mobile users otherwise have to find buried in a browser menu. Android/
   Chrome/Edge expose a native beforeinstallprompt event we can trigger on
   demand; iOS Safari has no such API, so we show instructions instead. */
(()=>{
  const DISMISS_KEY='agentforge_install_dismissed';
  const isStandalone=window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone===true;
  if(isStandalone || localStorage.getItem(DISMISS_KEY)) return;

  if(!document.getElementById('ag-install-anim')){
    const style=document.createElement('style');
    style.id='ag-install-anim';
    style.textContent='@keyframes ag-install-slide-up{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}';
    document.head.appendChild(style);
  }

  function showInstallBanner(html, onInstall){
    if(document.getElementById('ag-install-banner')) return;
    const b=document.createElement('div');
    b.id='ag-install-banner';
    b.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;z-index:9998;max-width:420px;margin:0 auto;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:12px 14px;box-shadow:0 12px 32px -10px #000;display:flex;align-items:center;gap:10px;animation:ag-install-slide-up .3s ease-out';
    b.innerHTML=html;
    document.body.appendChild(b);
    document.getElementById('ag-install-dismiss').onclick=()=>{
      localStorage.setItem(DISMISS_KEY,'1');
      b.remove();
    };
    const installBtn=document.getElementById('ag-install-go');
    if(installBtn && onInstall) installBtn.onclick=onInstall;
  }

  const isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(isIOS){
    window.addEventListener('load',()=>{
      setTimeout(()=>showInstallBanner(
        '<span style="font-size:22px;flex-shrink:0">📲</span>'+
        '<span style="flex:1;font-size:12.5px;color:var(--text);line-height:1.4">Install AgentForge: tap <b>Share</b> <span style="font-size:14px">⬆️</span> then <b>Add to Home Screen</b></span>'+
        '<button id="ag-install-dismiss" class="icon-btn" aria-label="Dismiss">✕</button>'
      ), 2000);
    });
    return;
  }

  let deferredPrompt=null;
  window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    deferredPrompt=e;
    showInstallBanner(
      '<span style="font-size:22px;flex-shrink:0">📲</span>'+
      '<span style="flex:1;font-size:12.5px;color:var(--text);line-height:1.4">Install AgentForge for quick access and offline support</span>'+
      '<button id="ag-install-go" style="flex-shrink:0;background:var(--accent);color:#1a1306;border:none;border-radius:8px;padding:7px 12px;font-size:12.5px;font-weight:700;cursor:pointer">Install</button>'+
      '<button id="ag-install-dismiss" class="icon-btn" aria-label="Dismiss">✕</button>',
      async ()=>{
        document.getElementById('ag-install-banner')?.remove();
        if(!deferredPrompt) return;
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt=null;
      }
    );
  });

  window.addEventListener('appinstalled',()=>{
    localStorage.setItem(DISMISS_KEY,'1');
    document.getElementById('ag-install-banner')?.remove();
    toast('AgentForge installed 🎉');
  });
})();
