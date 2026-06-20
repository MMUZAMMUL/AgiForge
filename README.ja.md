<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247人のAIスペシャリスト · エージェントパイプライン · 自動チーム編成 · ブラウザで動作 · 無料**

完全にブラウザ上で動作するモバイルファーストのエージェント型AIプラットフォーム — サーバー不要、インストール不要、ビルド不要、コスト不要。無料の [Groq](https://console.groq.com) クラウド推論、またはローカルの [Ollama](https://ollama.com) モデルで動作します。

[**🌐 ライブアプリを開く →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#セルフホスト)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#アーキテクチャ)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

🌐 [English](README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · **日本語** · [Deutsch](README.de.md)

</div>

---

> これはコミュニティによって保守されている翻訳です。内容に相違がある場合は [英語版README](README.md) が正式版となります。

## なぜAgentForgeなのか

| | AgentForge | 一般的なAIチャット |
|---|:---:|:---:|
| 247人の専門分野エキスパート、それぞれ深いエキスパートプロンプトを持つ | ✅ | ❌ |
| 目標に最適な**チーム**を自動編成 | ✅ | ❌ |
| マルチエージェント**パイプライン**（連鎖的な推論） | ✅ | ❌ |
| 回答を洗練させるエージェント同士の**ディベート** | ✅ | ❌ |
| LLMが評価する**ベンチマーカー** | ✅ | ❌ |
| 自身が書いたコードを**実行**（70以上の言語） | ✅ | ❌ |
| 音声入力 · ファイル添付 · メモリ · エクスポート | ✅ | 場合による |
| インストール不要、依存関係ゼロ、永久無料 | ✅ | ❌ |

---

## 機能

- **💬 チャット** — どのスペシャリストともストリーミング応答で対話。
- **⛓️ エージェントパイプライン** — 2〜6人のスペシャリストを連鎖させ、各ステップが前の出力を引き継ぐ。プロダクトマネージャー → フロントエンド開発者 → ブランドガーディアン → グロースハッカーという完全なローンチを1タップで実行。
- **✨ 自動チーム編成** — 目標を記述すると、オーケストレーターが全名簿を読み、適切なエージェントを正しい順序で編成。
- **⚔️ エージェントディベート** — 2人のスペシャリストがラウンド形式で議論（提案者が構築、批評者が異議を唱える）し、検証済みの回答が生まれるまで続く。
- **📊 ベンチマーカー** — 同じプロンプトを多数のエージェントで実行し、公正な審査モデルが関連性・深さ・正確性を採点。
- **▶️ コードランナー** — すべてのコードブロックに実行ボタンが付き、無料のPiston API（70以上の言語）で実行。
- **🌍 10言語対応のランディングページ** — [ランディングページ](https://mmuzammul.github.io/AgiForge/landing.html) は英語、中文、スペイン語、हिन्दी、العربية、ポルトガル語、フランス語、ロシア語、日本語、ドイツ語を即座に切り替え — クライアントサイドのみ、リロード不要、サードパーティの翻訳サービスも不要。
- **🌐 ウェブ検索** — Brave Search APIによるオプションのリアルタイム検索（自分のキーが必要）。
- **🎤 音声入力** — Web Speech API、ChromeとSafariに標準搭載。
- **📎 ファイル添付** — コード、CSV、文書をコンテキストとして読み込み、完全にクライアントサイドで処理。
- **🧠 メモリ** — `localStorage` に出力結果を保存・確認・削除。
- **⬇️ エクスポート** — チャット、パイプライン、ディベート、ベンチマークの結果を `.md` ファイルとしてダウンロード。
- **🔄 スマートなレート制限処理** — Groqの無料プランでは4モデルのプールをローテーションし、`429` エラーを待機することで、パイプラインが無人で完了。

詳細な内訳は [`docs/FEATURES.md`](docs/FEATURES.md) を参照してください。

---

## ロースター — 16部門、247人のスペシャリスト

| 部門 | 人数 | 部門 | 人数 |
|---|:---:|---|:---:|
| ⭐ スペシャライズド | 45 | 🔐 セキュリティ | 12 |
| 🏗️ エンジニアリング | 36 | 🤝 セールス | 12 |
| 📣 マーケティング | 32 | 🧪 テスティング | 10 |
| 🗺️ GIS・空間分析 | 10 | 🎨 デザイン | 11 |
| 💰 ファイナンス | 9 | 📈 ペイドメディア | 7 |
| 🎓 アカデミック | 8 | 📋 プロジェクト管理 | 7 |
| 🛟 サポート | 7 | 📦 プロダクト | 5 |
| 🎮 ゲーム開発 | 5 | 🥽 空間コンピューティング | 3 |

各エージェントは [`agents/<division>/`](agents/) 以下に構造化されたMarkdown形式のシステムプロンプトとして存在します。完全なカタログは [`docs/AGENTS.md`](docs/AGENTS.md) で確認できます。

---

## はじめに（モバイル、約2分）

1. **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** をスマートフォンで開く。
2. [console.groq.com](https://console.groq.com) で**無料のGroq APIキー**を取得（Googleログイン、カード不要）。
3. **Settings → Connect** に貼り付ける。
4. スペシャリストを選んで構築を開始。**Add to Home Screen** をタップすればアプリのような体験に。

> あなたのキーはブラウザの `localStorage` にのみ保存され、サーバーに送信されることは一切ありません。

---

## AIプロバイダー

| プロバイダー | コスト | セットアップ |
|---|---|---|
| **Groq** | 無料プラン | アプリにAPIキーを貼り付け |
| **Ollama** | 無料（ローカル） | 同じネットワーク内のマシンで実行 |
| **Demo** | 無料 | AIなし — UIのプレビューのみ |

---

## アーキテクチャ

AgentForgeには**実行時の依存関係がゼロ**、**ビルドステップもありません**。クライアント全体は `index.html` という1つのファイルで、247人すべてのエージェントの軽量なメタデータ（名前、部門、エモジ、色、1行の説明）を保持しています。各エージェントの完全なシステムプロンプトは、このリポジトリから必要に応じて取得されます。

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

これにより、アプリは小さく高速に読み込まれる一方、プロンプトはバージョン管理され、プレーンなMarkdownとして編集可能な状態が保たれます。詳細は [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) を参照してください。

---

## セルフホスト

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# index.htmlを直接開く、またはフォルダをサーブする：
python3 -m http.server 8080   # その後 http://localhost:8080 にアクセス
```

npm不要、フレームワーク不要、ツールチェーン不要。フォルダを任意の静的ホスティング（GitHub Pages、Netlify、Vercel）にデプロイできます。GitHub Pagesの場合は **Settings → Pages → Source: GitHub Actions** を有効にしてください — 付属のワークフローが `main` へのプッシュごとに自動デプロイします。詳細は [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) を参照。

---

## リポジトリ構成

```
AgiForge/
├── index.html              # アプリ全体 — 単体完結、ビルド不要
├── agents/                 # 247人のスペシャリストのプロンプト、部門別
│   ├── engineering/        # …36エージェント
│   ├── specialized/        # …45エージェント
│   └── … (16部門)
├── docs/                   # アーキテクチャ、機能、デプロイ、カタログ
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # ロゴとブランド資産
├── .github/                # CIワークフロー + issue/PRテンプレート
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## コントリビュート

新しいスペシャリストや改善は大歓迎です — エージェントの追加は単にMarkdownファイルを1つ追加するだけです。詳細は [`CONTRIBUTING.md`](CONTRIBUTING.md) を参照。

## プライバシー

アナリティクスなし、トラッキングなし、バックエンドなし。ネットワーク通信は選択したAIプロバイダー（Groq/Ollama）、そしてオプションでBrave（検索）とPiston（コード実行）のみです。その他はすべてブラウザ内で動作します。

## ライセンス

個人・教育・非営利目的での利用は無料です — 自由に改変・セルフホストできます。商用利用（販売、サブライセンス、有料製品/サービスとしてのホスティング、収益を生むあらゆる利用）には作者の書面による許可が必要です。完全な条項は [LICENSE](LICENSE) を参照してください。© 2026 mmuzammul、そこで許諾された範囲を除き、すべての権利を保有します。
