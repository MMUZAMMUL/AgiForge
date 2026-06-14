# Changelog

All notable changes to AgentForge are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/).

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
