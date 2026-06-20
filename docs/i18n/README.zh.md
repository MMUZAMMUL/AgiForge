<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 位 AI 专家 · 智能体管道 · 自动组队 · 浏览器直接运行 · 免费**

一个移动优先的智能体 AI 平台，完全在浏览器中运行——无需服务器、无需安装、无需构建、零成本。由免费的 [Groq](https://console.groq.com) 云推理或本地 [Ollama](https://ollama.com) 模型驱动。

[**🌐 打开在线应用 →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#自托管)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#架构)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · **中文** · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> 本文档为社区翻译版本，如有出入请以 [英文版 README](../../README.md) 为准。

## 为什么选择 AgentForge

| | AgentForge | 普通 AI 聊天 |
|---|:---:|:---:|
| 247 位领域专家，每个都是深度专家提示词 | ✅ | ❌ |
| 自动为你的目标组建最佳**团队** | ✅ | ❌ |
| 多智能体**管道**（链式推理） | ✅ | ❌ |
| 智能体对智能体**辩论**以优化答案 | ✅ | ❌ |
| LLM 评分的**基准测试器** | ✅ | ❌ |
| **运行**它编写的代码（支持 70+ 种语言） | ✅ | ❌ |
| 语音输入 · 文件附件 · 记忆 · 导出 | ✅ | 部分支持 |
| 零安装、零依赖、永久免费 | ✅ | ❌ |

---

## 功能特性

- **💬 聊天** — 与任意专家进行流式对话。
- **⛓️ 智能体管道** — 串联 2–6 位专家；每一步都基于前一步的输出。一键运行完整发布流程——产品经理 → 前端开发 → 品牌守护者 → 增长黑客。
- **✨ 自动组队** — 描述你的目标；编排器读取完整名册，按正确顺序组建合适的智能体。
- **⚔️ 智能体辩论** — 两位专家轮流辩论（提议者构建，批评者挑战），直到产出经过千锤百炼的答案。
- **📊 基准测试器** — 同一提示词在多个智能体上运行；由公正的评判模型对相关性、深度和正确性打分。
- **▶️ 代码运行器** — 每个代码块都有运行按钮，通过免费的 Piston API 执行（支持 70+ 种语言）。
- **🌍 10 语言着陆页** — [着陆页](https://mmuzammul.github.io/AgiForge/landing.html) 可在英语、中文、西班牙语、印地语、阿拉伯语、葡萄牙语、法语、俄语、日语和德语之间即时切换——纯客户端实现，无需刷新，不依赖第三方翻译服务。
- **🌐 网页搜索** — 可选的实时搜索，通过 Brave Search API（需自备密钥）。
- **🎤 语音输入** — 基于 Web Speech API，Chrome 和 Safari 内置支持。
- **📎 文件附件** — 读取代码、CSV 和文档作为上下文，完全在客户端完成。
- **🧠 记忆** — 在 `localStorage` 中保存、查看和删除输出结果。
- **⬇️ 导出** — 将任意聊天、管道、辩论或基准测试结果下载为 `.md` 文件。
- **🔄 智能限流处理** — 在 Groq 免费层级上轮换 4 个模型池并自动等待 `429` 限流，让管道任务无需人工干预即可完成。

完整功能说明见 [`docs/FEATURES.md`](../FEATURES.md)。

---

## 专家名册 — 16 个分类，247 位 AI 智能体专家

AgentForge 内置 **247 个预制 AI 智能体** —— 涵盖工程、市场营销、销售、金融、安全、设计等 16 个专业分类的结构化系统提示词。下面每个智能体名称均直接链接到其在本仓库中的完整系统提示词。

### ⭐ 特色专家 — 45 个智能体

| 智能体 | 专长 |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*还有 39 个 — [查看全部 45 个特色专家智能体 →](../AGENTS.md#specialized-45)*

### 🏗️ 工程 — 43 个智能体

| 智能体 | 专长 |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*还有 37 个 — [查看全部 43 个工程智能体 →](../AGENTS.md#engineering-43)*

### 📣 市场营销 — 32 个智能体

| 智能体 | 专长 |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*还有 26 个 — [查看全部 32 个市场营销智能体 →](../AGENTS.md#marketing-32)*

### 🗺️ GIS 与空间 — 10 个智能体

| 智能体 | 专长 |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*还有 4 个 — [查看全部 10 个GIS 与空间智能体 →](../AGENTS.md#gis-spatial-10)*

### 💰 金融 — 10 个智能体

| 智能体 | 专长 |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*还有 4 个 — [查看全部 10 个金融智能体 →](../AGENTS.md#finance-10)*

### 🎓 学术 — 13 个智能体

| 智能体 | 专长 |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*还有 7 个 — [查看全部 13 个学术智能体 →](../AGENTS.md#academic-13)*

### 🛟 客户支持 — 10 个智能体

| 智能体 | 专长 |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*还有 4 个 — [查看全部 10 个客户支持智能体 →](../AGENTS.md#support-10)*

### 🎮 游戏开发 — 5 个智能体

| 智能体 | 专长 |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 安全 — 12 个智能体

| 智能体 | 专长 |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*还有 6 个 — [查看全部 12 个安全智能体 →](../AGENTS.md#security-12)*

### 🤝 销售 — 12 个智能体

| 智能体 | 专长 |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*还有 6 个 — [查看全部 12 个销售智能体 →](../AGENTS.md#sales-12)*

### 🧪 测试 — 10 个智能体

| 智能体 | 专长 |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*还有 4 个 — [查看全部 10 个测试智能体 →](../AGENTS.md#testing-10)*

### 🎨 设计 — 16 个智能体

| 智能体 | 专长 |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*还有 10 个 — [查看全部 16 个设计智能体 →](../AGENTS.md#design-16)*

### 📈 付费媒体 — 7 个智能体

| 智能体 | 专长 |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*还有 1 个 — [查看全部 7 个付费媒体智能体 →](../AGENTS.md#paid-media-7)*

### 📋 项目管理 — 10 个智能体

| 智能体 | 专长 |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*还有 4 个 — [查看全部 10 个项目管理智能体 →](../AGENTS.md#project-management-10)*

### 📦 产品 — 9 个智能体

| 智能体 | 专长 |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*还有 3 个 — [查看全部 9 个产品智能体 →](../AGENTS.md#product-9)*

### 🥽 空间计算 — 3 个智能体

| 智能体 | 专长 |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[浏览完整智能体目录 →](../AGENTS.md)** —— 247 位专家全部收录，按分类整理，并附有直达系统提示词的链接。

---

## 快速开始（手机端，约 2 分钟）

1. 在手机上打开 **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)**。
2. 在 [console.groq.com](https://console.groq.com) 获取**免费的 Groq API 密钥**（Google 登录，无需信用卡）。
3. 将密钥粘贴到 **设置 → 连接** 中。
4. 选择一位专家开始构建。点击**添加到主屏幕**获得类似 App 的体验。

> 你的密钥只会保存在浏览器的 `localStorage` 中——永远不会上传到任何服务器。

---

## AI 服务提供方

| 提供方 | 费用 | 配置方式 |
|---|---|---|
| **Groq** | 免费层级 | 在应用中粘贴 API 密钥 |
| **Ollama** | 免费（本地） | 在同一网络的机器上运行 |
| **Demo** | 免费 | 无 AI 调用 — 仅预览界面 |

---

## 架构

AgentForge **零运行时依赖**、**无需构建**。整个客户端就是一个文件 `index.html`，其中包含全部 247 个智能体的轻量级元数据（名称、分类、表情符号、颜色、一句话描述）。每个智能体的完整系统提示词会按需从本仓库获取：

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

这种方式让应用保持轻量、加载快速，同时提示词内容仍以纯 Markdown 形式进行版本控制和编辑。完整细节见 [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md)。

---

## 自托管

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# 直接打开 index.html，或启动本地服务器：
python3 -m http.server 8080   # 然后访问 http://localhost:8080
```

无需 npm、无框架、无工具链。可部署到任意静态托管平台（GitHub Pages、Netlify、Vercel）。若使用 GitHub Pages，请启用 **Settings → Pages → Source: GitHub Actions** ——内置工作流会在每次推送到 `main` 分支时自动部署。详见 [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md)。

---

## 仓库结构

```
AgiForge/
├── index.html              # 整个应用 — 自包含，无需构建
├── agents/                 # 247 位专家系统提示词，按分类组织
│   ├── engineering/        # …36 位专家
│   ├── specialized/        # …45 位专家
│   └── … (共 16 个分类)
├── docs/                   # 架构、功能、部署、目录文档
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # 标志与品牌资源
├── .github/                # CI 工作流 + issue/PR 模板
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## 贡献

欢迎提交新的专家智能体和改进——添加一个智能体只需新增一个 Markdown 文件。详见 [`CONTRIBUTING.md`](../../CONTRIBUTING.md)。

## 隐私

无分析追踪、无埋点、无后端。唯一的网络请求是发往你所选择的 AI 提供方（Groq/Ollama），以及可选的 Brave（搜索）和 Piston（代码执行）。其余一切均在你的浏览器本地运行。

## 许可证

个人、教育和非商业用途免费——欢迎修改和自托管。商业用途（出售、转授权、作为付费产品/服务提供，或任何产生收入的用途）需要获得作者的书面许可。完整条款见 [LICENSE](../../LICENSE)。© 2026 mmuzammul，保留所有权利，除文中明确授予的部分外。
