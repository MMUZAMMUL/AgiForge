# Documentation Report

Inventory of every markdown/knowledge file in the repo, the stale claims
found while cross-referencing them against each other and against git
history, and the design for the in-app "documentation engine" requested
under Knowledge & docs.

## Inventory

| File | Content |
|---|---|
| `README.md` (root) | Placeholder only — literally the text "in process". No real content. |
| `assets/README.md` | Also a near-empty stub. |
| `CHANGELOG.md` | Real release history v1.0.0 → Unreleased; tracks agent-count changes, feature additions, monetization features. |
| `CONTRIBUTING.md` | Contributor guide: no-build/no-dependency rules, agent file format, registration steps, mobile-first testing requirement. |
| `MONETIZATION.md` | Describes a 5-tier revenue plan (freemium, credits, lifetime unlock, marketplace, templates) built on Supabase auth + Lemon Squeezy/Paddle/Gumroad payments and "183 SEO landing pages." None of this is implemented in the current app. |
| `docs/AGENTS.md` | Full roster catalog, claims "183 agents across 16 divisions" (division counts in the doc do sum to 183 — but that's not what's on disk; see below). |
| `docs/ARCHITECTURE.md` | Accurate description of the single-file/zero-build design and the GitHub-raw agent-fetch pattern; provider list is stale (only lists Groq/Ollama, missing Cerebras/Gemini/OpenRouter which `CLAUDE.md` and the code both have). |
| `docs/FEATURES.md` | Accurate feature tour of the 6 interaction modes; claims "183 specialists." |
| `docs/DEPLOYMENT.md` | Accurate static-deploy guide for Pages/Netlify/Vercel/local — no contradictions found. |
| `.github/PULL_REQUEST_TEMPLATE.md`, `.github/ISSUE_TEMPLATE/*.md` | Standard templates, no contradictions. |
| `supabase/schema.sql` | Intact SQL schema (`profiles`, `reviews`, `app_config` with RLS) for the removed auth/Pro-plan system — orphaned (see Audit Report §3). |
| `landing.html` | Marketing page. Claims "219 AI Specialists" in title/meta/hero/footer (10+ places), but its own division-chip breakdown sums to 183. Internally contradictory. Pricing section references Gumroad/Lemon Squeezy purchase buttons that point at empty/unconfigured store URLs. |
| `CLAUDE.md` | Otherwise accurate and current (this audit's own grounding document), except it states Supabase "handles optional accounts, Pro plan tracking, and reviews" as if active — it isn't (removed per commit `33a0e4f`, "Remove all auth/Supabase/Pro code"). |

## Confirmed stale/contradictory claims

**1. Supabase/auth/Pro-plan — confirmed stale across multiple docs.**
`MONETIZATION.md` and `CLAUDE.md` both describe Supabase-backed
auth/Pro-plan/reviews as live functionality. Git history
(`33a0e4f Remove all auth/Supabase/Pro code; add clean multi-provider
setup`) and the code audit (no Supabase code found anywhere in
`index.html`) confirm this was deliberately removed. `supabase/schema.sql`
is the only surviving artifact, and it's now dead.
*Action*: either delete `supabase/schema.sql` and rewrite the relevant
sections of `MONETIZATION.md`/`CLAUDE.md` to describe this as a
**roadmap idea**, not a shipped feature — or, if there's a near-term plan
to actually reintroduce auth, label it explicitly as "planned" with a
target. Either way, the current wording is misleading to anyone (human
or AI assistant) reading these docs to understand what the app does today.

**2. Agent count — four different numbers in the repo.**

| Source | Claim |
|---|---|
| `CLAUDE.md`, `docs/AGENTS.md`, `docs/FEATURES.md`, `docs/ARCHITECTURE.md` | 183 |
| `README.md`, `landing.html` | 219 |
| `AGENTS` array in `index.html` (actual, counted) | 221 |
| `.md` files under `agents/` (actual, counted) | 247 |
| `landing.html`'s own division-chip breakdown | sums to 183, contradicting its own "219" headline |
| Git history | one commit explicitly relabels "183→219"; an earlier commit mentions "expansion to 400+" that apparently never shipped; another mentions fixing a stale "217" |

*Action*: this is the same underlying bug as the 26 orphaned agent files
in the Audit Report. Once those 26 are wired into `AGENTS`, the true,
correct number is whatever `AGENTS.length` is at that point (247, if all
orphans are added) — update every doc and `landing.html` to match that
single source of truth, ideally by generating the displayed count from
`AGENTS.length` at render time instead of hardcoding it in five+ places.

**3. `README.md` is empty.** Should either get real content (project
description -> link to `landing.html` and `docs/`) or be explicitly kept
minimal with a one-line pointer — currently it's neither, just an
unintentional-looking stub.

**4. Non-functional monetization UI.** `landing.html`'s pricing buttons
point at unconfigured Gumroad/Lemon Squeezy URLs, and the "50+ specialists
free tier" framing doesn't correspond to any actual gating in the app
(all agents are unrestricted since auth was removed). Out of scope for
this refactor, but worth flagging since it's user-facing and misleading
today.

**5. Provider list is stale in `docs/ARCHITECTURE.md`.** It documents
only Groq and Ollama as providers; the actual failover chain (per
`CLAUDE.md` and the code audit) is Groq → Cerebras → Gemini → OpenRouter
→ Ollama.

## External services referenced anywhere in the repo

Groq, Cerebras, Gemini, OpenRouter, Ollama (all LLM inference/failover) ·
Brave Search (optional web search) · Piston/`emkc.org` (code execution) ·
GitHub Raw (agent prompt fetch) · Supabase (orphaned, see above) ·
Gumroad, Lemon Squeezy, Paddle (payment processors, unconfigured) ·
GitHub Pages (hosting) · GitHub Gist, Zapier (output-bridge integrations,
present in code/`CLAUDE.md` but not all current in docs).

## Design: in-app Documentation Viewer / Knowledge Center

(Implementation deferred to the "Knowledge & docs" phase — design only.)

- New screen, `ui/screens.js` registers it the same way existing screens
  are registered (no router needed).
- Source of truth: the `docs/` folder, fetched at runtime the same way
  agent prompts already are — `fetch('./docs/<file>.md')` for same-origin
  files (no need for the `raw.githubusercontent.com` indirection used for
  agent prompts, since `docs/` ships in the same deploy as `index.html`).
- Rendering: reuse the hardened `ui/render.js` `md()` function from
  Phase 0 (same XSS fix applies here — repo docs are trusted today, but
  there's no reason to maintain two markdown renderers).
- Navigation: a static category list seeded from the table in this
  report (Architecture, Features, Deployment, Agents, Contributing,
  Changelog, Refactor plan) — no need for a generic file-tree walker
  given the doc set is small and known.
- Search: simple client-side substring search across the fetched
  markdown text (no index needed at this scale — under 15 files).
- Cross-references: relative markdown links (e.g.
  `[ARCHITECTURE.md](ARCHITECTURE.md)`, already used in `FEATURES.md`)
  should resolve to in-app navigation rather than a raw GitHub URL —
  intercept clicks on links matching `*.md` and route to the viewer
  instead of letting the browser navigate away.
- Version display: show the file's `git` last-modified info isn't
  available client-side without an API call; simplest build-free option
  is a manually maintained "last updated" line per doc, or omit version
  display rather than add a GitHub API dependency for it.
