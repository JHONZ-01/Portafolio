# Informe técnico del proyecto (estructura `src/`)

## Resumen

Este repositorio es una aplicación **Next.js (App Router)** con **React 19**, **TypeScript** y **Tailwind CSS**. La base del proyecto está organizada bajo `src/` para mantener separación clara entre:

- **rutas/páginas** (`src/app`)
- **componentes reutilizables** (`src/components`)
- **estilos globales** (`src/styles`)
- **utilidades** (`src/lib`)
- **assets estáticos** (`src/assets`)

La aplicación compila correctamente con `npm run build`.

## Stack y dependencias principales

- **Framework**: `next@16.2.4`
- **UI**: `react@19.2.4`, `react-dom@19.2.4`
- **Animación / iconos**: `framer-motion`, `lucide-react`
- **Estilos**: `tailwindcss@^4` + `@tailwindcss/postcss@^4`
- **Linting**: `eslint@^9`, `eslint-config-next@16.2.4`
- **Lenguaje**: `typescript@^5`

## Estructura de carpetas

Visión resumida (el árbol real incluye más archivos; lo esencial para orientarse):

```
src/
├── app/
│   ├── layout.tsx            # Fuentes, globals + portfolio.css, providers, Navbar, PageBackground, PageTransition
│   ├── page.tsx              # Home: Hero, About, Skills, Languages, Experience, Projects (destacados), ContactForm
│   ├── about/page.tsx        # /about
│   ├── projects/page.tsx     # /projects → ProjectsShowcase (galería interactiva)
│   └── cv/page.tsx           # /cv (visor PDF según idioma)
│
├── components/
│   ├── ui/                   # Button, Card, SocialLinks, …
│   ├── layout/               # Navbar, Footer, PageBackground, CircuitFxCanvas, PageTransition
│   ├── pages/                # PageHeader, …
│   ├── providers/            # AppPreferencesProvider (tema + idioma)
│   └── sections/             # Hero, About, Skills, Experience, Projects, ProjectsShowcase, ContactForm, …
│
├── styles/
│   ├── globals.css           # Tailwind v4 + tokens base; overflow-x
│   ├── portfolio.css         # Tokens de tema, circuit FX, glass, partículas, utilidades de paleta
│   └── projects-showcase.css # Estilos acotados a .projectsStage (galería /projects)
│
├── lib/
│   ├── i18n/                 # messages.ts, useT
│   ├── contact.ts, social.ts
│   ├── projects-showcase-config.ts  # URLs de imagen, acentos, enlaces demo/repo por proyecto
│   └── utils.ts
│
└── assets/
    └── images/
```

## Enrutado (App Router)

Este proyecto usa **App Router**, donde:

- Cada carpeta dentro de `src/app/` representa un segmento de ruta.
- Un archivo `page.tsx` exporta el componente de página para ese segmento.
- `src/app/layout.tsx` define el layout raíz compartido por todas las rutas.

Rutas actuales:

- **`/`**: `src/app/page.tsx`
- **`/about`**: `src/app/about/page.tsx`
- **`/projects`**: `src/app/projects/page.tsx`
- **`/cv`**: `src/app/cv/page.tsx`

## Layout raíz y estilos globales

### `src/app/layout.tsx`

- Define `metadata` (título/description).
- Carga fuentes vía `next/font/google` (`--font-primary`, `--font-code`).
- Importa `globals.css` y **`portfolio.css`** (tokens y efectos del portafolio).
- `AppPreferencesProvider` (tema claro/oscuro e idioma persistidos en `localStorage`).
- `PageBackground`, `Navbar`, `PageTransition` (rutas animadas: about, projects, cv), `Footer`.

### `src/styles/globals.css`

Incluye:

- `@import "tailwindcss";` (Tailwind v4)
- Variables puente (`--background`, `--foreground`) enlazadas a los tokens definidos en **`portfolio.css`** según `data-theme` en el documento (no solo `prefers-color-scheme`).
- `overflow-x: hidden` en `html, body` para evitar scroll horizontal no deseado.

## Componentes

### Componentes UI (`src/components/ui`)

- **`Button.tsx`**
  - `React.forwardRef`
  - Variantes: `primary | secondary | ghost`
  - Tamaños: `sm | md | lg`
  - Utiliza el helper `cn()` para componer clases

- **`Card.tsx`**
  - Contenedor reutilizable con borde, fondo y padding consistente

### Layout (`src/components/layout`)

- **`Navbar.tsx`**
  - Navegación principal con `next/link` hacia `/`, `/about`, `/projects`
  - Estilos consistentes para estado hover y dark mode

- **`Footer.tsx`**
  - Pie de página simple con el año actual

### Secciones (`src/components/sections`)

Pensadas para componer páginas “por bloques”:

- **`Hero.tsx`**: introducción y CTAs
- **`Projects.tsx`**: sección “proyectos destacados” en la home (tres cards + i18n, enlaces a `/projects`).
- **`ProjectsShowcase.tsx`**: galería interactiva en **`/projects`** (acordeón horizontal, teclado, shuffle, modo ambient); ver actualización del **11 de mayo de 2026**.
- **`ContactForm.tsx`**: formulario y datos de contacto (incluye ancla de sección donde se use).

## Utilidades (`src/lib/utils.ts`)

Incluye:

- **`cn(...values)`**: helper ligero para construir `className` aceptando:
  - strings/numbers
  - arrays anidados
  - objetos `{ clase: boolean }`

Objetivo: evitar dependencias externas innecesarias para composición de clases y mantener tipado.

## Alias de imports (`@/*`)

En `tsconfig.json` está configurado:

- `@/*` → `./src/*`

Esto permite imports limpios:

- `import { Navbar } from "@/components/layout/Navbar";`
- `import { cn } from "@/lib/utils";`

## Scripts de npm

Definidos en `package.json`:

- **`npm run dev`**: servidor de desarrollo
- **`npm run build`**: build de producción
- **`npm run start`**: servidor de producción (requiere build previo)
- **`npm run lint`**: linting

## Seguridad: auditoría y overrides

### Contexto

Tras instalar dependencias, `npm audit` reportaba una vulnerabilidad moderada asociada a `postcss` (GHSA-qx2v-qp2m-jg93) introducida de forma transitiva por Next.

### Mitigación aplicada

Se añadió un **override** en `package.json` para forzar una versión corregida:

- `postcss@8.5.12`

Resultado:

- `npm audit` queda en **0 vulnerabilidades**.

> Nota: `postcss` se ejecuta típicamente en fase de build. Aun así, mantener el árbol de dependencias saneado reduce ruido de auditoría y riesgos en pipelines.

## Cómo trabajar a partir de aquí

- **Añadir páginas nuevas**: crea una carpeta dentro de `src/app/<ruta>/page.tsx`.
- **Reutilización de UI**: coloca componentes “atómicos” en `src/components/ui`.
- **Secciones de páginas**: coloca bloques compuestos en `src/components/sections`.
- **Helpers**: centraliza funciones puras en `src/lib`.
- **Assets**:
  - Imágenes de contenido: `src/assets/images` (si vas a importarlas desde código)
  - Assets públicos accesibles por URL directa: `public/` (si prefieres servir estáticos por ruta)

## Comandos recomendados

```bash
npm run dev
```

```bash
npm run lint
```

```bash
npm run build
```

---

## Actualización — cambios realizados (6 de mayo de 2026)

Esta sección **se añade** al informe anterior sin sustituirlo. Resume mejoras funcionales, de contenido, de UI/UX y de arquitectura implementadas en la fecha indicada.

### Estilos (`src/styles/portfolio.css` y `globals.css`)

- **Paleta ampliada**: tokens adicionales (`--warning`, `--danger`, `--info`, gama de colores nombrados, `--gradient-warm`, `--gradient-danger`, etc.).
- **Bordes por tema**: `--border` en oscuro (`#6395F8`) y en claro (`#052970`) manteniendo `--border-subtle` para usos más suaves.
- **Fondo / partículas de la cuadrícula**: variables `--grid-opacity`, `--particle-color`, `--particle-opacity`, `--particle-size`; ajuste de visibilidad en tema claro.
- **Animación typewriter** (`.typewriter`, `@keyframes typeReveal`) para el título del Hero, con respeto a `prefers-reduced-motion`.
- **Circuit FX (canvas)**: variables `--circuit-*` (fade, neon, bus, chips), `--circuit-embed-opacity`, clase `.circuit-fx-canvas`.
- **Barras de habilidades por nivel**: `--skill-bar-intermediate`, `--skill-bar-basic`, `--skill-bar-learning` (con variantes en `[data-theme="light"]` para contraste).
- **Scroll horizontal**: `overflow-x: hidden` en `html, body` (`globals.css`); `overflow-hidden` en el contenedor de `PageBackground` para recortar el grid animado.

### Internacionalización y contenido real (`src/lib/i18n/messages.ts` y datos del CV)

- Textos del portfolio alineados al perfil profesional (nombre **Jhon Paucar**, rol, experiencia en empresa de créditos, MDM/Android, stack C#/.NET, aprendizaje React/Laravel, etc.) en **es** y **en**.
- Footer y metadatos de copyright actualizados al titular correcto.
- Nuevas claves: sección **Idiomas** (`sections.languages.*`), niveles de habilidades (`sections.skills.level.*`), contacto ampliado (`contact.phonePrimaryLabel`, `contact.phoneSecondaryLabel`, `contact.hoursLabel`, `contact.noteLabel`). Se dejó de usar `contact.locationValue` en i18n; la ubicación pasa a `src/lib/contact.ts`.

### Datos de contacto centralizados (`src/lib/contact.ts`)

- Archivo con email, teléfonos (principal y opcional), ubicación, horario y nota informativa (placeholders editables por el titular del portfolio).

### Componentes nuevos o relevantes

- **`PageBackground`**: fondo global (cuadrícula + componente `Particles`) en páginas que lo montan; capa con `overflow-hidden`.
- **`CircuitFxCanvas`** (`src/components/layout/CircuitFxCanvas.tsx`): canvas con **modos** `full` (buses + L en esquinas + partículas con glow; chips opcionales) y `border` (trazado perimetral + partículas en aristas). Props: `showChips`, `particleCount`, `glowBlur`, `chipLabel`. Soporte de **`prefers-reduced-motion`** (dibujo estático sin animación continua).
- **`AboutCircuitBackground`**: alias hacia `CircuitFxCanvas` en modo `full` con chips, por compatibilidad.
- **`SocialLinks`** + **`src/lib/social.ts`**: enlaces redondos a redes (GitHub, LinkedIn, Instagram, Facebook) con iconos SVG inline por compatibilidad con la versión de `lucide-react` usada.
- **`Languages`**: sección de idiomas con banderas desde rutas públicas `/images/es.png` y `/images/en.png` (el usuario coloca los assets en `public/images/`).

### Secciones y páginas modificadas

- **`Hero.tsx`**: animación del valor del título; color visible del nombre; redes sociales; avatar con **`CircuitFxCanvas`** (`mode="full"`, sin chips) detrás del contenido.
- **`Skills.tsx`**: sin porcentajes visibles; niveles **Intermedio / Básico / En aprendizaje** con etiquetas i18n y barras coloreadas (verde / ámbar / violeta) y anchos de animación discretos (85 % / 55 % / 35 % no mostrados al usuario).
- **`ContactForm.tsx`**: panel de datos con email, teléfonos (`tel:`), ubicación, horario, nota; uso de `contact.ts`; **circuito** en modo `border` en la card izquierda.
- **`About.tsx`**: primera tarjeta de texto con **circuito** en modo `border`.
- **`src/app/about/page.tsx`**: eliminado el canvas de página completa (solo `PageBackground`); el efecto “CPU/buses” queda solo como **embed** en contenedores donde se monta `CircuitFxCanvas`.
- **`src/app/page.tsx`**: `PageBackground`; sección **`Projects`** (destacados) en lugar del antiguo grid completo en home.
- **`src/app/projects/page.tsx`**: `PageHeader` + **`ProjectsShowcase`** (sustituye al antiguo `ProjectsGrid.tsx`, eliminado del código fuente).
- **`src/app/cv/page.tsx`**: visor/descarga de CV según idioma (`CvViewer`).

### Internacionalización — uso (`useT`)

- El sistema de mensajes tipados (`MessageKey`) se amplió con las claves nuevas citadas arriba sin romper el flujo existente de `useT`.

### Calidad y verificación

- Tras los cambios, el proyecto se verificó con **`npm run build`** (compilación correcta).

### Notas para continuidad

- Sustituir placeholders en **`src/lib/contact.ts`** y en **`src/lib/social.ts`** (URLs reales) y colocar banderas en **`public/images/`**.
- Ajustar opacidad del circuito embebido vía **`--circuit-embed-opacity`** en `portfolio.css` si se desea más o menos presencia visual.

---

## Actualización — cambios realizados (7 de mayo de 2026)

Esta sección complementa las actualizaciones previas y documenta los ajustes finales hechos hoy sobre el efecto de borde animado y su robustez en contenedores.

### Circuit FX: borde animado “de verdad” en contenedores

- **`CircuitFxCanvas`** (`src/components/layout/CircuitFxCanvas.tsx`):
  - Se añadió la variante de borde **`borderVariant`**:
    - `perimeter`: marco completo (perímetro).
    - `corners`: solo “L” en 4 esquinas (para look minimalista).
  - Se añadieron props de ajuste fino en modo borde:
    - `borderInsetPx`: distancia al borde (px).
    - `cornerArmPx`: longitud de la “L” (px).
  - En `mode="border"` se dejó de pintar la capa de “fade” (tinte) y se usa `clearRect`, para que el canvas funcione como **marco** sin oscurecer el fondo del `Card`.

### Corrección de ajuste de tamaño (layout dinámico)

- Se mejoró la inicialización y el re-cálculo de tamaño del canvas para que el borde animado **siempre calce** con el contenedor:
  - Reintento de `init()` si el tamaño inicial es muy pequeño (`w/h <= 1`) usando `requestAnimationFrame`.
  - Integración de **`ResizeObserver`** para re-ejecutar `init()` cuando el contenedor cambie de tamaño (no solo al `window.resize`).

### UI: reemplazo del borde sólido por el borde animado en “Sobre mí”

- En `src/components/sections/About.tsx`:
  - La `Card` principal de texto pasó a `border-transparent` para ocultar el borde nativo del componente `Card`.
  - Se configuró el canvas en `mode="border"` y `borderVariant="perimeter"` para que el marco animado sea el único borde visible y “contenga” el texto.

### Verificación

- `npm run build` ejecutado tras los cambios con compilación correcta.

---

## Actualización — cambios realizados (11 de mayo de 2026)

Esta sección documenta la galería de proyectos en React, el ajuste de rutas/páginas asociado y la alineación del informe con el estado actual del repositorio.

### Galería interactiva en `/projects` (`ProjectsShowcase`)

- **Componente**: `src/components/sections/ProjectsShowcase.tsx` (cliente).
- **Comportamiento**: acordeón horizontal de **tres** proyectos; panel activo con más ancho; navegación **prev/next**; teclado **← / →** para cambiar de foco, **S** para mezclar orden (**shuffle** en estado React, sin mutar el DOM manualmente), **A** para alternar **modo ambient** (efectos visuales acotados al escenario, no sobre `body` global).
- **Parallax** suave en la imagen de fondo del panel activo, desactivado si `prefers-reduced-motion`.
- **Toasts** informativos (colas de acción, shuffle, ambient) renderizados en React (`<output aria-live="polite">`), sin inyectar `<style>` desde JS como la demo estática original.
- **Framer Motion**: entrada suave de la sección al entrar en viewport.
- **Accesibilidad**: `role="tab"` / `aria-selected` en paneles; botón esquina y enlaces con `aria-label` vía i18n; evitar botón anidado en botón (panel contenedor + CTA como enlaces con `stopPropagation`).

### Estilos dedicados (`src/styles/projects-showcase.css`)

- Reglas **prefijadas** bajo **`.projectsStage`** para no pisar `html`/`body` ni el resto del tema.
- Uso de **tokens del portafolio** (`--text-primary`, `--border`, `--shadow-color`, `--primary`, `--palette-*`, etc.) donde aplica; texto sobre imagen mantiene variables locales `--ps-text` / `--ps-muted` para legibilidad.
- Modo **ambient** implementado como **`.projectsStage.projectsStage--ambient`** con pseudo-elementos sobre **`.ps-stage`** (viñetas y textura), no como `body.ambient` del `public/style.css` original.
- Media queries para vista estrecha (acordeón en columna, altura mínima del escenario) y `prefers-reduced-motion`.

### Datos no traducibles (`src/lib/projects-showcase-config.ts`)

- Por proyecto: **color de acento**, **URL de imagen** de cabecera, **porcentaje** de la barra meta, **`demoHref`** y **`repoHref`** (por defecto `#` hasta definir URLs reales).

### Internacionalización (`messages.ts`)

- Nuevas claves bajo **`sections.projectsShowcase.*`**: marca, chips (shuffle / ambient / crisp), textos de estado, pie de interacción, modos, toasts, CTAs, textos por ítem **`item0` … `item2`** (pills, título, subtítulo, tags CSV, specs `Clave:Valor|…`, meta).
- Claves **`a11y.projectsShowcase.prev`** y **`a11y.projectsShowcase.next`**.
- Subtítulos de página **`pages.projects.subtitle`** (es/en) actualizados para describir la galería interactiva.

### Página Home vs `/projects`

- **Home** (`src/app/page.tsx`): sección **`Projects`** (tarjetas destacadas con i18n), en lugar del antiguo grid de tres cards con la misma cabecera que la página de proyectos.
- **`/projects`**: solo **`PageHeader`** + **`ProjectsShowcase`** (sin duplicar el mismo `h2` de “Proyectos” que ya aporta `PageHeader`).

### Archivos eliminados o legado en `public/`

- Eliminado del código fuente: **`src/components/sections/ProjectsGrid.tsx`** (sustituido por `ProjectsShowcase`).
- Los archivos **`public/index.html`**, **`public/script.js`** y **`public/style.css`** corresponden a la **demo estática** original de la galería; la implementación activa vive en React + `projects-showcase.css`. Pueden conservarse como referencia o retirarse del repo si ya no se necesitan.

### Paleta y secciones de contenido (recordatorio)

- En **`portfolio.css`**: tokens **`--palette-*`** (paleta tipo editor para tema claro y oscuro), utilidades **`.text-palette-*`**, **`.bg-surface-*`**, y ajustes de **Experience** / **Projects** / **Card** / **Hero** enlazados a i18n donde aplica (contenido de tarjetas no hardcodeado por idioma).

### Verificación

- `npm run build` correcto tras integrar `ProjectsShowcase` y retirar `ProjectsGrid`.

