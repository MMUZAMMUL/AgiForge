// RepoDocs AI — popup UI logic. Classic script, no build step.

const SETTINGS_KEY = 'repodocs_settings';

const els = {
  setupView: document.getElementById('setup-view'),
  progressView: document.getElementById('progress-view'),
  doneView: document.getElementById('done-view'),
  errorView: document.getElementById('error-view'),

  keyGroq: document.getElementById('key-groq'),
  keyCerebras: document.getElementById('key-cerebras'),
  keyGemini: document.getElementById('key-gemini'),
  keyOpenrouter: document.getElementById('key-openrouter'),
  repoInput: document.getElementById('repo-input'),
  githubToken: document.getElementById('github-token'),
  captureScreenshot: document.getElementById('capture-screenshot'),
  generateBtn: document.getElementById('generate-btn'),
  setupError: document.getElementById('setup-error'),

  progressRepo: document.getElementById('progress-repo'),
  progressStage: document.getElementById('progress-stage'),
  progressTimer: document.getElementById('progress-timer'),
  cancelBtn: document.getElementById('cancel-btn'),

  doneRepo: document.getElementById('done-repo'),
  downloadPdfBtn: document.getElementById('download-pdf-btn'),
  downloadDocxBtn: document.getElementById('download-docx-btn'),
  newJobBtn: document.getElementById('new-job-btn'),

  errorMessage: document.getElementById('error-message'),
  retryBtn: document.getElementById('retry-btn'),
};

let timerInterval = null;
let currentResult = null;
let currentRepoLabel = '';

function showView(name) {
  els.setupView.hidden = name !== 'setup';
  els.progressView.hidden = name !== 'progress';
  els.doneView.hidden = name !== 'done';
  els.errorView.hidden = name !== 'error';
}

function readSettings() {
  return {
    groq: els.keyGroq.value.trim(),
    cerebras: els.keyCerebras.value.trim(),
    gemini: els.keyGemini.value.trim(),
    openrouter: els.keyOpenrouter.value.trim(),
    githubToken: els.githubToken.value.trim(),
    repoInput: els.repoInput.value.trim(),
    captureScreenshot: els.captureScreenshot.checked,
  };
}

async function saveSettings() {
  await chrome.storage.local.set({ [SETTINGS_KEY]: readSettings() });
}

async function loadSettings() {
  const { [SETTINGS_KEY]: s } = await chrome.storage.local.get(SETTINGS_KEY);
  if (!s) return;
  els.keyGroq.value = s.groq || '';
  els.keyCerebras.value = s.cerebras || '';
  els.keyGemini.value = s.gemini || '';
  els.keyOpenrouter.value = s.openrouter || '';
  els.githubToken.value = s.githubToken || '';
  els.repoInput.value = s.repoInput || '';
  els.captureScreenshot.checked = Boolean(s.captureScreenshot);
}

function sendToBackground(type, payload) {
  return new Promise(resolve => {
    chrome.runtime.sendMessage({ target: 'background', type, payload }, resolve);
  });
}

function startTimer(startedAt) {
  stopTimer();
  function tick() {
    const elapsed = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    els.progressTimer.textContent = `${m}:${String(s).padStart(2, '0')}`;
  }
  tick();
  timerInterval = setInterval(tick, 1000);
}
function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

function renderJob(job) {
  if (!job || job.status === 'idle') {
    stopTimer();
    showView('setup');
    return;
  }
  if (job.status === 'running') {
    showView('progress');
    els.progressRepo.textContent = currentRepoLabel ? `(${currentRepoLabel})` : '';
    els.progressStage.textContent = job.stage || 'Working…';
    if (job.startedAt) startTimer(job.startedAt);
    return;
  }
  if (job.status === 'done') {
    stopTimer();
    showView('done');
    currentResult = job.result;
    els.doneRepo.textContent = job.result?.repoName ? `${job.result.repoName} — ready to download.` : 'Ready to download.';
    return;
  }
  if (job.status === 'error') {
    stopTimer();
    showView('error');
    els.errorMessage.textContent = job.error || 'Unknown error.';
  }
}

async function init() {
  await loadSettings();
  const job = await sendToBackground('job:status');
  renderJob(job);
}

chrome.runtime.onMessage.addListener(msg => {
  if (msg?.target === 'popup' && msg.type === 'job:update') renderJob(msg.job);
});

els.generateBtn.addEventListener('click', async () => {
  els.setupError.hidden = true;
  const settings = readSettings();
  const hasKey = settings.groq || settings.cerebras || settings.gemini || settings.openrouter;
  if (!hasKey) {
    els.setupError.textContent = 'Add at least one free AI provider key above.';
    els.setupError.hidden = false;
    return;
  }
  if (!settings.repoInput) {
    els.setupError.textContent = 'Enter a GitHub repository URL or owner/repo.';
    els.setupError.hidden = false;
    return;
  }

  await saveSettings();

  if (settings.captureScreenshot) {
    await sendToBackground('request-screenshot-permission');
  }

  currentRepoLabel = settings.repoInput;
  els.generateBtn.disabled = true;
  await sendToBackground('job:start', {
    repoInput: settings.repoInput,
    keys: { groq: settings.groq, cerebras: settings.cerebras, gemini: settings.gemini, openrouter: settings.openrouter },
    githubToken: settings.githubToken,
    captureScreenshot: settings.captureScreenshot,
  });
  els.generateBtn.disabled = false;
  showView('progress');
  els.progressStage.textContent = 'Starting…';
  startTimer(Date.now());
});

els.cancelBtn.addEventListener('click', async () => {
  await sendToBackground('job:cancel');
  showView('setup');
});

els.downloadPdfBtn.addEventListener('click', () => {
  if (!currentResult) return;
  sendToBackground('download', { url: currentResult.pdfDataUrl, filename: `${currentResult.repoName}-documentation.pdf` });
});
els.downloadDocxBtn.addEventListener('click', () => {
  if (!currentResult) return;
  sendToBackground('download', { url: currentResult.docxDataUrl, filename: `${currentResult.repoName}-documentation.docx` });
});

els.newJobBtn.addEventListener('click', async () => {
  await chrome.storage.local.set({ repodocs_job: { status: 'idle', stage: '', result: null, error: null } });
  showView('setup');
});
els.retryBtn.addEventListener('click', async () => {
  await chrome.storage.local.set({ repodocs_job: { status: 'idle', stage: '', result: null, error: null } });
  showView('setup');
});

init();
