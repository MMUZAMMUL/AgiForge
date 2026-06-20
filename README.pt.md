<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 especialistas em IA · Pipelines de agentes · Equipes montadas automaticamente · Funciona no seu navegador · Gratuito**

Uma plataforma de IA agêntica mobile-first que roda inteiramente no navegador — sem servidor, sem instalação, sem etapa de build, sem custo. Funciona com a inferência em nuvem gratuita do [Groq](https://console.groq.com) ou com um modelo local via [Ollama](https://ollama.com).

[**🌐 Abrir o app em produção →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#auto-hospedagem)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#arquitetura)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

🌐 [English](README.md) · [中文](README.zh.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · **Português** · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> Esta é uma tradução mantida pela comunidade. Em caso de divergência, o [README em inglês](README.md) é a versão de referência.

## Por que AgentForge

| | AgentForge | Chat de IA genérico |
|---|:---:|:---:|
| 247 especialistas de domínio, cada um com um prompt expert detalhado | ✅ | ❌ |
| Monta automaticamente a **equipe** ideal para seu objetivo | ✅ | ❌ |
| **Pipelines** multiagente (raciocínio encadeado) | ✅ | ❌ |
| **Debate** agente contra agente para refinar respostas | ✅ | ❌ |
| **Benchmarker** avaliado por um LLM juiz | ✅ | ❌ |
| **Executa** o código que escreve (70+ linguagens) | ✅ | ❌ |
| Entrada de voz · anexo de arquivos · memória · exportação | ✅ | às vezes |
| Zero instalação, zero dependências, gratuito para sempre | ✅ | ❌ |

---

## Funcionalidades

- **💬 Chat** — converse com qualquer especialista com respostas em streaming.
- **⛓️ Pipeline de agentes** — encadeie de 2 a 6 especialistas; cada um constrói sobre a saída anterior. Execute um lançamento completo — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — em um único toque.
- **✨ Montagem automática de equipe** — descreva um objetivo; um orquestrador lê todo o catálogo e monta os agentes certos na ordem certa.
- **⚔️ Debate de agentes** — dois especialistas debatem em rodadas (o Proponente constrói, o Crítico desafia) até surgir uma resposta testada sob pressão.
- **📊 Benchmarker** — execute o mesmo prompt em vários agentes; um modelo juiz imparcial pontua cada resposta em relevância, profundidade e correção.
- **▶️ Executor de código** — todo bloco de código recebe um botão de Executar, processado pela API gratuita Piston (70+ linguagens).
- **🌍 Landing page em 10 idiomas** — a [landing page](https://mmuzammul.github.io/AgiForge/landing.html) alterna instantaneamente entre inglês, 中文, espanhol, हिन्दी, العربية, português, francês, russo, 日本語 e alemão — totalmente no lado do cliente, sem recarregar a página, sem serviço de tradução de terceiros.
- **🌐 Busca na web** — busca opcional em tempo real via API do Brave Search (use sua própria chave).
- **🎤 Entrada de voz** — Web Speech API, nativa no Chrome e no Safari.
- **📎 Anexo de arquivos** — leia código, CSVs e documentos como contexto, totalmente no lado do cliente.
- **🧠 Memória** — salve, revise e exclua resultados no `localStorage`.
- **⬇️ Exportação** — baixe qualquer chat, pipeline, debate ou benchmark como arquivo `.md`.
- **🔄 Tratamento inteligente de limite de uso** — no nível gratuito do Groq, alterna entre um pool de 4 modelos e espera os `429` para que os pipelines terminem sem intervenção.

Veja [`docs/FEATURES.md`](docs/FEATURES.md) para o detalhamento completo.

---

## O catálogo — 16 divisões, 247 especialistas

| Divisão | Quantidade | Divisão | Quantidade |
|---|:---:|---|:---:|
| ⭐ Especializados | 45 | 🔐 Segurança | 12 |
| 🏗️ Engenharia | 36 | 🤝 Vendas | 12 |
| 📣 Marketing | 32 | 🧪 Testes | 10 |
| 🗺️ GIS e Espacial | 10 | 🎨 Design | 11 |
| 💰 Finanças | 9 | 📈 Mídia Paga | 7 |
| 🎓 Acadêmico | 8 | 📋 Gestão de Projetos | 7 |
| 🛟 Suporte | 7 | 📦 Produto | 5 |
| 🎮 Desenvolvimento de Jogos | 5 | 🥽 Computação Espacial | 3 |

Cada agente é um prompt de sistema em Markdown estruturado em [`agents/<division>/`](agents/). Veja o catálogo completo em [`docs/AGENTS.md`](docs/AGENTS.md).

---

## Primeiros passos (mobile, ~2 min)

1. Abra **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** no seu celular.
2. Obtenha uma **chave de API gratuita do Groq** em [console.groq.com](https://console.groq.com) (login com Google, sem cartão).
3. Cole-a em **Settings → Connect**.
4. Escolha um especialista e comece a construir. Toque em **Add to Home Screen** para uma experiência semelhante a um app.

> Sua chave fica salva apenas no `localStorage` do seu navegador — nunca chega a um servidor.

---

## Provedores de IA

| Provedor | Custo | Configuração |
|---|---|---|
| **Groq** | Nível gratuito | Cole uma chave de API no app |
| **Ollama** | Gratuito (local) | Execute em uma máquina da mesma rede |
| **Demo** | Gratuito | Sem IA — apenas pré-visualiza a interface |

---

## Arquitetura

AgentForge tem **zero dependências em tempo de execução** e **nenhuma etapa de build**. Todo o cliente é um único arquivo, `index.html`, que carrega metadados leves (nome, divisão, emoji, cor, descrição em uma linha) para todos os 247 agentes. O prompt de sistema completo de cada agente é buscado sob demanda neste repositório:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Isso mantém o app pequeno e rápido de carregar, enquanto os prompts permanecem versionados e editáveis como Markdown simples. Detalhes completos em [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Auto-hospedagem

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# abra o index.html diretamente, ou sirva a pasta:
python3 -m http.server 8080   # depois acesse http://localhost:8080
```

Sem npm, sem framework, sem toolchain. Implante a pasta em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel). Para o GitHub Pages, ative **Settings → Pages → Source: GitHub Actions** — o workflow incluído faz deploy automático a cada push para `main`. Veja [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Estrutura do repositório

```
AgiForge/
├── index.html              # o app inteiro — autocontido, sem build
├── agents/                 # 247 prompts de especialistas, por divisão
│   ├── engineering/        # …36 agentes
│   ├── specialized/        # …45 agentes
│   └── … (16 divisões)
├── docs/                   # arquitetura, funcionalidades, deploy, catálogo
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # logo e materiais de marca
├── .github/                # workflow de CI + templates de issue/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Contribuindo

Novos especialistas e melhorias são bem-vindos — adicionar um agente é só um novo arquivo Markdown. Veja [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Privacidade

Sem analytics, sem rastreamento, sem backend. As únicas chamadas de rede são para o provedor de IA escolhido (Groq/Ollama) e, opcionalmente, Brave (busca) e Piston (execução de código). Todo o resto roda no seu navegador.

## Licença

Gratuito para uso pessoal, educacional e não comercial — modifique e auto-hospede livremente. Uso comercial (venda, sublicenciamento, hospedagem como produto/serviço pago, ou qualquer uso que gere receita) requer permissão por escrito do autor. Veja [LICENSE](LICENSE) para os termos completos. © 2026 mmuzammul, todos os direitos reservados exceto os concedidos ali.
