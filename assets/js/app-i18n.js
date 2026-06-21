/* English / Chinese toggle for the main AgentForge app (index.html).
   Reuses the data-i18n / data-i18n-ph attribute pattern from landing-i18n.js
   and shares the same localStorage key so the choice is consistent across pages. */
(function(){
var I18N = {
en: {
  setup_tagline: "247 AI specialists · pipelines · debate · benchmarker<br>100% free · runs in your browser · no account needed",
  setup_provider_title: "🚀 Choose Your Free AI Provider",
  setup_provider_intro: "All options below are free. Pick one, get your API key, paste it, and you're live in under 2 minutes.",
  prov_groq_tag: "Free · Fastest",
  prov_cerebras_tag: "Free · Ultra-fast",
  prov_gemini_tag: "Free · Google AI",
  prov_openrouter_tag: "Free models",
  prov_ollama_name: "Ollama (Local)",
  prov_ollama_tag: "Runs on your PC · 100% private",
  setup_groq_step1: '<b>Get free key</b><a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys ↗</a> — sign up with Google, no card.',
  setup_step2_create: "<b>Create key</b> and copy it.",
  setup_step3_paste: "<b>Paste below and connect</b>",
  setup_cerebras_step1: '<b>Get free key</b><a href="https://cloud.cerebras.ai" target="_blank" rel="noopener">cloud.cerebras.ai ↗</a> — sign up free.',
  setup_step2_create_apikey: "<b>Create API key</b> and copy it.",
  setup_gemini_step1: '<b>Get free key</b><a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey ↗</a> — sign in with Google.',
  setup_openrouter_step1: '<b>Get free key</b><a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys ↗</a> — sign up free, no card.',
  setup_ollama_step1: '<b>Install Ollama</b><a href="https://ollama.com" target="_blank" rel="noopener">ollama.com ↗</a> — free, runs on your PC.',
  setup_ollama_step2: '<b>Pull a model:</b><span class="cmd">ollama run llama3.2</span>',
  setup_ollama_step3: "<b>Enter your host below</b>",
  setup_connect_btn: "Connect & Start →",
  setup_already: "Already set up?",
  setup_goto_agents: "Go to agents →",

  search_ph: "Search 247 specialists…",
  pipeline_add_btn: "⛓️ Add",
  pipeline_mode_hint: "Pipeline mode: tap agents to add",
  pipeline_build_btn: "Build →",

  chat_msg_ph: "Message…",

  pl_goal_title: "🎯 Project Goal",
  pl_goal_ph: "Describe what you want to build or solve…\ne.g. Build a SaaS landing page for a project management tool",
  pl_autobuild_btn: "✨ Auto-Build Team",
  pl_pipeline_title: '⛓️ Agent Pipeline <span style="color:var(--text2);font-size:11px">(in order)</span>',
  pl_empty_hint: "← Go to 🏠 Agents and tap ⛓️ Add to build your pipeline",
  pl_run_btn: "▶ Run Pipeline",
  pl_share_btn: "🔗 Share Pipeline",
  pl_examples_title: "💡 Example Pipelines",
  pl_ex_saas_title: "🚀 SaaS Product Launch",
  pl_ex_saas_desc: "Product Manager → Frontend Dev → Brand Guardian → Marketing",
  pl_ex_sec_title: "🔒 Security Audit",
  pl_ex_sec_desc: "Security Architect → AppSec Engineer → QA Tester",
  pl_ex_content_title: "✍️ Content Campaign",
  pl_ex_content_desc: "Brand Guardian → Content Strategist → SEO Specialist",
  pl_running_title: "Pipeline Running",

  mem_title: "🧠 Saved Memory",
  mem_clear_all: "Clear all",

  set_provider_title: "🔌 AI Provider",
  set_gemini_tag: "Free · Google",
  set_ollama_tag: "Local · Your PC",
  set_demo_name: "Demo",
  set_demo_tag: "No AI",
  set_groq_key_label: 'Groq API Key — <a href="https://console.groq.com/keys" target="_blank" rel="noopener">get free key ↗</a>',
  set_engine_label: "Engine",
  set_model_flash: "⚡ Flash",
  set_model_max: "🧠 Max",
  set_model_lite: "🍃 Lite",
  set_cerebras_key_label: 'Cerebras API Key — <a href="https://cloud.cerebras.ai" target="_blank" rel="noopener">get free key ↗</a>',
  set_gemini_key_label: 'Gemini API Key — <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">get free key ↗</a>',
  set_openrouter_key_label: 'OpenRouter API Key — <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">get free key ↗</a>',
  set_ollama_host_label: "Ollama Host",
  set_save_test_btn: "Save & Test →",
  set_websearch_title: "🌐 Web Search (optional)",
  set_not_configured: "Not configured",
  set_brave_ph: "Brave Search key…",
  set_brave_hint: 'Free 2000 searches/month at <a href="https://api.search.brave.com" target="_blank">api.search.brave.com ↗</a><br>When set, agents automatically search the web for real-time info.',
  set_save_search_btn: "Save Search Key",
  set_editions_title: "🏢 Vertical Editions",
  set_editions_intro: "Focused versions of AgentForge for specific industries — filtered agents, custom branding.",
  set_legal_desc: "Document review, compliance, client intake",
  set_finance_desc: "Bookkeeping, investment, tax, crypto, risk",
  set_health_desc: "Patient services, billing, compliance, HR",
  set_automations_title: "⚡ Automations (optional)",
  set_webhook_hint: 'Paste any Zapier, Make, or webhook URL. Pipeline/debate/benchmark output is POSTed as JSON so you can route it to Notion, Slack, email, or any app. <a href="https://zapier.com/apps/webhook/integrations" target="_blank" rel="noopener">Create a Zapier webhook ↗</a>',
  set_save_webhook_btn: "Save Webhook URL",

  cr_title: "✏️ Agent Creator",
  cr_subtitle: "Build your own specialist",
  cr_name_label: "Agent Name *",
  cr_name_ph: "e.g. Crypto Analyst",
  cr_emoji_label: "Emoji",
  cr_division_label: "Division *",
  cr_division_select: "Select division…",
  cr_desc_label: "One-line description *",
  cr_desc_ph: "e.g. Expert in DeFi, tokenomics, and on-chain analytics",
  cr_vibe_label: "Personality vibe",
  cr_vibe_ph: "e.g. Reads the blockchain so you don't have to",
  cr_expertise_label: "Core expertise &amp; knowledge areas",
  cr_expertise_ph: "What does this agent deeply know?\ne.g. DeFi protocols, tokenomics, whale tracking, on-chain data analysis, smart contract auditing",
  cr_style_label: "Communication style",
  cr_style_direct: "Direct &amp; concise — gets to the point fast",
  cr_style_thorough: "Thorough &amp; detailed — comprehensive breakdowns",
  cr_style_creative: "Creative &amp; energetic — bold ideas and enthusiasm",
  cr_style_academic: "Academic &amp; precise — citations, rigor, structure",
  cr_style_coaching: "Coaching &amp; socratic — asks questions, guides thinking",
  cr_deliverables_label: "Key deliverables (what outputs does this agent produce?)",
  cr_deliverables_ph: "e.g. Token analysis reports, smart contract risk assessments, market trend summaries, DeFi yield comparisons",
  cr_generate_btn: "✨ Generate System Prompt with AI",
  cr_prompt_label: 'System Prompt <span style="color:var(--text2);font-weight:400">(auto-generated or write your own)</span>',
  cr_prompt_ph: "Your agent's full system prompt…\n\nOr click '✨ Generate' above to create one from your inputs.",
  cr_save_btn: "💾 Save &amp; Use Agent",
  cr_copy_btn: "📋 Copy .md",
  cr_my_agents: '🛠️ My Custom Agents<span class="ls-line"></span>',

  db_title: "⚔️ Agent vs Agent Debate",
  db_intro: "Two specialists argue and refine until a production-ready answer emerges.",
  db_agent_a: "Agent A — Proposer",
  db_agent_b: "Agent B — Critic",
  db_select_agent: "Select agent…",
  db_topic_label: "Topic / Question",
  db_topic_ph: "What should they debate?\ne.g. Best architecture for a scalable real-time chat app",
  db_rounds_label: "Rounds",
  db_start_btn: "⚔️ Start Debate",
  db_progress_title: "⚔️ Debate in Progress",

  bn_title: "📊 Agent Benchmarker",
  bn_intro: "Run the same prompt across agents and rank by quality, depth &amp; speed.",
  bn_prompt_ph: "Prompt to test all agents with…\ne.g. Design a REST API for user authentication with JWT",
  bn_compare_label: 'Agents to Compare <span style="color:var(--text2);font-size:11px">(select 2+)</span>',
  bn_run_btn: "📊 Run Benchmark"
},

zh: {
  setup_tagline: "247 位 AI 专家 · 流水线 · 辩论 · 基准测试<br>100% 免费 · 在浏览器中运行 · 无需账号",
  setup_provider_title: "🚀 选择你的免费 AI 提供商",
  setup_provider_intro: "以下所有选项都是免费的。选一个，获取 API 密钥，粘贴进去，2 分钟内即可上线。",
  prov_groq_tag: "免费 · 最快",
  prov_cerebras_tag: "免费 · 超快",
  prov_gemini_tag: "免费 · Google AI",
  prov_openrouter_tag: "免费模型",
  prov_ollama_name: "Ollama（本地）",
  prov_ollama_tag: "在你的电脑上运行 · 100% 私密",
  setup_groq_step1: '<b>获取免费密钥</b><a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys ↗</a> — 用 Google 账号注册，无需信用卡。',
  setup_step2_create: "<b>创建密钥</b>并复制。",
  setup_step3_paste: "<b>粘贴到下方并连接</b>",
  setup_cerebras_step1: '<b>获取免费密钥</b><a href="https://cloud.cerebras.ai" target="_blank" rel="noopener">cloud.cerebras.ai ↗</a> — 免费注册。',
  setup_step2_create_apikey: "<b>创建 API 密钥</b>并复制。",
  setup_gemini_step1: '<b>获取免费密钥</b><a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey ↗</a> — 用 Google 账号登录。',
  setup_openrouter_step1: '<b>获取免费密钥</b><a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys ↗</a> — 免费注册，无需信用卡。',
  setup_ollama_step1: '<b>安装 Ollama</b><a href="https://ollama.com" target="_blank" rel="noopener">ollama.com ↗</a> — 免费，在你的电脑上运行。',
  setup_ollama_step2: '<b>拉取一个模型：</b><span class="cmd">ollama run llama3.2</span>',
  setup_ollama_step3: "<b>在下方输入你的主机地址</b>",
  setup_connect_btn: "连接并开始 →",
  setup_already: "已经设置好了？",
  setup_goto_agents: "前往专家列表 →",

  search_ph: "搜索 247 位专家…",
  pipeline_add_btn: "⛓️ 添加",
  pipeline_mode_hint: "流水线模式：点击专家即可添加",
  pipeline_build_btn: "构建 →",

  chat_msg_ph: "输入消息…",

  pl_goal_title: "🎯 项目目标",
  pl_goal_ph: "描述你想构建或解决的问题…\n例如：为一个项目管理工具搂建 SaaS 着陆页",
  pl_autobuild_btn: "✨ 自动组建团队",
  pl_pipeline_title: '⛓️ 专家流水线 <span style="color:var(--text2);font-size:11px">(按顺序)</span>',
  pl_empty_hint: "← 前往 🏠 专家页，点击 ⛓️ 添加 来构建你的流水线",
  pl_run_btn: "▶ 运行流水线",
  pl_share_btn: "🔗 分享流水线",
  pl_examples_title: "💡 流水线示例",
  pl_ex_saas_title: "🚀 SaaS 产品发布",
  pl_ex_saas_desc: "产品经理 → 前端开发 → 品牌守护者 → 市场营销",
  pl_ex_sec_title: "🔒 安全审计",
  pl_ex_sec_desc: "安全架构师 → 应用安全工程师 → QA 测试员",
  pl_ex_content_title: "✍️ 内容营销活动",
  pl_ex_content_desc: "品牌守护者 → 内容策略师 → SEO 专家",
  pl_running_title: "流水线运行中",

  mem_title: "🧠 已保存的内容",
  mem_clear_all: "清空全部",

  set_provider_title: "🔌 AI 提供商",
  set_gemini_tag: "免费 · Google",
  set_ollama_tag: "本地 · 你的电脑",
  set_demo_name: "演示",
  set_demo_tag: "无 AI",
  set_groq_key_label: 'Groq API 密钥 — <a href="https://console.groq.com/keys" target="_blank" rel="noopener">获取免费密钥 ↗</a>',
  set_engine_label: "引擎",
  set_model_flash: "⚡ 极速",
  set_model_max: "🧠 强力",
  set_model_lite: "🍃 轻量",
  set_cerebras_key_label: 'Cerebras API 密钥 — <a href="https://cloud.cerebras.ai" target="_blank" rel="noopener">获取免费密钥 ↗</a>',
  set_gemini_key_label: 'Gemini API 密钥 — <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">获取免费密钥 ↗</a>',
  set_openrouter_key_label: 'OpenRouter API 密钥 — <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">获取免费密钥 ↗</a>',
  set_ollama_host_label: "Ollama 主机地址",
  set_save_test_btn: "保存并测试 →",
  set_websearch_title: "🌐 网络搜索（可选）",
  set_not_configured: "未配置",
  set_brave_ph: "Brave 搜索密钥…",
  set_brave_hint: '在 <a href="https://api.search.brave.com" target="_blank">api.search.brave.com ↗</a> 免费获取每月 2000 次搜索<br>设置后，专家会自动搜索网络获取实时信息。',
  set_save_search_btn: "保存搜索密钥",
  set_editions_title: "🏢 行业专属版本",
  set_editions_intro: "面向特定行业的 AgentForge 专属版本 — 精选专家、定制品牌。",
  set_legal_desc: "文件审查、合规、客户接洽",
  set_finance_desc: "记账、投资、税务、加密货币、风险管理",
  set_health_desc: "患者服务、计费、合规、人力资源",
  set_automations_title: "⚡ 自动化（可选）",
  set_webhook_hint: '粘贴任意 Zapier、Make 或 Webhook 网址。流水线/辩论/基准测试的结果将以 JSON 形式 POST 发送，可路由到 Notion、Slack、邮件或任意应用。<a href="https://zapier.com/apps/webhook/integrations" target="_blank" rel="noopener">创建 Zapier Webhook ↗</a>',
  set_save_webhook_btn: "保存 Webhook 网址",

  cr_title: "✏️ 专家创建器",
  cr_subtitle: "打造你自己的专家",
  cr_name_label: "专家名称 *",
  cr_name_ph: "例如：加密货币分析师",
  cr_emoji_label: "表情符号",
  cr_division_label: "所属领域 *",
  cr_division_select: "选择领域…",
  cr_desc_label: "一句话描述 *",
  cr_desc_ph: "例如：精通 DeFi、代币经济学和链上数据分析",
  cr_vibe_label: "性格特点",
  cr_vibe_ph: "例如：帮你读懂区块链，你不用自己看",
  cr_expertise_label: "核心专业知识领域",
  cr_expertise_ph: "这个专家深入了解什么？\n例如：DeFi 协议、代币经济学、巨鲸跟踪、链上数据分析、智能合约审计",
  cr_style_label: "沟通风格",
  cr_style_direct: "直接简洁 — 快速切入重点",
  cr_style_thorough: "详尽周全 — 全面细致的分析",
  cr_style_creative: "富有创意 — 大胆的想法和热情",
  cr_style_academic: "学术严谨 — 引用、严谨、结构化",
  cr_style_coaching: "引导式 · 苏格拉底式 — 通过提问引导思考",
  cr_deliverables_label: "关键产出（这个专家会产出什么内容？）",
  cr_deliverables_ph: "例如：代币分析报告、智能合约风险评估、市场趋势总结、DeFi 收益对比",
  cr_generate_btn: "✨ 用 AI 生成系统提示词",
  cr_prompt_label: '系统提示词 <span style="color:var(--text2);font-weight:400">(自动生成或自行编写)</span>',
  cr_prompt_ph: "这个专家的完整系统提示词…\n\n或点击上方「✨ 生成」根据你的输入自动创建。",
  cr_save_btn: "💾 保存并使用该专家",
  cr_copy_btn: "📋 复制 .md",
  cr_my_agents: '🛠️ 我的自定义专家<span class="ls-line"></span>',

  db_title: "⚔️ 专家对战辩论",
  db_intro: "两位专家展开辩论并不断完善，直到得出可投入实践的答案。",
  db_agent_a: "专家 A — 提议方",
  db_agent_b: "专家 B — 批评方",
  db_select_agent: "选择专家…",
  db_topic_label: "辩题 / 问题",
  db_topic_ph: "他们应该辩论什么？\n例如：可扩展实时聊天应用的最佳架构",
  db_rounds_label: "轮数",
  db_start_btn: "⚔️ 开始辩论",
  db_progress_title: "⚔️ 辩论进行中",

  bn_title: "📊 专家基准测试",
  bn_intro: "用同一个提示词测试多位专家，并按质量、深度和速度排名。",
  bn_prompt_ph: "用于测试所有专家的提示词…\n例如：设计一个带 JWT 认证的 REST API",
  bn_compare_label: '对比的专家 <span style="color:var(--text2);font-size:11px">(选择 2 个以上)</span>',
  bn_run_btn: "📊 运行基准测试"
}
};

window.AGENTFORGE_APP_I18N = I18N;

function applyAppLang(lang){
  var dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    var key = el.getAttribute('data-i18n-ph');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.documentElement.lang = lang;
  try { localStorage.setItem('agentforge_lang', lang); } catch(e){}
  var btn = document.getElementById('lang-toggle');
  if(btn) btn.textContent = (lang === 'zh') ? '中文' : 'EN';
}
window.applyAppLang = applyAppLang;

window.toggleAppLang = function(){
  var current = 'en';
  try { current = localStorage.getItem('agentforge_lang') || 'en'; } catch(e){}
  if(!I18N[current]) current = 'en';
  applyAppLang(current === 'zh' ? 'en' : 'zh');
};

document.addEventListener('DOMContentLoaded', function(){
  var saved = 'en';
  try { saved = localStorage.getItem('agentforge_lang') || 'en'; } catch(e){}
  applyAppLang(I18N[saved] ? saved : 'en');
});
})();
