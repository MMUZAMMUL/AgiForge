// RepoDocs AI — MV3 service worker. Orchestrates: GitHub analysis -> AI writing -> diagram
// rasterization (via offscreen doc) -> PDF/DOCX assembly (via offscreen doc) -> download.
import { analyzeRepository } from './github.js';
import { generateSection, hasAnyKey } from './providers.js';
import { buildStructureDiagram, buildMindmap } from './diagrams.js';

const JOB_KEY = 'repodocs_job';
const OFFSCREEN_URL = 'offscreen/offscreen.html';
let cancelRequested = false;

async function getJob() {
  const { [JOB_KEY]: job } = await chrome.storage.local.get(JOB_KEY);
  return job || { status: 'idle', stage: '', result: null, error: null };
}

async function setJob(patch) {
  const job = await getJob();
  const next = { ...job, ...patch };
  await chrome.storage.local.set({ [JOB_KEY]: next });
  chrome.runtime.sendMessage({ target: 'popup', type: 'job:update', job: next }).catch(() => {});
  return next;
}

async function setStage(stage) {
  await setJob({ stage });
}

// ---------- keepalive ----------
chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === 'repodocs-keepalive') chrome.storage.local.get('noop');
});

function startKeepalive() {
  chrome.alarms.create('repodocs-keepalive', { periodInMinutes: 0.5 });
}
function stopKeepalive() {
  chrome.alarms.clear('repodocs-keepalive');
}

// ---------- offscreen document ----------
async function ensureOffscreen() {
  const existing = await chrome.runtime.getContexts({ contextTypes: ['OFFSCREEN_DOCUMENT'] });
  if (existing.length > 0) return;
  await chrome.offscreen.createDocument({
    url: OFFSCREEN_URL,
    reasons: ['DOM_PARSER', 'BLOBS'],
    justification: 'Rasterize SVG diagrams to PNG and assemble the final PDF/DOCX files.',
  });
}

function sendToOffscreen(type, payload) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ target: 'offscreen', type, payload }, response => {
      if (chrome.runtime.lastError) return reject(new Error(chrome.runtime.lastError.message));
      if (response?.error) return reject(new Error(response.error));
      resolve(response?.result);
    });
  });
}

// ---------- live screenshot (best-effort, opt-in) ----------
async function captureLiveScreenshot(url) {
  try {
    const granted = await chrome.permissions.contains({ origins: ['<all_urls>'] });
    if (!granted) return null;
    const tab = await chrome.tabs.create({ url, active: true });
    await new Promise(resolve => {
      const listener = (tabId, info) => {
        if (tabId === tab.id && info.status === 'complete') {
          chrome.tabs.onUpdated.removeListener(listener);
          resolve();
        }
      };
      chrome.tabs.onUpdated.addListener(listener);
      setTimeout(resolve, 8000);
    });
    await new Promise(r => setTimeout(r, 1200));
    const dataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' });
    await chrome.tabs.remove(tab.id).catch(() => {});
    return dataUrl;
  } catch {
    return null;
  }
}

// ---------- AI section writing ----------
const SECTION_SYSTEM_PROMPT = `You are a senior technical writer producing a professional project-documentation PDF for developers and stakeholders. Write in clear, confident, selling-but-accurate prose. No markdown headers, no code fences — short paragraphs and occasional "- " bullet lines only. Stay factual based only on the provided context; never invent features, metrics, or URLs.`;

async function writeSection(keys, label, context, onStatus) {
  const userPrompt = `Section: ${label}\n\nProject context:\n${context}\n\nWrite the "${label}" section of the documentation (120-220 words).`;
  try {
    return await generateSection(keys, SECTION_SYSTEM_PROMPT, userPrompt, onStatus);
  } catch (err) {
    return `(AI writing unavailable for this section: ${err.message})`;
  }
}

function buildContextBlob(analysis) {
  const { meta, languages, manifest, readme } = analysis;
  const langs = Object.keys(languages || {}).slice(0, 6).join(', ') || 'unknown';
  return [
    `Name: ${meta.full_name || analysis.repo}`,
    `Description: ${meta.description || '(none provided)'}`,
    `Primary languages: ${langs}`,
    `Stars: ${meta.stargazers_count ?? 'n/a'}  Forks: ${meta.forks_count ?? 'n/a'}  License: ${meta.license?.name || 'unspecified'}`,
    manifest ? `Manifest (${manifest.file}):\n${manifest.content.slice(0, 1200)}` : 'No dependency manifest detected.',
    `README excerpt:\n${(readme || '').slice(0, 2500)}`,
  ].join('\n\n');
}

function deriveMindmapItems(analysis) {
  const items = [];
  const langs = Object.keys(analysis.languages || {}).slice(0, 5);
  if (langs.length) items.push({ label: 'Tech Stack', children: langs });

  const topDirs = [...new Set(analysis.tree.filter(t => t.type === 'tree' && !t.path.includes('/')).map(t => t.path))].slice(0, 5);
  if (topDirs.length) items.push({ label: 'Project Modules', children: topDirs });

  if (analysis.manifest) items.push({ label: 'Dependencies', children: [analysis.manifest.file] });
  if (analysis.branches?.length) items.push({ label: 'Branches', children: analysis.branches.slice(0, 4).map(b => b.name) });
  if (analysis.liveUrl) items.push({ label: 'Live App', children: ['Deployed & reachable'] });
  items.push({ label: 'Documentation', children: ['README', 'AI-generated breakdown'] });
  items.push({ label: 'License', children: [analysis.meta.license?.name || 'Unspecified'] });
  return items;
}

// ---------- main job ----------
async function runJob({ repoInput, keys, githubToken, captureScreenshot }) {
  cancelRequested = false;
  startKeepalive();
  await setJob({ status: 'running', stage: 'Starting…', result: null, error: null, startedAt: Date.now() });

  try {
    if (!hasAnyKey(keys)) throw new Error('Add at least one free AI provider key in the popup before generating.');

    const analysis = await analyzeRepository(repoInput, githubToken, stage => setStage(stage));
    if (cancelRequested) throw new Error('Cancelled.');

    await setStage('Building repository structure diagram…');
    const structureSvg = buildStructureDiagram(analysis.tree, analysis.repo);

    await setStage('Building feature mindmap…');
    const mindmapItems = deriveMindmapItems(analysis);
    const mindmapSvg = buildMindmap(analysis.repo, mindmapItems);

    const context = buildContextBlob(analysis);
    const sections = {};
    const sectionLabels = [
      'Executive Overview',
      'Architecture & Tech Stack',
      'Features & Functionality',
      'Setup & Usage',
      'Testing & Quality Notes',
      'Conclusion & Recommendations',
    ];
    for (const label of sectionLabels) {
      if (cancelRequested) throw new Error('Cancelled.');
      await setStage(`Writing "${label}" (AI)…`);
      sections[label] = await writeSection(keys, label, context, s => setStage(`${label}: ${s}`));
    }

    let screenshotDataUrl = null;
    if (captureScreenshot && analysis.liveUrl) {
      await setStage('Capturing live app screenshot…');
      screenshotDataUrl = await captureLiveScreenshot(analysis.liveUrl);
    }

    await setStage('Rendering diagrams to images…');
    await ensureOffscreen();
    const images = await sendToOffscreen('rasterize', { structureSvg, mindmapSvg });

    await setStage('Assembling PDF…');
    const pdfDataUrl = await sendToOffscreen('build-pdf', {
      analysis: { repo: analysis.repo, owner: analysis.owner, meta: analysis.meta },
      sections,
      images,
      screenshotDataUrl,
    });

    await setStage('Assembling DOCX…');
    const docxDataUrl = await sendToOffscreen('build-docx', {
      analysis: { repo: analysis.repo, owner: analysis.owner, meta: analysis.meta },
      sections,
      images,
      screenshotDataUrl,
    });

    await setJob({
      status: 'done',
      stage: 'Done',
      finishedAt: Date.now(),
      result: { repoName: analysis.repo, pdfDataUrl, docxDataUrl },
    });
  } catch (err) {
    await setJob({ status: 'error', stage: 'Failed', error: err.message, finishedAt: Date.now() });
  } finally {
    stopKeepalive();
  }
}

// ---------- message router ----------
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.target !== 'background') return;

  if (msg.type === 'job:start') {
    runJob(msg.payload);
    sendResponse({ ok: true });
    return;
  }
  if (msg.type === 'job:status') {
    getJob().then(sendResponse);
    return true;
  }
  if (msg.type === 'job:cancel') {
    cancelRequested = true;
    sendResponse({ ok: true });
    return;
  }
  if (msg.type === 'download') {
    chrome.downloads.download({ url: msg.payload.url, filename: msg.payload.filename, saveAs: false }, () => {
      sendResponse({ ok: !chrome.runtime.lastError, error: chrome.runtime.lastError?.message });
    });
    return true;
  }
  if (msg.type === 'request-screenshot-permission') {
    chrome.permissions.request({ origins: ['<all_urls>'] }, granted => sendResponse({ granted }));
    return true;
  }
});
