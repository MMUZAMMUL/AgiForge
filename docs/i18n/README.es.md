<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 especialistas de IA · Pipelines de agentes · Equipos auto-creados · Funciona en tu navegador · Gratis**

Una plataforma de IA agéntica mobile-first que se ejecuta enteramente en el navegador — sin servidor, sin instalación, sin compilación, sin coste. Funciona con inferencia gratuita en la nube de [Groq](https://console.groq.com) o con un modelo local de [Ollama](https://ollama.com).

[**🌐 Abrir la app en vivo →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#auto-alojamiento)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#arquitectura)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · **Español** · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> Esta es una traducción mantenida por la comunidad. Ante cualquier discrepancia, el [README en inglés](../../README.md) es la versión de referencia.

## Por qué AgentForge

| | AgentForge | Chat de IA genérico |
|---|:---:|:---:|
| 247 especialistas de dominio, cada uno con un prompt experto detallado | ✅ | ❌ |
| Crea automáticamente el **equipo** óptimo para tu objetivo | ✅ | ❌ |
| **Pipelines** multi-agente (razonamiento encadenado) | ✅ | ❌ |
| **Debate** agente contra agente para refinar respuestas | ✅ | ❌ |
| **Benchmarking** evaluado por un LLM juez | ✅ | ❌ |
| **Ejecuta** el código que escribe (70+ lenguajes) | ✅ | ❌ |
| Entrada de voz · adjuntar archivos · memoria · exportar | ✅ | a veces |
| Cero instalación, cero dependencias, gratis para siempre | ✅ | ❌ |

---

## Funciones

- **💬 Chat** — habla con cualquier especialista con respuestas en streaming.
- **⛓️ Pipeline de agentes** — encadena 2–6 especialistas; cada uno construye sobre la salida anterior. Ejecuta un lanzamiento completo — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — con un solo toque.
- **✨ Auto-creación de equipo** — describe un objetivo; un orquestador lee todo el catálogo y ensambla los agentes correctos en el orden correcto.
- **⚔️ Debate de agentes** — dos especialistas discuten en rondas (el Proponente construye, el Crítico desafía) hasta llegar a una respuesta puesta a prueba.
- **📊 Benchmarker** — ejecuta el mismo prompt en muchos agentes; un modelo juez imparcial puntúa cada respuesta en relevancia, profundidad y corrección.
- **▶️ Ejecutor de código** — cada bloque de código obtiene un botón de Ejecutar, gestionado vía la API gratuita de Piston (70+ lenguajes).
- **🌍 Landing page en 10 idiomas** — la [landing page](https://mmuzammul.github.io/AgiForge/landing.html) cambia al instante entre inglés, 中文, español, हिन्दी, العربية, portugués, francés, ruso, 日本語 y alemán — todo del lado del cliente, sin recargar la página, sin servicios de traducción de terceros.
- **🌐 Búsqueda web** — búsqueda en tiempo real opcional vía la API de Brave Search (con tu propia clave).
- **🎤 Entrada de voz** — Web Speech API, integrada en Chrome y Safari.
- **📎 Adjuntar archivos** — lee código, CSVs y documentos como contexto, totalmente del lado del cliente.
- **🧠 Memoria** — guarda, revisa y elimina resultados en `localStorage`.
- **⬇️ Exportar** — descarga cualquier chat, pipeline, debate o benchmark como archivo `.md`.
- **🔄 Manejo inteligente de límites de uso** — en el nivel gratuito de Groq, rota entre un pool de 4 modelos y espera los `429` para que los pipelines terminen sin intervención.

Consulta [`docs/FEATURES.md`](../FEATURES.md) para el detalle completo.

---

## El catálogo — 16 divisiones, 247 especialistas de IA

AgentForge incluye **247 agentes de IA listos para usar** — prompts de sistema estructurados para ingeniería, marketing, ventas, finanzas, seguridad, diseño y otras 11 categorías profesionales. Cada nombre de agente a continuación enlaza directamente a su prompt de sistema completo en este repositorio.

### ⭐ Especializados — 45 agentes

| Agente | Especialidad |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 más — [ver los 45 agentes de Especializados →](../AGENTS.md#specialized-45)*

### 🏗️ Ingeniería — 43 agentes

| Agente | Especialidad |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 más — [ver los 43 agentes de Ingeniería →](../AGENTS.md#engineering-43)*

### 📣 Marketing — 32 agentes

| Agente | Especialidad |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 más — [ver los 32 agentes de Marketing →](../AGENTS.md#marketing-32)*

### 🗺️ GIS y espacial — 10 agentes

| Agente | Especialidad |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 más — [ver los 10 agentes de GIS y espacial →](../AGENTS.md#gis-spatial-10)*

### 💰 Finanzas — 10 agentes

| Agente | Especialidad |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 más — [ver los 10 agentes de Finanzas →](../AGENTS.md#finance-10)*

### 🎓 Académico — 13 agentes

| Agente | Especialidad |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 más — [ver los 13 agentes de Académico →](../AGENTS.md#academic-13)*

### 🛟 Soporte — 10 agentes

| Agente | Especialidad |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 más — [ver los 10 agentes de Soporte →](../AGENTS.md#support-10)*

### 🎮 Desarrollo de videojuegos — 5 agentes

| Agente | Especialidad |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 Seguridad — 12 agentes

| Agente | Especialidad |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 más — [ver los 12 agentes de Seguridad →](../AGENTS.md#security-12)*

### 🤝 Ventas — 12 agentes

| Agente | Especialidad |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 más — [ver los 12 agentes de Ventas →](../AGENTS.md#sales-12)*

### 🧪 Testing — 10 agentes

| Agente | Especialidad |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 más — [ver los 10 agentes de Testing →](../AGENTS.md#testing-10)*

### 🎨 Diseño — 16 agentes

| Agente | Especialidad |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 más — [ver los 16 agentes de Diseño →](../AGENTS.md#design-16)*

### 📈 Medios de pago — 7 agentes

| Agente | Especialidad |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 más — [ver los 7 agentes de Medios de pago →](../AGENTS.md#paid-media-7)*

### 📋 Gestión de proyectos — 10 agentes

| Agente | Especialidad |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 más — [ver los 10 agentes de Gestión de proyectos →](../AGENTS.md#project-management-10)*

### 📦 Producto — 9 agentes

| Agente | Especialidad |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 más — [ver los 9 agentes de Producto →](../AGENTS.md#product-9)*

### 🥽 Computación espacial — 3 agentes

| Agente | Especialidad |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[Explora el Catálogo completo de Agentes →](../AGENTS.md)** — los 247 especialistas, organizados por división, con enlace directo a su prompt de sistema.

---

## Primeros pasos (móvil, ~2 min)

1. Abre **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** en tu teléfono.
2. Consigue una **clave de API gratuita de Groq** en [console.groq.com](https://console.groq.com) (login con Google, sin tarjeta).
3. Pégala en **Settings → Connect**.
4. Elige un especialista y empieza a construir. Toca **Add to Home Screen** para una experiencia tipo app.

> Tu clave se guarda únicamente en el `localStorage` de tu navegador — nunca llega a un servidor.

---

## Proveedores de IA

| Proveedor | Coste | Configuración |
|---|---|---|
| **Groq** | Nivel gratuito | Pega una clave de API en la app |
| **Ollama** | Gratis (local) | Ejecútalo en una máquina de la misma red |
| **Demo** | Gratis | Sin IA — solo vista previa de la interfaz |

---

## Arquitectura

AgentForge tiene **cero dependencias en tiempo de ejecución** y **sin paso de compilación**. Todo el cliente es un solo archivo, `index.html`, que contiene metadatos ligeros (nombre, división, emoji, color, descripción de una línea) para los 247 agentes. El prompt de sistema completo de cada agente se obtiene a demanda desde este repositorio:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Esto mantiene la app pequeña y rápida de cargar, mientras los prompts permanecen versionados y editables como Markdown plano. Todos los detalles en [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md).

---

## Auto-alojamiento

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# abre index.html directamente, o sirve la carpeta:
python3 -m http.server 8080   # luego visita http://localhost:8080
```

Sin npm, sin framework, sin toolchain. Despliega la carpeta en cualquier hosting estático (GitHub Pages, Netlify, Vercel). Para GitHub Pages, habilita **Settings → Pages → Source: GitHub Actions** — el workflow incluido despliega automáticamente en cada push a `main`. Ver [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md).

---

## Estructura del repositorio

```
AgiForge/
├── index.html              # toda la app — autocontenida, sin compilación
├── agents/                 # 247 prompts de especialistas, por división
│   ├── engineering/        # …36 agentes
│   ├── specialized/        # …45 agentes
│   └── … (16 divisiones)
├── docs/                   # arquitectura, funciones, despliegue, catálogo
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # logo y recursos de marca
├── .github/                # workflow de CI + plantillas de issues/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Contribuir

Se aceptan nuevos especialistas y mejoras — añadir un agente es solo crear un nuevo archivo Markdown. Ver [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## Privacidad

Sin analítica, sin rastreo, sin backend. Las únicas llamadas de red son al proveedor de IA que elijas (Groq/Ollama) y, opcionalmente, a Brave (búsqueda) y Piston (ejecución de código). Todo lo demás se ejecuta en tu navegador.

## Licencia

Gratis para uso personal, educativo y no comercial — modifícalo y auto-hospédalo libremente. El uso comercial (venta, sublicencia, alojamiento como producto/servicio de pago, o cualquier uso que genere ingresos) requiere permiso por escrito del autor. Consulta [LICENSE](../../LICENSE) para los términos completos. © 2026 mmuzammul, todos los derechos reservados salvo lo concedido allí.
