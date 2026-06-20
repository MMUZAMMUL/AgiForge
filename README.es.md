<div align="center">

<img src="assets/logo.svg" alt="AgentForge" width="120" />

# AgentForge

**247 especialistas de IA · Pipelines de agentes · Equipos auto-creados · Funciona en tu navegador · Gratis**

Una plataforma de IA agéntica mobile-first que se ejecuta enteramente en el navegador — sin servidor, sin instalación, sin compilación, sin coste. Funciona con inferencia gratuita en la nube de [Groq](https://console.groq.com) o con un modelo local de [Ollama](https://ollama.com).

[**🌐 Abrir la app en vivo →**](https://mmuzammul.github.io/AgiForge/)

[![Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-121013?logo=github)](https://mmuzammul.github.io/AgiForge/)
[![No build](https://img.shields.io/badge/build-none-success)](#auto-alojamiento)
[![Dependencies](https://img.shields.io/badge/dependencies-zero-success)](#arquitectura)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange)](LICENSE)

🌐 [English](README.md) · [中文](README.zh.md) · **Español** · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md)

</div>

---

> Esta es una traducción mantenida por la comunidad. Ante cualquier discrepancia, el [README en inglés](README.md) es la versión de referencia.

## Por qué AgentForge

| | AgentForge | Chat de IA genérico |
|---|:---:|:---:|
| 247 especialistas de dominio, cada uno con un prompt experto detallado | ✅ | ❌ |
| Crea automáticamente el **equipo** óptimo para tu objetivo | ✅ | ❌ |
| **Pipelines** multi-agente (razonamiento encadenado) | ✅ | ❌ |
| **Debate** agente contra agente para refinar respuestas | ✅ | ❌ |
| **Benchmarking** evaluado por un LLM juez | ✅ | ❌ |
| **Ejecuta** el código que escribe (70+ lenguajes) | ✅ | ❌ |
| Entrada de voz · adjuntar archivos · memoria · exportar | ✅ | a veces |
| Cero instalación, cero dependencias, gratis para siempre | ✅ | ❌ |

---

## Funciones

- **💬 Chat** — habla con cualquier especialista con respuestas en streaming.
- **⛓️ Pipeline de agentes** — encadena 2–6 especialistas; cada uno construye sobre la salida anterior. Ejecuta un lanzamiento completo — Product Manager → Frontend Developer → Brand Guardian → Growth Hacker — con un solo toque.
- **✨ Auto-creación de equipo** — describe un objetivo; un orquestador lee todo el catálogo y ensambla los agentes correctos en el orden correcto.
- **⚔️ Debate de agentes** — dos especialistas discuten en rondas (el Proponente construye, el Crítico desafía) hasta llegar a una respuesta puesta a prueba.
- **📊 Benchmarker** — ejecuta el mismo prompt en muchos agentes; un modelo juez imparcial puntúa cada respuesta en relevancia, profundidad y corrección.
- **▶️ Ejecutor de código** — cada bloque de código obtiene un botón de Ejecutar, gestionado vía la API gratuita de Piston (70+ lenguajes).
- **🌍 Landing page en 10 idiomas** — la [landing page](https://mmuzammul.github.io/AgiForge/landing.html) cambia al instante entre inglés, 中文, español, हिन्दी, العربية, portugués, francés, ruso, 日本語 y alemán — todo del lado del cliente, sin recargar la página, sin servicios de traducción de terceros.
- **🌐 Búsqueda web** — búsqueda en tiempo real opcional vía la API de Brave Search (con tu propia clave).
- **🎤 Entrada de voz** — Web Speech API, integrada en Chrome y Safari.
- **📎 Adjuntar archivos** — lee código, CSVs y documentos como contexto, totalmente del lado del cliente.
- **🧠 Memoria** — guarda, revisa y elimina resultados en `localStorage`.
- **⬇️ Exportar** — descarga cualquier chat, pipeline, debate o benchmark como archivo `.md`.
- **🔄 Manejo inteligente de límites de uso** — en el nivel gratuito de Groq, rota entre un pool de 4 modelos y espera los `429` para que los pipelines terminen sin intervención.

Consulta [`docs/FEATURES.md`](docs/FEATURES.md) para el detalle completo.

---

## El catálogo — 16 divisiones, 247 especialistas

| División | Cantidad | División | Cantidad |
|---|:---:|---|:---:|
| ⭐ Especializados | 45 | 🔐 Seguridad | 12 |
| 🏗️ Ingeniería | 36 | 🤝 Ventas | 12 |
| 📣 Marketing | 32 | 🧪 Testing | 10 |
| 🗺️ GIS y espacial | 10 | 🎨 Diseño | 11 |
| 💰 Finanzas | 9 | 📈 Medios de pago | 7 |
| 🎓 Académico | 8 | 📋 Gestión de proyectos | 7 |
| 🛟 Soporte | 7 | 📦 Producto | 5 |
| 🎮 Desarrollo de videojuegos | 5 | 🥽 Computación espacial | 3 |

Cada agente es un prompt de sistema en Markdown estructurado bajo [`agents/<division>/`](agents/). Explora el catálogo completo en [`docs/AGENTS.md`](docs/AGENTS.md).

---

## Primeros pasos (móvil, ~2 min)

1. Abre **[mmuzammul.github.io/AgiForge](https://mmuzammul.github.io/AgiForge/)** en tu teléfono.
2. Consigue una **clave de API gratuita de Groq** en [console.groq.com](https://console.groq.com) (login con Google, sin tarjeta).
3. Pégala en **Settings → Connect**.
4. Elige un especialista y empieza a construir. Toca **Add to Home Screen** para una experiencia tipo app.

> Tu clave se guarda únicamente en el `localStorage` de tu navegador — nunca llega a un servidor.

---

## Proveedores de IA

| Proveedor | Coste | Configuración |
|---|---|---|
| **Groq** | Nivel gratuito | Pega una clave de API en la app |
| **Ollama** | Gratis (local) | Ejecútalo en una máquina de la misma red |
| **Demo** | Gratis | Sin IA — solo vista previa de la interfaz |

---

## Arquitectura

AgentForge tiene **cero dependencias en tiempo de ejecución** y **sin paso de compilación**. Todo el cliente es un solo archivo, `index.html`, que contiene metadatos ligeros (nombre, división, emoji, color, descripción de una línea) para los 247 agentes. El prompt de sistema completo de cada agente se obtiene a demanda desde este repositorio:

```
https://raw.githubusercontent.com/mmuzammul/AgiForge/main/agents/<division>/<id>.md
```

Esto mantiene la app pequeña y rápida de cargar, mientras los prompts permanecen versionados y editables como Markdown plano. Todos los detalles en [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Auto-alojamiento

```bash
git clone https://github.com/MMUZAMMUL/AgiForge.git
cd AgiForge
# abre index.html directamente, o sirve la carpeta:
python3 -m http.server 8080   # luego visita http://localhost:8080
```

Sin npm, sin framework, sin toolchain. Despliega la carpeta en cualquier hosting estático (GitHub Pages, Netlify, Vercel). Para GitHub Pages, habilita **Settings → Pages → Source: GitHub Actions** — el workflow incluido despliega automáticamente en cada push a `main`. Ver [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Estructura del repositorio

```
AgiForge/
├── index.html              # toda la app — autocontenida, sin compilación
├── agents/                 # 247 prompts de especialistas, por división
│   ├── engineering/        # …36 agentes
│   ├── specialized/        # …45 agentes
│   └── … (16 divisiones)
├── docs/                   # arquitectura, funciones, despliegue, catálogo
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── DEPLOYMENT.md
│   └── AGENTS.md
├── assets/                 # logo y recursos de marca
├── .github/                # workflow de CI + plantillas de issues/PR
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Contribuir

Se aceptan nuevos especialistas y mejoras — añadir un agente es solo crear un nuevo archivo Markdown. Ver [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Privacidad

Sin analítica, sin rastreo, sin backend. Las únicas llamadas de red son al proveedor de IA que elijas (Groq/Ollama) y, opcionalmente, a Brave (búsqueda) y Piston (ejecución de código). Todo lo demás se ejecuta en tu navegador.

## Licencia

Gratis para uso personal, educativo y no comercial — modifícalo y auto-hospédalo libremente. El uso comercial (venta, sublicencia, alojamiento como producto/servicio de pago, o cualquier uso que genere ingresos) requiere permiso por escrito del autor. Consulta [LICENSE](LICENSE) para los términos completos. © 2026 mmuzammul, todos los derechos reservados salvo lo concedido allí.
