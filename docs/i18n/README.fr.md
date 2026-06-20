<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 spécialistes IA · Pipelines d'agents · Équipes auto-constituées · Fonctionne dans votre navigateur · Gratuit**

Une plateforme d'IA agentique mobile-first qui s'exécute entièrement dans le navigateur — sans serveur, sans installation, sans étape de build, sans coût. Alimentée par l'inférence cloud gratuite de [Groq](https://console.groq.com) ou par un modèle local via [Ollama](https://ollama.com).

[**🌐 Ouvrir l'application en direct →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#auto-hébergement)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#architecture)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · **Français** · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> Ceci est une traduction maintenue par la communauté. En cas de divergence, le [README en anglais](../../README.md) fait foi.

## Pourquoi AgentForge

| | AgentForge | Chat IA générique |
|---|:---:|:---:|
| 247 spécialistes de domaine, chacun avec un prompt expert approfondi | ✅ | ❌ |
| Constitue automatiquement la **meilleure équipe** pour votre objectif | ✅ | ❌ |
| **Pipelines** multi-agents (raisonnement enchaîné) | ✅ | ❌ |
| **Débat** agent contre agent pour affiner les réponses | ✅ | ❌ |
| **Benchmarker** évalué par un LLM juge | ✅ | ❌ |
| **Exécute** le code qu'il écrit (70+ langages) | ✅ | ❌ |
| Saisie vocale · pièces jointes · mémoire · export | ✅ | parfois |
| Zéro installation, zéro dépendance, gratuit pour toujours | ✅ | ❌ |

---

## Fonctionnalités

- **💬 Chat** — discutez avec n'importe quel spécialiste, réponses en streaming.
- **⛓️ Pipeline d'agents** — enchaînez 2 à 6 spécialistes ; chacun s'appuie sur le résultat précédent. Lancez un cycle complet — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — en un seul geste.
- **✨ Constitution automatique d'équipe** — décrivez un objectif ; un orchestrateur lit l'ensemble du catalogue et assemble les bons agents dans le bon ordre.
- **⚔️ Débat d'agents** — deux spécialistes débattent par tours (le Proposant construit, le Critique challenge) jusqu'à obtenir une réponse éprouvée.
- **📊 Benchmarker** — exécutez le même prompt sur plusieurs agents ; un modèle juge impartial note chaque réponse sur la pertinence, la profondeur et la justesse.
- **▶️ Exécuteur de code** — chaque bloc de code reçoit un bouton Exécuter, via l'API gratuite Piston (70+ langages).
- **🌍 Landing page en 10 langues** — la [landing page](https://mmuzammul.github.io/AgiForge/landing.html) bascule instantanément entre l'anglais, le 中文, l'espagnol, le हिन्दी, l'العربية, le portugais, le français, le russe, le 日本語 et l'allemand — entièrement côté client, sans rechargement, sans service de traduction tiers.
- **🌐 Recherche web** — recherche en temps réel optionnelle via l'API Brave Search (avec votre propre clé).
- **🎤 Saisie vocale** — Web Speech API, intégrée à Chrome et Safari.
- **📎 Pièce jointe** — lisez du code, des CSV et des documents comme contexte, entièrement côté client.
- **🧠 Mémoire** — enregistrez, consultez et supprimez des résultats dans `localStorage`.
- **⬇️ Export** — téléchargez n'importe quel chat, pipeline, débat ou benchmark en fichier `.md`.
- **🔄 Gestion intelligente des limites de débit** — sur le niveau gratuit de Groq, bascule entre un pool de 4 modèles et attend les `429` pour que les pipelines se terminent sans intervention.

Voir [`docs/FEATURES.md`](../FEATURES.md) pour le détail complet.

---

## Le catalogue — 16 divisions, 247 spécialistes IA

AgentForge embarque **247 agents IA prêts à l'emploi** — des prompts système structurés pour l'ingénierie, le marketing, la vente, la finance, la sécurité, le design et 11 autres catégories professionnelles. Chaque nom d'agent ci-dessous renvoie directement vers son prompt système complet dans ce dépôt.

### ⭐ Spécialisés — 45 agents

| Agent | Spécialité |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 de plus — [voir les 45 agents Spécialisés →](../AGENTS.md#specialized-45)*

### 🏗️ Ingénierie — 43 agents

| Agent | Spécialité |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 de plus — [voir les 43 agents Ingénierie →](../AGENTS.md#engineering-43)*

### 📣 Marketing — 32 agents

| Agent | Spécialité |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 de plus — [voir les 32 agents Marketing →](../AGENTS.md#marketing-32)*

### 🗺️ GIS & Spatial — 10 agents

| Agent | Spécialité |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 de plus — [voir les 10 agents GIS & Spatial →](../AGENTS.md#gis-spatial-10)*

### 💰 Finance — 10 agents

| Agent | Spécialité |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 de plus — [voir les 10 agents Finance →](../AGENTS.md#finance-10)*

### 🎓 Académique — 13 agents

| Agent | Spécialité |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 de plus — [voir les 13 agents Académique →](../AGENTS.md#academic-13)*

### 🛟 Support — 10 agents

| Agent | Spécialité |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 de plus — [voir les 10 agents Support →](../AGENTS.md#support-10)*

### 🎮 Développement de jeux — 5 agents

| Agent | Spécialité |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 Sécurité — 12 agents

| Agent | Spécialité |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 de plus — [voir les 12 agents Sécurité →](../AGENTS.md#security-12)*

### 🤝 Ventes — 12 agents

| Agent | Spécialité |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 de plus — [voir les 12 agents Ventes →](../AGENTS.md#sales-12)*

### 🧪 Tests — 10 agents

| Agent | Spécialité |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 de plus — [voir les 10 agents Tests →](../AGENTS.md#testing-10)*

### 🎨 Design — 16 agents

| Agent | Spécialité |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 de plus — [voir les 16 agents Design →](../AGENTS.md#design-16)*

### 📈 Médias payants — 7 agents

| Agent | Spécialité |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 de plus — [voir les 7 agents Médias payants →](../AGENTS.md#paid-media-7)*

### 📋 Gestion de projet — 10 agents

| Agent | Spécialité |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 de plus — [voir les 10 agents Gestion de projet →](../AGENTS.md#project-management-10)*

### 📦 Produit — 9 agents

| Agent | Spécialité |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 de plus — [voir les 9 agents Produit →](../AGENTS.md#product-9)*

### 🥽 Informatique spatiale — 3 agents

| Agent | Spécialité |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[Parcourir le Catalogue complet des Agents →](../AGENTS.md)** — les 247 spécialistes, classés par division, avec un lien direct vers leur prompt système.

---

## Démarrage rapide (mobile, ~2 min)

1. Ouvrez **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** sur votre téléphone.
2. Récupérez une **clé API Groq gratuite** sur [console.groq.com](https://console.groq.com) (connexion Google, sans carte).
3. Collez-la dans **Settings → Connect**.
4. Choisissez un spécialiste et commencez à construire. Appuyez sur **Add to Home Screen** pour une expérience type application.

> Votre clé est stockée uniquement dans le `localStorage` de votre navigateur — elle n'atteint jamais un serveur.

---

## Fournisseurs d'IA

| Fournisseur | Coût | Configuration |
|---|---|---|
| **Groq** | Niveau gratuit | Collez une clé API dans l'application |
| **Ollama** | Gratuit (local) | Exécutez sur une machine du même réseau |
| **Demo** | Gratuit | Pas d'IA — aperçu de l'interface uniquement |

---

## Architecture

AgentForge a **zéro dépendance d'exécution** et **aucune étape de build**. Le client entier est un seul fichier, `index.html`, qui contient des métadonnées légères (nom, division, emoji, couleur, description en une ligne) pour les 247 agents. Le prompt système complet de chaque agent est récupéré à la demande depuis ce dépôt :

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Cela garde l'application légère et rapide à charger, tandis que les prompts restent versionnés et modifiables en Markdown brut. Tous les détails dans [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md).

---

## Auto-hébergement

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# ouvrez index.html directement, ou servez le dossier :
python3 -m http.server 8080   # puis visitez http://localhost:8080
```

Pas de npm, pas de framework, pas de toolchain. Déployez le dossier sur n'importe quel hébergement statique (GitHub Pages, Netlify, Vercel). Pour GitHub Pages, activez **Settings → Pages → Source: GitHub Actions** — le workflow inclus se déploie automatiquement à chaque push sur `main`. Voir [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md).

---

## Structure du dépôt

```
AgiForge/
├── index.html              # l'application entière — autonome, sans build
├── agents/                 # 247 prompts de spécialistes, par division
│   ├── engineering/        # …36 agents
│   ├── specialized/        # …45 agents
│   └── … (16 divisions)
├── docs/                   # architecture, fonctionnalités, déploiement, catalogue
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # logo et éléments de marque
├── .github/                # workflow CI + templates issue/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Contribuer

Les nouveaux spécialistes et améliorations sont les bienvenus — ajouter un agent revient simplement à créer un nouveau fichier Markdown. Voir [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## Confidentialité

Pas d'analytics, pas de tracking, pas de backend. Les seuls appels réseau sont vers le fournisseur d'IA choisi (Groq/Ollama) et, optionnellement, Brave (recherche) et Piston (exécution de code). Tout le reste s'exécute dans votre navigateur.

## Licence

Gratuit pour un usage personnel, éducatif et non commercial — modifiez-le et auto-hébergez-le librement. Un usage commercial (vente, sous-licence, hébergement en tant que produit/service payant, ou tout usage générant des revenus) nécessite l'autorisation écrite de l'auteur. Voir [LICENSE](../../LICENSE) pour les conditions complètes. © 2026 mmuzammul, tous droits réservés sauf ceux accordés ici.
