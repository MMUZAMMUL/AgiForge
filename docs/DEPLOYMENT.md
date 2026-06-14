# Deployment

AgentForge is a static site — a single `index.html` plus the `agents/` folder.
It can be hosted anywhere that serves static files. No build step is required.

## GitHub Pages (recommended)

The repo includes `.github/workflows/deploy-pages.yml`, which deploys the site on
every push to `main`.

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. The site goes live at `https://<user>.github.io/<repo>/`
   — here: <https://mmuzammul.github.io/Agi-forge/>.

A `.nojekyll` file is included so GitHub Pages serves the files as-is without
running Jekyll.

> **Note on agent prompts:** the app fetches prompts from
> `raw.githubusercontent.com/.../main/agents/...`, so the `agents/` folder must be
> present on the **`main`** branch for the live app to load full prompts. Without
> it, the app falls back to short descriptions.

## Netlify

1. Connect the repository (or drag-and-drop the folder).
2. Build command: *none*. Publish directory: `/` (root).
3. Deploy.

## Vercel

1. Import the repository.
2. Framework preset: **Other**. Build command: *none*. Output directory: root.
3. Deploy.

## Local

```bash
git clone https://github.com/MMUZAMMUL/Agi-forge.git
cd Agi-forge
python3 -m http.server 8080
# visit http://localhost:8080
```

You can also open `index.html` directly as a file, though serving over HTTP is
recommended so prompt fetches and APIs behave like production.
