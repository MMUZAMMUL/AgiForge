<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247人のAIスペシャリスト · エージェントパイプライン · 自動チーム編成 · ブラウザで動作 · 無料**

完全にブラウザ上で動作するモバイルファーストのエージェント型AIプラットフォーム — サーバー不要、インストール不要、ビルド不要、コスト不要。無料の [Groq](https://console.groq.com) クラウド推論、またはローカルの [Ollama](https://ollama.com) モデルで動作します。

[**🌐 ライブアプリを開く →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#セルフホスト)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#アーキテクチャ)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](../../LICENSE)

🌐 [English](../../README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · **日本語** · [Deutsch](README.de.md)

</div>

---

> これはコミュニティによって保守されている翻訳です。内容に相違がある場合は [英語版README](../../README.md) が正式版となります。

## なぜAgentForgeなのか

| | AgentForge | 一般的なAIチャット |
|---|:---:|:---:|
| 247人の専門分野エキスパート、それぞれ深いエキスパートプロンプトを持つ | ✅ | ❌ |
| 目標に最適な**チーム**を自動編成 | ✅ | ❌ |
| マルチエージェント**パイプライン**（連鎖的な推論） | ✅ | ❌ |
| 回答を洗練させるエージェント同士の**ディベート** | ✅ | ❌ |
| LLMが評価する**ベンチマーカー** | ✅ | ❌ |
| 自身が書いたコードを**実行**（70以上の言語） | ✅ | ❌ |
| 音声入力 · ファイル添付 · メモリ · エクスポート | ✅ | 場合による |
| インストール不要、依存関係ゼロ、永久無料 | ✅ | ❌ |

---

## 機能

- **💬 チャット** — どのスペシャリストともストリーミング応答で対話。
- **⛓️ エージェントパイプライン** — 2〜6人のスペシャリストを連鎖させ、各ステップが前の出力を引き継ぐ。プロダクトマネージャー → フロントエンド開発者 → ブランドガーディアン → グロースハッカーという完全なローンチを1タップで実行。
- **✨ 自動チーム編成** — 目標を記述すると、オーケストレーターが全名簿を読み、適切なエージェントを正しい順序で編成。
- **⚔️ エージェントディベート** — 2人のスペシャリストがラウンド形式で議論（提案者が構築、批評者が異議を唱える）し、検証済みの回答が生まれるまで続く。
- **📊 ベンチマーカー** — 同じプロンプトを多数のエージェントで実行し、公正な審査モデルが関連性・深さ・正確性を採点。
- **▶️ コードランナー** — すべてのコードブロックに実行ボタンが付き、無料のPiston API（70以上の言語）で実行。
- **🌍 10言語対応のランディングページ** — [ランディングページ](https://mmuzammul.github.io/AgiForge/landing.html) は英語、中文、スペイン語、हिन्दी、العربية、ポルトガル語、フランス語、ロシア語、日本語、ドイツ語を即座に切り替え — クライアントサイドのみ、リロード不要、サードパーティの翻訳サービスも不要。
- **🌐 ウェブ検索** — Brave Search APIによるオプションのリアルタイム検索（自分のキーが必要）。
- **🎤 音声入力** — Web Speech API、ChromeとSafariに標準搭載。
- **📎 ファイル添付** — コード、CSV、文書をコンテキストとして読み込み、完全にクライアントサイドで処理。
- **🧠 メモリ** — `localStorage` に出力結果を保存・確認・削除。
- **⬇️ エクスポート** — チャット、パイプライン、ディベート、ベンチマークの結果を `.md` ファイルとしてダウンロード。
- **🔄 スマートなレート制限処理** — Groqの無料プランでは4モデルのプールをローテーションし、`429` エラーを待機することで、パイプラインが無人で完了。

詳細な内訳は [`docs/FEATURES.md`](../FEATURES.md) を参照してください。

---

## ロースター — 16部門、247人のAIエージェント専門家

AgentForgeには**247体のビルド済みAIエージェント**が搭載されています — エンジニアリング、マーケティング、セールス、ファイナンス、セキュリティ、デザインなど16の専門分野向けに構造化されたシステムプロンプトです。以下の各エージェント名は、このリポジトリ内の完全なシステムプロンプトに直接リンクしています。

### ⭐ スペシャライズド — 45 体

| エージェント | 専門分野 |
|---|---|
| 💸 [Accounts Payable Agent](../../agents/specialized/accounts-payable-agent.md) | Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring… |
| 🎛️ [Agents Orchestrator](../../agents/specialized/agents-orchestrator.md) | Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process. |
| ⚙️ [Automation Governance Architect](../../agents/specialized/automation-governance-architect.md) | Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability… |
| ♟️ [Business Strategist](../../agents/specialized/business-strategist.md) | Senior management consulting specialist for competitive analysis, market entry strategy, business model design,… |
| 🔄 [Change Management Consultant](../../agents/specialized/change-management-consultant.md) | Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through… |
| 💼 [Chief Financial Officer](../../agents/specialized/chief-financial-officer.md) | Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A… |

*+39件 — [スペシャライズドの全45体を見る →](../AGENTS.md#specialized-45)*

### 🏗️ エンジニアリング — 43 体

| エージェント | 専門分野 |
|---|---|
| 🧬 [AI Data Remediation Engineer](../../agents/engineering/engineering-ai-data-remediation-engineer.md) | Specialist in self-healing data pipelines |
| 🤖 [AI Engineer](../../agents/engineering/engineering-ai-engineer.md) | Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into… |
| 🤖 [Android Developer](../../agents/engineering/engineering-android-developer.md) | Expert Android engineer specializing in Kotlin, Jetpack Compose, and Play Store publishing |
| 🔌 [API Designer](../../agents/engineering/engineering-api-designer.md) | REST API design, OpenAPI/Swagger 3.0, versioning strategies, error standards, rate limiting, and GraphQL |
| ⚡ [Autonomous Optimization Architect](../../agents/engineering/engineering-autonomous-optimization-architect.md) | Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict… |
| 🏗️ [Backend Architect](../../agents/engineering/engineering-backend-architect.md) | Distributed systems, microservices patterns, database selection, event-driven architecture, and API gateway design |

*+37件 — [エンジニアリングの全43体を見る →](../AGENTS.md#engineering-43)*

### 📣 マーケティング — 32 体

| エージェント | 専門分野 |
|---|---|
| 🏗️ [AEO Foundations Architect](../../agents/marketing/marketing-aeo-foundations.md) | Expert in AI Engine Optimization infrastructure |
| 🤖 [Agentic Search Optimizer](../../agents/marketing/marketing-agentic-search-optimizer.md) | Expert in WebMCP readiness and agentic task completion |
| 🔮 [AI Citation Strategist](../../agents/marketing/marketing-ai-citation-strategist.md) | Expert in AI recommendation engine optimization (AEO/GEO) |
| 📱 [App Store Optimizer](../../agents/marketing/marketing-app-store-optimizer.md) | Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization,… |
| 🇨🇳 [Baidu SEO Specialist](../../agents/marketing/marketing-baidu-seo-specialist.md) | Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem… |
| 📘 [Book Co-Author](../../agents/marketing/marketing-book-co-author.md) | Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes,… |

*+26件 — [マーケティングの全32体を見る →](../AGENTS.md#marketing-32)*

### 🗺️ GIS・空間分析 — 10 体

| エージェント | 専門分野 |
|---|---|
| 🏔️ [3D & Scene Developer](../../agents/gis/gis-3d-scene-developer.md) | Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations,… |
| 🎨 [Cartography Designer](../../agents/gis/gis-cartography-designer.md) | Map aesthetics specialist who designs beautiful, readable, and effective maps |
| 🛸 [Drone/Reality Mapping Specialist](../../agents/gis/gis-drone-reality-mapping.md) | Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain… |
| 🤖 [GeoAI/ML Engineer](../../agents/gis/gis-geoai-ml-engineer.md) | Geospatial machine learning specialist who builds models for feature extraction, object detection, image… |
| ⚙️ [Geoprocessing Specialist](../../agents/gis/gis-geoprocessing-specialist.md) | ArcPy and Python toolbox expert who automates spatial workflows |
| 🖥️ [GIS Analyst](../../agents/gis/gis-analyst.md) | Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial… |

*+4件 — [GIS・空間分析の全10体を見る →](../AGENTS.md#gis-spatial-10)*

### 💰 ファイナンス — 10 体

| エージェント | 専門分野 |
|---|---|
| 📒 [Bookkeeper & Controller](../../agents/finance/finance-bookkeeper-controller.md) | Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations,… |
| ₿ [Cryptocurrency Analyst](../../agents/finance/finance-cryptocurrency-analyst.md) | On-chain intelligence, DeFi protocol analysis, tokenomics audits, whale tracking, and portfolio allocation for… |
| 📊 [Financial Analyst](../../agents/finance/finance-financial-analyst.md) | Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven… |
| 📈 [FP&A Analyst](../../agents/finance/finance-fpa-analyst.md) | Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial… |
| 🔍 [Investment Researcher](../../agents/finance/finance-investment-researcher.md) | Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset… |
| 💰 [Personal Finance Coach](../../agents/finance/finance-personal-finance-coach.md) | Budgeting systems, debt payoff strategy, FIRE planning, net worth building, and money psychology for real people |

*+4件 — [ファイナンスの全10体を見る →](../AGENTS.md#finance-10)*

### 🎓 アカデミック — 13 体

| エージェント | 専門分野 |
|---|---|
| 🌍 [Anthropologist](../../agents/academic/academic-anthropologist.md) | Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method |
| 📈 [Economist](../../agents/academic/academic-economist.md) | Macro/micro analysis, market dynamics, policy evaluation, game theory, and behavioral economics |
| 🗺️ [Geographer](../../agents/academic/academic-geographer.md) | Expert in physical and human geography, climate systems, cartography, and spatial analysis |
| 💰 [Grant Writer](../../agents/academic/academic-grant-writer.md) | Grant proposal strategy, specific aims pages, NIH/NSF formatting, budget justification, and review criteria… |
| 📚 [Historian](../../agents/academic/academic-historian.md) | Expert in historical analysis, periodization, material culture, and historiography |
| 🗣️ [Linguist](../../agents/academic/academic-linguist.md) | Language analysis, etymology, syntax, discourse analysis, translation quality, and writing clarity |

*+7件 — [アカデミックの全13体を見る →](../AGENTS.md#academic-13)*

### 🛟 サポート — 10 体

| エージェント | 専門分野 |
|---|---|
| 📊 [Analytics Reporter](../../agents/support/support-analytics-reporter.md) | Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs… |
| 🌐 [Community Manager](../../agents/support/support-community-manager.md) | Community strategy, forum moderation, member programs, events, engagement metrics, and community-led growth |
| 🤝 [Customer Success Manager](../../agents/support/support-customer-success-manager.md) | Onboarding, QBRs, health scoring, expansion playbooks, churn prevention, and advocacy programs |
| 📝 [Executive Summary Generator](../../agents/support/support-executive-summary-generator.md) | Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms… |
| 💰 [Finance Tracker](../../agents/support/support-finance-tracker.md) | Expert financial analyst and controller specializing in financial planning, budget management, and business… |
| 🏢 [Infrastructure Maintainer](../../agents/support/support-infrastructure-maintainer.md) | Expert infrastructure specialist focused on system reliability, performance optimization, and technical… |

*+4件 — [サポートの全10体を見る →](../AGENTS.md#support-10)*

### 🎮 ゲーム開発 — 5 体

| エージェント | 専門分野 |
|---|---|
| 🎵 [Game Audio Engineer](../../agents/game-development/game-audio-engineer.md) | Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio… |
| 🎮 [Game Designer](../../agents/game-development/game-designer.md) | Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay… |
| 🗺️ [Level Designer](../../agents/game-development/level-designer.md) | Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and… |
| 📖 [Narrative Designer](../../agents/game-development/narrative-designer.md) | Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore… |
| 🎨 [Technical Artist](../../agents/game-development/technical-artist.md) | Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and… |

### 🔐 セキュリティ — 12 体

| エージェント | 専門分野 |
|---|---|
| 🔐 [Application Security Engineer](../../agents/security/security-appsec-engineer.md) | AppSec specialist who secures the software development lifecycle through threat modeling, secure code review,… |
| 🛡️ [Blockchain Security Auditor](../../agents/security/security-blockchain-security-auditor.md) | Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit… |
| ☁️ [Cloud Security Architect](../../agents/security/security-cloud-security-architect.md) | Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS,… |
| 📋 [Compliance Auditor](../../agents/security/security-compliance-auditor.md) | Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits |
| 🔐 [DevSecOps Engineer](../../agents/security/security-devsecops-engineer.md) | Security pipelines, SAST/DAST, container scanning, SBOM, secrets detection, and supply chain security |
| 🚨 [Incident Responder](../../agents/security/security-incident-responder.md) | Digital forensics and incident response specialist who leads breach investigations, contains active threats,… |

*+6件 — [セキュリティの全12体を見る →](../AGENTS.md#security-12)*

### 🤝 セールス — 12 体

| エージェント | 専門分野 |
|---|---|
| 💼 [Account Executive](../../agents/sales/sales-account-executive.md) | Discovery, demos, MEDDIC qualification, objection handling, multi-threading, closing, and pipeline management |
| 🗺️ [Account Strategist](../../agents/sales/sales-account-strategist.md) | Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR… |
| 📞 [Business Development Rep](../../agents/sales/sales-business-development-rep.md) | Cold outreach, prospecting sequences, ICP definition, cold calling, LinkedIn personalization, and pipeline creation |
| ♟️ [Deal Strategist](../../agents/sales/sales-deal-strategist.md) | Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for… |
| 🔍 [Discovery Coach](../../agents/sales/sales-discovery-coach.md) | Coaches sales teams on elite discovery methodology |
| 🧲 [Offer & Lead Gen Strategist](../../agents/sales/sales-offer-lead-gen-strategist.md) | Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at… |

*+6件 — [セールスの全12体を見る →](../AGENTS.md#sales-12)*

### 🧪 テスティング — 10 体

| エージェント | 専門分野 |
|---|---|
| ♿ [Accessibility Auditor](../../agents/testing/testing-accessibility-auditor.md) | Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive… |
| 🔌 [API Tester](../../agents/testing/testing-api-tester.md) | Expert API testing specialist focused on comprehensive API validation, performance testing, and quality… |
| 📸 [Evidence Collector](../../agents/testing/testing-evidence-collector.md) | Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for… |
| ⚡ [Load Testing Specialist](../../agents/testing/testing-load-testing-specialist.md) | k6, Locust, JMeter, load profiles, SLO validation, bottleneck identification, and capacity planning |
| 📱 [Mobile QA Engineer](../../agents/testing/testing-mobile-qa-engineer.md) | iOS/Android testing, Appium, device farms, gesture testing, offline scenarios, and OS version matrix |
| ⏱️ [Performance Benchmarker](../../agents/testing/testing-performance-benchmarker.md) | Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system… |

*+4件 — [テスティングの全10体を見る →](../AGENTS.md#testing-10)*

### 🎨 デザイン — 16 体

| エージェント | 専門分野 |
|---|---|
| 🧊 [3D Designer](../../agents/design/design-3d-designer.md) | Blender, Cinema 4D, material/lighting setup, rendering pipelines, and 3D asset optimization for real-time |
| 🎨 [Brand Guardian](../../agents/design/design-brand-guardian.md) | Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and… |
| 🏗️ [Design Systems Architect](../../agents/design/design-design-systems-architect.md) | Component libraries, design tokens, Figma/Storybook, versioning, and cross-team design system governance |
| 📷 [Image Prompt Engineer](../../agents/design/design-image-prompt-engineer.md) | Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image… |
| 🌈 [Inclusive Visuals Specialist](../../agents/design/design-inclusive-visuals-specialist.md) | Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and… |
| 🎬 [Motion Designer](../../agents/design/design-motion-designer.md) | Animation principles, After Effects workflows, UI micro-interactions, Lottie, and easing curves |

*+10件 — [デザインの全16体を見る →](../AGENTS.md#design-16)*

### 📈 ペイドメディア — 7 体

| エージェント | 専門分野 |
|---|---|
| ✍️ [Ad Creative Strategist](../../agents/paid-media/paid-media-creative-strategist.md) | Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative… |
| 📋 [Paid Media Auditor](../../agents/paid-media/paid-media-auditor.md) | Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts… |
| 📱 [Paid Social Strategist](../../agents/paid-media/paid-media-paid-social-strategist.md) | Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok,… |
| 💰 [PPC Campaign Strategist](../../agents/paid-media/paid-media-ppc-strategist.md) | Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign… |
| 📺 [Programmatic & Display Buyer](../../agents/paid-media/paid-media-programmatic-buyer.md) | Display advertising and programmatic media buying specialist covering managed placements, Google Display… |
| 🔍 [Search Query Analyst](../../agents/paid-media/paid-media-search-query-analyst.md) | Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw… |

*+1件 — [ペイドメディアの全7体を見る →](../AGENTS.md#paid-media-7)*

### 📋 プロジェクト管理 — 10 体

| エージェント | 専門分野 |
|---|---|
| 🧪 [Experiment Tracker](../../agents/project-management/project-management-experiment-tracker.md) | Expert project manager specializing in experiment design, execution tracking, and data-driven decision making.… |
| 📋 [Jira Workflow Steward](../../agents/project-management/project-management-jira-workflow-steward.md) | Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured… |
| 📋 [Meeting Notes Specialist](../../agents/project-management/project-management-meeting-notes-specialist.md) | Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a… |
| 🗺️ [Program Manager](../../agents/project-management/project-management-program-manager.md) | Multi-project coordination, dependency mapping, executive reporting, OKR alignment, and resource capacity planning |
| 🐑 [Project Shepherd](../../agents/project-management/project-management-project-shepherd.md) | Expert project manager specializing in cross-functional project coordination, timeline management, and… |
| ⚠️ [Risk Manager](../../agents/project-management/project-management-risk-manager.md) | Risk identification, probability-impact assessment, mitigation planning, and risk register management |

*+4件 — [プロジェクト管理の全10体を見る →](../AGENTS.md#project-management-10)*

### 📦 プロダクト — 9 体

| エージェント | 専門分野 |
|---|---|
| 🧠 [Behavioral Nudge Engine](../../agents/product/product-behavioral-nudge-engine.md) | Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user… |
| 🔍 [Feedback Synthesizer](../../agents/product/product-feedback-synthesizer.md) | Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable… |
| 📈 [Growth PM](../../agents/product/product-growth-product-manager.md) | Growth loops, funnel optimization, activation metrics, retention experiments, and PLG strategy |
| 🧭 [Product Manager](../../agents/product/product-manager.md) | Holistic product leader who owns the full product lifecycle |
| 📋 [Product Manager](../../agents/product/product-product-manager.md) | Product roadmap, prioritization frameworks, PRD writing, stakeholder alignment, and discovery-to-launch execution |
| 🎯 [Sprint Prioritizer](../../agents/product/product-sprint-prioritizer.md) | Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation.… |

*+3件 — [プロダクトの全9体を見る →](../AGENTS.md#product-9)*

### 🥽 空間コンピューティング — 3 体

| エージェント | 専門分野 |
|---|---|
| 🍎 [macOS Spatial/Metal Engineer](../../agents/spatial-computing/macos-spatial-metal-engineer.md) | Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing… |
| 🖥️ [Terminal Integration Specialist](../../agents/spatial-computing/terminal-integration-specialist.md) | Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications |
| 🥽 [visionOS Spatial Engineer](../../agents/spatial-computing/visionos-spatial-engineer.md) | Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation |

📖 **[全エージェントカタログを見る →](../AGENTS.md)** — 247人全員のスペシャリストを部門別に整理し、それぞれのシステムプロンプトへの直接リンク付きで掲載しています。

---

## はじめに（モバイル、約2分）

1. **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** をスマートフォンで開く。
2. [console.groq.com](https://console.groq.com) で**無料のGroq APIキー**を取得（Googleログイン、カード不要）。
3. **Settings → Connect** に貼り付ける。
4. スペシャリストを選んで構築を開始。**Add to Home Screen** をタップすればアプリのような体験に。

> あなたのキーはブラウザの `localStorage` にのみ保存され、サーバーに送信されることは一切ありません。

---

## AIプロバイダー

| プロバイダー | コスト | セットアップ |
|---|---|---|
| **Groq** | 無料プラン | アプリにAPIキーを貼り付け |
| **Ollama** | 無料（ローカル） | 同じネットワーク内のマシンで実行 |
| **Demo** | 無料 | AIなし — UIのプレビューのみ |

---

## アーキテクチャ

AgentForgeには**実行時の依存関係がゼロ**、**ビルドステップもありません**。クライアント全体は `index.html` という1つのファイルで、247人すべてのエージェントの軽量なメタデータ（名前、部門、エモジ、色、1行の説明）を保持しています。各エージェントの完全なシステムプロンプトは、このリポジトリから必要に応じて取得されます。

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

これにより、アプリは小さく高速に読み込まれる一方、プロンプトはバージョン管理され、プレーンなMarkdownとして編集可能な状態が保たれます。詳細は [`docs/ARCHITECTURE.md`](../ARCHITECTURE.md) を参照してください。

---

## セルフホスト

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# index.htmlを直接開く、またはフォルダをサーブする：
python3 -m http.server 8080   # その後 http://localhost:8080 にアクセス
```

npm不要、フレームワーク不要、ツールチェーン不要。フォルダを任意の静的ホスティング（GitHub Pages、Netlify、Vercel）にデプロイできます。GitHub Pagesの場合は **Settings → Pages → Source: GitHub Actions** を有効にしてください — 付属のワークフローが `main` へのプッシュごとに自動デプロイします。詳細は [`docs/DEPLOYMENT.md`](../DEPLOYMENT.md) を参照。

---

## リポジトリ構成

```
AgiForge/
├── index.html              # アプリ全体 — 単体完結、ビルド不要
├── agents/                 # 247人のスペシャリストのプロンプト、部門別
│   ├── engineering/        # …36エージェント
│   ├── specialized/        # …45エージェント
│   └── … (16部門)
├── docs/                   # アーキテクチャ、機能、デプロイ、カタログ
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # ロゴとブランド資産
├── .github/                # CIワークフロー + issue/PRテンプレート
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## コントリビュート

新しいスペシャリストや改善は大歓迎です — エージェントの追加は単にMarkdownファイルを1つ追加するだけです。詳細は [`CONTRIBUTING.md`](../../CONTRIBUTING.md) を参照。

## プライバシー

アナリティクスなし、トラッキングなし、バックエンドなし。ネットワーク通信は選択したAIプロバイダー（Groq/Ollama）、そしてオプションでBrave（検索）とPiston（コード実行）のみです。その他はすべてブラウザ内で動作します。

## ライセンス

個人・教育・非営利目的での利用は無料です — 自由に改変・セルフホストできます。商用利用（販売、サブライセンス、有料製品/サービスとしてのホスティング、収益を生むあらゆる利用）には作者の書面による許可が必要です。完全な条項は [LICENSE](../../LICENSE) を参照してください。© 2026 mmuzammul、そこで許諾された範囲を除き、すべての権利を保有します。
