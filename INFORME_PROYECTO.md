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

```
src/
├── app/                      # App Router: rutas y layouts
│   ├── page.tsx              # Home (/)
│   ├── layout.tsx            # Layout raíz (HTML/Body + CSS global)
│   ├── favicon.ico
│   ├── about/
│   │   └── page.tsx          # /about
│   └── projects/
│       └── page.tsx          # /projects
│
├── components/               # Componentes reutilizables
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
│
├── styles/
│   └── globals.css           # CSS global (Tailwind + variables)
│
├── lib/
│   └── utils.ts              # Helpers (p.ej. cn() para className)
│
└── assets/
    └── images/               # Imágenes/íconos (organización interna)
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

## Layout raíz y estilos globales

### `src/app/layout.tsx`

- Define `metadata` (título/description).
- Carga fuentes vía `next/font/google`.
- Importa los estilos globales desde `src/styles/globals.css`.
- Establece estructura base de página (`html` / `body`) y layout flex.

### `src/styles/globals.css`

Incluye:

- `@import "tailwindcss";` (Tailwind v4)
- Variables CSS de tema (`--background`, `--foreground`) con modo oscuro por `prefers-color-scheme`.

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
- **`Projects.tsx`**: listado corto (destacados) con enlace a `/projects`
- **`Contact.tsx`**: bloque de contacto (incluye `id="contact"` para anclas)

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
- **`ProjectsGrid.tsx`**: primera tarjeta de proyecto con **circuito** en la franja superior del preview; overlay de enlaces con `z-index` adecuado.
- **`src/app/about/page.tsx`**: eliminado el canvas de página completa (solo `PageBackground`); el efecto “CPU/buses” queda solo como **embed** en contenedores donde se monta `CircuitFxCanvas`.
- **`src/app/page.tsx`** / **`about/page.tsx`** / **`projects/page.tsx`**: uso de `PageBackground` donde corresponde; Home incluye sección `Languages`.

### Internacionalización — uso (`useT`)

- El sistema de mensajes tipados (`MessageKey`) se amplió con las claves nuevas citadas arriba sin romper el flujo existente de `useT`.

### Calidad y verificación

- Tras los cambios, el proyecto se verificó con **`npm run build`** (compilación correcta).

### Notas para continuidad

- Sustituir placeholders en **`src/lib/contact.ts`** y en **`src/lib/social.ts`** (URLs reales) y colocar banderas en **`public/images/`**.
- Ajustar opacidad del circuito embebido vía **`--circuit-embed-opacity`** en `portfolio.css` si se desea más o menos presencia visual.

