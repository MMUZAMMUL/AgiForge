<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 AI विशेषज्ञ · एजेंट पाइपलाइन · स्वचालित टीम निर्माण · आपके ब्राउज़र में चलता है · मुफ़्त**

एक मोबाइल-फर्स्ट एजेंटिक AI प्लेटफ़ॉर्म जो पूरी तरह ब्राउज़र में चलता है — कोई सर्वर नहीं, कोई इंस्टॉल नहीं, कोई बिल्ड स्टेप नहीं, कोई लागत नहीं। यह मुफ़्त [Groq](https://console.groq.com) क्लाउड इंफरेंस या लोकल [Ollama](https://ollama.com) मॉडल से संचालित है।

[**🌐 लाइव ऐप खोलें →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#सेल्फ़-होस्ट)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#आर्किटेक्चर)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · [Español](README.es.md) · **हिन्दी** · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> यह एक समुदाय द्वारा बनाया गया अनुवाद है। किसी भी अंतर की स्थिति में, [अंग्रेज़ी README](../../README.md) ही आधिकारिक संस्करण है।

## AgentForge क्यों

| | AgentForge | सामान्य AI चैट |
|---|:---:|:---:|
| 247 डोमेन विशेषज्ञ, हर एक गहन एक्सपर्ट प्रॉम्प्ट | ✅ | ❌ |
| आपके लक्ष्य के लिए सर्वश्रेष्ठ **टीम** स्वतः बनाता है | ✅ | ❌ |
| मल्टी-एजेंट **पाइपलाइन** (चेन्ड रीज़निंग) | ✅ | ❌ |
| बेहतर उत्तर के लिए एजेंट-बनाम-एजेंट **डिबेट** | ✅ | ❌ |
| LLM-जज्ड **बेंचमार्कर** | ✅ | ❌ |
| जो कोड लिखता है उसे **चलाता** भी है (70+ भाषाएँ) | ✅ | ❌ |
| वॉइस इनपुट · फ़ाइल अटैचमेंट · मेमोरी · एक्सपोर्ट | ✅ | कभी-कभी |
| ज़ीरो इंस्टॉल, ज़ीरो डिपेंडेंसी, हमेशा के लिए मुफ़्त | ✅ | ❌ |

---

## विशेषताएँ

- **💬 चैट** — स्ट्रीमिंग रिस्पॉन्स के साथ किसी भी विशेषज्ञ से बात करें।
- **⛓️ एजेंट पाइपलाइन** — 2–6 विशेषज्ञों को चेन करें; हर एक पिछले आउटपुट पर आधारित होता है। एक टैप में पूरा लॉन्च चलाएँ — प्रोडक्ट मैनेजर → फ्रंटएंड डेवलपर → ब्रांड गार्डियन → ग्रोथ हैकर।
- **✨ ऑटो-बिल्ड टीम** — अपना लक्ष्य बताएं; एक ऑर्केस्ट्रेटर पूरे रोस्टर को पढ़कर सही एजेंट्स को सही क्रम में जोड़ता है।
- **⚔️ एजेंट डिबेट** — दो विशेषज्ञ राउंड्स में बहस करते हैं (प्रपोज़र बनाता है, क्रिटिक चुनौती देता है) जब तक एक परीक्षित उत्तर सामने न आए।
- **📊 बेंचमार्कर** — एक ही प्रॉम्प्ट को कई एजेंट्स पर चलाएँ; एक निष्पक्ष जज मॉडल प्रासंगिकता, गहराई और सटीकता पर स्कोर देता है।
- **▶️ कोड रनर** — हर कोड ब्लॉक को एक Run बटन मिलता है, जो मुफ़्त Piston API (70+ भाषाएँ) के ज़रिए चलता है।
- **🌍 10-भाषा लैंडिंग पेज** — [लैंडिंग पेज](https://mmuzammul.github.io/AgiForge/landing.html) तुरंत अंग्रेज़ी, 中文, Español, हिन्दी, العربية, Português, Français, Русский, 日本語, और Deutsch के बीच स्विच होता है — पूरी तरह क्लाइंट-साइड, बिना रीलोड, बिना किसी थर्ड-पार्टी ट्रांसलेशन सेवा के।
- **🌐 वेब सर्च** — Brave Search API के ज़रिए वैकल्पिक रीयल-टाइम सर्च (अपनी खुद की key लाएँ)।
- **🎤 वॉइस इनपुट** — Web Speech API, जो Chrome और Safari में पहले से मौजूद है।
- **📎 फ़ाइल अटैचमेंट** — कोड, CSV और डॉक्यूमेंट को कॉन्टेक्स्ट के रूप में पढ़ें, पूरी तरह क्लाइंट-साइड।
- **🧠 मेमोरी** — `localStorage` में आउटपुट सेव, रिव्यू और डिलीट करें।
- **⬇️ एक्सपोर्ट** — किसी भी चैट, पाइपलाइन, डिबेट या बेंचमार्क को `.md` फ़ाइल के रूप में डाउनलोड करें।
- **🔄 स्मार्ट रेट-लिमिट हैंडलिंग** — Groq के फ्री टियर पर 4-मॉडल पूल में रोटेट करता है और `429` का इंतज़ार करता है ताकि पाइपलाइन बिना किसी मैनुअल हस्तक्षेप के पूरी हो जाए।

पूरा विवरण [`docs/FEATURES.md`](../FEATURES.md) में देखें।

---

## रोस्टर — 16 डिवीज़न, 247 AI एजेंट विशेषज्ञ

AgentForge में **247 पहले से बने AI एजेंट** शामिल हैं — इंजीनियरिंग, मार्केटिंग, सेल्स, फ़ाइनेंस, सिक्योरिटी, डिज़ाइन और 11 अन्य प्रोफेशनल कैटेगरी के लिए स्ट्रक्चर्ड सिस्टम प्रॉम्प्ट। नीचे हर एजेंट का नाम इस रिपॉज़िटरी में उसके पूरे सिस्टम प्रॉम्प्ट से सीधे लिंक है।

### ⭐ स्पेशलाइज़्ड — 45 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39 और — [सभी 45 स्पेशलाइज़्ड एजेंट देखें →](../AGENTS.md#specialized-45)*

### 🏗️ इंजीनियरिंग — 43 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37 और — [सभी 43 इंजीनियरिंग एजेंट देखें →](../AGENTS.md#engineering-43)*

### 📣 मार्केटिंग — 32 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26 और — [सभी 32 मार्केटिंग एजेंट देखें →](../AGENTS.md#marketing-32)*

### 🗺️ GIS व स्पेशियल — 10 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4 और — [सभी 10 GIS व स्पेशियल एजेंट देखें →](../AGENTS.md#gis-spatial-10)*

### 💰 फ़ाइनेंस — 10 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4 और — [सभी 10 फ़ाइनेंस एजेंट देखें →](../AGENTS.md#finance-10)*

### 🎓 एकेडमिक — 13 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7 और — [सभी 13 एकेडमिक एजेंट देखें →](../AGENTS.md#academic-13)*

### 🛟 सपोर्ट — 10 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4 और — [सभी 10 सपोर्ट एजेंट देखें →](../AGENTS.md#support-10)*

### 🎮 गेम डेवलपमेंट — 5 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 सिक्योरिटी — 12 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6 और — [सभी 12 सिक्योरिटी एजेंट देखें →](../AGENTS.md#security-12)*

### 🤝 सेल्स — 12 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6 और — [सभी 12 सेल्स एजेंट देखें →](../AGENTS.md#sales-12)*

### 🧪 टेस्टिंग — 10 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4 और — [सभी 10 टेस्टिंग एजेंट देखें →](../AGENTS.md#testing-10)*

### 🎨 डिज़ाइन — 16 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10 और — [सभी 16 डिज़ाइन एजेंट देखें →](../AGENTS.md#design-16)*

### 📈 पेड मीडिया — 7 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1 और — [सभी 7 पेड मीडिया एजेंट देखें →](../AGENTS.md#paid-media-7)*

### 📋 प्रोजेक्ट मैनेजमेंट — 10 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4 और — [सभी 10 प्रोजेक्ट मैनेजमेंट एजेंट देखें →](../AGENTS.md#project-management-10)*

### 📦 प्रोडक्ट — 9 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3 और — [सभी 9 प्रोडक्ट एजेंट देखें →](../AGENTS.md#product-9)*

### 🥽 स्पेशियल कंप्यूटिंग — 3 एजेंट

| एजेंट | विशेषज्ञता |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[पूरा एजेंट कैटलॉग देखें →](../AGENTS.md)** — सभी 247 विशेषज्ञ, डिवीज़न के अनुसार व्यवस्थित, हर एक के सिस्टम प्रॉम्प्ट के डायरेक्ट लिंक के साथ।

---

## शुरुआत करें (मोबाइल पर, ~2 मिनट)

1. अपने फ़ोन पर **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** खोलें।
2. [console.groq.com](https://console.groq.com) से **मुफ़्त Groq API key** लें (Google लॉगिन, कोई कार्ड नहीं चाहिए)।
3. इसे **Settings → Connect** में पेस्ट करें।
4. एक विशेषज्ञ चुनें और बनाना शुरू करें। ऐप जैसे अनुभव के लिए **Add to Home Screen** टैप करें।

> आपकी key केवल आपके ब्राउज़र के `localStorage` में सेव होती है — यह कभी किसी सर्वर तक नहीं पहुँचती।

---

## AI प्रोवाइडर

| प्रोवाइडर | लागत | सेटअप |
|---|---|---|
| **Groq** | फ्री टियर | ऐप में एक API key पेस्ट करें |
| **Ollama** | मुफ़्त (लोकल) | समान नेटवर्क की मशीन पर चलाएँ |
| **Demo** | मुफ़्त | कोई AI नहीं — सिर्फ़ UI का पूर्वावलोकन |

---

## आर्किटेक्चर

AgentForge में **ज़ीरो रनटाइम डिपेंडेंसी** और **कोई बिल्ड स्टेप नहीं** है। पूरा क्लाइंट एक ही फ़ाइल है, `index.html`, जिसमें सभी 247 एजेंट्स के लिए लाइटवेट मेटाडेटा (नाम, डिवीज़न, इमोजी, रंग, एक-लाइन विवरण) होता है। हर एजेंट का पूरा सिस्टम प्रॉम्प्ट इस रिपॉज़िटरी से डिमांड पर फ़ेच किया जाता है:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

इससे ऐप छोटा और तेज़ी से लोड होने वाला बना रहता है, जबकि प्रॉम्प्ट्स वर्शन-कंट्रोल्ड और प्लेन Markdown के रूप में एडिटेबल रहते हैं। पूरी जानकारी [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md) में।

---

## सेल्फ़-होस्ट

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# index.html सीधे खोलें, या फ़ोल्डर को सर्व करें:
python3 -m http.server 8080   # फिर http://localhost:8080 विज़िट करें
```

कोई npm नहीं, कोई फ्रेमवर्क नहीं, कोई टूलचेन नहीं। फ़ोल्डर को किसी भी स्टैटिक होस्ट (GitHub Pages, Netlify, Vercel) पर डिप्लॉय करें। GitHub Pages के लिए, **Settings → Pages → Source: GitHub Actions** इनेबल करें — शामिल वर्कफ़्लो `main` पर हर पुश पर ऑटो-डिप्लॉय करता है। देखें [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md)।

---

## रिपॉज़िटरी संरचना

```
AgiForge/
├── index.html              # पूरी ऐप — सेल्फ़-कंटेन्ड, बिना बिल्ड
├── agents/                 # 247 विशेषज्ञ सिस्टम प्रॉम्प्ट, डिवीज़न के अनुसार
│   ├── engineering/        # …36 एजेंट
│   ├── specialized/        # …45 एजेंट
│   └── … (16 डिवीज़न)
├── docs/                   # आर्किटेक्चर, फीचर्स, डिप्लॉयमेंट, कैटलॉग
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # लोगो और ब्रांड एसेट्स
├── .github/                # CI वर्कफ़्लो + issue/PR टेम्प्लेट
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## योगदान

नए विशेषज्ञ और सुधारों का स्वागत है — एक एजेंट जोड़ना बस एक नई Markdown फ़ाइल बनाना है। देखें [`CONTRIBUTING.md`](../../CONTRIBUTING.md)।

## प्राइवेसी

कोई एनालिटिक्स नहीं, कोई ट्रैकिंग नहीं, कोई बैकएंड नहीं। सिर्फ़ आपके चुने हुए AI प्रोवाइडर (Groq/Ollama) और वैकल्पिक रूप से Brave (सर्च) व Piston (कोड एग्ज़िक्यूशन) को नेटवर्क कॉल्स जाती हैं। बाकी सब कुछ आपके ब्राउज़र में ही चलता है।

## लाइसेंस

व्यक्तिगत, शैक्षणिक और गैर-व्यावसायिक उपयोग के लिए मुफ़्त — जितना चाहें मॉडिफ़ाई करें और सेल्फ़-होस्ट करें। व्यावसायिक उपयोग (बेचना, सबलाइसेंस देना, पेड प्रोडक्ट/सेवा के रूप में होस्ट करना, या कोई भी रेवेन्यू-जनरेटिंग उपयोग) के लिए लेखक की लिखित अनुमति आवश्यक है। पूरे नियम [LICENSE](../../LICENSE) में देखें। © 2026 mmuzammul, वहाँ दी गई अनुमतियों के अलावा सभी अधिकार सुरक्षित।
