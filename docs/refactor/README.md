# AgentForge Refactor — Planning Package

This folder is the output of a planning-only pass requested against the
"complete architecture refactor" ask. No application code was changed in
this pass — these are reviewable documents for the maintainer to approve
before any restructuring begins.

Two decisions were made up front, with the repo owner, before any of this
was written:

1. **Stay build-free.** The project's own docs (`CLAUDE.md`,
   `docs/ARCHITECTURE.md`) state "no build tooling, zero dependencies, no
   build step" as a deliberate design choice, not a gap. The original
   refactor request assumed TypeScript + a bundler; that's dropped in favor
   of native ES modules, which give code organization without a compiler.
2. **Plan first, build later.** The original request's ~11 new pages,
   doc engine, notifications, session import/export, API health dashboard,
   PWA polish, and security hardening add up to weeks of work. This pass
   produces the plan and the audit; implementation happens in scoped
   follow-ups, prioritized as: Workspace tools → Knowledge & docs →
   Account & ops → Marketing/info.

## Contents

| Doc | Covers |
|---|---|
| [01-ARCHITECTURE-PLAN.md](./01-ARCHITECTURE-PLAN.md) | New build-free module layout, folder tree, how every requested subsystem maps into it |
| [02-MIGRATION-REPORT.md](./02-MIGRATION-REPORT.md) | Line-by-line mapping of current `index.html` to new files, phased rollout, rollback plan |
| [03-AUDIT-REPORT.md](./03-AUDIT-REPORT.md) | Bugs, security findings, dead code, duplicate logic, broken refs, performance, accessibility, agent-roster data integrity |
| [04-DOCUMENTATION-REPORT.md](./04-DOCUMENTATION-REPORT.md) | Inventory of every `.md` file in the repo, stale/contradictory claims found, design for the in-app documentation viewer |
| [05-DEPLOYMENT-AND-PAGES-VALIDATION.md](./05-DEPLOYMENT-AND-PAGES-VALIDATION.md) | Why the current GitHub Pages deploy keeps working unchanged under this plan |

## Headline findings (detail in the linked docs)

- **Real bug**: 26 of 247 agent `.md` files have no entry in the `AGENTS`
  array in `index.html` — those specialists exist on disk but are
  unreachable from the UI.
- **Real bug**: the agent count is inconsistent across the repo —
  `CLAUDE.md`/`docs/*.md` say 183, `README.md`/`landing.html` say 219,
  the `AGENTS` array actually has 221 entries, and 247 `.md` files exist
  on disk.
- **Real security gap**: `md()` (the markdown renderer in `index.html`)
  escapes inline code but not raw HTML tags inside paragraph text, so an
  agent/LLM response containing something like `<img onerror=...>` can
  execute when rendered via `innerHTML`. No CSP is set to backstop this.
- **Stale docs / dead code**: `MONETIZATION.md` and `CLAUDE.md` still
  describe Supabase-backed auth and Pro-plan gating as if active, but
  git history shows that code was deliberately removed. `supabase/schema.sql`
  is now orphaned.
- **No structural surprises**: the existing single-file app is well
  organized internally (the audit found no leftover dead branches besides
  the Supabase docs/schema) — this is a genuine modularization job, not a
  rescue job.
