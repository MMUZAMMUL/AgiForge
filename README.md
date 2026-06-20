<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 AI specialists · Agent pipelines · Auto-built teams · Runs in your browser · Free**

A mobile-first agentic AI platform that runs entirely in the browser — no server, no install, no build step, no cost. Powered by free [Groq](https://console.groq.com) cloud inference or a local [Ollama](https://ollama.com) model.

[**🌐 Open the live app →**](https://mmuzammul.github.io/Agi-forge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/Agi-forge/)
[![No build](https://img.shields.io/badge/build-none-success)](#self-host)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#architecture)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

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
- **🌍 10-Language Landing Page** — the [landing page](https://mmuzammul.github.io/Agi-forge/landing.html) switches instantly between English, 中文, Español, हिन्दी, العربية, Português, Français, Русский, 日本語, and Deutsch — client-side, no reload, no third-party translation service.
- **🌐 Web Search** — optional real-time search via Brave Search API (bring your own key).
- **🎤 Voice Input** — Web Speech API, built into Chrome and Safari.
- **📎 File Attachment** — read code, CSVs, and docs as context, fully client-side.
- **🧠 Memory** — save, review, and delete outputs in `localStorage`.
- **⬇️ Export** — download any chat, pipeline, debate, or benchmark as a `.md` file.
- **🔄 Smart rate-limit handling** — on Groq's free tier, rotates across a 4-model pool and waits out `429`s so pipelines finish unattended.

See [`docs/FEATURES.md`](docs/FEATURES.md) for the full breakdown.

---

## The roster — 16 divisions, 247 specialists

| Division | Count | Division | Count |
|---|:---:|---|:---:|
| ⭐ Specialized | 45 | 🔐 Security | 12 |
| 🏗️ Engineering | 36 | 🤝 Sales | 12 |
| 📣 Marketing | 32 | 🧪 Testing | 10 |
| 🗺️ GIS & Spatial | 10 | 🎨 Design | 11 |
| 💰 Finance | 9 | 📈 Paid Media | 7 |
| 🎓 Academic | 8 | 📋 Project Management | 7 |
| 🛟 Support | 7 | 📦 Product | 5 |
| 🎮 Game Development | 5 | 🥽 Spatial Computing | 3 |

Every agent is a structured Markdown system prompt under [`agents/<division>/`](agents/). Browse the complete catalog in [`docs/AGENTS.md`](docs/AGENTS.md).

---

## Getting started (mobile, ~2 min)

1. Open **[mmuzammul.github.io/Agi-forge](https://mmuzammul.github.io/Agi-forge/)** on your phone.
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
https://raw.githubusercontent.com/mmuzammul/Agi-forge/main/agents/<division>/<id>.md
```

This keeps the app small and fast to load while the prompts stay version-controlled and editable as plain Markdown. Full details in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Self-host

```bash
git clone https://github.com/MMUZAMMUL/Agi-forge.git
cd Agi-forge
# open index.html directly, or serve the folder:
python3 -m http.server 8080   # then visit http://localhost:8080
```

No npm, no framework, no toolchain. Deploy the folder to any static host (GitHub Pages, Netlify, Vercel). For GitHub Pages, enable **Settings → Pages → Source: GitHub Actions** — the included workflow auto-deploys on every push to `main`. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Repository layout

```
Agi-forge/
├── index.html              # the entire app — self-contained, no build
├── agents/                 # 247 specialist system prompts, by division
│   ├── engineering/        # …36 agents
│   ├── specialized/        # …45 agents
│   └── … (16 divisions)
├── docs/                   # architecture, features, deployment, catalog
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # logo and brand assets
├── .github/                # CI workflow + issue/PR templates
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Contributing

New specialists and improvements are welcome — adding an agent is just a new Markdown file. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Privacy

No analytics, no tracking, no backend. The only network calls are to your chosen AI provider (Groq/Ollama) and, optionally, Brave (search) and Piston (code execution). Everything else runs in your browser.

## License

Free for personal, educational, and non-commercial use — modify and self-host all you like. Commercial use (selling, sublicensing, hosting as a paid product/service, or any revenue-generating use) requires the author's written permission. See [LICENSE](LICENSE) for the full terms. © 2026 mmuzammul, all rights reserved except as granted there.
