# Architecture

AgentForge is deliberately simple: **one HTML file, zero dependencies, no build
step.** This document explains how the pieces fit together.

## Overview

```
┌─────────────────────────────────────────────┐
│  index.html  (the whole client)             │
│                                             │
│  • AGENTS[]  — metadata for all 183 agents  │
│      id, name, division, emoji, color,      │
│      one-line description                    │
│  • UI: chat, pipeline, team, debate,        │
│        benchmark, code runner               │
│  • Provider layer: Groq / Ollama / Demo     │
└───────────────┬─────────────────────────────┘
                │ fetch on demand
                ▼
   agents/<division>/<id>.md   (full system prompts, in this repo)
                │
                ▼
   AI provider (Groq cloud  or  local Ollama)
```

## Agent loading

The app ships only **lightweight metadata** for each agent inside the `AGENTS`
array in `index.html`. The full system prompt is fetched the first time an agent
is used:

```js
const GITHUB_RAW = 'https://raw.githubusercontent.com/mmuzammul/Agi-forge/main/agents';
const url = `${GITHUB_RAW}/${agent.division}/${agent.id}.md`;
```

If the fetch fails, the app falls back to the agent's one-line description so it
still works offline or when raw GitHub is unreachable.

**Why fetch instead of embed?** It keeps `index.html` small (~150 KB) and fast to
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
| Ollama | Local network | Self-hosted models, no cloud. |
| Demo | In-browser | No AI; previews the UI only. |

Configuration (provider, key, model) is stored in `localStorage` — nothing is sent
to any backend owned by this project, because there is no backend.

### Rate-limit handling (Groq)

Groq's free tier meters tokens per model per minute. To keep multi-agent
pipelines running unattended:

- `GROQ_MODELS` is a pool of 4 models, each with its own token bucket.
- `groqFetchWithRetry()` catches `429`, parses the suggested wait time, sleeps,
  then rotates to the next model in the pool.
- A short cooldown runs between pipeline stages.
- All Groq call sites route through this path: `streamGroqInto`, `autoBuildTeam`,
  and `judgeBenchmark`.

## External services

Only these network calls leave the browser, and all are optional except your
chosen AI provider:

- **Groq / Ollama** — AI inference.
- **Brave Search API** — optional web search (user-supplied key).
- **Piston API** — optional code execution for the Code Runner.
- **raw.githubusercontent.com** — fetching agent prompt files.

No analytics, no tracking, no first-party backend.
