<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 AI specialists · Agent pipelines · Auto-built teams · Runs in your browser · Free**

A mobile-first agentic AI platform that runs entirely in the browser — no server, no install, no build step, no cost. Powered by free [Groq](https://console.groq.com) cloud inference or a local [Ollama](https://ollama.com) model.

[**🌐 Open the live app →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#self-host)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#architecture)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

🌐 **English** · [中文](docs/i18n/README.zh.md) · [Español](docs/i18n/README.es.md) · [हिन्दी](docs/i18n/README.hi.md) · [العربية](docs/i18n/README.ar.md) · [Português](docs/i18n/README.pt.md) · [Français](docs/i18n/README.fr.md) · [Русский](docs/i18n/README.ru.md) · [日本語](docs/i18n/README.ja.md) · [Deutsch](docs/i18n/README.de.md)

</div>

---

## Why AgentForge

| | AgentForge | Generic AI chat |
|---|:---:|:---:|
| 247 domain specialists, each a deep expert prompt | ✅ | ❌ |
| Auto-builds the optimal **team** for your goal | ✅ | ❌ |
| Multi-agent **pipelines** (chained reasoning) | ✅ | ❌ |
| Agent-vs-agent **debate** to refine answers | ✅ | ❌ |
| LLM-judged **benchmarker** | ✅ | ❌ |
| **Runs** the code it writes (70+ languages) | ✅ | ❌ |
| Voice input · file attachment · memory · export | ✅ | sometimes |
| Zero install, zero dependencies, free forever | ✅ | ❌ |

---

## Features

- **💬 Chat** — talk to any specialist with streaming responses.
- **⛓️ Agent Pipeline** — chain 2–6 specialists; each builds on the previous output. Run a full launch — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — in one tap.
- **✨ Auto-Build Team** — describe a goal; an orchestrator reads the full roster and assembles the right agents in the right order.
- **⚔️ Agent Debate** — two specialists argue in rounds (Proposer builds, Critic challenges) until a battle-tested answer emerges.
- **📊 Benchmarker** — run one prompt across many agents; an impartial judge model scores each on relevance, depth, and correctness.
- **▶️ Code Runner** — every code block gets a Run button, executed via the free Piston API (70+ languages).
- **🌍 10-Language Landing Page** — the [landing page](https://mmuzammul.github.io/AgiForge/landing.html) switches instantly between English, 中文, Español, हिन्दी, العربية, Português, Français, Русский, 日本語, and Deutsch — client-side, no reload, no third-party translation service.
- **📖 README in 10 languages** — this documentation is also available in [中文](docs/i18n/README.zh.md), [Español](docs/i18n/README.es.md), [हिन्दी](docs/i18n/README.hi.md), [العربية](docs/i18n/README.ar.md), [Português](docs/i18n/README.pt.md), [Français](docs/i18n/README.fr.md), [Русский](docs/i18n/README.ru.md), [日本語](docs/i18n/README.ja.md), and [Deutsch](docs/i18n/README.de.md) (see [`docs/i18n/`](docs/i18n/)), with English as the canonical version.
- **🌐 Web Search** — optional real-time search via Brave Search API (bring your own key).
- **🎤 Voice Input** — Web Speech API, built into Chrome and Safari.
- **📎 File Attachment** — read code, CSVs, and docs as context, fully client-side.
- **🧠 Memory** — save, review, and delete outputs in `localStorage`.
- **⬇️ Export** — download any chat, pipeline, debate, or benchmark as a `.md` file.
- **🔄 Smart rate-limit handling** — on Groq's free tier, rotates across a 4-model pool and waits out `429`s so pipelines finish unattended.

See [`docs/FEATURES.md`](docs/FEATURES.md) for the full breakdown.

---

## The roster — 16 divisions, 247 AI agent specialists

AgentForge ships **247 pre-built AI agents** — structured system prompts for engineering, marketing, sales, finance, security, design, and 11 other professional categories. Every agent name below links straight to its full system prompt in this repository.

### ⭐ Specialized — 45 agents

| Agent | Specialty |
|---|---|
| 💸 [Accounts Payable Agent](agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 more — [see all 45 Specialized agents →](docs/AGENTS.md#specialized-45)*

### 🏗️ Engineering — 43 agents

| Agent | Specialty |
|---|---|
| 🧬 [AI Data Remediation Engineer](agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 more — [see all 43 Engineering agents →](docs/AGENTS.md#engineering-43)*

### 📣 Marketing — 32 agents

| Agent | Specialty |
|---|---|
| 🏗️ [AEO Foundations Architect](agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 more — [see all 32 Marketing agents →](docs/AGENTS.md#marketing-32)*

### 🗺️ GIS & Spatial — 10 agents

| Agent | Specialty |
|---|---|
| 🏔️ [3D & Scene Developer](agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 more — [see all 10 GIS & Spatial agents →](docs/AGENTS.md#gis-spatial-10)*

### 💰 Finance — 10 agents

| Agent | Specialty |
|---|---|
| 📒 [Bookkeeper & Controller](agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 more — [see all 10 Finance agents →](docs/AGENTS.md#finance-10)*

### 🎓 Academic — 13 agents

| Agent | Specialty |
|---|---|
| 🌍 [Anthropologist](agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 more — [see all 13 Academic agents →](docs/AGENTS.md#academic-13)*

### 🛟 Support — 10 agents

| Agent | Specialty |
|---|---|
| 📊 [Analytics Reporter](agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 more — [see all 10 Support agents →](docs/AGENTS.md#support-10)*

### 🎮 Game Development — 5 agents

| Agent | Specialty |
|---|---|
| 🎵 [Game Audio Engineer](agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 Security — 12 agents

| Agent | Specialty |
|---|---|
| 🔐 [Application Security Engineer](agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 more — [see all 12 Security agents →](docs/AGENTS.md#security-12)*

### 🤝 Sales — 12 agents

| Agent | Specialty |
|---|---|
| 💼 [Account Executive](agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 more — [see all 12 Sales agents →](docs/AGENTS.md#sales-12)*

### 🧪 Testing — 10 agents

| Agent | Specialty |
|---|---|
| ♿ [Accessibility Auditor](agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 more — [see all 10 Testing agents →](docs/AGENTS.md#testing-10)*

### 🎨 Design — 16 agents

| Agent | Specialty |
|---|---|
| 🧊 [3D Designer](agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 more — [see all 16 Design agents →](docs/AGENTS.md#design-16)*

### 📈 Paid Media — 7 agents

| Agent | Specialty |
|---|---|
| ✍️ [Ad Creative Strategist](agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 more — [see all 7 Paid Media agents →](docs/AGENTS.md#paid-media-7)*

### 📋 Project Management — 10 agents

| Agent | Specialty |
|---|---|
| 🧪 [Experiment Tracker](agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 more — [see all 10 Project Management agents →](docs/AGENTS.md#project-management-10)*

### 📦 Product — 9 agents

| Agent | Specialty |
|---|---|
| 🧠 [Behavioral Nudge Engine](agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 more — [see all 9 Product agents →](docs/AGENTS.md#product-9)*

### 🥽 Spatial Computing — 3 agents

| Agent | Specialty |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[Browse the full Agent Catalog →](docs/AGENTS.md)** — every one of the 247 specialists, organized by division, with a direct link to its system prompt.

---

## Getting started (mobile, ~2 min)

1. Open **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** on your phone.
2. Grab a **free Groq API key** at [console.groq.com](https://console.groq.com) (Google login, no card).
3. Paste it in **Settings → Connect**.
4. Pick a specialist and start building. Tap **Add to Home Screen** for an app-like experience.

> Your key is stored only in your browser's `localStorage` — it never touches a server.

---

## AI providers

| Provider | Cost | Setup |
|---|---|---|
| **Groq** | Free tier | Paste an API key in the app |
| **Ollama** | Free (local) | Run on a same-network machine |
| **Demo** | Free | No AI — previews the UI only |

---

## Architecture

AgentForge has **zero runtime dependencies** and **no build step**. The whole client is one file, `index.html`, which carries lightweight metadata (name, division, emoji, color, one-line description) for all 247 agents. Each agent's full system prompt is fetched on demand from this repo:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

This keeps the app small and fast to load while the prompts stay version-controlled and editable as plain Markdown. Full details in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Self-host

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# open index.html directly, or serve the folder:
python3 -m http.server 8080   # then visit http://localhost:8080
```

No npm, no framework, no toolchain. Deploy the folder to any static host (GitHub Pages, Netlify, Vercel). For GitHub Pages, enable **Settings → Pages → Source: GitHub Actions** — the included workflow auto-deploys on every push to `main`. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Repository layout

```
AgiForge/
├── index.html              # the entire app — self-contained, no build
├── agents/                 # 247 specialist system prompts, by division
│   ├── engineering/        # …43 agents
│   ├── specialized/        # …45 agents
│   └── … (16 divisions)
├── docs/                   # architecture, features, deployment, catalog
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   ├── AGENTS.md           # full 247-agent catalog, linked per agent
│   └── i18n/               # README translations (9 languages)
├── assets/                 # logo and brand assets
├── .github/                # CI workflow + issue/PR templates
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
├── NOTICE.md
└── README.md
```

---

## Contributing

New specialists and improvements are welcome — adding an agent is just a new Markdown file. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Privacy

No analytics, no tracking, no backend. The only network calls are to your chosen AI provider (Groq/Ollama) and, optionally, Brave (search) and Piston (code execution). Everything else runs in your browser.

## License

Free for personal, educational, and non-commercial use — modify and self-host all you like. Commercial use (selling, sublicensing, hosting as a paid product/service, or any revenue-generating use) requires the author's written permission. See [LICENSE](LICENSE) for the full terms and [NOTICE.md](NOTICE.md) for a plain-language summary, including terms on redistributing or bulk-extracting the agent roster. © 2026 mmuzammul, all rights reserved except as granted there.
