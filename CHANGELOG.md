# Changelog

All notable changes to AgentForge are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

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
