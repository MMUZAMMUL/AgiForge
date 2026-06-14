# Features

A detailed tour of what AgentForge can do. Everything runs client-side in a single
`index.html`.

## 💬 Chat
Talk to any of the 183 specialists. Responses stream token-by-token. Each agent
carries a deep, role-specific system prompt — not a generic assistant persona.

## ⛓️ Agent Pipeline
Chain 2–6 specialists into a sequence. Each agent receives all previous outputs as
context and builds on them. Example: **Product Manager → Frontend Developer →
Brand Guardian → Growth Hacker** produces a coherent launch plan in one run.

## ✨ Auto-Build Team
Describe a goal in plain language. An orchestrator reads the entire roster and
selects the optimal agents in the right order, so you don't need to know which
specialists to pick.

## ⚔️ Agent Debate
Choose two specialists. They argue in rounds — a Proposer builds a position, a
Critic challenges it, the Proposer refines — until a battle-tested answer emerges.

## 📊 Benchmarker
Run the same prompt across several agents. An impartial judge model scores each
response on relevance, depth, and correctness (not length), so you can see which
specialist actually performs best for a task.

## ▶️ Code Runner
Every code block the AI produces gets a **Run** button. Execution happens via the
free Piston API across 70+ languages (Python, JavaScript, Go, Rust, Java, C++,
and more) — no local setup.

## 🌐 Web Search
Optionally give agents real-time information via the Brave Search API. Bring your
own free key and add it in Settings.

## 🎤 Voice Input
Tap the mic and speak; your words fill the message box. Uses the built-in Web
Speech API in Chrome and Safari — no extra install.

## 📎 File Attachment
Attach code files, CSVs, documents, or notes. The agent reads them as context.
Fully client-side via `FileReader` — nothing is uploaded.

## 🧠 Memory
Save any chat or pipeline output to persistent memory (`localStorage`). Review,
copy, or delete entries anytime.

## ⬇️ Export
Download any chat, pipeline, debate, or benchmark report as a `.md` file.

## 🔄 Smart Rate-Limit Handling
On Groq's free tier, if one model hits its per-minute token limit, AgentForge
waits the required time and rotates to another model in a 4-model pool — so
pipelines finish without manual retries. See
[`ARCHITECTURE.md`](ARCHITECTURE.md#rate-limit-handling-groq).
