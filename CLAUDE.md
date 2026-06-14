# AgentForge — Project Context for Claude Code

## What this project is

AgentForge is a **mobile-first agentic AI platform** — a single `index.html` web app with 183 curated AI specialists. It runs 100% in the browser, free, no server needed. Hosted at: **https://mmuzammul.github.io/Agi-forge/**

This is a **completely independent, original-branded project** by mmuzammul. It is NOT linked to any other repository. All branding is "AgentForge" only.

---

## Repository structure (target state)

```
Agi-forge/
├── CLAUDE.md                    ← you are here
├── index.html                   ← the entire app (~150KB)
├── README.md                    ← project docs
├── agents/                      ← 183 specialist .md system prompts
│   ├── engineering/             (25 agents)
│   ├── design/                  (9 agents)
│   ├── security/                (10 agents)
│   ├── marketing/               (24 agents)
│   ├── specialized/             (45+ agents)
│   ├── sales/                   (9 agents)
│   ├── product/                 (5 agents)
│   ├── finance/                 (5 agents)
│   ├── testing/                 (8 agents)
│   ├── support/                 (6 agents)
│   ├── gis/                     (10 agents)
│   ├── paid-media/              (7 agents)
│   ├── game-development/        (nested: unity/, godot/, unreal-engine/, roblox-studio/)
│   ├── spatial-computing/       (6 agents)
│   ├── project-management/      (7 agents)
│   ├── academic/                (5 agents)
│   ├── strategy/                (playbooks + runbooks)
│   └── finance/                 (5 agents)
└── .github/workflows/
    └── deploy-pages.yml         ← auto-deploy to GitHub Pages on push to main
```

---

## What has been built (completed features in index.html)

### Core app
- **183 AI specialists** with metadata (id, name, division, emoji, color, description)
- Agent content fetched on-demand from `https://raw.githubusercontent.com/mmuzammul/Agi-forge/main/agents/`
- Falls back to short description if fetch fails

### AI providers
- **Groq** (free cloud AI) — primary provider
- **Ollama** (local) — for self-hosted use
- **Demo mode** — no AI, UI preview only
- Config stored in `localStorage`

### Features implemented
1. **Chat** — talk to any specialist, streaming responses
2. **Agent Pipeline** — chain 2-6 agents, each builds on previous output
3. **Auto-Build Team** — LLM orchestrator picks optimal agents from full roster
4. **Agent Debate** — 2 agents argue in rounds (Proposer vs Critic)
5. **Benchmarker** — same prompt across multiple agents, LLM-judged scoring
6. **Code Runner** — ▶ button on every code block, runs via Piston API (70+ languages)
7. **Web Search** — Brave Search API integration (optional, user provides key)
8. **Voice Input** — Web Speech API (Chrome/Safari built-in)
9. **File Attachment** — FileReader API, client-side
10. **Memory** — save/view/delete outputs in localStorage
11. **Export** — download any output as .md file

### Rate limit fix (important)
Groq free tier has 6000 TPM per model. Fix implemented:
- `GROQ_MODELS` pool: `['llama-3.1-8b-instant', 'llama-3.3-70b-versatile', 'gemma2-9b-it', 'mixtral-8x7b-32768']`
- `groqFetchWithRetry()` — on 429, parses retry time, waits, rotates to next model
- 3-second cooldown between pipeline agents
- All 3 Groq call paths use this: `streamGroqInto`, `autoBuildTeam`, `judgeBenchmark`

---

## What still needs to be done (next tasks)

### PRIORITY 1 — Push agents folder to this repo
The agent .md files exist on the AGI repo branch:
`https://github.com/MMUZAMMUL/AGI/tree/claude/epic-bell-8km84u/gui/agents-for-agi-forge`

They need to be copied into this repo's `agents/` folder so the live app can fetch them.

**How to do it in a new session:**
```bash
# The files are already in /home/user/AgentForge/agents/ on the server
# Just git add and push them all
git add agents/
git commit -m "Add 183 curated specialist agent system prompts"
git push origin main
```

### PRIORITY 2 — Push updated index.html
The latest index.html (with all fixes) is at `/home/user/AgentForge/index.html` on the server (~150KB). Push it:
```bash
git add index.html
git commit -m "AgentForge v3: lightweight app, fetches agents from repo"
git push origin main
```

### PRIORITY 3 — Future features to add
- **Agent favorites/pinning** — let user pin top agents to home screen
- **Conversation history** — persist chat history between sessions (localStorage)
- **Agent search/filter** — search by name or capability
- **Custom agent creator** — let user define their own specialist
- **Dark/light theme toggle**
- **PWA manifest** — proper installable app with icon

---

## Key technical details

### GITHUB_RAW constant
```js
const GITHUB_RAW = 'https://raw.githubusercontent.com/mmuzammul/Agi-forge/main/agents';
```
Agent fetch URL pattern: `${GITHUB_RAW}/${agent.division}/${agent.id}.md`

### Agent .md file format
```markdown
---
name: Backend Architect
description: Short one-line description
division: engineering
emoji: 🏗️
color: "#3b82f6"
---

Full system prompt content starts here...
```

### Branding
- Name: **AgentForge**
- Logo: `Agent<span>Forge</span>` (span colored amber)
- Accent colors: `--accent:#f59e0b` / `--accent2:#fbbf24` (amber)
- Background: dark (`--bg:#0f1117`)
- NO references to "AGI repo", "mobile.html", "claude/epic-bell-8km84u", or any other repo

### GitHub Pages deploy
- Workflow: `.github/workflows/deploy-pages.yml`
- Triggers on push to `main`
- Copies root to `_site` and deploys
- Live URL: `https://mmuzammul.github.io/Agi-forge/`

---

## Previous session history (summary)

Built from scratch over multiple sessions:
1. Started as `gui/mobile.html` in `mmuzammul/AGI` repo
2. Added 217 agents, all AGI features (pipeline, debate, benchmark, code runner, voice, search)
3. Rebranded as AgentForge, created `mmuzammul/Agi-forge` public repo
4. Fixed Groq rate limits with model rotation
5. Curated to 183 agents (removed 17 niche/duplicate agents)
6. Made index.html lightweight (150KB) — agents fetched on-demand from repo
7. All agent .md files ready in `/home/user/AgentForge/agents/` — need to be pushed to this repo

---

## Session limitation note

Previous sessions were scoped to `mmuzammul/agi` repo and could NOT push directly to `mmuzammul/Agi-forge`. This new session IS scoped to `Agi-forge` — you have full push access here.
