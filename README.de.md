<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 KI-Spezialisten · Agenten-Pipelines · Automatisch erstellte Teams · Läuft im Browser · Kostenlos**

Eine mobile-first agentenbasierte KI-Plattform, die vollständig im Browser läuft — kein Server, keine Installation, kein Build-Schritt, keine Kosten. Angetrieben von der kostenlosen [Groq](https://console.groq.com)-Cloud-Inferenz oder einem lokalen [Ollama](https://ollama.com)-Modell.

[**🌐 Live-App öffnen →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#self-hosting)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#architektur)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

🌐 [English](README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · **Deutsch**

</div>

---

> Dies ist eine von der Community gepflegte Übersetzung. Bei Abweichungen gilt das [englische README](README.md) als verbindliche Version.

## Warum AgentForge

| | AgentForge | Generischer KI-Chat |
|---|:---:|:---:|
| 247 Fachspezialisten, jeder mit einem tiefgehenden Experten-Prompt | ✅ | ❌ |
| Stellt automatisch das optimale **Team** für dein Ziel zusammen | ✅ | ❌ |
| Multi-Agent-**Pipelines** (verkettetes Denken) | ✅ | ❌ |
| Agent-gegen-Agent-**Debatte** zur Verfeinerung von Antworten | ✅ | ❌ |
| LLM-bewerteter **Benchmarker** | ✅ | ❌ |
| **Führt** den Code aus, den er schreibt (70+ Sprachen) | ✅ | ❌ |
| Spracheingabe · Dateianhang · Speicher · Export | ✅ | manchmal |
| Keine Installation, keine Abhängigkeiten, für immer kostenlos | ✅ | ❌ |

---

## Funktionen

- **💬 Chat** — sprich mit jedem Spezialisten mit Streaming-Antworten.
- **⛓️ Agenten-Pipeline** — verkette 2–6 Spezialisten; jeder baut auf der vorherigen Ausgabe auf. Führe einen vollständigen Launch — Product Manager → Frontend-Entwickler → Brand Guardian → Growth Hacker — mit einem Tap aus.
- **✨ Automatischer Team-Aufbau** — beschreibe ein Ziel; ein Orchestrator liest das gesamte Roster und stellt die passenden Agenten in der richtigen Reihenfolge zusammen.
- **⚔️ Agenten-Debatte** — zwei Spezialisten streiten in Runden (Proponent baut auf, Kritiker fordert heraus), bis eine kampferprobte Antwort entsteht.
- **📊 Benchmarker** — führe denselben Prompt über viele Agenten aus; ein unparteiisches Bewertungsmodell bewertet jede Antwort nach Relevanz, Tiefe und Korrektheit.
- **▶️ Code-Runner** — jeder Codeblock erhält einen Run-Button, ausgeführt über die kostenlose Piston-API (70+ Sprachen).
- **🌍 Landingpage in 10 Sprachen** — die [Landingpage](https://mmuzammul.github.io/AgiForge/landing.html) wechselt sofort zwischen Englisch, 中文, Spanisch, हिन्दी, العربية, Portugiesisch, Französisch, Russisch, 日本語 und Deutsch — vollständig clientseitig, ohne Neuladen, ohne Drittanbieter-Übersetzungsdienst.
- **🌐 Websuche** — optionale Echtzeitsuche über die Brave Search API (eigener Key erforderlich).
- **🎤 Spracheingabe** — Web Speech API, fest integriert in Chrome und Safari.
- **📎 Dateianhang** — lies Code, CSVs und Dokumente als Kontext, vollständig clientseitig.
- **🧠 Speicher** — speichere, überprüfe und lösche Ausgaben in `localStorage`.
- **⬇️ Export** — lade jeden Chat, jede Pipeline, Debatte oder Benchmark als `.md`-Datei herunter.
- **🔄 Intelligente Ratenbegrenzungs-Behandlung** — im kostenlosen Groq-Tier wird über einen Pool von 4 Modellen rotiert und auf `429`-Fehler gewartet, damit Pipelines unbeaufsichtigt durchlaufen.

Die vollständige Übersicht findest du unter [`docs/FEATURES.md`](docs/FEATURES.md).

---

## Das Roster — 16 Divisionen, 247 Spezialisten

| Division | Anzahl | Division | Anzahl |
|---|:---:|---|:---:|
| ⭐ Spezialisiert | 45 | 🔐 Sicherheit | 12 |
| 🏗️ Engineering | 36 | 🤝 Vertrieb | 12 |
| 📣 Marketing | 32 | 🧪 Testing | 10 |
| 🗺️ GIS & Räumlich | 10 | 🎨 Design | 11 |
| 💰 Finanzen | 9 | 📈 Paid Media | 7 |
| 🎓 Akademisch | 8 | 📋 Projektmanagement | 7 |
| 🛟 Support | 7 | 📦 Produkt | 5 |
| 🎮 Spieleentwicklung | 5 | 🥽 Spatial Computing | 3 |

Jeder Agent ist ein strukturierter Markdown-System-Prompt unter [`agents/<division>/`](agents/). Den vollständigen Katalog findest du in [`docs/AGENTS.md`](docs/AGENTS.md).

---

## Erste Schritte (mobil, ~2 Min.)

1. Öffne **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** auf deinem Smartphone.
2. Hol dir einen **kostenlosen Groq-API-Key** auf [console.groq.com](https://console.groq.com) (Google-Login, keine Kreditkarte).
3. Füge ihn unter **Settings → Connect** ein.
4. Wähle einen Spezialisten und lege los. Tippe auf **Add to Home Screen** für ein App-ähnliches Erlebnis.

> Dein Key wird ausschließlich im `localStorage` deines Browsers gespeichert — er erreicht niemals einen Server.

---

## KI-Anbieter

| Anbieter | Kosten | Einrichtung |
|---|---|---|
| **Groq** | Kostenloser Tarif | API-Key in der App einfügen |
| **Ollama** | Kostenlos (lokal) | Auf einem Gerät im selben Netzwerk ausführen |
| **Demo** | Kostenlos | Keine KI — nur Vorschau der Oberfläche |

---

## Architektur

AgentForge hat **null Laufzeit-Abhängigkeiten** und **keinen Build-Schritt**. Der gesamte Client ist eine einzige Datei, `index.html`, die leichtgewichtige Metadaten (Name, Division, Emoji, Farbe, Einzeiler-Beschreibung) für alle 247 Agenten enthält. Der vollständige System-Prompt jedes Agenten wird bei Bedarf aus diesem Repository geladen:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Das hält die App klein und schnell ladend, während die Prompts versioniert und als reines Markdown editierbar bleiben. Alle Details in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Self-Hosting

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# index.html direkt öffnen oder den Ordner servieren:
python3 -m http.server 8080   # dann http://localhost:8080 besuchen
```

Kein npm, kein Framework, keine Toolchain. Deploye den Ordner auf jedem statischen Hoster (GitHub Pages, Netlify, Vercel). Für GitHub Pages aktiviere **Settings → Pages → Source: GitHub Actions** — der enthaltene Workflow deployt automatisch bei jedem Push nach `main`. Siehe [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Repository-Struktur

```
AgiForge/
├── index.html              # die gesamte App — eigenständig, kein Build
├── agents/                 # 247 Spezialisten-System-Prompts, nach Division
│   ├── engineering/        # …36 Agenten
│   ├── specialized/        # …45 Agenten
│   └── … (16 Divisionen)
├── docs/                   # Architektur, Funktionen, Deployment, Katalog
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # Logo und Markenmaterial
├── .github/                # CI-Workflow + Issue/PR-Vorlagen
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Mitwirken

Neue Spezialisten und Verbesserungen sind willkommen — einen Agenten hinzuzufügen bedeutet einfach eine neue Markdown-Datei zu erstellen. Siehe [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Datenschutz

Keine Analytics, kein Tracking, kein Backend. Die einzigen Netzwerkaufrufe gehen an deinen gewählten KI-Anbieter (Groq/Ollama) und optional an Brave (Suche) und Piston (Codeausführung). Alles andere läuft in deinem Browser.

## Lizenz

Kostenlos für private, schulische und nicht-kommerzielle Nutzung — modifiziere und hoste es selbst, so viel du willst. Kommerzielle Nutzung (Verkauf, Sublizenzierung, Hosting als zahlungspflichtiges Produkt/Dienst oder jede umsatzgenerierende Nutzung) erfordert die schriftliche Genehmigung des Autors. Die vollständigen Bedingungen findest du in [LICENSE](LICENSE). © 2026 mmuzammul, alle Rechte vorbehalten, soweit dort nicht anders eingeräumt.
