/* AgentForge — providers.js: multi-provider failover, retry, web search, streaming (Groq/Ollama/demo)
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */

function nextGroqModel(current){
  const pool = GROQ_MODELS.filter(m => m !== current);
  const m = pool[_groqModelIdx % pool.length];
  _groqModelIdx++;
  return m;
}

function parseRetryAfter(msg){
  const m = String(msg).match(/try again in ([\d.]+)s/i);
  return m ? Math.ceil(parseFloat(m[1]) * 1000) + 500 : 15000;
}

function buildEngineChain(startModel){
  const chain=[];
  const p=cfg.provider;
  // Primary provider goes first
  if(p==='groq'&&cfg.groqKey.startsWith('gsk_')){
    const pool=[startModel,...GROQ_MODELS.filter(m=>m!==startModel)];
    pool.forEach(m=>chain.push({prov:'groq',model:m,url:'https://api.groq.com/openai/v1/chat/completions',key:cfg.groqKey}));
  } else if(p==='cerebras'&&cfg.cerebrasKey){
    CEREBRAS_MODELS.forEach(m=>chain.push({prov:'cerebras',model:m,url:'https://api.cerebras.ai/v1/chat/completions',key:cfg.cerebrasKey}));
  } else if(p==='gemini'&&cfg.geminiKey){
    GEMINI_MODELS.forEach(m=>chain.push({prov:'gemini',model:m,url:'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',key:cfg.geminiKey}));
  } else if(p==='openrouter'&&cfg.orKey){
    OPENROUTER_MODELS.forEach(m=>chain.push({prov:'openrouter',model:m,url:'https://openrouter.ai/api/v1/chat/completions',key:cfg.orKey}));
  }
  // Failover: add all other configured providers
  if(p!=='groq'&&cfg.groqKey.startsWith('gsk_')){
    const pool=[...GROQ_MODELS];
    pool.forEach(m=>chain.push({prov:'groq',model:m,url:'https://api.groq.com/openai/v1/chat/completions',key:cfg.groqKey}));
  }
  if(p!=='cerebras'&&cfg.cerebrasKey){
    CEREBRAS_MODELS.forEach(m=>chain.push({prov:'cerebras',model:m,url:'https://api.cerebras.ai/v1/chat/completions',key:cfg.cerebrasKey}));
  }
  if(p!=='gemini'&&cfg.geminiKey){
    GEMINI_MODELS.forEach(m=>chain.push({prov:'gemini',model:m,url:'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',key:cfg.geminiKey}));
  }
  if(p!=='openrouter'&&cfg.orKey){
    OPENROUTER_MODELS.forEach(m=>chain.push({prov:'openrouter',model:m,url:'https://openrouter.ai/api/v1/chat/completions',key:cfg.orKey}));
  }
  return chain;
}

// Multi-provider request with automatic fail-over so work never stalls on a 429.
async function groqFetchWithRetry(body, onStatus){
  const chain=buildEngineChain(body.model||cfg.groqModel);
  if(!chain.length) throw new Error('No AI engine connected — add a free key in ⚙️ Settings.');
  let lastErr;
  for(let i=0;i<chain.length;i++){
    const eng=chain[i];
    body.model=eng.model;
    const headers={'Content-Type':'application/json','Authorization':'Bearer '+eng.key};
    if(eng.prov==='openrouter'){ headers['HTTP-Referer']='https://mmuzammul.github.io/Agi-forge/'; headers['X-Title']='AgentForge'; }
    let res;
    try{ res=await fetch(eng.url,{method:'POST',headers,body:JSON.stringify(body)}); }
    catch(err){ lastErr=err; continue; }

    if(res.status===429){
      const hasNext=i<chain.length-1;
      if(hasNext){ if(onStatus) onStatus('\n\n⚡ *Engine busy — switching instantly…*\n\n'); continue; }
      const e=await res.json().catch(()=>({}));
      const wait=parseRetryAfter(e.error?.message||'');
      if(onStatus) onStatus(`\n\n⏳ *All engines busy — retrying in ${Math.ceil(wait/1000)}s…*\n\n`);
      await new Promise(r=>setTimeout(r,wait));
      try{ res=await fetch(eng.url,{method:'POST',headers,body:JSON.stringify(body)}); }
      catch(err){ lastErr=err; continue; }
    }
    if(res.ok) return res;
    const e=await res.json().catch(()=>({}));
    lastErr=new Error(e.error?.message||'AI service '+res.status);
    // non-OK (e.g. model unsupported by a free engine) → fall through to next engine
  }
  throw lastErr||new Error('All engines are busy — try again in a moment.');
}

// ── Web search ─────────────────────────────────────────────────────────
async function webSearch(query){
  try{
    const r=await fetch('/api/search?q='+encodeURIComponent(query)+'&key='+cfg.braveKey,{signal:AbortSignal.timeout(6000)});
    if(r.ok){const d=await r.json();if(d.results)return d.results;}
  }catch{}
  try{
    const r=await fetch('https://api.search.brave.com/res/v1/web/search?q='+encodeURIComponent(query)+'&count=5',{
      headers:{'Accept':'application/json','X-Subscription-Token':cfg.braveKey},
      signal:AbortSignal.timeout(6000),
    });
    if(r.ok){const d=await r.json();return(d.web?.results||[]).map(x=>({title:x.title,url:x.url,snippet:x.description||''}));}
  }catch{}
  return [];
}

// ── Cloud streaming with optional tool-calling (web search) ───────────────────
async function streamGroqInto(systemPrompt, singleUserMsg, onChunk, msgHistory){
  const messages = msgHistory
    ? [{role:'system',content:systemPrompt}, ...msgHistory]
    : [{role:'system',content:systemPrompt},{role:'user',content:singleUserMsg}];

  const tools = cfg.braveKey ? [{
    type:'function',
    function:{
      name:'web_search',
      description:'Search the web for current info, news, prices, docs, CVEs, competitors, trends.',
      parameters:{type:'object',properties:{query:{type:'string',description:'Search query'}},required:['query']}
    }
  }] : undefined;

  const currentMsgs=[...messages];
  for(let round=0;round<3;round++){
    const isLastRound=round===2;
    const body={model:cfg.groqModel,max_tokens:2048,messages:currentMsgs};
    if(tools&&!isLastRound) body.tools=tools;
    else body.stream=true;

    const res=await groqFetchWithRetry(body, onChunk);
    if(!res.ok){const e=await res.json().catch(()=>({}));throw new Error(e.error?.message||'AI service '+res.status);}

    if(!body.stream){
      const data=await res.json();
      const msg=data.choices?.[0]?.message;
      if(msg?.tool_calls?.length){
        currentMsgs.push(msg);
        for(const tc of msg.tool_calls){
          if(tc.function?.name==='web_search'){
            let q='';try{q=JSON.parse(tc.function.arguments).query;}catch{}
            onChunk('\n\n🔍 *Searching: "'+q+'"…*\n\n');
            const results=await webSearch(q);
            const txt=results.length
              ? results.map((r,i)=>(i+1)+'. **'+r.title+'**\n   '+r.snippet+'\n   '+r.url).join('\n\n')
              : 'No results found.';
            currentMsgs.push({role:'tool',tool_call_id:tc.id,content:txt});
          }
        }
        continue;
      } else {
        if(msg?.content) onChunk(msg.content);
        return;
      }
    } else {
      const reader=res.body.getReader(),dec=new TextDecoder();let buf='';
      while(true){
        const{done,value}=await reader.read();if(done)break;
        buf+=dec.decode(value,{stream:true});
        const lines=buf.split('\n');buf=lines.pop();
        for(const line of lines){
          if(!line.startsWith('data: '))continue;
          const d=line.slice(6);if(d==='[DONE]')break;
          try{const c=JSON.parse(d);const t=c.choices?.[0]?.delta?.content||'';if(t)onChunk(t);}catch{}
        }
      }
      return;
    }
  }
}

// ── Local streaming ──────────────────────────────────────────────────────────
async function streamOllamaInto(systemPrompt, singleUserMsg, onChunk, msgHistory){
  const messages = msgHistory
    ? [{role:'system',content:systemPrompt},...msgHistory]
    : [{role:'system',content:systemPrompt},{role:'user',content:singleUserMsg}];
  const res=await fetch(cfg.ollamaHost+'/api/chat',{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'llama3.2',stream:true,messages}),
  });
  if(!res.ok)throw new Error('Local AI '+res.status);
  const reader=res.body.getReader(),dec=new TextDecoder();let buf='';
  while(true){
    const{done,value}=await reader.read();if(done)break;
    buf+=dec.decode(value,{stream:true});
    const lines=buf.split('\n');buf=lines.pop();
    for(const line of lines){
      if(!line.trim())continue;
      try{const c=JSON.parse(line);if(c.message?.content)onChunk(c.message.content);}catch{}
    }
  }
}

// ── Unified streaming dispatcher ──────────────────────────────────────────────
// All cloud providers (groq/cerebras/gemini/openrouter) are OpenAI-compatible and
// flow through streamGroqInto → groqFetchWithRetry (which builds the failover
// chain for whichever provider is active). Only Ollama uses the local endpoint.
// Demo mode is handled by callers (it needs the agent object, not a prompt).
async function streamInto(systemPrompt, singleUserMsg, onChunk, msgHistory){
  if(cfg.provider==='ollama') return streamOllamaInto(systemPrompt, singleUserMsg, onChunk, msgHistory);
  return streamGroqInto(systemPrompt, singleUserMsg, onChunk, msgHistory);
}

async function streamDemo(ai,agent){
  const t=`Hi! I'm **${agent.name}** ${agent.emoji}

${agent.vibe||agent.description}

*Tap ⚙️ → connect free AI for real responses.*`;
  for(let i=0;i<t.length;i++){ai.content=t.slice(0,i+1);renderChat();await new Promise(r=>setTimeout(r,14));}
}

// ── Memory ────────────────────────────────────────────────────────────────────
