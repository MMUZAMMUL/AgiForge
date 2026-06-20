<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 spécialistes IA · Pipelines d'agents · Équipes auto-constituées · Fonctionne dans votre navigateur · Gratuit**

Une plateforme d'IA agentique mobile-first qui s'exécute entièrement dans le navigateur — sans serveur, sans installation, sans étape de build, sans coût. Alimentée par l'inférence cloud gratuite de [Groq](https://console.groq.com) ou par un modèle local via [Ollama](https://ollama.com).

[**🌐 Ouvrir l'application en direct →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#auto-hébergement)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#architecture)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

🌐 [English](README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · **Français** · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> Ceci est une traduction maintenue par la communauté. En cas de divergence, le [README en anglais](README.md) fait foi.

## Pourquoi AgentForge

| | AgentForge | Chat IA générique |
|---|:---:|:---:|
| 247 spécialistes de domaine, chacun avec un prompt expert approfondi | ✅ | ❌ |
| Constitue automatiquement la **meilleure équipe** pour votre objectif | ✅ | ❌ |
| **Pipelines** multi-agents (raisonnement enchaîné) | ✅ | ❌ |
| **Débat** agent contre agent pour affiner les réponses | ✅ | ❌ |
| **Benchmarker** évalué par un LLM juge | ✅ | ❌ |
| **Exécute** le code qu'il écrit (70+ langages) | ✅ | ❌ |
| Saisie vocale · pièces jointes · mémoire · export | ✅ | parfois |
| Zéro installation, zéro dépendance, gratuit pour toujours | ✅ | ❌ |

---

## Fonctionnalités

- **💬 Chat** — discutez avec n'importe quel spécialiste, réponses en streaming.
- **⛓️ Pipeline d'agents** — enchaînez 2 à 6 spécialistes ; chacun s'appuie sur le résultat précédent. Lancez un cycle complet — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — en un seul geste.
- **✨ Constitution automatique d'équipe** — décrivez un objectif ; un orchestrateur lit l'ensemble du catalogue et assemble les bons agents dans le bon ordre.
- **⚔️ Débat d'agents** — deux spécialistes débattent par tours (le Proposant construit, le Critique challenge) jusqu'à obtenir une réponse éprouvée.
- **📊 Benchmarker** — exécutez le même prompt sur plusieurs agents ; un modèle juge impartial note chaque réponse sur la pertinence, la profondeur et la justesse.
- **▶️ Exécuteur de code** — chaque bloc de code reçoit un bouton Exécuter, via l'API gratuite Piston (70+ langages).
- **🌍 Landing page en 10 langues** — la [landing page](https://mmuzammul.github.io/AgiForge/landing.html) bascule instantanément entre l'anglais, le 中文, l'espagnol, le हिन्दी, l'العربية, le portugais, le français, le russe, le 日本語 et l'allemand — entièrement côté client, sans rechargement, sans service de traduction tiers.
- **🌐 Recherche web** — recherche en temps réel optionnelle via l'API Brave Search (avec votre propre clé).
- **🎤 Saisie vocale** — Web Speech API, intégrée à Chrome et Safari.
- **📎 Pièce jointe** — lisez du code, des CSV et des documents comme contexte, entièrement côté client.
- **🧠 Mémoire** — enregistrez, consultez et supprimez des résultats dans `localStorage`.
- **⬇️ Export** — téléchargez n'importe quel chat, pipeline, débat ou benchmark en fichier `.md`.
- **🔄 Gestion intelligente des limites de débit** — sur le niveau gratuit de Groq, bascule entre un pool de 4 modèles et attend les `429` pour que les pipelines se terminent sans intervention.

Voir [`docs/FEATURES.md`](docs/FEATURES.md) pour le détail complet.

---

## Le catalogue — 16 divisions, 247 spécialistes

| Division | Nombre | Division | Nombre |
|---|:---:|---|:---:|
| ⭐ Spécialisés | 45 | 🔐 Sécurité | 12 |
| 🏗️ Ingénierie | 36 | 🤝 Ventes | 12 |
| 📣 Marketing | 32 | 🧪 Tests | 10 |
| 🗺️ GIS & Spatial | 10 | 🎨 Design | 11 |
| 💰 Finance | 9 | 📈 Médias payants | 7 |
| 🎓 Académique | 8 | 📋 Gestion de projet | 7 |
| 🛟 Support | 7 | 📦 Produit | 5 |
| 🎮 Développement de jeux | 5 | 🥽 Informatique spatiale | 3 |

Chaque agent est un prompt système Markdown structuré sous [`agents/<division>/`](agents/). Parcourez le catalogue complet dans [`docs/AGENTS.md`](docs/AGENTS.md).

---

## Démarrage rapide (mobile, ~2 min)

1. Ouvrez **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** sur votre téléphone.
2. Récupérez une **clé API Groq gratuite** sur [console.groq.com](https://console.groq.com) (connexion Google, sans carte).
3. Collez-la dans **Settings → Connect**.
4. Choisissez un spécialiste et commencez à construire. Appuyez sur **Add to Home Screen** pour une expérience type application.

> Votre clé est stockée uniquement dans le `localStorage` de votre navigateur — elle n'atteint jamais un serveur.

---

## Fournisseurs d'IA

| Fournisseur | Coût | Configuration |
|---|---|---|
| **Groq** | Niveau gratuit | Collez une clé API dans l'application |
| **Ollama** | Gratuit (local) | Exécutez sur une machine du même réseau |
| **Demo** | Gratuit | Pas d'IA — aperçu de l'interface uniquement |

---

## Architecture

AgentForge a **zéro dépendance d'exécution** et **aucune étape de build**. Le client entier est un seul fichier, `index.html`, qui contient des métadonnées légères (nom, division, emoji, couleur, description en une ligne) pour les 247 agents. Le prompt système complet de chaque agent est récupéré à la demande depuis ce dépôt :

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Cela garde l'application légère et rapide à charger, tandis que les prompts restent versionnés et modifiables en Markdown brut. Tous les détails dans [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Auto-hébergement

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# ouvrez index.html directement, ou servez le dossier :
python3 -m http.server 8080   # puis visitez http://localhost:8080
```

Pas de npm, pas de framework, pas de toolchain. Déployez le dossier sur n'importe quel hébergement statique (GitHub Pages, Netlify, Vercel). Pour GitHub Pages, activez **Settings → Pages → Source: GitHub Actions** — le workflow inclus se déploie automatiquement à chaque push sur `main`. Voir [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Structure du dépôt

```
AgiForge/
├── index.html              # l'application entière — autonome, sans build
├── agents/                 # 247 prompts de spécialistes, par division
│   ├── engineering/        # …36 agents
│   ├── specialized/        # …45 agents
│   └── … (16 divisions)
├── docs/                   # architecture, fonctionnalités, déploiement, catalogue
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # logo et éléments de marque
├── .github/                # workflow CI + templates issue/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Contribuer

Les nouveaux spécialistes et améliorations sont les bienvenus — ajouter un agent revient simplement à créer un nouveau fichier Markdown. Voir [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Confidentialité

Pas d'analytics, pas de tracking, pas de backend. Les seuls appels réseau sont vers le fournisseur d'IA choisi (Groq/Ollama) et, optionnellement, Brave (recherche) et Piston (exécution de code). Tout le reste s'exécute dans votre navigateur.

## Licence

Gratuit pour un usage personnel, éducatif et non commercial — modifiez-le et auto-hébergez-le librement. Un usage commercial (vente, sous-licence, hébergement en tant que produit/service payant, ou tout usage générant des revenus) nécessite l'autorisation écrite de l'auteur. Voir [LICENSE](LICENSE) pour les conditions complètes. © 2026 mmuzammul, tous droits réservés sauf ceux accordés ici.
