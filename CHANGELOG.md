# Changelog

All notable changes to AgentForge are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Security
- **Closed an XSS gap in markdown rendering.** `md()` now escapes raw HTML in
  ordinary text before applying its limited markdown→HTML transform, so an LLM
  response containing something like `<img onerror=…>` outside a code fence can
  no longer execute when inserted via `innerHTML`. Code fences and inline code
  are preserved.
- **Added a Content-Security-Policy** meta tag (locks down `object-src`,
  `base-uri`, `frame-ancestors`, restricts script/style/connect sources) as
  defense-in-depth behind the escaping fix.

### Performance
- **Streaming responses no longer re-parse markdown on every token.** Chat,
  pipeline, and debate now coalesce streaming re-renders to one paint per
  animation frame, with a direct final render on completion — removes the
  O(n²) re-parse on long outputs (audit §6).

### Changed
- **Collapsed the five provider connectivity tests** into one `testEndpoint()`
  helper (audit §4); behavior unchanged, and the Gemini key is now URL-encoded
  in its query string.

### Accessibility
- **First accessibility pass.** Added ARIA labels to all icon-only buttons
  (header nav, chat toolbar, attach/voice/send), `aria-label`s to every form
  control in Setup, Settings, and the Agent Creator (previously placeholder-only),
  and `aria-pressed` state to the provider, division-filter, and pipeline-mode
  toggles. Agent cards are now keyboard-operable (`role="button"`, `tabindex`,
  Enter/Space activation) with a visible `:focus-visible` ring. Streaming and
  status regions (chat log, pipeline/debate progress, connection results) are
  now `aria-live` so screen readers announce updates.

### Added
- **26 previously-unreachable specialists are now wired into the app.** Valid
  agent files existed on disk but were missing from the `AGENTS` array; the app
  now exposes the full roster.

### Fixed
- **Agent count corrected to 247 everywhere** (app UI, landing page, manifest,
  docs) — previously a mix of 183/219/221. Division tab counts recomputed from
  the actual roster.
- Removed a stale `supabase.co` entry from the service worker's host list (left
  over from the removed auth system).

### Added (earlier in this cycle)
- **Multi-provider auto fail-over** — optional free backup engines (OpenRouter).
  When an engine is rate-limited, AgentForge switches instantly across providers
  so pipelines and long jobs no longer stall on 429s.
- **Message Copy & Quote** on every chat message.
- **Continue in Chat** after a pipeline completes.
- **Attach a local folder / repo** (📁) as read-only context.
- **Build & test**: ⬚ Preview opens generated HTML in a new tab; 💾 Save writes a
  code block into a chosen local folder (Chrome/Edge desktop via File System
  Access API; downloads as a fallback elsewhere).
- **Favorites (⭐)** with a Popular shelf on the home screen.

### Fixed
- Division tab counts corrected to the real per-division totals (e.g. Engineering
  27, Marketing 25, Specialized 42).

### Changed
- **Clean, self-contained branding throughout the UI.** Underlying inference
  engines are now shown as branded tiers — **Forge Flash / Forge Max / Forge
  Lite** — and providers as **Cloud / Local / Demo**. Removed third-party and
  model names from all user-facing copy. Fixed stale "217" → **183** everywhere.

### Added
- **SEO**: canonical URLs, Open Graph + Twitter cards, JSON-LD structured data
  (`WebApplication` / `SoftwareApplication`), keywords, `robots.txt`, and
  `sitemap.xml`.
- **PWA support** — `manifest.webmanifest`, service worker (`sw.js`) with offline
  app shell + runtime caching, app icons, and iOS/Android install meta tags. The
  app is now installable to the home screen and works offline.
- **Marketing landing page** (`landing.html`) — hero, feature grid, division
  roster, pricing (free + one-time Pro packs / All-Access), and FAQ. Purchase
  buttons are wired to a configurable storefront (Gumroad / Lemon Squeezy).

## [3.0.0] — 2026-06-14

### Added
- All **183 specialist system prompts** published under `agents/<division>/`,
  fetched on demand by the app.
- Project documentation set under `docs/` — architecture, features, deployment,
  and the full agent catalog.
- `CONTRIBUTING.md`, `CHANGELOG.md`, `LICENSE` (MIT), brand logo, and GitHub
  issue/PR templates.

### Changed
- App is now **lightweight (~150 KB)** — agent prompts are fetched from the repo
  instead of being embedded in `index.html`.
- README rewritten for accuracy: correct agent count (183) and the 16 real
  divisions.

### Fixed
- Consolidated to a single GitHub Pages deploy workflow (removed a duplicate
  Jekyll workflow that raced on the same concurrency group).

## [2.0.0]

### Added
- Smart Groq rate-limit handling: 4-model rotation pool with automatic `429`
  back-off so pipelines run to completion.
- Benchmarker with impartial LLM-judge scoring.
- Markdown export across chat, pipeline, debate, and benchmark.

## [1.0.0]

### Added
- Initial AgentForge release: chat, agent pipelines, auto-build team, agent
  debate, code runner, web search, voice input, file attachment, and memory.
