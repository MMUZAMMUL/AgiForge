# RepoDocs AI — Project Documentation Generator

A browser extension (Manifest V3 — Chrome, Edge, Brave, and other Chromium browsers) that
points at any public GitHub repository and generates a professional, 5–10 page **PDF and
DOCX** document: an executive overview, architecture & tech-stack breakdown, a repository
structure diagram, a feature mindmap, setup/usage notes, testing notes, an optional live-app
screenshot, and a conclusion — all written by an AI model using *your own* free API key, and
assembled entirely client-side in your browser. Nothing is uploaded to any server.

## Install (unpacked, developer mode)

1. Open `chrome://extensions` (or `edge://extensions`, `brave://extensions`).
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked** and select this folder (`extensions/repo-doc-generator`).
4. Pin the extension and click its icon to open the popup.

> Firefox: Manifest V3 service workers and the `chrome.offscreen` API used here are Chromium-specific.
> A Firefox build would need a background page instead of a service worker and a different
> rasterization approach — not included in this v1.

## Get a free AI provider key

You only need **one**:

| Provider | Free tier | Get a key |
|---|---|---|
| Groq | Yes, generous free tier | https://console.groq.com/keys |
| Cerebras | Yes | https://cloud.cerebras.ai/ |
| Google Gemini | Yes | https://aistudio.google.com/apikey |
| OpenRouter | Free models available | https://openrouter.ai/keys |

Paste it into the popup's "Connect a free AI provider" section. The key is stored only in
`chrome.storage.local` on your machine and is sent only to that provider's own API — never to
any third-party server.

## Using it

1. Add a provider key.
2. Paste a GitHub repo URL (or `owner/repo` shorthand) under "Point at a repository."
3. (Optional) Add a GitHub personal access token if you're documenting a large repo — this
   raises GitHub's API rate limit from 60 to 5,000 requests/hour and avoids rate-limit errors.
4. (Optional) Check "Try to capture a screenshot of the live app" if the repo links to a live
   deployment. This requests a one-time browser permission and briefly opens/closes a tab.
5. Click **Generate Documentation**. A progress view shows the current stage and an elapsed
   timer — full analysis typically takes a few minutes (GitHub fetch + tree walk + several
   AI-written sections + diagram rendering + PDF/DOCX assembly).
6. When done, click **Download PDF** and/or **Download DOCX**.

## How it works

- `background/github.js` — fetches repo metadata, branches, languages, the full file tree,
  README, and a dependency manifest (`package.json`, `requirements.txt`, etc.) via the GitHub
  REST API.
- `background/diagrams.js` — builds two SVG diagrams: a folder/file structure tree and a
  radial feature mindmap derived from the detected languages, top-level modules, branches, and
  manifest.
- `background/providers.js` — sends the gathered context to your chosen AI provider (with
  automatic failover across Groq → Cerebras → Gemini → OpenRouter if you've added more than
  one key) to write each documentation section.
- `offscreen/` — an MV3 offscreen document (the only context with a real DOM available to a
  service worker) rasterizes the SVG diagrams to PNG and assembles the final PDF (via
  vendored `jsPDF`) and DOCX (via vendored `docx.js`), entirely in-browser.
- `popup/` — the UI: provider keys, repo input, live progress, and download buttons. Job state
  is persisted to `chrome.storage.local` so it survives closing and reopening the popup.

## Known limitations

- Very large repositories (tens of thousands of files) will produce a truncated structure
  diagram and may need a GitHub token to avoid rate limiting.
- The live-app screenshot is best-effort: it requires the optional `<all_urls>` permission,
  briefly opens the target tab, and silently skips if the page doesn't finish loading in time.
- Private repositories require a GitHub token with appropriate access scopes.
- This is a v1 built for Chromium-based browsers; Firefox support would need a separate
  background-page build.
