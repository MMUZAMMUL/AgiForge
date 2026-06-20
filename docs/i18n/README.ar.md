<div align="center" dir="rtl">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 خبيرًا بالذكاء الاصطناعي · خطوط أنابيب الوكلاء · فرق تُبنى تلقائيًا · يعمل في متصفحك · مجاني**

منصّة ذكاء اصطناعي وكيلية (agentic) مصممة أولًا للموبايل، تعمل بالكامل داخل المتصفح — بلا خادم، بلا تثبيت، بلا خطوة بناء، وبلا تكلفة. تعمل بالاستدلال السحابي المجاني من [Groq](https://console.groq.com) أو بنموذج محلي عبر [Ollama](https://ollama.com).

[**🌐 افتح التطبيق المباشر ←**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#الاستضافة-الذاتية)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#البنية)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · **العربية** · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> هذه ترجمة يقوم المجتمع بصيانتها. عند وجود أي اختلاف، يُعتمد [README بالإنجليزية](../../README.md) كالمرجع الرسمي.

## لماذا AgentForge

| | AgentForge | محادثة ذكاء اصطناعي عادية |
|---|:---:|:---:|
| 247 خبيرًا في مجالات مختلفة، كل واحد منهم بِبرومبت خبير متعمّق | ✅ | ❌ |
| يبني تلقائيًا **الفريق** الأمثل لهدفك | ✅ | ❌ |
| **خطوط أنابيب** متعددة الوكلاء (استدلال متسلسل) | ✅ | ❌ |
| **نقاش** بين وكيل ووكيل لتحسين الإجابات | ✅ | ❌ |
| **أداة قياس** يُحكَّم عليها بنموذج لغوي | ✅ | ❌ |
| **ينفّذ** الكود الذي يكتبه (أكثر من 70 لغة) | ✅ | ❌ |
| إدخال صوتي · إرفاق ملفات · ذاكرة · تصدير | ✅ | أحيانًا |
| بلا تثبيت، بلا اعتمادات، مجاني للأبد | ✅ | ❌ |

---

## الميزات

- **💬 محادثة** — تحدّث مع أي خبير مع استجابات بثّية (streaming).
- **⛓️ خط أنابيب الوكلاء** — سلسل 2 إلى 6 خبراء؛ كل واحد يبني على مُخرَج السابق. شغّل عملية إطلاق كاملة — مدير منتج ← مطوّر واجهات ← حارس العلامة التجارية ← خبير نمو — بضغطة واحدة.
- **✨ بناء الفريق تلقائيًا** — صف هدفك؛ يقرأ المنسّق القائمة الكاملة ويجمع الوكلاء المناسبين بالترتيب الصحيح.
- **⚔️ نقاش الوكلاء** — يتجادل خبيران على جولات (المقترح يبني، والناقد يتحدّى) حتى تظهر إجابة مُختبرة بدقّة.
- **📊 أداة القياس (Benchmarker)** — شغّل البرومبت نفسه على عدة وكلاء؛ يقيّم نموذج حكم محايد كل إجابة من حيث الصلة والعمق والدقة.
- **▶️ مُشغّل الكود** — كل كتلة كود تحصل على زر تشغيل، يُنفَّذ عبر واجهة Piston المجانية (أكثر من 70 لغة).
- **🌍 صفحة هبوط بـ 10 لغات** — تتنقّل [صفحة الهبوط](https://mmuzammul.github.io/AgiForge/landing.html) فورًا بين الإنجليزية والصينية والإسبانية والهندية والعربية والبرتغالية والفرنسية والروسية واليابانية والألمانية — بالكامل من جانب المتصفح، بدون إعادة تحميل، وبدون أي خدمة ترجمة خارجية.
- **🌐 بحث على الويب** — بحث اختياري في الوقت الفعلي عبر واجهة Brave Search (تحتاج مفتاحك الخاص).
- **🎤 إدخال صوتي** — عبر Web Speech API، متوفّرة مدمجة في Chrome وSafari.
- **📎 إرفاق ملفات** — اقرأ الكود وملفات CSV والمستندات كسياق، بالكامل من جانب المتصفح.
- **🧠 الذاكرة** — احفظ، راجع، وامحُ المخرجات في `localStorage`.
- **⬇️ تصدير** — نزّل أي محادثة أو خط أنابيب أو نقاش أو نتائج قياس كملف `.md`.
- **🔄 معالجة ذكية لحدود الاستخدام** — في الفئة المجانية من Groq، يتم التدوير بين تجمّع من 4 نماذج وانتظار أخطاء `429` حتى تكتمل خطوط الأنابيب دون تدخّل يدوي.

راجع [`docs/FEATURES.md`](../FEATURES.md) للتفاصيل الكاملة.

---

## القائمة — 16 قسمًا، 247 خبير ذكاء اصطناعي

يضم AgentForge **247 وكيل ذكاء اصطناعي جاهزًا** — برومبتات نظام منظّمة للهندسة والتسويق والمبيعات والمالية والأمان والتصميم و11 فئة مهنية أخرى. كل اسم وكيل أدناه يرتبط مباشرة ببرومبت نظامه الكامل في هذا المستودع.

### ⭐ متخصص — 45 وكيل

| الوكيل | التخصص |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 أخرى — [عرض جميع 45 وكيل متخصص →](../AGENTS.md#specialized-45)*

### 🏗️ الهندسة — 43 وكيل

| الوكيل | التخصص |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 أخرى — [عرض جميع 43 وكيل الهندسة →](../AGENTS.md#engineering-43)*

### 📣 التسويق — 32 وكيل

| الوكيل | التخصص |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 أخرى — [عرض جميع 32 وكيل التسويق →](../AGENTS.md#marketing-32)*

### 🗺️ GIS والمكاني — 10 وكيل

| الوكيل | التخصص |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 أخرى — [عرض جميع 10 وكيل GIS والمكاني →](../AGENTS.md#gis-spatial-10)*

### 💰 المالية — 10 وكيل

| الوكيل | التخصص |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 أخرى — [عرض جميع 10 وكيل المالية →](../AGENTS.md#finance-10)*

### 🎓 الأكاديمي — 13 وكيل

| الوكيل | التخصص |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 أخرى — [عرض جميع 13 وكيل الأكاديمي →](../AGENTS.md#academic-13)*

### 🛟 الدعم — 10 وكيل

| الوكيل | التخصص |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 أخرى — [عرض جميع 10 وكيل الدعم →](../AGENTS.md#support-10)*

### 🎮 تطوير الألعاب — 5 وكيل

| الوكيل | التخصص |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 الأمان — 12 وكيل

| الوكيل | التخصص |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 أخرى — [عرض جميع 12 وكيل الأمان →](../AGENTS.md#security-12)*

### 🤝 المبيعات — 12 وكيل

| الوكيل | التخصص |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 أخرى — [عرض جميع 12 وكيل المبيعات →](../AGENTS.md#sales-12)*

### 🧪 الاختبار — 10 وكيل

| الوكيل | التخصص |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 أخرى — [عرض جميع 10 وكيل الاختبار →](../AGENTS.md#testing-10)*

### 🎨 التصميم — 16 وكيل

| الوكيل | التخصص |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 أخرى — [عرض جميع 16 وكيل التصميم →](../AGENTS.md#design-16)*

### 📈 الوسائط المدفوعة — 7 وكيل

| الوكيل | التخصص |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 أخرى — [عرض جميع 7 وكيل الوسائط المدفوعة →](../AGENTS.md#paid-media-7)*

### 📋 إدارة المشاريع — 10 وكيل

| الوكيل | التخصص |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 أخرى — [عرض جميع 10 وكيل إدارة المشاريع →](../AGENTS.md#project-management-10)*

### 📦 المنتج — 9 وكيل

| الوكيل | التخصص |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 أخرى — [عرض جميع 9 وكيل المنتج →](../AGENTS.md#product-9)*

### 🥽 الحوسبة المكانية — 3 وكيل

| الوكيل | التخصص |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[تصفّح فهرس الوكلاء الكامل →](../AGENTS.md)** — جميع 247 خبيرًا، منظّمين حسب القسم، مع رابط مباشر لبرومبت النظام الخاص بكل واحد.

---

## البدء (على الموبايل، نحو 2 دقيقة)

1. افتح **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** على هاتفك.
2. احصل على **مفتاح Groq API مجاني** من [console.groq.com](https://console.groq.com) (تسجيل دخول بحساب Google، بلا بطاقة).
3. ألصقه في **Settings → Connect**.
4. اختر خبيرًا وابدأ البناء. اضغط **Add to Home Screen** للحصول على تجربة شبيهة بالتطبيقات.

> يُحفظ مفتاحك فقط في `localStorage` داخل متصفحك — ولا يصل إطلاقًا إلى أي خادم.

---

## مزودو الذكاء الاصطناعي

| المزوّد | التكلفة | الإعداد |
|---|---|---|
| **Groq** | فئة مجانية | ألصق مفتاح API داخل التطبيق |
| **Ollama** | مجاني (محلي) | يعمل على جهاز ضمن نفس الشبكة |
| **Demo** | مجاني | بلا ذكاء اصطناعي — معاينة الواجهة فقط |

---

## البنية

يتميّز AgentForge بـ **صفر اعتماديات تشغيل** و **بلا خطوة بناء**. العميل بالكامل هو ملف واحد، `index.html`، يحمل بيانات وصفية خفيفة (الاسم، القسم، الرمز التعبيري، اللون، وصف من سطر واحد) لجميع 247 وكيلًا. يُجلب برومبت النظام الكامل لكل وكيل عند الطلب من هذا المستودع:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

هذا يحافظ على صِغر حجم التطبيق وسرعة تحميله، بينما تبقى البرومبتات موثّقة بنظام التحكم بالإصدارات وقابلة للتعديل كملفات Markdown عادية. التفاصيل الكاملة في [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md).

---

## الاستضافة الذاتية

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# افتح index.html مباشرة، أو شغّل خادمًا للمجلد:
python3 -m http.server 8080   # ثم زر http://localhost:8080
```

بلا npm، بلا إطار عمل، بلا سلسلة أدوات بناء. نشر المجلد على أي استضافة ثابتة (GitHub Pages، Netlify، Vercel). لـ GitHub Pages، فعّل **Settings → Pages → Source: GitHub Actions** — يقوم سير العمل المُضمَّن بالنشر تلقائيًا عند كل دفعة (push) إلى `main`. انظر [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md).

---

## بنية المستودع

```
AgiForge/
├── index.html              # التطبيق بالكامل — مكتفٍ ذاتيًا، بلا بناء
├── agents/                 # 247 برومبت خبير، مصنّفة حسب القسم
│   ├── engineering/        # …36 وكيلًا
│   ├── specialized/        # …45 وكيلًا
│   └── … (16 قسمًا)
├── docs/                   # البنية، الميزات، النشر، الفهرس
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # الشعار وعناصر العلامة التجارية
├── .github/                # سير عمل CI + قوالب issue/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## المساهمة

نرحّب بالخبراء الجدد والتحسينات — إضافة وكيل هي مجرد ملف Markdown جديد. انظر [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## الخصوصية

بلا تحليلات، بلا تتبّع، بلا خادم خلفي (backend). الاتصالات الشبكية الوحيدة هي إلى مزوّد الذكاء الاصطناعي الذي تختاره (Groq/Ollama)، واختياريًا Brave (البحث) و Piston (تنفيذ الكود). كل شيء آخر يعمل داخل متصفحك.

## الترخيص

مجاني للاستخدام الشخصي والتعليمي وغير التجاري — عدّله واستضفه ذاتيًا كما تشاء. يتطلّب الاستخدام التجاري (البيع، الترخيص الفرعي، الاستضافة كمنتج/خدمة مدفوعة، أو أي استخدام يحقّق عائدًا) إذنًا خطيًا من المؤلف. راجع [LICENSE](../../LICENSE) للشروط الكاملة. © 2026 mmuzammul، جميع الحقوق محفوظة باستثناء ما مُنح هناك.
