<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 AI-специалистов · Конвейеры агентов · Автоматически собранные команды · Работает в браузере · Бесплатно**

Мобильно-ориентированная агентная AI-платформа, полностью работающая в браузере — без сервера, без установки, без сборки, без затрат. Работает на бесплатном облачном инференсе [Groq](https://console.groq.com) или на локальной модели через [Ollama](https://ollama.com).

[**🌐 Открыть приложение →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#самостоятельный-хостинг)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#архитектура)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · **Русский** · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> Это перевод, поддерживаемый сообществом. В случае расхождений приоритет имеет [README на английском](../../README.md).

## Почему AgentForge

| | AgentForge | Обычный AI-чат |
|---|:---:|:---:|
| 247 экспертов в разных областях, у каждого — глубокий экспертный промпт | ✅ | ❌ |
| Автоматически собирает оптимальную **команду** под вашу задачу | ✅ | ❌ |
| Мультиагентные **конвейеры** (цепочки рассуждений) | ✅ | ❌ |
| **Дебаты** агентов друг с другом для уточнения ответов | ✅ | ❌ |
| **Бенчмаркер** с оценкой от LLM-судьи | ✅ | ❌ |
| **Выполняет** написанный код (70+ языков) | ✅ | ❌ |
| Голосовой ввод · вложение файлов · память · экспорт | ✅ | иногда |
| Без установки, без зависимостей, бесплатно навсегда | ✅ | ❌ |

---

## Возможности

- **💬 Чат** — общайтесь с любым специалистом, ответы в режиме стриминга.
- **⛓️ Конвейер агентов** — соедините от 2 до 6 специалистов; каждый строит на основе результата предыдущего. Запустите полный цикл запуска продукта — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — одним касанием.
- **✨ Автосборка команды** — опишите цель; оркестратор читает весь список агентов и собирает нужных специалистов в правильном порядке.
- **⚔️ Дебаты агентов** — два специалиста спорят раундами (Инициатор строит, Критик оспаривает), пока не появится проверенный ответ.
- **📊 Бенчмаркер** — запустите один и тот же промпт на множестве агентов; беспристрастная модель-судья оценивает релевантность, глубину и точность каждого ответа.
- **▶️ Запуск кода** — у каждого блока кода есть кнопка запуска через бесплатный API Piston (70+ языков).
- **🌍 Лендинг на 10 языках** — [лендинг](https://mmuzammul.github.io/AgiForge/landing.html) мгновенно переключается между английским, 中文, испанским, हिन्दी, العربية, португальским, французским, русским, 日本語 и немецким — полностью на стороне клиента, без перезагрузки страницы и без сторонних сервисов перевода.
- **🌐 Веб-поиск** — опциональный поиск в реальном времени через API Brave Search (со своим ключом).
- **🎤 Голосовой ввод** — Web Speech API, встроено в Chrome и Safari.
- **📎 Вложение файлов** — читайте код, CSV и документы как контекст, полностью на стороне клиента.
- **🧠 Память** — сохраняйте, просматривайте и удаляйте результаты в `localStorage`.
- **⬇️ Экспорт** — скачивайте любой чат, конвейер, дебаты или бенчмарк как файл `.md`.
- **🔄 Умная обработка лимитов запросов** — на бесплатном уровне Groq происходит ротация по пулу из 4 моделей и ожидание ошибок `429`, чтобы конвейеры завершались без участия пользователя.

Полное описание см. в [`docs/FEATURES.md`](../FEATURES.md).

---

## Состав — 16 направлений, 247 AI-специалистов

AgentForge включает **247 готовых AI-агентов** — структурированные системные промпты для инженерии, маркетинга, продаж, финансов, безопасности, дизайна и 11 других профессиональных категорий. Каждое имя агента ниже — это прямая ссылка на его полный системный промпт в этом репозитории.

### ⭐ Специализированные — 45 агентов

| Агент | Специализация |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 ещё — [посмотреть все 45 агентов направления «Специализированные» →](../AGENTS.md#specialized-45)*

### 🏗️ Инженерия — 43 агентов

| Агент | Специализация |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 ещё — [посмотреть все 43 агентов направления «Инженерия» →](../AGENTS.md#engineering-43)*

### 📣 Маркетинг — 32 агентов

| Агент | Специализация |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 ещё — [посмотреть все 32 агентов направления «Маркетинг» →](../AGENTS.md#marketing-32)*

### 🗺️ ГИС и пространственные данные — 10 агентов

| Агент | Специализация |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 ещё — [посмотреть все 10 агентов направления «ГИС и пространственные данные» →](../AGENTS.md#gis-spatial-10)*

### 💰 Финансы — 10 агентов

| Агент | Специализация |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 ещё — [посмотреть все 10 агентов направления «Финансы» →](../AGENTS.md#finance-10)*

### 🎓 Академическая сфера — 13 агентов

| Агент | Специализация |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 ещё — [посмотреть все 13 агентов направления «Академическая сфера» →](../AGENTS.md#academic-13)*

### 🛟 Поддержка — 10 агентов

| Агент | Специализация |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 ещё — [посмотреть все 10 агентов направления «Поддержка» →](../AGENTS.md#support-10)*

### 🎮 Разработка игр — 5 агентов

| Агент | Специализация |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 Безопасность — 12 агентов

| Агент | Специализация |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 ещё — [посмотреть все 12 агентов направления «Безопасность» →](../AGENTS.md#security-12)*

### 🤝 Продажи — 12 агентов

| Агент | Специализация |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 ещё — [посмотреть все 12 агентов направления «Продажи» →](../AGENTS.md#sales-12)*

### 🧪 Тестирование — 10 агентов

| Агент | Специализация |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 ещё — [посмотреть все 10 агентов направления «Тестирование» →](../AGENTS.md#testing-10)*

### 🎨 Дизайн — 16 агентов

| Агент | Специализация |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 ещё — [посмотреть все 16 агентов направления «Дизайн» →](../AGENTS.md#design-16)*

### 📈 Платная реклама — 7 агентов

| Агент | Специализация |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 ещё — [посмотреть все 7 агентов направления «Платная реклама» →](../AGENTS.md#paid-media-7)*

### 📋 Управление проектами — 10 агентов

| Агент | Специализация |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 ещё — [посмотреть все 10 агентов направления «Управление проектами» →](../AGENTS.md#project-management-10)*

### 📦 Продукт — 9 агентов

| Агент | Специализация |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 ещё — [посмотреть все 9 агентов направления «Продукт» →](../AGENTS.md#product-9)*

### 🥽 Пространственные вычисления — 3 агентов

| Агент | Специализация |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[Полный каталог агентов →](../AGENTS.md)** — все 247 специалистов, организованных по направлениям, с прямой ссылкой на системный промпт каждого.

---

## Начало работы (на телефоне, ~2 минуты)

1. Откройте **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** на телефоне.
2. Получите **бесплатный API-ключ Groq** на [console.groq.com](https://console.groq.com) (вход через Google, без карты).
3. Вставьте его в **Settings → Connect**.
4. Выберите специалиста и начните работу. Нажмите **Add to Home Screen** для опыта, похожего на приложение.

> Ваш ключ хранится только в `localStorage` вашего браузера — он никогда не попадает на сервер.

---

## Поставщики AI

| Поставщик | Стоимость | Настройка |
|---|---|---|
| **Groq** | Бесплатный уровень | Вставьте API-ключ в приложении |
| **Ollama** | Бесплатно (локально) | Запуск на машине в той же сети |
| **Demo** | Бесплатно | Без AI — только предпросмотр интерфейса |

---

## Архитектура

AgentForge имеет **нулевые зависимости во время выполнения** и **отсутствие этапа сборки**. Весь клиент — это один файл, `index.html`, содержащий лёгкие метаданные (имя, направление, эмодзи, цвет, однострочное описание) для всех 247 агентов. Полный системный промпт каждого агента загружается по запросу из этого репозитория:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Это позволяет приложению оставаться компактным и быстро загружаться, при этом промпты остаются версионируемыми и редактируемыми как обычный Markdown. Подробности в [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md).

---

## Самостоятельный хостинг

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# откройте index.html напрямую, либо запустите сервер для папки:
python3 -m http.server 8080   # затем откройте http://localhost:8080
```

Без npm, без фреймворков, без toolchain. Развёртывайте папку на любом статическом хостинге (GitHub Pages, Netlify, Vercel). Для GitHub Pages включите **Settings → Pages → Source: GitHub Actions** — встроенный workflow автоматически деплоится при каждом push в `main`. См. [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md).

---

## Структура репозитория

```
AgiForge/
├── index.html              # всё приложение — самодостаточно, без сборки
├── agents/                 # 247 промптов специалистов, по направлениям
│   ├── engineering/        # …36 агентов
│   ├── specialized/        # …45 агентов
│   └── … (16 направлений)
├── docs/                   # архитектура, возможности, деплой, каталог
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # логотип и брендовые материалы
├── .github/                # CI workflow + шаблоны issue/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Контрибьюция

Новые специалисты и улучшения приветствуются — добавить агента означает просто создать новый Markdown-файл. См. [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## Приватность

Без аналитики, без трекинга, без backend. Единственные сетевые запросы идут к выбранному вами AI-провайдеру (Groq/Ollama) и, опционально, к Brave (поиск) и Piston (выполнение кода). Всё остальное работает в вашем браузере.

## Лицензия

Бесплатно для личного, образовательного и некоммерческого использования — изменяйте и размещайте у себя как угодно. Коммерческое использование (продажа, сублицензирование, размещение в качестве платного продукта/сервиса или любое использование с целью получения дохода) требует письменного разрешения автора. Полные условия см. в [LICENSE](../../LICENSE). © 2026 mmuzammul, все права защищены, кроме предоставленных там.
