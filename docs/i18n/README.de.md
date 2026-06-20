<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 KI-Spezialisten · Agenten-Pipelines · Automatisch erstellte Teams · Läuft im Browser · Kostenlos**

Eine mobile-first agentenbasierte KI-Plattform, die vollständig im Browser läuft — kein Server, keine Installation, kein Build-Schritt, keine Kosten. Angetrieben von der kostenlosen [Groq](https://console.groq.com)-Cloud-Inferenz oder einem lokalen [Ollama](https://ollama.com)-Modell.

[**🌐 Live-App öffnen →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#self-hosting)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#architektur)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · **Deutsch**

</div>

---

> Dies ist eine von der Community gepflegte Übersetzung. Bei Abweichungen gilt das [englische README](../../README.md) als verbindliche Version.

## Warum AgentForge

| | AgentForge | Generischer KI-Chat |
|---|:---:|:---:|
| 247 Fachspezialisten, jeder mit einem tiefgehenden Experten-Prompt | ✅ | ❌ |
| Stellt automatisch das optimale **Team** für dein Ziel zusammen | ✅ | ❌ |
| Multi-Agent-**Pipelines** (verkettetes Denken) | ✅ | ❌ |
| Agent-gegen-Agent-**Debatte** zur Verfeinerung von Antworten | ✅ | ❌ |
| LLM-bewerteter **Benchmarker** | ✅ | ❌ |
| **Führt** den Code aus, den er schreibt (70+ Sprachen) | ✅ | ❌ |
| Spracheingabe · Dateianhang · Speicher · Export | ✅ | manchmal |
| Keine Installation, keine Abhängigkeiten, für immer kostenlos | ✅ | ❌ |

---

## Funktionen

- **💬 Chat** — sprich mit jedem Spezialisten mit Streaming-Antworten.
- **⛓️ Agenten-Pipeline** — verkette 2–6 Spezialisten; jeder baut auf der vorherigen Ausgabe auf. Führe einen vollständigen Launch — Product Manager → Frontend-Entwickler → Brand Guardian → Growth Hacker — mit einem Tap aus.
- **✨ Automatischer Team-Aufbau** — beschreibe ein Ziel; ein Orchestrator liest das gesamte Roster und stellt die passenden Agenten in der richtigen Reihenfolge zusammen.
- **⚔️ Agenten-Debatte** — zwei Spezialisten streiten in Runden (Proponent baut auf, Kritiker fordert heraus), bis eine kampferprobte Antwort entsteht.
- **📊 Benchmarker** — führe denselben Prompt über viele Agenten aus; ein unparteiisches Bewertungsmodell bewertet jede Antwort nach Relevanz, Tiefe und Korrektheit.
- **▶️ Code-Runner** — jeder Codeblock erhält einen Run-Button, ausgeführt über die kostenlose Piston-API (70+ Sprachen).
- **🌍 Landingpage in 10 Sprachen** — die [Landingpage](https://mmuzammul.github.io/AgiForge/landing.html) wechselt sofort zwischen Englisch, 中文, Spanisch, हिन्दी, العربية, Portugiesisch, Französisch, Russisch, 日本語 und Deutsch — vollständig clientseitig, ohne Neuladen, ohne Drittanbieter-Übersetzungsdienst.
- **🌐 Websuche** — optionale Echtzeitsuche über die Brave Search API (eigener Key erforderlich).
- **🎤 Spracheingabe** — Web Speech API, fest integriert in Chrome und Safari.
- **📎 Dateianhang** — lies Code, CSVs und Dokumente als Kontext, vollständig clientseitig.
- **🧠 Speicher** — speichere, überprüfe und lösche Ausgaben in `localStorage`.
- **⬇️ Export** — lade jeden Chat, jede Pipeline, Debatte oder Benchmark als `.md`-Datei herunter.
- **🔄 Intelligente Ratenbegrenzungs-Behandlung** — im kostenlosen Groq-Tier wird über einen Pool von 4 Modellen rotiert und auf `429`-Fehler gewartet, damit Pipelines unbeaufsichtigt durchlaufen.

Die vollständige Übersicht findest du unter [`docs/FEATURES.md`](../FEATURES.md).

---

## Das Roster — 16 Divisionen, 247 KI-Agenten-Spezialisten

AgentForge liefert **247 vorgefertigte KI-Agenten** — strukturierte System-Prompts für Engineering, Marketing, Vertrieb, Finanzen, Sicherheit, Design und 11 weitere Fachkategorien. Jeder Agentenname unten verlinkt direkt zu seinem vollständigen System-Prompt in diesem Repository.

### ⭐ Spezialisiert — 45 Agenten

| Agent | Spezialgebiet |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 weitere — [alle 45 Spezialisiert-Agenten ansehen →](../AGENTS.md#specialized-45)*

### 🏗️ Engineering — 43 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 weitere — [alle 43 Engineering-Agenten ansehen →](../AGENTS.md#engineering-43)*

### 📣 Marketing — 32 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 weitere — [alle 32 Marketing-Agenten ansehen →](../AGENTS.md#marketing-32)*

### 🗺️ GIS & Räumlich — 10 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 weitere — [alle 10 GIS & Räumlich-Agenten ansehen →](../AGENTS.md#gis-spatial-10)*

### 💰 Finanzen — 10 Agenten

| Agent | Spezialgebiet |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 weitere — [alle 10 Finanzen-Agenten ansehen →](../AGENTS.md#finance-10)*

### 🎓 Akademisch — 13 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 weitere — [alle 13 Akademisch-Agenten ansehen →](../AGENTS.md#academic-13)*

### 🛟 Support — 10 Agenten

| Agent | Spezialgebiet |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 weitere — [alle 10 Support-Agenten ansehen →](../AGENTS.md#support-10)*

### 🎮 Spieleentwicklung — 5 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 Sicherheit — 12 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 weitere — [alle 12 Sicherheit-Agenten ansehen →](../AGENTS.md#security-12)*

### 🤝 Vertrieb — 12 Agenten

| Agent | Spezialgebiet |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 weitere — [alle 12 Vertrieb-Agenten ansehen →](../AGENTS.md#sales-12)*

### 🧪 Testing — 10 Agenten

| Agent | Spezialgebiet |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 weitere — [alle 10 Testing-Agenten ansehen →](../AGENTS.md#testing-10)*

### 🎨 Design — 16 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 weitere — [alle 16 Design-Agenten ansehen →](../AGENTS.md#design-16)*

### 📈 Paid Media — 7 Agenten

| Agent | Spezialgebiet |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 weitere — [alle 7 Paid Media-Agenten ansehen →](../AGENTS.md#paid-media-7)*

### 📋 Projektmanagement — 10 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 weitere — [alle 10 Projektmanagement-Agenten ansehen →](../AGENTS.md#project-management-10)*

### 📦 Produkt — 9 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 weitere — [alle 9 Produkt-Agenten ansehen →](../AGENTS.md#product-9)*

### 🥽 Spatial Computing — 3 Agenten

| Agent | Spezialgebiet |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[Den vollständigen Agenten-Katalog durchsuchen →](../AGENTS.md)** — alle 247 Spezialisten, nach Division organisiert, mit direktem Link zu ihrem System-Prompt.

---

## Erste Schritte (mobil, ~2 Min.)

1. Öffne **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** auf deinem Smartphone.
2. Hol dir einen **kostenlosen Groq-API-Key** auf [console.groq.com](https://console.groq.com) (Google-Login, keine Kreditkarte).
3. Füge ihn unter **Settings → Connect** ein.
4. Wähle einen Spezialisten und lege los. Tippe auf **Add to Home Screen** für ein App-ähnliches Erlebnis.

> Dein Key wird ausschließlich im `localStorage` deines Browsers gespeichert — er erreicht niemals einen Server.

---

## KI-Anbieter

| Anbieter | Kosten | Einrichtung |
|---|---|---|
| **Groq** | Kostenloser Tarif | API-Key in der App einfügen |
| **Ollama** | Kostenlos (lokal) | Auf einem Gerät im selben Netzwerk ausführen |
| **Demo** | Kostenlos | Keine KI — nur Vorschau der Oberfläche |

---

## Architektur

AgentForge hat **null Laufzeit-Abhängigkeiten** und **keinen Build-Schritt**. Der gesamte Client ist eine einzige Datei, `index.html`, die leichtgewichtige Metadaten (Name, Division, Emoji, Farbe, Einzeiler-Beschreibung) für alle 247 Agenten enthält. Der vollständige System-Prompt jedes Agenten wird bei Bedarf aus diesem Repository geladen:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Das hält die App klein und schnell ladend, während die Prompts versioniert und als reines Markdown editierbar bleiben. Alle Details in [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md).

---

## Self-Hosting

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# index.html direkt öffnen oder den Ordner servieren:
python3 -m http.server 8080   # dann http://localhost:8080 besuchen
```

Kein npm, kein Framework, keine Toolchain. Deploye den Ordner auf jedem statischen Hoster (GitHub Pages, Netlify, Vercel). Für GitHub Pages aktiviere **Settings → Pages → Source: GitHub Actions** — der enthaltene Workflow deployt automatisch bei jedem Push nach `main`. Siehe [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md).

---

## Repository-Struktur

```
AgiForge/
├── index.html              # die gesamte App — eigenständig, kein Build
├── agents/                 # 247 Spezialisten-System-Prompts, nach Division
│   ├── engineering/        # …36 Agenten
│   ├── specialized/        # …45 Agenten
│   └── … (16 Divisionen)
├── docs/                   # Architektur, Funktionen, Deployment, Katalog
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # Logo und Markenmaterial
├── .github/                # CI-Workflow + Issue/PR-Vorlagen
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Mitwirken

Neue Spezialisten und Verbesserungen sind willkommen — einen Agenten hinzuzufügen bedeutet einfach eine neue Markdown-Datei zu erstellen. Siehe [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## Datenschutz

Keine Analytics, kein Tracking, kein Backend. Die einzigen Netzwerkaufrufe gehen an deinen gewählten KI-Anbieter (Groq/Ollama) und optional an Brave (Suche) und Piston (Codeausführung). Alles andere läuft in deinem Browser.

## Lizenz

Kostenlos für private, schulische und nicht-kommerzielle Nutzung — modifiziere und hoste es selbst, so viel du willst. Kommerzielle Nutzung (Verkauf, Sublizenzierung, Hosting als zahlungspflichtiges Produkt/Dienst oder jede umsatzgenerierende Nutzung) erfordert die schriftliche Genehmigung des Autors. Die vollständigen Bedingungen findest du in [LICENSE](../../LICENSE). © 2026 mmuzammul, alle Rechte vorbehalten, soweit dort nicht anders eingeräumt.
