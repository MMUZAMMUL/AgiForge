<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 especialistas em IA · Pipelines de agentes · Equipes montadas automaticamente · Funciona no seu navegador · Gratuito**

Uma plataforma de IA agêntica mobile-first que roda inteiramente no navegador — sem servidor, sem instalação, sem etapa de build, sem custo. Funciona com a inferência em nuvem gratuita do [Groq](https://console.groq.com) ou com um modelo local via [Ollama](https://ollama.com).

[**🌐 Abrir o app em produção →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#auto-hospedagem)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#arquitetura)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · **Português** · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> Esta é uma tradução mantida pela comunidade. Em caso de divergência, o [README em inglês](../../README.md) é a versão de referência.

## Por que AgentForge

| | AgentForge | Chat de IA genérico |
|---|:---:|:---:|
| 247 especialistas de domínio, cada um com um prompt expert detalhado | ✅ | ❌ |
| Monta automaticamente a **equipe** ideal para seu objetivo | ✅ | ❌ |
| **Pipelines** multiagente (raciocínio encadeado) | ✅ | ❌ |
| **Debate** agente contra agente para refinar respostas | ✅ | ❌ |
| **Benchmarker** avaliado por um LLM juiz | ✅ | ❌ |
| **Executa** o código que escreve (70+ linguagens) | ✅ | ❌ |
| Entrada de voz · anexo de arquivos · memória · exportação | ✅ | às vezes |
| Zero instalação, zero dependências, gratuito para sempre | ✅ | ❌ |

---

## Funcionalidades

- **💬 Chat** — converse com qualquer especialista com respostas em streaming.
- **⛓️ Pipeline de agentes** — encadeie de 2 a 6 especialistas; cada um constrói sobre a saída anterior. Execute um lançamento completo — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — em um único toque.
- **✨ Montagem automática de equipe** — descreva um objetivo; um orquestrador lê todo o catálogo e monta os agentes certos na ordem certa.
- **⚔️ Debate de agentes** — dois especialistas debatem em rodadas (o Proponente constrói, o Crítico desafia) até surgir uma resposta testada sob pressão.
- **📊 Benchmarker** — execute o mesmo prompt em vários agentes; um modelo juiz imparcial pontua cada resposta em relevância, profundidade e correção.
- **▶️ Executor de código** — todo bloco de código recebe um botão de Executar, processado pela API gratuita Piston (70+ linguagens).
- **🌍 Landing page em 10 idiomas** — a [landing page](https://mmuzammul.github.io/AgiForge/landing.html) alterna instantaneamente entre inglês, 中文, espanhol, हिन्दी, العربية, português, francês, russo, 日本語 e alemão — totalmente no lado do cliente, sem recarregar a página, sem serviço de tradução de terceiros.
- **🌐 Busca na web** — busca opcional em tempo real via API do Brave Search (use sua própria chave).
- **🎤 Entrada de voz** — Web Speech API, nativa no Chrome e no Safari.
- **📎 Anexo de arquivos** — leia código, CSVs e documentos como contexto, totalmente no lado do cliente.
- **🧠 Memória** — salve, revise e exclua resultados no `localStorage`.
- **⬇️ Exportação** — baixe qualquer chat, pipeline, debate ou benchmark como arquivo `.md`.
- **🔄 Tratamento inteligente de limite de uso** — no nível gratuito do Groq, alterna entre um pool de 4 modelos e espera os `429` para que os pipelines terminem sem intervenção.

Veja [`docs/FEATURES.md`](../FEATURES.md) para o detalhamento completo.

---

## O catálogo — 16 divisões, 247 especialistas de IA

O AgentForge traz **247 agentes de IA prontos** — prompts de sistema estruturados para engenharia, marketing, vendas, finanças, segurança, design e outras 11 categorias profissionais. Cada nome de agente abaixo tem link direto para seu prompt de sistema completo neste repositório.

### ⭐ Especializados — 45 agentes

| Agente | Especialidade |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 a mais — [ver todos os 45 agentes de Especializados →](../AGENTS.md#specialized-45)*

### 🏗️ Engenharia — 43 agentes

| Agente | Especialidade |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 a mais — [ver todos os 43 agentes de Engenharia →](../AGENTS.md#engineering-43)*

### 📣 Marketing — 32 agentes

| Agente | Especialidade |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 a mais — [ver todos os 32 agentes de Marketing →](../AGENTS.md#marketing-32)*

### 🗺️ GIS e Espacial — 10 agentes

| Agente | Especialidade |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 a mais — [ver todos os 10 agentes de GIS e Espacial →](../AGENTS.md#gis-spatial-10)*

### 💰 Finanças — 10 agentes

| Agente | Especialidade |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 a mais — [ver todos os 10 agentes de Finanças →](../AGENTS.md#finance-10)*

### 🎓 Acadêmico — 13 agentes

| Agente | Especialidade |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 a mais — [ver todos os 13 agentes de Acadêmico →](../AGENTS.md#academic-13)*

### 🛟 Suporte — 10 agentes

| Agente | Especialidade |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 a mais — [ver todos os 10 agentes de Suporte →](../AGENTS.md#support-10)*

### 🎮 Desenvolvimento de Jogos — 5 agentes

| Agente | Especialidade |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 Segurança — 12 agentes

| Agente | Especialidade |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 a mais — [ver todos os 12 agentes de Segurança →](../AGENTS.md#security-12)*

### 🤝 Vendas — 12 agentes

| Agente | Especialidade |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 a mais — [ver todos os 12 agentes de Vendas →](../AGENTS.md#sales-12)*

### 🧪 Testes — 10 agentes

| Agente | Especialidade |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 a mais — [ver todos os 10 agentes de Testes →](../AGENTS.md#testing-10)*

### 🎨 Design — 16 agentes

| Agente | Especialidade |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 a mais — [ver todos os 16 agentes de Design →](../AGENTS.md#design-16)*

### 📈 Mídia Paga — 7 agentes

| Agente | Especialidade |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 a mais — [ver todos os 7 agentes de Mídia Paga →](../AGENTS.md#paid-media-7)*

### 📋 Gestão de Projetos — 10 agentes

| Agente | Especialidade |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 a mais — [ver todos os 10 agentes de Gestão de Projetos →](../AGENTS.md#project-management-10)*

### 📦 Produto — 9 agentes

| Agente | Especialidade |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 a mais — [ver todos os 9 agentes de Produto →](../AGENTS.md#product-9)*

### 🥽 Computação Espacial — 3 agentes

| Agente | Especialidade |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[Veja o Catálogo completo de Agentes →](../AGENTS.md)** — todos os 247 especialistas, organizados por divisão, com link direto para o prompt de sistema de cada um.

---

## Primeiros passos (mobile, ~2 min)

1. Abra **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** no seu celular.
2. Obtenha uma **chave de API gratuita do Groq** em [console.groq.com](https://console.groq.com) (login com Google, sem cartão).
3. Cole-a em **Settings → Connect**.
4. Escolha um especialista e comece a construir. Toque em **Add to Home Screen** para uma experiência semelhante a um app.

> Sua chave fica salva apenas no `localStorage` do seu navegador — nunca chega a um servidor.

---

## Provedores de IA

| Provedor | Custo | Configuração |
|---|---|---|
| **Groq** | Nível gratuito | Cole uma chave de API no app |
| **Ollama** | Gratuito (local) | Execute em uma máquina da mesma rede |
| **Demo** | Gratuito | Sem IA — apenas pré-visualiza a interface |

---

## Arquitetura

AgentForge tem **zero dependências em tempo de execução** e **nenhuma etapa de build**. Todo o cliente é um único arquivo, `index.html`, que carrega metadados leves (nome, divisão, emoji, cor, descrição em uma linha) para todos os 247 agentes. O prompt de sistema completo de cada agente é buscado sob demanda neste repositório:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Isso mantém o app pequeno e rápido de carregar, enquanto os prompts permanecem versionados e editáveis como Markdown simples. Detalhes completos em [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md).

---

## Auto-hospedagem

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# abra o index.html diretamente, ou sirva a pasta:
python3 -m http.server 8080   # depois acesse http://localhost:8080
```

Sem npm, sem framework, sem toolchain. Implante a pasta em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel). Para o GitHub Pages, ative **Settings → Pages → Source: GitHub Actions** — o workflow incluído faz deploy automático a cada push para `main`. Veja [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md).

---

## Estrutura do repositório

```
AgiForge/
├── index.html              # o app inteiro — autocontido, sem build
├── agents/                 # 247 prompts de especialistas, por divisão
│   ├── engineering/        # …36 agentes
│   ├── specialized/        # …45 agentes
│   └── … (16 divisões)
├── docs/                   # arquitetura, funcionalidades, deploy, catálogo
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # logo e materiais de marca
├── .github/                # workflow de CI + templates de issue/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Contribuindo

Novos especialistas e melhorias são bem-vindos — adicionar um agente é só um novo arquivo Markdown. Veja [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## Privacidade

Sem analytics, sem rastreamento, sem backend. As únicas chamadas de rede são para o provedor de IA escolhido (Groq/Ollama) e, opcionalmente, Brave (busca) e Piston (execução de código). Todo o resto roda no seu navegador.

## Licença

Gratuito para uso pessoal, educacional e não comercial — modifique e auto-hospede livremente. Uso comercial (venda, sublicenciamento, hospedagem como produto/serviço pago, ou qualquer uso que gere receita) requer permissão por escrito do autor. Veja [LICENSE](../../LICENSE) para os termos completos. © 2026 mmuzammul, todos os direitos reservados exceto os concedidos ali.
