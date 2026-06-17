# Migration Report

Source: current `index.html` (2,671 lines), structural map produced by the
codebase audit (full detail in `03-AUDIT-REPORT.md`, section 1).

## Current line ranges → destination module

| Current lines | Content | Destination |
|---|---|---|
| 33–256 | Inline `<style>` block | `assets/css/app.css` |
| 261–697 | Static screen markup (header, setup, agents, chat, pipeline, memory, settings, creator, debate, benchmark) | stays in `index.html` as the shell, or split into per-screen template strings in `ui/screens.js` if screens need to be added/removed dynamically |
| 703–926 | `AGENTS` array (221 entries) | `agents/agents.data.js` |
| 926 | `DIVISIONS` | `agents/divisions.data.js` |
| 928 | `GITHUB_RAW` constant | `agents/fetch-content.js` |
| 930–999 | `EDITIONS` (white-label variants) | `agents/divisions.data.js` |
| 1002–1030 | `ENGINE_LABELS`, `cfg` getter/setter object | `state/config.js` (rewritten as one `cfgItem()` helper, see Audit §4) |
| 1032–1036 | Global session state | `state/store.js` |
| 1054–1093 | Boot sequence, `showScreen`, `updateHdr` | `main.js` (boot) + `ui/screens.js` |
| 1095–1141 | Provider setup/connect flow | `api/provider-chain.js` + `ui/screens.js` |
| 1143–1168 | `colorHex`, `esc`, `md`, `handleKey`, `autoResize` | `ui/render.js` (`esc`/`md`/cursor) + `utils/helpers.js` (`colorHex`) |
| 1170–1187 | `fetchAgentContent` | `agents/fetch-content.js` |
| 1189–1259 | Division tabs, favorites, agent cards, list render | `ui/agent-list.js` + `storage/favorites.js` |
| 1261–1362 | Agent Creator Studio | `prompts/agent-creator.js` |
| 1364–1448 | Pipeline mode toggling, queue, share/load-from-URL | `workflows/pipeline.js` |
| 1458–1529 | Example pipelines, Auto-Build Team | `workflows/auto-build-team.js` |
| 1532–1665 | Pipeline execution + streaming render | `workflows/pipeline.js` + `api/streaming.js` |
| 1667–1702 | Export helpers (`downloadText`, `slug`, per-mode download fns) | `utils/helpers.js` |
| 1704–1872 | Chat screen: open agent, history persistence | `ui/chat.js` + `storage/chat-history.js` |
| 1744–1899 | File/folder attachment | `ui/chat.js` (kept colocated — it's chat-input behavior) |
| 1774–1840 | Code Runner (preview, workspace write, save) | `api/piston.js` + `ui/chat.js` (the Run button lives in chat rendering) |
| 1841–1848 | `toast()` | `ui/toast.js` (phase 1) → superseded by `notifications/notify.js` (phase: Account & ops) |
| 1849–1935 | Message actions, `renderChat` | `ui/chat.js` |
| 1936–1959 | `sendMsg` | `ui/chat.js` → `api/streaming.js` |
| 1961–2035 | `nextGroqModel`, `parseRetryAfter`, `buildEngineChain`, `groqFetchWithRetry` | `api/provider-chain.js` |
| 2037–2051 | `webSearch` | `api/web-search.js` |
| 2053–2136 | `streamGroqInto`, `streamOllamaInto` | `api/providers/groq.js`, `api/providers/ollama.js`, shared via `api/streaming.js` |
| 2138–2145 | `streamDemo` | `api/streaming.js` |
| 2147–2187 | Memory system | `storage/memory.js` |
| 2189–2304 | Settings UI, provider test functions, output bridges (Gist/webhook) | `ui/screens.js` (Settings) + `api/providers/test-provider.js` |
| 2307–2326 | Voice input | `ui/voice.js` |
| 2328–2368 | Code Runner execution (Piston) | `api/piston.js` |
| 2371–2485 | Debate mode | `workflows/debate.js` |
| 2488–2656 | Benchmarker | `workflows/benchmark.js` |
| 2658–2668 | Service worker registration | `main.js` |

## Phased rollout (matches the requested priority: Workspace tools → Knowledge & docs → Account & ops → Marketing/info)

Every phase below is independently shippable and independently revertible
(plain `git revert`, no migrations to undo since there's no database).
Each phase keeps `index.html` rendering correctly at every commit — the
app is never down mid-migration.

**Phase 0 — Mechanical extraction (no behavior change)**
Move CSS to `assets/css/app.css`; move data (`AGENTS`, `DIVISIONS`,
`EDITIONS`) to `agents/*.data.js`; move pure functions (`esc`, `md`,
`colorHex`, `slug`, etc.) to their modules per the table above, with
`<script type="module">` imports replacing inline references. Verify
visually + against the existing manual test checklist in
`CONTRIBUTING.md`. This phase also fixes the two confirmed bugs that are
cheap to fix regardless of refactor scope (see Audit Report): the 26
orphaned agent files, and the markdown-escaping XSS gap.

**Phase 1 — Workspace tools**
Split `workflows/*.js` and `ui/agent-list.js` out fully; add the
Dashboard and Workflow Builder screens on top of the now-modular pipeline
code; add a Prompt Library screen over `agents/agents.data.js` +
custom-agent storage.

**Phase 2 — Knowledge & docs**
Build the markdown-rendering Documentation Viewer and Knowledge Center
described in `04-DOCUMENTATION-REPORT.md`, sourced from `docs/`. Lowest
risk phase — purely additive, read-only UI over existing files.

**Phase 3 — Account & ops**
Notification Center (generalizes the existing `toast()`), Session History
(export/import on top of existing `storage/memory.js` and
`storage/chat-history.js`), API Management page (health-check dashboard
over the now-shared `test-provider.js` helper).

**Phase 4 — Marketing/info**
About page; landing page corrections (see Documentation Report for the
183/219/247 agent-count fix that should land here too, since landing.html
is the most user-visible place it's wrong).

## Rollback strategy

Because this stays build-free, "rollback" is just `git revert` on the
relevant commit(s) — there is no compiled artifact, deploy pipeline
change, or database migration to unwind. The GitHub Pages workflow
(`.github/workflows/deploy-pages.yml`) is untouched by this plan (see
`05-DEPLOYMENT-AND-PAGES-VALIDATION.md`), so any phase can be reverted
independently without affecting the others.
