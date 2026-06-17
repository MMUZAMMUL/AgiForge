# Architecture Plan (Build-Free)

## Goal

Split the current single 2,671-line `index.html` into organized, reusable
modules — without introducing TypeScript, a bundler, or any CI build step.
Native ES modules (`<script type="module">` + `import`/`export`) are
supported by every browser GitHub Pages needs to serve, and by GitHub Pages
itself (it just serves static files), so this gets real module boundaries
for free.

`index.html` remains the entry point and stays small: markup shell, head
tags, and one `<script type="module" src="./app/main.js">`. Everything that
is currently inline JS/CSS moves to files under `app/` and `assets/css/`.

## Folder tree

```
/
├── index.html                  # shell only: DOM containers + manifest/SW links + one module script tag
├── landing.html                # unchanged, separate marketing page
├── manifest.webmanifest        # unchanged
├── sw.js                       # unchanged (cache list updated if asset paths change)
├── robots.txt / sitemap.xml    # unchanged
│
├── app/
│   ├── main.js                 # boot sequence: load config, render shell, route to default screen
│   │
│   ├── state/
│   │   ├── config.js           # cfg get/set, generalized via one cfgItem(key) helper (replaces 5 repeated getter/setter pairs)
│   │   └── store.js            # in-memory session state: curAgent, chatMsgs, pipeline state, debate/benchmark state
│   │
│   ├── storage/
│   │   ├── local-storage.js    # thin typed wrapper + write-throttling for chat history saves
│   │   ├── memory.js           # saved-output memory (getMemory/saveToMemory/deleteMemory)
│   │   ├── chat-history.js     # per-agent chat persistence
│   │   └── favorites.js        # pinned-agent persistence
│   │
│   ├── agents/
│   │   ├── agents.data.js      # the AGENTS array, moved out of markup into a plain data module
│   │   ├── divisions.data.js   # DIVISIONS + EDITIONS (legal/finance/healthcare white-label variants)
│   │   ├── registry.js         # lookups: byId, byDivision, custom agents from the Creator
│   │   └── fetch-content.js    # GitHub-raw fetch + YAML-frontmatter strip + offline fallback
│   │
│   ├── api/
│   │   ├── provider-chain.js   # buildEngineChain, nextGroqModel, parseRetryAfter, groqFetchWithRetry
│   │   ├── providers/
│   │   │   ├── groq.js / cerebras.js / gemini.js / openrouter.js / ollama.js
│   │   │   └── test-provider.js   # ONE generic connectivity test helper, replaces 5 near-identical testX() functions
│   │   ├── streaming.js        # shared chunk-append-and-render helper used by chat/pipeline/debate/benchmark
│   │   ├── web-search.js       # Brave Search integration
│   │   └── piston.js           # Code Runner execution client
│   │
│   ├── workflows/
│   │   ├── pipeline.js         # sequential multi-agent execution, share/load-from-URL
│   │   ├── auto-build-team.js  # LLM-picks-agents orchestrator
│   │   ├── debate.js           # proposer/critic rounds
│   │   └── benchmark.js        # multi-agent scoring
│   │
│   ├── prompts/
│   │   └── agent-creator.js    # Agent Creator Studio: AI-assisted system-prompt generation + save/delete
│   │
│   ├── ui/
│   │   ├── render.js           # esc(), md(), renderWithCursor() — markdown rendering, hardened against the XSS gap in AUDIT-REPORT.md
│   │   ├── screens.js          # showScreen/updateHdr — tab + screen switching
│   │   ├── agent-list.js       # division tabs, agent cards, search/filter, virtualized render for 247+ cards
│   │   ├── chat.js             # chat screen: open agent, send message, render history
│   │   ├── toast.js            # lightweight toast (existing) — superseded by notifications/ in a later phase
│   │   └── voice.js            # Web Speech API input
│   │
│   ├── components/             # small reusable DOM builders extracted from duplicated inline-HTML patterns
│   │   ├── modal.js
│   │   └── execution-panel.js  # shared "clear screen, stream output, show export buttons" used by pipeline/debate/benchmark
│   │
│   ├── notifications/          # NEW (phase: Account & ops) — generalizes toast() into a real notification center
│   │   └── notify.js
│   │
│   ├── auth/                   # intentionally empty. Auth/Supabase/Pro-gating was deliberately removed
│   │                           # (see 03-AUDIT-REPORT.md) — this folder exists per the requested structure
│   │                           # but nothing should be added here without an explicit decision to reintroduce auth.
│   │
│   └── utils/
│       └── helpers.js          # slug(), downloadText(), colorHex(), guessExt(), esc-adjacent string utils
│
├── assets/
│   ├── css/
│   │   └── app.css             # the current inline <style> block (lines 33–256), extracted verbatim
│   ├── images/ icons/ logo.svg # unchanged
│   └── docs/                   # NEW: assets referenced by the in-app documentation viewer (none yet)
│
├── docs/                       # existing knowledge base (ARCHITECTURE.md, FEATURES.md, DEPLOYMENT.md, AGENTS.md, refactor/)
│                                # becomes the content source for the in-app Documentation Viewer — see 04-DOCUMENTATION-REPORT.md
│
├── config/                     # NEW, optional: provider endpoint list, division metadata as plain JSON
│                                # (data, not executable build config — still zero-build)
│
├── tests/                      # NEW — see "Testing without a build step" below
│
└── .github/                    # unchanged (workflows, issue/PR templates)
```

Notes on deviations from the original requested structure:

- No `app/pages/` folder. The current app is a single-page tab-switcher
  (`showScreen()`), not a multi-route app. The "new pages" requested
  (Dashboard, Workflow Builder, Prompt Library, Knowledge Center, Docs
  Viewer, Settings, Session History, Notification Center, API
  Management, About) become new screens registered the same way existing
  screens are (`ui/screens.js`), not a routing framework. This avoids
  adding a router dependency.
- No `public/` folder distinct from the repo root — GitHub Pages serves
  the repo root directly; introducing a `public/` folder would require a
  copy/build step to get those files to the root, which contradicts the
  no-build decision. Static passthrough files (`robots.txt`,
  `sitemap.xml`, `manifest.webmanifest`) stay at root.
- `app/auth/` is created but deliberately left empty. Reintroducing
  accounts/auth is a product decision (it was explicitly removed once
  already, per git history) and shouldn't be smuggled back in as a side
  effect of a refactor.

## How new subsystems from the original request map in

| Requested item | Where it lives | Phase |
|---|---|---|
| Agent Registry / Profiles / Memory / Conversations | `app/agents/`, `app/storage/memory.js`, `app/storage/chat-history.js` (mostly already exist, just relocated) | Migration (no new behavior) |
| Agent Collaboration / Debate Mode / Workflow Execution | `app/workflows/` (already exist, relocated) | Migration |
| Tool Calling Layer | `app/api/streaming.js` (web-search tool-calling already implemented in `streamGroqInto`) | Migration |
| Dashboard | new screen in `ui/screens.js`, reads from `state/store.js` + `storage/memory.js` | Workspace tools |
| Workflow Builder | evolves `workflows/pipeline.js`'s existing queue UI into a dedicated screen | Workspace tools |
| Prompt Library | new screen over `agents/agents.data.js` + `prompts/agent-creator.js` saved prompts | Workspace tools |
| Knowledge Center / Documentation Viewer | new screen, markdown renderer (`ui/render.js`) pointed at `docs/` | Knowledge & docs |
| Settings Panel | already exists (`Settings` screen) — extends with API health checks | Account & ops |
| Session History | extends `storage/memory.js` + `storage/chat-history.js` with an export/import UI | Account & ops |
| Notification Center | `app/notifications/notify.js`, replaces ad hoc `toast()` calls | Account & ops |
| API Management Page | new screen over `api/provider-chain.js` + per-provider `test-provider.js` health checks | Account & ops |
| About Page | new screen, static content | Marketing/info |

## Testing without a build step

There's currently no test suite (per `CLAUDE.md`, validation is manual).
Adding one without a build step means no Jest/TS — instead:

- Plain `.html` test harness pages under `tests/` that load the relevant
  `app/*.js` modules via `<script type="module">` and run assertions with
  nothing but the browser's `console.assert` or a ~50-line hand-rolled
  `assert()`/`test()` helper, printed to the page.
- Open in a browser (or headless via `npx playwright test` if Playwright
  is acceptable as a dev-only dependency — it would not ship to
  production or affect the Pages deploy).
- Prioritize coverage for the pure-logic modules first: `ui/render.js`
  (markdown/escaping — directly tied to the XSS finding),
  `api/provider-chain.js` (retry/failover logic), `agents/registry.js`
  (the orphaned-agent class of bug found in this audit).

## PWA

Already substantially implemented (`manifest.webmanifest`, `sw.js` with a
sensible per-host caching strategy). No architectural change needed here;
follow-up work is additive (see 03-AUDIT-REPORT.md performance section for
the one related fix — cache list should track real asset paths after the
`assets/css/app.css` extraction).
