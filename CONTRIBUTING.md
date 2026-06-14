# Contributing to AgentForge

Thanks for your interest in improving AgentForge! This project is intentionally
**dependency-free and build-free** — please keep it that way.

## Ground rules

- **No build tooling.** No npm, bundlers, frameworks, or transpilers. The app is
  plain HTML/CSS/JS in a single `index.html`.
- **No runtime dependencies.** Everything ships from this repo or free public APIs.
- **Keep it mobile-first.** Test changes at a phone viewport width first.

## Adding a new specialist agent

Adding an agent is just adding one Markdown file.

1. Create `agents/<division>/<division>-<slug>.md` using this front-matter format:

   ```markdown
   ---
   name: Backend Architect
   description: One-line summary of what this specialist does best.
   division: engineering
   emoji: 🏗️
   color: "#3b82f6"
   ---

   # Backend Architect

   Full system prompt goes here…
   ```

2. Register the agent's metadata in the `AGENTS` array inside `index.html`
   (`id`, `name`, `division`, `description`, `color`, `emoji`, `vibe`). The
   `id` must equal the file name without `.md`, and `division` must match the
   folder.

3. Verify the fetch path resolves:
   `agents/<division>/<id>.md`.

## Improving an existing agent

Edit the relevant file under `agents/`. Prompts are plain Markdown — no code
changes needed unless you also change the one-line description shown in the UI
(which lives in the `AGENTS` array in `index.html`).

## Working on the app

- Open `index.html` directly, or run `python3 -m http.server 8080` and visit
  `http://localhost:8080`.
- Match the existing code style: vanilla JS, small focused functions, the amber
  accent (`--accent:#f59e0b`).

## Pull requests

- One logical change per PR.
- Describe what changed and how you tested it on mobile.
- For new agents, list the division and confirm the file path matches the `id`.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for how the pieces fit together.
