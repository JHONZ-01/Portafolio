# Plan de adaptación de `public/index.html`, `public/css.css`, `public/js.js` a tu proyecto Next.js

## Objetivo

Convertir el template **HTML/CSS/JS “one‑page”** que tienes en `public/` en una app **Next.js App Router** (tu estructura en `src/`) con:

- Componentes reutilizables (React/TypeScript)
- Estilos integrados (Tailwind v4 + global CSS donde haga falta)
- Interacciones y animaciones **sin manipulación directa del DOM** (o minimizada y encapsulada en Client Components)
- Navegación consistente (rutas Next + anclas internas donde aplique)
- Mejor base para “darle vida”: datos reales, proyectos, enlaces, formulario funcional, i18n, etc.

> **Importante**: este documento es un plan. **No modifica archivos**. Describe qué extraeremos y qué transformaremos.

---

## 1) Qué contiene el template actual

### 1.1 `public/index.html` (estructura y dependencias)

**Estructura:**

- **Loader** inicial (`#loader`) con porcentaje (`#loaderPercent`)
- **Header/Navigation** fijo (`#header`), menú (`#navMenu`) y controles:
  - Botón idioma `#langToggle`
  - Botón tema `#themeToggle`
  - Botón menú móvil `#menuToggle`
- **Main one‑page** con secciones por `id`:
  - `#home` (Hero) con partículas `#particles`
  - `#about`
  - `#skills`
  - `#experience`
  - `#projects`
  - `#contact` (incluye `form#contactForm`)
- **Footer** final

**Internacionalización “ligera”:**

- Textos duales por atributos `data-text-en` / `data-text-ar`
- Placeholders duales `data-placeholder-en` / `data-placeholder-ar`
- Cambio de dirección por `dir="ltr|rtl"` y `data-dir` en `<body>`

**Dependencias externas en el HTML:**

- Tailwind por CDN (solo “dev”): `https://cdn.tailwindcss.com`
- Font Awesome por CDN
- Google Fonts: Tajawal y Fira Code (CDN)
- Anime.js por CDN

**Observación crítica (rutas referenciadas vs archivos presentes):**

En `index.html` se referencia:

- `css/style.css`
- `js/animations.js`
- `js/main.js`

Pero en tu carpeta `public/` los archivos que mencionas son:

- `public/css.css`
- `public/js.js`

Esto implica que este HTML **no está apuntando a esos nombres**. Para integrarlo en Next, no vamos a “servirlo tal cual”; lo vamos a **migrar a componentes** y a un pipeline de bundling (Next) evitando estos includes directos.

---

### 1.2 `public/css.css` (diseño y sistema de temas)

**Sistema de diseño basado en CSS Variables:**

- Paleta: `--primary`, `--secondary`, `--accent`, `--cyan`, `--purple`, `--green`
- Fondos: `--bg-dark`, `--bg-darker`, `--bg-card`, `--bg-hover`
- Tipografía: `--font-primary` (Tajawal), `--font-code` (Fira Code)
- Transiciones y sombras predefinidas

**Tema:**

- Tema oscuro por defecto (variables base en `:root`)
- Tema claro usando selector `[data-theme="light"]` (reescribe variables)
- El tema se controla por atributo en `<body data-theme="...">`

**Dirección LTR/RTL:**

- `[dir="rtl"]` y `[dir="ltr"]` cambian dirección y alineación
- Ajustes extra para timeline y hover en RTL

**Componentes de UI definidos por clases (no Tailwind):**

- Loader (`.loader-*`)
- Navbar y menú móvil (`.main-header`, `.nav-menu.active`, etc.)
- Hero + partículas + badges
- Secciones genéricas (`.section`, `.section-header`, etc.)
- About stats y code block
- Skills progress bars
- Timeline (experience)
- Cards de proyectos
- Contact (info + form)
- Footer + social

**Animaciones CSS:**

- `fadeInUp`, `spin`, `progress`, `gridMove`, `float`, `pulse`, `floatBadge`, `blink`, etc.

---

### 1.3 `public/js.js` (comportamiento, estado y animaciones)

El JS implementa un estado global `AppState` y varias inicializaciones sobre `DOMContentLoaded`/`load`.

**Funciones y features principales:**

- **Preferencias en `localStorage`**
  - `portfolio-lang` y `portfolio-theme`
- **Idioma EN/AR**
  - `setLanguage()` cambia `html[lang]`, `html[dir]`, `body[data-lang]`, `body[data-dir]`
  - `updateLanguageUI()` recorre el DOM y cambia `textContent` y `placeholder`
- **Tema**
  - `setTheme()` cambia `body[data-theme]`
  - `updateThemeUI()` alterna icono FontAwesome
- **Navegación por anclas con scroll suave**
  - intercepta clicks en `.nav-link[href^="#"]`
  - calcula offset por altura del header
  - `scroll spy` para marcar el link activo según sección visible
  - header “scrolled” por `window.scrollY`
- **Efectos por scroll (IntersectionObserver)**
  - agrega `.visible` a elementos con `.fade-in`
- **Menú móvil**
  - toggles sobre `#navMenu` y `#menuToggle`
  - cierre al click fuera
- **Formulario**
  - intercepta submit, hace `alert()` y `console.log`
  - no envía nada a backend
- **Partículas**
  - crea nodos `.particle` con símbolos de código y animación CSS
- **Animaciones**
  - usa **Anime.js** (si está disponible)
  - loader con porcentaje y fade out
  - “typing” del nombre en Hero
  - animación de barras de skills (width + contador)
  - timeline/projects/cards con inView observers
  - parallax por scroll (transform en `#profileImage` y `.code-grid-bg`)

---

## 2) Estrategia de adaptación a Next.js (sin “pegar” HTML entero)

En Next.js (App Router) la forma correcta es:

- El **markup** de `index.html` se reparte en **componentes React** dentro de `src/components/...` y/o páginas `src/app/...`.
- El **CSS** se integra en:
  - `src/styles/globals.css` para variables, resets y estilos globales
  - Tailwind para la mayor parte del layout/espaciados/typography
  - (opcional) un fichero extra si ciertas clases del template conviene mantener temporalmente
- El **JS** se migra a:
  - **estado React** (useState, useEffect)
  - **hooks** reutilizables (ej. `useTheme`, `useLanguage`, `useScrollSpy`)
  - **Client Components** solo donde haya interacción/DOM APIs
  - para animaciones: o bien **framer-motion** (ya lo tienes instalado) o mantener Anime.js pero encapsulado

El objetivo es evitar este anti‑patrón en React:

- `document.querySelectorAll(...)` + mutación masiva del DOM para traducciones/estado

Eso en Next/React suele producir:

- problemas con SSR/hidratación
- dificultad para testear y mantener
- comportamientos inconsistentes al navegar entre rutas

---

## 3) Qué vamos a extraer y a qué se mapea en tu estructura `src/`

### 3.1 Páginas y secciones

Tu proyecto actual tiene:

- `src/app/page.tsx` (Home)
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`

El template original es **one‑page** (secciones con `#id`). Para “darle vida” hay dos opciones válidas:

- **Opción A (recomendada)**: Home como landing con secciones + páginas dedicadas (About/Projects) para contenido profundo.
- **Opción B**: mantener one‑page y que About/Projects sean anclas (menos SEO/estructura, pero simple).

**Propuesta práctica (A):**

- Home (`/`): Hero + “destacados” + Contacto (ya lo tienes)
- `/about`: mover About + Skills + Experience
- `/projects`: mover Projects (grid) + detalle de proyectos (más adelante)

**Qué extraer del HTML:**

- `#home` → `src/components/sections/Hero` (ampliar para incluir badges/imagen/partículas)
- `#about` → nuevo `src/components/sections/About`
- `#skills` → nuevo `src/components/sections/Skills`
- `#experience` → nuevo `src/components/sections/Experience`
- `#projects` → mejorar `src/components/sections/Projects` y crear `src/components/sections/ProjectsGrid` si conviene
- `#contact` → mejorar `src/components/sections/Contact` (form real)
- footer → ya existe `src/components/layout/Footer`
- navbar → ya existe `src/components/layout/Navbar`, pero habría que ampliarlo con:
  - botón theme
  - botón language
  - menú móvil
  - scroll spy / active state

---

### 3.2 Estilos: cómo los migramos sin romper el look

El template tiene un estilo fuerte basado en variables y clases. Para migrarlo bien:

**Paso 1 (mínimo riesgo):**

- Copiar el **sistema de variables** (colores, sombras, fuentes) a `src/styles/globals.css`.
- Mantener algunas clases clave del template (loader, header, hero background, etc.) temporalmente en global CSS mientras se convierte a Tailwind.

**Paso 2 (consolidación):**

- Reemplazar gradualmente clases “presentacionales” por Tailwind en los componentes.
- Mantener en CSS solo:
  - variables
  - animaciones `@keyframes`
  - estilos que Tailwind no cubre cómodamente (p.ej. background grid animado, partículas)

**Tema en Next (alineado con tu stack):**

- El template usa `body[data-theme="dark|light"]`.
- Tu proyecto ahora mismo se apoya en variables y `prefers-color-scheme`.

Plan de adaptación:

- Mantener `data-theme` (te da control explícito + persistencia).
- Añadir/usar una clase/atributo a nivel `html` o `body` y hacer que variables se definan por:
  - `:root` (default)
  - `[data-theme="light"]` (override)
  - `[data-theme="dark"]` (explicit)

Esto casa bien con React: el “toggle” solo setea el atributo; el CSS hace el resto.

---

### 3.3 JS → React: lista exacta de transformaciones

#### (A) Estado global `AppState`

**Antes:** objeto global + mutación directa.

**Después:** estado React + persistencia:

- `theme`: `'dark' | 'light'` (persistido en `localStorage`)
- `lang`: `'es' | 'en' | 'ar'` (si quieres ES como principal)
- `isMenuOpen`: boolean
- `activeSection`: string (si mantienes anclas en la misma página)

#### (B) Idioma

El template hace traducción “runtime” leyendo atributos `data-text-*`.

Para Next hay tres niveles de madurez:

- **Nivel 1 (rápido)**: eliminar `data-text-*` y pasar textos desde objetos JS/TS (diccionario) por props.
- **Nivel 2 (correcto)**: usar i18n (ej. `next-intl`) y traducir por claves.
- **Nivel 3 (avanzado)**: rutas por locale (`/en`, `/es`, `/ar`), SEO multi-idioma, etc.

En tu caso, para “dar vida” sin deuda, **Nivel 2** es el más limpio.

#### (C) Navegación + scroll suave + scroll spy

Si mantienes secciones en la misma página:

- reemplazar listeners por:
  - `onClick` en links que hacen `scrollIntoView` + offset de header
  - hook `useScrollSpy()` con `IntersectionObserver` para setear `activeSection`
  - clases condicionales en `Navbar`

Si conviertes a rutas (`/about`, `/projects`):

- el “active link” lo controla el router (`usePathname()`), no el scroll.

#### (D) Loader inicial

En Next no conviene bloquear UI con un loader artificial, pero si quieres el efecto:

- Implementarlo como **Client Component** que vive en `RootLayout` o Home:
  - muestra overlay hasta que “hidratación + assets iniciales” estén listos
  - animaciones con framer-motion o CSS

#### (E) Partículas

En vez de crear nodos con `document.createElement`, generar partículas en React:

- `const particles = useMemo(() => [...])`
- renderizar `div.particle` con estilos inline (left/delay/duration)

#### (F) Animaciones (Anime.js)

Ahora mismo `js.js` depende de Anime.js global (`window.anime` por CDN).

Para Next, opciones:

- **Recomendada**: migrar a **framer-motion** (ya instalado). Ventajas:
  - declarativo
  - SSR-friendly (si se usa bien)
  - mejor mantenibilidad
- **Alternativa**: mantener Anime.js como dependencia npm e inicializar solo en client:
  - `useEffect(() => { ... anime(...) ... }, [])`
  - evitar modificar DOM fuera del componente dueño

---

## 4) Qué vamos a “modificar” para que el proyecto tenga vida (prioridades)

### Prioridad 1: Contenido real + estructura de secciones

Extraer del HTML a componentes:

- `About`, `Skills`, `Experience`, `ProjectsGrid`, `ContactForm`

Y alimentar con datos:

- `src/lib/data/` (o `src/content/`) con arrays tipados para:
  - skills + niveles
  - experiencia (timeline)
  - proyectos (cards con links)
  - redes sociales

*(Esto permite cambiar contenido sin tocar JSX.)*

### Prioridad 2: Navbar “viva”

Implementar:

- responsive + menú móvil
- active link por ruta (y/o scroll spy si hay anclas)
- toggles de **tema** y **idioma**

### Prioridad 3: Formulario funcional (sin `alert()`)

Actualmente el form solo hace `console.log` y `alert`.

Evolución mínima:

- Validación en cliente (required + formato)
- Envío a un endpoint (route handler) o servicio (Email provider)
- Estados: `idle | sending | success | error`
- Mensajes traducibles

### Prioridad 4: Reemplazar CDNs por dependencias y assets locales

El HTML usa Font Awesome y Anime.js por CDN.

En tu proyecto ya tienes:

- `lucide-react` (para iconos) → reemplaza Font Awesome
- `framer-motion` → reemplaza Anime.js

Esto reduce:

- dependencias globales
- riesgo de CSP/privacidad
- variaciones por red

### Prioridad 5: Tema e i18n “bien hecho”

Tema:

- Persistir tema en `localStorage`
- Sincronizar con atributo (`data-theme`) + variables CSS

Idioma:

- introducir librería i18n (si quieres multi-idioma real)
- o fijar ES como principal y dejar EN/AR como futura mejora

---

## 5) Riesgos técnicos y cómo los evitamos

- **Hidratación**: evitar que el servidor renderice un tema/idioma y el cliente lo “cambie” abruptamente sin estrategia.
  - solución: inicializar tema/idioma temprano (en client) y minimizar “flash”
- **Manipulación del DOM**: migrar a React declarativo para evitar inconsistencias.
- **Animaciones**: no animar “todo el documento”; animar solo componentes montados.
- **Accesibilidad**:
  - menú móvil con focus management
  - botones con `aria-*`
  - formulario con labels y feedback

---

## 6) Checklist de extracción (lo que vamos a portar del template)

- **UI/Secciones**
  - Loader inicial (opcional)
  - Navbar con toggles + menú móvil
  - Hero (grid background animado, partículas, badges)
  - About + Stats animadas
  - Skills con barras animadas
  - Experience timeline
  - Projects grid con overlay links
  - Contact info + form
  - Footer con social

- **Estilos**
  - Variables (colores, sombras, fuentes, transiciones)
  - Keyframes relevantes (blink/pulse/gridMove/float/etc.)
  - Layouts específicos que no convengan en Tailwind de inmediato

- **Comportamiento**
  - Theme toggle + persistencia
  - Language toggle + persistencia (si se mantiene)
  - Scroll spy (solo si se mantiene one-page)
  - Animaciones de entrada (convertir a framer-motion / hooks)

---

## 7) Qué NO conviene copiar tal cual

- Tailwind por CDN + supresión de warning en consola.
  - En Next ya estás usando Tailwind de forma correcta (build-time).
- Traducción por mutación de `textContent` a través del DOM.
  - En React se debe renderizar según estado/props.
- `alert()` para el formulario.
  - Debe ser UI de feedback (componentes) + envío real.

---

## 8) Próximo paso (cuando me digas “adelante”)

Sin tocar `public/*`, el siguiente paso sería implementar en `src/`:

- `src/components/sections/About.tsx`
- `src/components/sections/Skills.tsx`
- `src/components/sections/Experience.tsx`
- ampliar `Navbar` con toggles y menú móvil
- adaptar `globals.css` para incorporar variables/animaciones del template
- refactor de `Contact` a un form real (con estados)

Y luego reemplazar progresivamente estilos de clases “legacy” por Tailwind.

