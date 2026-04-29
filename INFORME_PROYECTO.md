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

