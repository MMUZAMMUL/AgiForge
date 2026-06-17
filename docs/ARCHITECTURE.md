# Architecture

AgentForge is deliberately simple: **static files, zero runtime dependencies, no
build step.** This document explains how the pieces fit together.

## Overview

```
┌──────────────────────────────────────────────────────┐
│  index.html  — markup only (~490 lines)              │
│  assets/css/styles.css  — all styles                 │
│  assets/js/*.js  — classic scripts, one shared scope │
│                                                      │
│  • data.js   — AGENTS[] metadata for all 247 agents  │
│      (id, name, division, emoji, color, description) │
│      DIVISIONS, editions, cfg, model pools, state    │
│  • ui / chat / pipeline / modes — screens & features │
│      (chat, pipeline, auto-build, debate, benchmark, │
│       code runner)                                   │
│  • providers.js — failover chain + streaming         │
│      Groq → Cerebras → Gemini → OpenRouter → Ollama  │
└───────────────┬──────────────────────────────────────┘
                │ fetch on demand
                ▼
   agents/<division>/<id>.md   (full system prompts, in this repo)
                │
                ▼
   AI provider (cloud failover chain  or  local Ollama)
```

The JS files are plain classic scripts (no ES modules/bundler) loaded in order
at the end of `<body>`; they share one global scope so functions stay reachable
from the inline `onclick=` handlers. `main.js` must load last. See `CLAUDE.md`
for the full file-by-file breakdown.

## Agent loading

The app ships only **lightweight metadata** for each agent inside the `AGENTS`
array in `assets/js/data.js`. The full system prompt is fetched the first time an
agent is used:

```js
const GITHUB_RAW = 'https://raw.githubusercontent.com/mmuzammul/Agi-forge/main/agents';
const url = `${GITHUB_RAW}/${agent.division}/${agent.id}.md`;
```

If the fetch fails, the app falls back to the agent's one-line description so it
still works offline or when raw GitHub is unreachable.

**Why fetch instead of embed?** It keeps the initial payload small and fast to
load on mobile, and lets prompts be edited as plain Markdown and version-controlled
independently of the app.

## Agent file format

Each file under `agents/<division>/` is Markdown with YAML front matter:

```markdown
---
name: Backend Architect
description: One-line summary shown in the UI.
division: engineering
emoji: 🏗️
color: "#3b82f6"
---

# Backend Architect

Full system prompt content…
```

The file name (without `.md`) must equal the agent's `id` in the `AGENTS` array,
and the folder must equal its `division`.

## Provider layer

| Provider | Where it runs | Notes |
|---|---|---|
| Groq | Cloud | Primary. Free tier with per-model token buckets. |
| Cerebras | Cloud | Failover (user-supplied key). |
| Gemini | Cloud | Failover (user-supplied key). |
| OpenRouter | Cloud | Failover via free models. |
| Ollama | Local network | Self-hosted models, no cloud. |
| Demo | In-browser | No AI; previews the UI only. |

Configuration (provider, keys, model) is stored in `localStorage` — nothing is
sent to any backend owned by this project, because there is no backend.

### Failover & rate-limit handling

Cloud free tiers meter tokens per model per minute. To keep multi-agent pipelines
running unattended, `groqFetchWithRetry()` implements a full cascade:

- `GROQ_MODELS` is a pool of 3 models, each with its own token bucket; on `429`
  it parses the suggested wait time, sleeps, then rotates to the next model.
- If Groq is exhausted/unconfigured it falls through to **Cerebras → Gemini →
  OpenRouter → Ollama** in turn.
- A short cooldown runs between pipeline stages.
- All LLM call sites route through this path: `streamGroqInto`, `autoBuildTeam`,
  and `judgeBenchmark`.

## External services

Only these network calls leave the browser, and all are optional except your
chosen AI provider:

- **Groq / Cerebras / Gemini / OpenRouter / Ollama** — AI inference (failover chain).
- **Brave Search API** — optional web search (user-supplied key).
- **Piston API** — optional code execution for the Code Runner.
- **raw.githubusercontent.com** — fetching agent prompt files.

No analytics, no tracking, no first-party backend.
