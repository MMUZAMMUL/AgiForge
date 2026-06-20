<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 位 AI 专家 · 智能体管道 · 自动组队 · 浏览器直接运行 · 免费**

一个移动优先的智能体 AI 平台，完全在浏览器中运行——无需服务器、无需安装、无需构建、零成本。由免费的 [Groq](https://console.groq.com) 云推理或本地 [Ollama](https://ollama.com) 模型驱动。

[**🌐 打开在线应用 →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#自托管)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#架构)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

🌐 [English](README.md) · **中文** · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> 本文档为社区翻译版本，如有出入请以 [英文版 README](README.md) 为准。

## 为什么选择 AgentForge

| | AgentForge | 普通 AI 聊天 |
|---|:---:|:---:|
| 247 位领域专家，每个都是深度专家提示词 | ✅ | ❌ |
| 自动为你的目标组建最佳**团队** | ✅ | ❌ |
| 多智能体**管道**（链式推理） | ✅ | ❌ |
| 智能体对智能体**辩论**以优化答案 | ✅ | ❌ |
| LLM 评分的**基准测试器** | ✅ | ❌ |
| **运行**它编写的代码（支持 70+ 种语言） | ✅ | ❌ |
| 语音输入 · 文件附件 · 记忆 · 导出 | ✅ | 部分支持 |
| 零安装、零依赖、永久免费 | ✅ | ❌ |

---

## 功能特性

- **💬 聊天** — 与任意专家进行流式对话。
- **⛓️ 智能体管道** — 串联 2–6 位专家；每一步都基于前一步的输出。一键运行完整发布流程——产品经理 → 前端开发 → 品牌守护者 → 增长黑客。
- **✨ 自动组队** — 描述你的目标；编排器读取完整名册，按正确顺序组建合适的智能体。
- **⚔️ 智能体辩论** — 两位专家轮流辩论（提议者构建，批评者挑战），直到产出经过千锤百炼的答案。
- **📊 基准测试器** — 同一提示词在多个智能体上运行；由公正的评判模型对相关性、深度和正确性打分。
- **▶️ 代码运行器** — 每个代码块都有运行按钮，通过免费的 Piston API 执行（支持 70+ 种语言）。
- **🌍 10 语言着陆页** — [着陆页](https://mmuzammul.github.io/AgiForge/landing.html) 可在英语、中文、西班牙语、印地语、阿拉伯语、葡萄牙语、法语、俄语、日语和德语之间即时切换——纯客户端实现，无需刷新，不依赖第三方翻译服务。
- **🌐 网页搜索** — 可选的实时搜索，通过 Brave Search API（需自备密钥）。
- **🎤 语音输入** — 基于 Web Speech API，Chrome 和 Safari 内置支持。
- **📎 文件附件** — 读取代码、CSV 和文档作为上下文，完全在客户端完成。
- **🧠 记忆** — 在 `localStorage` 中保存、查看和删除输出结果。
- **⬇️ 导出** — 将任意聊天、管道、辩论或基准测试结果下载为 `.md` 文件。
- **🔄 智能限流处理** — 在 Groq 免费层级上轮换 4 个模型池并自动等待 `429` 限流，让管道任务无需人工干预即可完成。

完整功能说明见 [`docs/FEATURES.md`](docs/FEATURES.md)。

---

## 专家名册 — 16 个分类，247 位专家

| 分类 | 数量 | 分类 | 数量 |
|---|:---:|---|:---:|
| ⭐ 特色专家 | 45 | 🔐 安全 | 12 |
| 🏗️ 工程 | 36 | 🤝 销售 | 12 |
| 📣 市场营销 | 32 | 🧪 测试 | 10 |
| 🗺️ GIS 与空间 | 10 | 🎨 设计 | 11 |
| 💰 金融 | 9 | 📈 付费媒体 | 7 |
| 🎓 学术 | 8 | 📋 项目管理 | 7 |
| 🛟 客户支持 | 7 | 📦 产品 | 5 |
| 🎮 游戏开发 | 5 | 🥽 空间计算 | 3 |

每个智能体都是 [`agents/<division>/`](agents/) 下结构化的 Markdown 系统提示词。完整目录见 [`docs/AGENTS.md`](docs/AGENTS.md)。

---

## 快速开始（手机端，约 2 分钟）

1. 在手机上打开 **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)**。
2. 在 [console.groq.com](https://console.groq.com) 获取**免费的 Groq API 密钥**（Google 登录，无需信用卡）。
3. 将密钥粘贴到 **设置 → 连接** 中。
4. 选择一位专家开始构建。点击**添加到主屏幕**获得类似 App 的体验。

> 你的密钥只会保存在浏览器的 `localStorage` 中——永远不会上传到任何服务器。

---

## AI 服务提供方

| 提供方 | 费用 | 配置方式 |
|---|---|---|
| **Groq** | 免费层级 | 在应用中粘贴 API 密钥 |
| **Ollama** | 免费（本地） | 在同一网络的机器上运行 |
| **Demo** | 免费 | 无 AI 调用 — 仅预览界面 |

---

## 架构

AgentForge **零运行时依赖**、**无需构建**。整个客户端就是一个文件 `index.html`，其中包含全部 247 个智能体的轻量级元数据（名称、分类、表情符号、颜色、一句话描述）。每个智能体的完整系统提示词会按需从本仓库获取：

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

这种方式让应用保持轻量、加载快速，同时提示词内容仍以纯 Markdown 形式进行版本控制和编辑。完整细节见 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)。

---

## 自托管

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# 直接打开 index.html，或启动本地服务器：
python3 -m http.server 8080   # 然后访问 http://localhost:8080
```

无需 npm、无框架、无工具链。可部署到任意静态托管平台（GitHub Pages、Netlify、Vercel）。若使用 GitHub Pages，请启用 **Settings → Pages → Source: GitHub Actions** ——内置工作流会在每次推送到 `main` 分支时自动部署。详见 [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)。

---

## 仓库结构

```
AgiForge/
├── index.html              # 整个应用 — 自包含，无需构建
├── agents/                 # 247 位专家系统提示词，按分类组织
│   ├── engineering/        # …36 位专家
│   ├── specialized/        # …45 位专家
│   └── … (共 16 个分类)
├── docs/                   # 架构、功能、部署、目录文档
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # 标志与品牌资源
├── .github/                # CI 工作流 + issue/PR 模板
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## 贡献

欢迎提交新的专家智能体和改进——添加一个智能体只需新增一个 Markdown 文件。详见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

## 隐私

无分析追踪、无埋点、无后端。唯一的网络请求是发往你所选择的 AI 提供方（Groq/Ollama），以及可选的 Brave（搜索）和 Piston（代码执行）。其余一切均在你的浏览器本地运行。

## 许可证

个人、教育和非商业用途免费——欢迎修改和自托管。商业用途（出售、转授权、作为付费产品/服务提供，或任何产生收入的用途）需要获得作者的书面许可。完整条款见 [LICENSE](LICENSE)。© 2026 mmuzammul，保留所有权利，除文中明确授予的部分外。
