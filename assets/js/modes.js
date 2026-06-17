/* AgentForge — modes.js: voice input, code runner, debate mode, benchmarker
   Part of the AgentForge app. Loaded as a classic script (shared global scope).
   Do not wrap in a module/IIFE: functions are called from inline HTML handlers. */


// ══════════════════════════════════════════════════════════════════════════════
// ── VOICE INPUT (Web Speech API) ─────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
let _recog=null;
function toggleVoice(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){alert('Voice input needs Chrome or Safari.');return;}
  const btn=document.getElementById('mic-btn');
  if(_recog){_recog.stop();_recog=null;btn.classList.remove('on');return;}
  _recog=new SR();
  _recog.continuous=false; _recog.interimResults=true; _recog.lang='en-US';
  btn.classList.add('on');
  _recog.onresult=(e)=>{
    const t=Array.from(e.results).map(r=>r[0].transcript).join('');
    const inp=document.getElementById('msg-input');
    inp.value=t; autoResize(inp);
  };
  _recog.onend=()=>{btn.classList.remove('on');_recog=null;};
  _recog.onerror=(e)=>{btn.classList.remove('on');_recog=null;if(e.error!=='aborted')alert('Voice error: '+e.error);};
  _recog.start();
}

// ══════════════════════════════════════════════════════════════════════════════
// ── CODE RUNNER (Piston API) ──────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
const LANG_MAP={python:'python',py:'python',javascript:'javascript',js:'javascript',
  typescript:'typescript',ts:'typescript',node:'javascript',bash:'bash',sh:'bash',
  ruby:'ruby',rb:'ruby',go:'go',rust:'rust',php:'php',java:'java',
  c:'c',cpp:'c++','c++':'c++',cs:'csharp',csharp:'csharp',r:'r',
  kotlin:'kotlin',swift:'swift',scala:'scala'};

async function runCode(id){
  const el=document.getElementById(id);if(!el)return;
  const raw=decodeURIComponent(el.dataset.raw||'');
  const detectedLang=el.dataset.lang||'python';
  const lang=LANG_MAP[detectedLang.toLowerCase()]||'python';
  const wrap=el.closest('.code-block-wrap');
  const btn=wrap?.querySelector('.run-code-btn');
  if(btn){btn.textContent='⏳';btn.disabled=true;}

  let outEl=wrap?.querySelector('.code-output');
  if(!outEl){outEl=document.createElement('div');outEl.className='code-output';wrap?.appendChild(outEl);}
  outEl.textContent='Running '+lang+'…';

  try{
    const r=await fetch('https://emkc.org/api/v2/piston/execute',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({language:lang,version:'*',files:[{name:'main',content:raw}]}),
      signal:AbortSignal.timeout(20000),
    });
    if(!r.ok)throw new Error('Piston '+r.status);
    const data=await r.json();
    const stdout=data.run?.stdout||'';
    const stderr=data.run?.stderr||'';
    const compile_err=data.compile?.stderr||'';
    const hasErr=stderr||compile_err||data.run?.code;
    outEl.textContent=(stdout||(hasErr?'':'(no output)'))+(compile_err?'\n⚠️ Compile:\n'+compile_err:'')+(stderr?'\n⚠️ stderr:\n'+stderr:'');
    outEl.className='code-output'+(hasErr?' err':'');
  }catch(e){
    outEl.textContent='Error: '+e.message;outEl.className='code-output err';
  }
  if(btn){btn.textContent='▶ Run';btn.disabled=false;}
}

// ══════════════════════════════════════════════════════════════════════════════
// ── AGENT DEBATE ──────────────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
let _debateRounds=2,_debateStop=false;

function setDebateRounds(btn,n){
  _debateRounds=n;
  document.querySelectorAll('[data-rounds]').forEach(b=>b.classList.toggle('on',b===btn));
}

function initDebateSelects(){
  const opts=AGENTS.map(a=>`<option value="${a.id}">${a.emoji} ${a.name} · ${a.division}</option>`).join('');
  ['debate-a','debate-b'].forEach(id=>{
    const el=document.getElementById(id);
    if(el&&el.options.length<=1){el.innerHTML='<option value="">Select agent…</option>'+opts;}
  });
}

async function runDebate(){
  const aId=document.getElementById('debate-a').value;
  const bId=document.getElementById('debate-b').value;
  const topic=document.getElementById('debate-topic').value.trim();
  if(!aId||!bId){alert('Select both agents');return;}
  if(!topic){alert('Enter a debate topic');return;}
  if(aId===bId){alert('Pick two different agents');return;}
  if(cfg.provider==='demo'){alert('Connect AI first — tap ⚙️');return;}

  _debateStop=false;
  const agentA=AGENTS.find(a=>a.id===aId),agentB=AGENTS.find(a=>a.id===bId);
  document.getElementById('debate-setup').style.display='none';
  const execEl=document.getElementById('debate-exec');execEl.style.display='flex';
  const screen=document.getElementById('debate-screen');screen.innerHTML='';

  const [contentA,contentB]=await Promise.all([fetchAgentContent(agentA),fetchAgentContent(agentB)]);

  let lastOutput='';
  const totalTurns=_debateRounds*2;

  for(let turn=1;turn<=totalTurns;turn++){
    if(_debateStop)break;
    const isA=turn%2===1;
    const agent=isA?agentA:agentB;
    const content=isA?contentA:contentB;
    const roundNum=Math.ceil(turn/2);
    document.getElementById('debate-progress').textContent=`Round ${roundNum}/${_debateRounds}`;

    const h=colorHex(agent.color);
    const outId='dout-'+turn;
    const statusId='dstatus-'+turn;
    const role=isA?'Proposer':'Critic';
    screen.innerHTML+=`
      <div class="debate-round-block">
        <div class="debate-round-header">
          <span style="width:28px;height:28px;border-radius:7px;background:${h}22;color:${h};border:1px solid ${h}44;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0">${agent.emoji}</span>
          <span style="font-size:13px">${agent.name}</span>
          <span class="role-badge ${isA?'role-a':'role-b'}">${role} R${roundNum}</span>
          <span id="${statusId}" style="margin-left:auto;font-size:11px;color:var(--orange)">● Working…</span>
        </div>
        <div class="debate-round-body" id="${outId}"></div>
      </div>`;
    screen.scrollTop=screen.scrollHeight;

    let prompt;
    if(turn===1){
      prompt=`DEBATE TOPIC: ${topic}\n\nYou are the Proposer. Present your best, most specific solution. Structure your answer with clear sections. Be technical, concrete, and opinionated. This is Round 1.`;
    }else if(isA){
      prompt=`DEBATE TOPIC: ${topic}\n\nThe Critic (Round ${roundNum-1}) said:\n---\n${lastOutput.slice(0,1500)}\n---\n\nDefend and strengthen your original proposal. Address every criticism. Add anything you missed. Round ${roundNum}.`;
    }else{
      prompt=`DEBATE TOPIC: ${topic}\n\nThe Proposer (Round ${roundNum}) just argued:\n---\n${lastOutput.slice(0,1500)}\n---\n\nChallenge this rigorously. Identify flaws, edge cases, better alternatives, missing considerations. Be sharp but constructive. Round ${roundNum}.`;
    }

    let output='';
    try{
      await streamInto(content, prompt, (chunk)=>{
        output+=chunk;
        const el=document.getElementById(outId);
        if(el){el.innerHTML=md(output)+'<span class="cursor">▋</span>';el.scrollTop=el.scrollHeight;}
        screen.scrollTop=screen.scrollHeight;
      });
    }catch(e){output='**Error:** '+e.message;}

    lastOutput=output;
    const outEl=document.getElementById(outId);
    const stEl=document.getElementById(statusId);
    if(outEl)outEl.innerHTML=md(output);
    if(stEl){stEl.textContent='✓ Done';stEl.style.color='var(--green)';}
  }

  if(!_debateStop){
    document.getElementById('debate-progress').textContent='Complete ✓';
    screen.innerHTML+=`
      <div class="final-output" style="border-color:var(--purple)">
        <h3 style="color:var(--purple)">⚔️ Debate Complete</h3>
        <p style="font-size:13px;color:var(--text2);line-height:1.6">
          The final Proposer turn contains the refined, battle-tested answer.<br>
          <b>${agentA.emoji} ${agentA.name}</b> proposed · <b>${agentB.emoji} ${agentB.name}</b> critiqued — ${_debateRounds} rounds.
        </p>
        <button class="copy-btn" style="background:var(--purple)22;border-color:var(--purple)44;color:var(--purple);margin-top:10px" onclick="copyDebateOutput()">📋 Copy Debate</button>
        <button class="save-btn2" onclick="downloadDebate()">⬇️ Download .md</button>
        <button class="save-btn2" onclick="gistOutput('debate')" style="background:var(--bg3);border-color:var(--border)">🔗 Open as Gist</button>
        <button class="save-btn2" onclick="sendToWebhook('debate')" style="background:var(--green)22;border-color:var(--green)44;color:var(--green)">⚡ Send to Automation</button>
      </div>`;
    window._lastDebateEl=screen;
    window._lastDebateTopic=topic;
  }
}

function stopDebate(){
  _debateStop=true;
  document.getElementById('debate-exec').style.display='none';
  document.getElementById('debate-setup').style.display='flex';
}
function copyDebateOutput(){
  const txt=window._lastDebateEl?.innerText||'';
  navigator.clipboard?.writeText(txt).then(()=>alert('Copied!')).catch(()=>alert('Long-press to copy'));
}

// ══════════════════════════════════════════════════════════════════════════════
// ── AGENT BENCHMARKER ─────────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
const BENCH_DEFAULTS=[
  'engineering-frontend-developer','engineering-backend-architect',
  'engineering-software-architect','design-ui-designer',
  'design-ux-architect','security-security-architect',
  'product-product-manager','specialized-business-strategist',
  'engineering-ai-engineer','testing-performance-benchmarker'
];

let _benchInit=false;
function initBenchmarkAgents(){
  if(_benchInit)return;_benchInit=true;
  const el=document.getElementById('bench-agents-select');if(!el)return;
  el.innerHTML=BENCH_DEFAULTS.map(id=>{
    const a=AGENTS.find(x=>x.id===id);if(!a)return'';
    const h=colorHex(a.color);
    return `<label style="display:flex;align-items:center;gap:9px;padding:8px 10px;background:var(--bg3);border-radius:7px;cursor:pointer;font-size:13px;border:1px solid var(--border)">
      <input type="checkbox" value="${a.id}" style="accent-color:var(--accent);width:16px;height:16px" checked>
      <span style="width:26px;height:26px;border-radius:6px;background:${h}22;color:${h};border:1px solid ${h}44;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">${a.emoji}</span>
      <span style="min-width:0"><b>${a.name}</b><br><span style="font-size:11px;color:var(--text2)">${a.division}</span></span>
    </label>`;
  }).filter(Boolean).join('');
}

async function runBenchmark(){
  const prompt=document.getElementById('bench-prompt').value.trim();
  if(!prompt){alert('Enter a prompt to benchmark');return;}
  if(cfg.provider==='demo'){alert('Connect AI first — tap ⚙️');return;}
  const checked=[...document.querySelectorAll('#bench-agents-select input:checked')].map(x=>x.value);
  if(checked.length<2){alert('Select at least 2 agents');return;}

  const resultsOuter=document.getElementById('bench-results');
  const inner=document.getElementById('bench-results-inner');
  document.getElementById('bench-setup').style.display='none';
  resultsOuter.style.display='flex';
  inner.innerHTML=`
    <div style="padding:10px 14px;background:var(--bg2);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <button class="back-btn" onclick="stopBenchmark()">‹</button>
      <div style="font-weight:700;font-size:14px">📊 Benchmarking</div>
      <div id="bench-progress" style="margin-left:auto;font-size:12px;color:var(--text2)">0/${checked.length}</div>
    </div>
    <div class="bench-body" id="bench-grid" style="gap:8px"></div>`;

  const grid=document.getElementById('bench-grid');
  const results=[];

  for(let i=0;i<checked.length;i++){
    const agent=AGENTS.find(a=>a.id===checked[i]);if(!agent)continue;
    document.getElementById('bench-progress').textContent=`${i+1}/${checked.length}`;
    const h=colorHex(agent.color);
    const outId='bout-'+i;
    grid.innerHTML+=`
      <div class="bench-item" id="bitem-${i}">
        <div class="bench-item-hdr">
          <div style="width:28px;height:28px;border-radius:6px;background:${h}22;color:${h};border:1px solid ${h}44;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0">${agent.emoji}</div>
          <div style="min-width:0;flex:1"><div style="font-weight:600;font-size:13px">${agent.name}</div><div style="font-size:11px;color:var(--text2)">${agent.division}</div></div>
          <div id="bscore-${i}" class="bench-score">⏳</div>
        </div>
        <div id="${outId}" style="font-size:11px;color:var(--text2);max-height:60px;overflow:hidden;line-height:1.4"></div>
        <div class="bench-bar"><div class="bench-bar-fill" id="bbar-${i}" style="width:0%"></div></div>
      </div>`;
    grid.scrollTop=grid.scrollHeight;

    const content=await fetchAgentContent(agent);
    let output='';const t0=Date.now();
    try{
      await streamInto(content, prompt, (chunk)=>{
        output+=chunk;
        const outEl=document.getElementById(outId);
        if(outEl){const preview=output.replace(/[#*`]/g,'').slice(0,150);outEl.textContent=preview+'…';}
      });
    }catch(e){output='Error: '+e.message;}

    const elapsed=((Date.now()-t0)/1000);
    const words=output.split(/\s+/).filter(Boolean).length;
    const hasCode=/```/.test(output)?20:0;
    const hasStructure=/^#+\s|^\d+\.\s|^[-*]\s/m.test(output)?15:0;
    const speedScore=Math.max(0,Math.round(15-elapsed*1.5));
    const depthScore=Math.min(50,Math.round(words/8));
    const score=Math.min(100,depthScore+hasCode+hasStructure+speedScore);

    results.push({i,agent,output,elapsed:elapsed.toFixed(1),score,words});
    document.getElementById('bscore-'+i).textContent=score+'/100';
    document.getElementById('bbar-'+i).style.width=score+'%';
    document.getElementById('bench-progress').textContent=`${i+1}/${checked.length} done`;
  }

  // ── LLM judge phase: impartial model scores the actual answers ──────────────
  let judged=false;
  if(results.length&&cfg.provider!=='demo'&&cfg.provider!=='ollama'){
    document.getElementById('bench-progress').textContent='⚖️ Judging answers…';
    try{
      const verdicts=await judgeBenchmark(prompt,results);
      if(verdicts&&verdicts.length){
        for(const v of verdicts){
          const r=results.find(x=>x.i===v.i);
          if(r){ r.score=Math.max(0,Math.min(100,v.score|0)); r.verdict=v.verdict||''; }
        }
        judged=true;
      }
    }catch(e){ /* fall back to heuristic */ }
  }

  results.sort((a,b)=>b.score-a.score);
  // Repaint each agent's score + bar with final (judged or heuristic) values
  results.forEach(r=>{
    const sc=document.getElementById('bscore-'+r.i);
    const bar=document.getElementById('bbar-'+r.i);
    if(sc) sc.textContent=r.score+'/100';
    if(bar) bar.style.width=r.score+'%';
  });
  if(results.length){
    document.getElementById('bitem-'+results[0].i)?.classList.add('bench-winner');
    const ws=document.getElementById('bscore-'+results[0].i);
    if(ws) ws.textContent=results[0].score+'/100 🏆';
    document.getElementById('bench-progress').textContent='Winner: '+results[0].agent.name;
  }

  grid.innerHTML+=`
    <div class="final-output" style="border-color:var(--accent)">
      <h3 style="color:var(--accent2);margin-bottom:10px">📊 Final Rankings</h3>
      ${results.map((r,rank)=>`
        <div style="padding:8px 0;border-bottom:1px solid var(--border)33;font-size:13px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-weight:700;color:var(--text2);width:22px">#${rank+1}</span>
            <span>${r.agent.emoji} ${r.agent.name}</span>
            <span style="margin-left:auto;color:var(--accent2);font-weight:700">${r.score}/100</span>
            <span style="color:var(--text2);font-size:11px">${r.elapsed}s</span>
          </div>
          ${r.verdict?`<div style="font-size:12px;color:var(--text2);margin:3px 0 0 30px;line-height:1.4">${esc(r.verdict)}</div>`:''}
        </div>`).join('')}
      <p style="font-size:12px;color:var(--text2);margin-top:8px">${judged?'⚖️ Scored by an impartial AI judge on relevance, depth & correctness.':'Heuristic score = depth(50) + code(20) + structure(15) + speed(15). Connect AI for AI-judged scoring.'}</p>
      <button class="save-btn2" onclick="downloadBenchmark()">⬇️ Download Full Report .md</button>
      <button class="save-btn2" onclick="gistOutput('benchmark')" style="background:var(--bg3);border-color:var(--border)">🔗 Open as Gist</button>
      <button class="save-btn2" onclick="sendToWebhook('benchmark')" style="background:var(--green)22;border-color:var(--green)44;color:var(--green)">⚡ Send to Automation</button>
    </div>`;

  // Build exportable markdown report (rankings + full answers)
  window._lastBenchPrompt=prompt;
  window._lastBenchReport=`# Agent Benchmark\n\n**Prompt:** ${prompt}\n\n_${new Date().toLocaleString()} · ${judged?'LLM-judged':'heuristic'} scoring_\n\n## Rankings\n\n`+
    results.map((r,rank)=>`${rank+1}. **${r.agent.name}** (${r.agent.division}) — ${r.score}/100 · ${r.elapsed}s${r.verdict?`\n   - _${r.verdict}_`:''}`).join('\n')+
    `\n\n---\n\n## Full Answers\n\n`+
    results.map((r,rank)=>`### #${rank+1} ${r.agent.emoji} ${r.agent.name} — ${r.score}/100\n\n${r.output||'(no output)'}`).join('\n\n---\n\n');
}

// ── LLM judge: rank candidate answers to the same prompt ──────────────────────
async function judgeBenchmark(prompt,results){
  const candidates=results.map(r=>`### CANDIDATE ${r.i} — ${r.agent.name} (${r.agent.division})\n${(r.output||'').slice(0,2200)}`).join('\n\n');
  const sys='You are a rigorous, impartial evaluation judge. You score AI answers to the same task on quality alone — relevance to the task, technical depth, correctness, and usefulness. You are not swayed by length or formatting. Return strict JSON only.';
  const ask=`TASK GIVEN TO ALL CANDIDATES:\n${prompt}\n\nCANDIDATE ANSWERS:\n${candidates}\n\nScore EACH candidate 0-100 on overall quality for this task. Be discriminating — spread the scores, do not cluster them. Respond with ONLY this JSON:\n{"scores":[{"i":<candidate number>,"score":<0-100>,"verdict":"<max 12-word critique>"}]}`;
  const judgeBody={
    model:'llama-3.3-70b-versatile',max_tokens:1024,temperature:0.2,
    response_format:{type:'json_object'},
    messages:[{role:'system',content:sys},{role:'user',content:ask}],
  };
  const res=await groqFetchWithRetry(judgeBody, ()=>{});
  if(!res.ok) throw new Error('judge '+res.status);
  const data=await res.json();
  const raw=data.choices?.[0]?.message?.content||'{}';
  let parsed; try{ parsed=JSON.parse(raw); }catch{ parsed=JSON.parse(raw.slice(raw.indexOf('{'),raw.lastIndexOf('}')+1)); }
  return Array.isArray(parsed.scores)?parsed.scores:[];
}

function stopBenchmark(){
  document.getElementById('bench-results').style.display='none';
  document.getElementById('bench-setup').style.display='flex';
  _benchInit=false;initBenchmarkAgents();
}
