# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

AgentForge is a mobile-first agentic AI platform — a single `index.html` web app with 247 curated AI specialists. Runs 100% in the browser, no build step, no server needed. Live at: **https://mmuzammul.github.io/Agi-forge/**

This is a completely independent, original-branded project by mmuzammul. All branding is "AgentForge" only — no references to "AGI repo", "mobile.html", or any other repo.

---

## Development Commands

**No build tooling.** There is no npm, no bundler, no compiler. To develop locally:

```bash
# Serve locally (Python)
python3 -m http.server 8080

# Or with Node
npx serve .
```

Open `http://localhost:8080` in a browser. No compilation step; changes to `index.html` are live on refresh.

**There is no test suite and no linter.** Validation is manual — open in a browser and test the affected feature.

**Deploy:** Push to `main`. GitHub Actions (`.github/workflows/deploy-pages.yml`) automatically uploads the repo root to GitHub Pages. No build step; files are served as-is.

---

## Architecture

### File layout

`index.html` holds only the HTML markup (~490 lines). Styles and scripts are
external files under `assets/`:

```
index.html              # markup + <link>/<script src> references
assets/css/styles.css   # all styles (CSS custom properties at :root)
assets/js/
  data.js        # AGENTS array, DIVISIONS, editions, cfg (config), model pools, global state
  ui.js          # screens, header, esc/md helpers, division tabs, favorites, agent list & cards
  agents.js      # custom ("My") agents — create / AI-generate / save / delete
  pipeline.js    # pipeline builder, sharing, examples, auto-build team, run/stop, exports
  chat.js        # single-agent chat, history, attachments, workspace files, message actions
  providers.js   # multi-provider failover, retry, web search, streaming (Groq/Ollama/demo)
  memory.js      # saved outputs (localStorage memory)
  settings.js    # settings UI, provider selection/keys, connection tests, webhooks, gists
  modes.js       # voice input, code runner, debate mode, benchmarker
  main.js        # boot/init (runs last) + service worker registration
```

The JS files are **classic scripts** (no ES modules / bundler) loaded in the
order above at the end of `<body>`. They share one global scope, so functions
stay globally available to the inline `onclick=` handlers in the HTML. **Load
order matters** and `main.js` must stay last — its boot IIFE calls functions
defined across all the other files. `landing.html` is a separate marketing
page that links to `index.html`.

### Agent content is fetched on-demand

Agent **metadata** (id, name, division, emoji, color, description, vibe) is defined in the `AGENTS` array in `assets/js/data.js`. The full **system prompts** live in `agents/<division>/<id>.md` and are fetched at runtime from GitHub Raw:

```js
const GITHUB_RAW = 'https://raw.githubusercontent.com/mmuzammul/Agi-forge/main/agents';
// URL pattern: ${GITHUB_RAW}/${agent.division}/${agent.id}.md
```

This keeps the initial page load small while keeping system prompts version-controlled and editable independently.

### 6 interaction modes

All implemented in `index.html`:

1. **Chat** — single agent, streaming responses per agent, conversation persisted in `localStorage`
2. **Pipeline** — chain 2–6 agents sequentially; each receives the previous agent's output as context
3. **Auto-Build Team** — LLM reads the user's goal + the full agent roster, then picks optimal agents and their order
4. **Debate** — Proposer vs. Critic in configurable rounds (1–5) of adversarial refinement
5. **Benchmarker** — same prompt runs across multiple agents; a separate LLM call scores each on relevance/depth/correctness
6. **Code Runner** — every code block in any output gets a ▶ button; executes via Piston API (70+ languages)

### Multi-provider failover

`groqFetchWithRetry()` implements a full cascade:

1. **Groq** — 3-model pool (`llama-3.1-8b-instant`, `llama-3.3-70b-versatile`, `gemma2-9b-it`); on 429, parses `retry-after` header, waits, rotates to next model
2. **Cerebras** — `llama-3.3-70b`, `llama3.1-8b`
3. **Gemini** — `gemini-2.0-flash`, `gemini-1.5-flash`
4. **OpenRouter** — free model fallback
5. **Ollama** — local, user-configured host

All three LLM call paths — `streamGroqInto`, `autoBuildTeam`, `judgeBenchmark` — use this retry wrapper. Pipeline stages have a 3-second cooldown between agents to reduce rate-limit pressure.

### State & persistence

All state is `localStorage`. Keys used:

| Key | Purpose |
|---|---|
| `agentforge_provider` | Selected provider |
| `agentforge_groq_key` | Groq API key |
| `agentforge_ollama_host` | Ollama host URL |
| `agentforge_cerebras_key`, `agentforge_gemini_key`, `agentforge_openrouter_key` | Fallback provider keys |
| `agentforge_brave_key` | Brave Search API key (optional) |
| `agentforge_favs` | JSON array of pinned agent IDs |
| `agentforge_memory_*` | Saved outputs |
| `agentforge_chat_<agentId>` | Per-agent conversation history |

> **Note:** Accounts, Pro-plan tracking, and reviews are **not implemented in the
> current build** — the auth/Supabase/Pro code was removed (see git history). A
> `supabase/schema.sql` scaffold is kept for a possible future account system, but
> nothing in `index.html` or `assets/js/` references Supabase today. The app loads
> no third-party libraries at runtime.

### CSS architecture

All CSS lives in `assets/css/styles.css`. Uses CSS custom properties at `:root`:

```css
--bg: #0f1117          /* Dark background */
--bg2: #161b27
--bg3: #1e2535
--accent: #f59e0b      /* Amber brand primary */
--accent2: #fbbf24     /* Amber brand bright */
--text: #e2e8f0
--text2: #94a3b8
--radius: 10px
```

Mobile-first responsive design using `clamp()` and media queries. All UI changes must work at 375px viewport width.

---

## Adding or Editing Agents

### Agent file format

File: `agents/<division>/<division>-<slug>.md`

```markdown
---
name: Backend Architect
description: One-line summary shown in the agent list
division: engineering
emoji: 🏗️
color: "#3b82f6"
---

# Full system prompt content starts here...
```

The YAML frontmatter is metadata; everything after `---` is the system prompt sent to the LLM when this agent is activated.

### To register a new agent

1. Create the `.md` file at `agents/<division>/<division>-<slug>.md`
2. Add an entry to the `AGENTS` array in `index.html`:

```js
{
  id: "engineering-new-agent",   // must match the filename (without .md)
  name: "New Agent",
  division: "engineering",
  description: "One-line summary for the agent list",
  color: "#3b82f6",
  emoji: "🔧",
  vibe: "Short personality tagline shown on the agent card"
}
```

The `id` must match the filename exactly: `agents/engineering/engineering-new-agent.md`.

### Divisions (16 total)

`academic`, `design`, `engineering`, `finance`, `game-development`, `gis`, `marketing`, `paid-media`, `product`, `project-management`, `sales`, `security`, `spatial-computing`, `specialized`, `support`, `testing`

---

## Key Conventions

- **No frameworks, no npm.** If a library is needed, load it from a trusted CDN in `<head>` with `crossorigin="anonymous"`.
- **Agent IDs are kebab-case and must match file paths exactly.** The fetch URL is constructed directly from the `id` field.
- **All user data stays client-side.** The current build has no account system, so nothing leaves the browser except the LLM/provider API calls the user configures.
- **Mobile-first.** Test all UI changes in a 375px-wide viewport.
- **Logo:** renders as `Agent<span>Forge</span>` with the `<span>` colored amber (`var(--accent)`).

---

## External Services

| Service | Purpose | Key stored in |
|---|---|---|
| Groq | Primary LLM | `agentforge_groq_key` |
| Cerebras | LLM failover | `agentforge_cerebras_key` |
| Gemini | LLM failover | `agentforge_gemini_key` |
| OpenRouter | LLM fallback | `agentforge_openrouter_key` |
| Ollama | Local LLM | `agentforge_ollama_host` |
| Brave Search | Web search (optional) | `agentforge_brave_key` |
| Piston API | Code execution | No key needed |
| GitHub Raw | Agent `.md` fetches | No key (public repo) |
| Supabase | **Planned, not wired up** — auth/Pro/reviews scaffold in `supabase/schema.sql`; no app code references it | — |
