# Deployment Report & GitHub Pages Validation

## Current deployment (verified, unchanged by this plan)

- `.github/workflows/deploy-pages.yml` triggers on push to `main` (and
  manual dispatch), checks out the repo, and uploads the **entire repo
  root** as the Pages artifact — no build step, no `npm install`, no
  compile.
- `.nojekyll` is present, so Pages serves files as-is without Jekyll
  post-processing.
- Live URL: `https://mmuzammul.github.io/Agi-forge/`.
- Agent prompts are fetched at runtime from
  `raw.githubusercontent.com/mmuzammul/Agi-forge/main/agents/...`, which
  means the `agents/` folder must exist on `main` (already documented in
  `docs/DEPLOYMENT.md`).

## Why this plan doesn't touch deployment

Because the architecture plan stays build-free (native ES modules, plain
CSS files, no bundler/compiler), the deploy workflow needs **zero
changes**. Every file the new module structure adds (`app/*.js`,
`assets/css/app.css`, new `docs/refactor/*.md`) is just another static
file in the repo root tree — `actions/upload-pages-artifact@v3` picks
them up automatically since it uploads `path: .`.

This was the deciding factor in the build-approach choice made before
this plan was written: introducing TypeScript + a bundler would have
required adding a build job to this workflow (compile → upload `dist/`
instead of repo root), which is a meaningfully bigger and riskier change
to a production deploy pipeline than the module-based reorganization
this plan describes.

## GitHub Pages compatibility checklist

| Requirement | Status under this plan |
|---|---|
| `index.html` remains entry point | ✅ stays at repo root, becomes a thin shell |
| No server dependency | ✅ unchanged — still 100% client-side |
| Static deployment supported | ✅ unchanged workflow |
| Existing URLs keep working | ✅ `index.html`, `landing.html` paths unchanged; new screens are tabs within `index.html`, not new URLs |
| Agent prompt fetch path | ✅ unchanged — `agents/` folder structure and `GITHUB_RAW` pattern untouched |
| Relative paths under a repo subpath (`/Agi-forge/`) | ⚠️ verify — new `app/*.js` and `assets/css/app.css` references in `index.html` must use relative paths (`./app/main.js`, not `/app/main.js`), matching how `manifest.webmanifest`/icons are already referenced. This is the one concrete thing to double-check during Phase 0 implementation, not a design gap. |
| Service worker cache list | ⚠️ `sw.js`'s `SHELL` array currently lists only `manifest.webmanifest`/icons/logo. If `assets/css/app.css` should be available offline, add it to `SHELL` during Phase 0. Not adding it isn't broken — the existing cache-first/network-first fetch handler will cache it on first load regardless — but explicit shell precaching is more reliable offline-first behavior. |

## Netlify / Vercel / local

No changes needed to `docs/DEPLOYMENT.md`'s guidance for these — they
already document "no build step," which remains true after this plan.

## Validation plan once Phase 0 lands

Since there's no CI build to fail loudly, validation is manual (per
existing project convention — no test suite, no linter):

1. Serve locally (`python3 -m http.server 8080`), confirm all 6
   interaction modes still work end-to-end (chat, pipeline, auto-build,
   debate, benchmark, code runner).
2. Confirm the relative-path checklist item above by testing under a
   subpath, not just `localhost:8080/` — e.g. serve from a folder so the
   app is reachable at `http://localhost:8080/Agi-forge/index.html`,
   mirroring the real Pages URL structure.
3. Push Phase 0 to a branch, deploy via `workflow_dispatch` (manual
   trigger) on that branch's Pages environment if available, or merge to
   a throwaway branch pointed at a test Pages site, before merging to
   `main` — avoids validating directly against production.
4. Mobile check at 375px viewport per `CLAUDE.md`'s existing convention.
