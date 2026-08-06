# Informe: Estado actual y plan de mejora — Portafolio JP

_Generado: 2026-08-05_

## 1. Resumen del estado actual

Stack: **Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Framer Motion + TypeScript**.

El proyecto es el andamiaje inicial de un portafolio personal. Las páginas y componentes existen como archivos, pero casi todos están vacíos (placeholders con comentarios `{/* ... */}`). No hay contenido real, ni estilos aplicados, ni metadatos propios.

```
src/
  app/
    page.tsx          → Home (solo <h1>Home</h1>)
    about/page.tsx     → About (solo <h1>)
    projects/page.tsx  → Projects (solo <h1>)
  components/
    layout/Navbar.tsx  → vacío
    layout/Footer.tsx  → vacío
    sections/Hero.tsx      → vacío
    sections/Projects.tsx  → vacío
    sections/Contact.tsx   → vacío
    ui/Button.tsx      → botón sin variantes ("Click me" hardcodeado)
    ui/Card.tsx        → wrapper básico sin estilos
  lib/utils.ts         → solo un helper `cn()`
  assets/images/       → vacío (.gitkeep)

app/                   ← carpeta duplicada en la RAÍZ (la generó create-next-app)
  layout.tsx           → título "Create Next App", fuentes Geist
  page.tsx             → landing default de Next.js (logo, links a Vercel/docs)
  globals.css
```

---

## 2. Problema crítico #1: hay dos carpetas `app/`

Tienes `app/` en la raíz **y** `src/app/`. Next.js solo debe usar una de las dos. Con el `tsconfig.json` actual (`"paths": { "@/*": ["./*"] }`, apuntando a la raíz, no a `./src/*`), todo indica que Next.js está sirviendo la carpeta `app/` de la raíz — es decir, **todo lo que has construido en `src/app/`, `src/components/`, etc. probablemente no se está renderizando en absoluto**.

**Acción inmediata:**
1. Decide una sola ubicación (recomendado: `src/app/`, ya que ya organizaste `components/`, `lib/`, `assets/` bajo `src/`).
2. Elimina la carpeta `app/` de la raíz (o mueve su contenido útil — como las fuentes Geist del `layout.tsx` — hacia `src/app/layout.tsx`).
3. Verifica que `src/app/layout.tsx` exista (hoy no existe; solo hay `page.tsx`, `about/page.tsx`, `projects/page.tsx`, pero falta el `layout.tsx` raíz dentro de `src/app`).
4. Corre `npm run dev` y confirma en el navegador que efectivamente ves tu Home (no el landing default de Next.js con el logo).

Sin resolver esto, cualquier otro cambio que hagas en `src/` no se verá reflejado.

---

## 3. Arquitectura recomendada

Estructura sugerida una vez consolidado todo en `src/`:

```
src/
  app/
    layout.tsx              # Layout raíz: fuentes, <html>, <body>, Navbar + Footer, metadata SEO
    page.tsx                # Home: compone Hero, Projects (preview), Contact
    globals.css
    about/
      page.tsx
    projects/
      page.tsx
      [slug]/page.tsx        # (opcional) detalle de cada proyecto
    contact/
      page.tsx               # (opcional) si separas contacto de la Home
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Projects.tsx
      Skills.tsx              # nueva: stack tecnológico
      Contact.tsx
    ui/
      Button.tsx
      Card.tsx
      ProjectCard.tsx         # tarjeta específica de proyecto (imagen, tags, links)
      Badge.tsx                # etiquetas de tecnologías
  data/
    projects.ts                # array tipado con tus proyectos (título, desc, stack, links, imagen)
    social.ts                  # links a GitHub, LinkedIn, email
  lib/
    utils.ts
  types/
    project.ts                 # tipo `Project`
  assets/
    images/
```

**Por qué esta estructura:**
- **`data/`** separa el contenido (qué proyectos mostrás) del componente que lo renderiza. Así agregar un proyecto nuevo es editar un array, no tocar JSX.
- **`types/`** te da autocompletado y evita errores al listar proyectos.
- Mantener `ui/` (componentes genéricos y reutilizables) separado de `sections/` (composiciones específicas de una página) es una convención estándar que escala bien.

---

## 4. Qué falta para que funcione y se vea bien

### Contenido y componentes (prioridad alta)
- [ ] `Navbar`: logo/nombre, links a Home/Projects/About, toggle de tema claro/oscuro, versión responsive (menú hamburguesa en mobile).
- [ ] `Hero`: tu nombre, rol/título (ej. "Desarrollador Full Stack"), una frase de valor, foto/avatar, botones CTA ("Ver proyectos", "Contactame"), links a redes (GitHub, LinkedIn).
- [ ] `Projects`: grid de `ProjectCard` con imagen, título, descripción corta, tags de stack, links a demo/repo. Alimentar desde `data/projects.ts`.
- [ ] `Contact`: formulario o mailto directo, links a redes, opcionalmente integración con un servicio de envío (ver sección 6).
- [ ] `Footer`: copyright, redes sociales, quizás "hecho con Next.js".
- [ ] `Button`: agregar variantes (`primary`, `outline`, `ghost`), tamaños, soporte de `href` (como link) y `onClick`, y que reciba `children` en vez de texto fijo.
- [ ] `Card`: estilos base (padding, borde, sombra, radius, hover) — hoy usa una clase `card` que no está definida en ningún CSS.

### Metadata y SEO (prioridad alta)
- [ ] Reemplazar el `metadata` genérico de `layout.tsx` ("Create Next App") por título/descripción reales, Open Graph (imagen de preview para compartir en redes) y favicon propio.
- [ ] Agregar `sitemap.ts` y `robots.ts` (soportados nativamente por Next.js App Router).
- [ ] Usar `generateMetadata` por página si cada una necesita un `<title>` distinto.

### Accesibilidad y calidad
- [ ] Todas las imágenes con `alt` descriptivo.
- [ ] Contraste de color suficiente (revisar con Lighthouse).
- [ ] Navegación por teclado en el menú mobile y modales si los hay.
- [ ] `eslint` ya está configurado — correr `npm run lint` antes de cada commit importante.

### Performance
- [ ] Usar `next/image` para cualquier imagen real que agregues (ya usado en el `page.tsx` default, mantenerlo).
- [ ] Lazy-load de secciones pesadas si agregás animaciones complejas con Framer Motion.
- [ ] Revisar Core Web Vitals con Lighthouse antes de publicar.

---

## 5. Cómo hacerlo más llamativo (diseño)

Ya tenés **Tailwind CSS 4** y **Framer Motion** instalados pero sin usar — son tus dos herramientas principales acá.

1. **Define una identidad visual concreta** antes de picar código:
   - Paleta: 1 color primario + 1 de acento + escala de grises (Tailwind ya trae `zinc`/`slate`). Evitá usar muchos colores saturados.
   - Tipografía: ya tenés Geist Sans/Mono cargadas vía `next/font` — aprovechalas, dan un look moderno sin esfuerzo extra.
   - Modo oscuro: `globals.css` ya tiene variables `--background`/`--foreground` con `prefers-color-scheme`. Podés extenderlo a un toggle manual con `next-themes` si querés que el usuario elija.

2. **Micro-interacciones con Framer Motion** (alto impacto, bajo esfuerzo):
   - Fade-in + slide-up al hacer scroll en cada sección (`whileInView`).
   - Hover states en `ProjectCard` (escala leve, sombra).
   - Transición de página o stagger en la lista de proyectos.

3. **Hero fuerte**: es lo primero que se ve. Un buen hero con foto/ilustración, animación sutil de texto (typewriter o fade), y un CTA claro convierte mucho mejor que un `<h1>Home</h1>`.

4. **Storytelling en "About"**: no listes solo tecnologías — contá brevemente tu trayectoria, qué te interesa, y un CTA a "Ver proyectos" o "Descargar CV".

5. **Consistencia**: usa `Card` y `Button` en todos lados en vez de estilos ad-hoc por sección — así el sitio se siente cohesivo.

6. **Detalles que suman**: cursor personalizado, scroll suave (`scroll-behavior: smooth`), sección de skills con íconos (via `lucide-react`, que ya está instalado), barra de progreso de scroll.

No hace falta reinventar todo — con Tailwind + Framer Motion bien aplicados sobre una estructura simple ya se logra un resultado muy pulido.

---

## 6. Cómo subirlo a producción

### Opción recomendada: Vercel (creadores de Next.js, deploy más simple)

1. Sube el repo a GitHub (si no lo está ya) y haz push de tus últimos cambios.
2. Entra a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub.
3. "Add New Project" → selecciona el repo `portafolio-jp`.
4. Vercel detecta Next.js automáticamente (build command `next build`, output automático) — no necesitas configurar nada extra salvo variables de entorno si las usás (ej. para el formulario de contacto).
5. Deploy. Cada `push` a `main` genera un deploy de producción automático; cada PR genera un preview URL.
6. Dominio propio: en el proyecto de Vercel → Settings → Domains → agregás tu dominio y configurás los DNS que te indique (registros A/CNAME).

```bash
# Antes de subir, corré esto localmente para asegurarte de que el build no falla:
npm run build
```

### Alternativas
- **Netlify**: soporte para Next.js vía plugin oficial, proceso similar a Vercel.
- **Cloudflare Pages**: buena opción gratuita, requiere el adaptador `@cloudflare/next-on-pages` para App Router.
- **VPS propio** (ej. con Docker + Nginx): más control, pero más trabajo de mantenimiento — no recomendado para un portafolio salvo que ya tengas esa infraestructura.

### Checklist antes de publicar
- [ ] Resolver el problema de las dos carpetas `app/` (sección 2).
- [ ] `npm run build` sin errores ni warnings relevantes.
- [ ] `npm run lint` limpio.
- [ ] Metadata (title, description, OG image, favicon) actualizada — no debe decir "Create Next App".
- [ ] Probar en mobile (responsive) y en modo oscuro/claro.
- [ ] Revisar Lighthouse (Performance, Accessibility, SEO) en Chrome DevTools.
- [ ] Verificar que los links de contacto/redes funcionen.
- [ ] Dominio configurado (si vas a usar uno propio en vez del `*.vercel.app`).

---

## 7. Roadmap priorizado

| Prioridad | Tarea |
|---|---|
| 🔴 Crítico | Resolver duplicidad de carpetas `app/` (sección 2) |
| 🔴 Crítico | Crear `src/app/layout.tsx` con Navbar/Footer y metadata real |
| 🟠 Alto | Implementar contenido real de Hero, Navbar, Footer |
| 🟠 Alto | Crear `data/projects.ts` + `ProjectCard` y poblar la sección Projects |
| 🟠 Alto | Implementar Contact (form o links directos) |
| 🟡 Medio | Pulir `Button`/`Card` con variantes y estilos consistentes |
| 🟡 Medio | Animaciones con Framer Motion en secciones clave |
| 🟡 Medio | SEO: sitemap, robots, OG image, favicon propio |
| 🟢 Bajo | Modo oscuro con toggle manual (`next-themes`) |
| 🟢 Bajo | Sección de Skills con íconos |
| 🟢 Bajo | Deploy a Vercel + dominio propio |

---

**Siguiente paso sugerido:** arrancar por el punto crítico (unificar `app/`), y luego construir el `layout.tsx` + `Navbar`/`Footer` para tener una base navegable antes de meterle contenido a cada sección.
