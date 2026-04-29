# Plan para integrar APIs (endpoints) en tu portafolio (Next.js App Router)

## Objetivo

Elevar el portafolio a un nivel **junior→senior** incorporando **APIs reales**, buenas prácticas de backend, y consumo desde frontend:

- Endpoints propios (Route Handlers en Next)
- Validación/seguridad (Zod, rate limiting, sanitización)
- Buen diseño de capas (handlers → servicios → repos → providers externos)
- Observabilidad básica (logs, trazas, métricas mínimas)
- Caché/control de revalidación

> Nota: Queda **pendiente** (para más adelante) incorporar una **“firma de programador”** en el código (marca/autoría), sin contaminar el producto ni crear deuda técnica.

---

## 1) Dónde se colocan los endpoints en tu proyecto

En App Router, los endpoints viven aquí:

- `src/app/api/<recurso>/route.ts`

Ejemplos:

- `src/app/api/health/route.ts`
- `src/app/api/projects/route.ts`
- `src/app/api/contact/route.ts`

Cada `route.ts` exporta handlers HTTP (`GET`, `POST`, etc.) y retorna `Response`.

---

## 2) Diseño “nivel senior”: capas recomendadas

Para evitar “todo en el handler”, separar:

- **`src/app/api/**/route.ts`**
  - **Muy fino**: parseo request, auth (si aplica), llama a servicio, devuelve Response

- **`src/lib/server/services/*`**
  - Casos de uso: `sendContactMessage`, `listProjects`, `getGithubStats`

- **`src/lib/server/repos/*`**
  - Persistencia / acceso a datos: DB, filesystem, o servicios externos

- **`src/lib/server/providers/*`**
  - Integraciones: Email provider, GitHub, CMS, etc.

- **`src/lib/validation/*`**
  - Esquemas Zod para validar input y tipar payloads

Esto te permite crecer sin deuda y demuestra “seniority” (modularidad, testabilidad, boundaries).

---

## 3) APIs que tienen sentido en un portafolio (priorizadas)

### 3.1 `GET /api/health` (baseline profesional)

**Propósito**

- Healthcheck para despliegues, uptime, monitoreo, y debugging.

**Respuesta**

- `{ ok: true, timestamp, version }`

**Dónde impacta**

- No UI; sirve para CI/CD y verificación operativa.

---

### 3.2 `POST /api/contact` (form real)

Tu UI ya tiene `ContactForm`. Ahora debe enviar a un endpoint real.

**Propósito**

- Recibir mensaje y enviarlo por email / registrar en DB / enviar a Slack/Discord.

**Input (ejemplo)**

- `name`, `email`, `subject`, `message`

**Prácticas senior obligatorias**

- Validación con Zod
- Rate limiting (por IP)
- Anti-spam: honeypot + throttling + (opcional) captcha
- Sanitización para evitar inyección (no renderizar HTML del usuario)
- Respuestas claras: `202 Accepted` o `200 OK`, `400` en validation, `429` rate limit

**Dónde va**

- `src/app/api/contact/route.ts`
- Servicio: `src/lib/server/services/contact.ts`
- Provider: `src/lib/server/providers/email/*` (SendGrid/Resend/SMTP)

---

### 3.3 `GET /api/projects` (data-driven + caché)

**Propósito**

- Dejar de tener proyectos hardcodeados en JSX.
- Cargar listado desde una fuente (DB, JSON, CMS o GitHub).

**Estrategia simple**

- Fuente inicial: `src/lib/data/projects.ts` (tipado, versionable)
- Endpoint: `GET /api/projects` retorna lista
- UI: `ProjectsGrid` consume la API y renderiza cards

**Estrategia senior (opcional)**

- Soportar filtros: `?tag=Next.js`
- Paginación: `?cursor=...` / `?page=1`
- Cache headers: `Cache-Control` o revalidación ISR si aplica

**Dónde va**

- `src/app/api/projects/route.ts`
- Servicio: `src/lib/server/services/projects.ts`
- Repo: `src/lib/server/repos/projectsRepo.ts` (inicialmente lee data local)

---

### 3.4 `GET /api/github/*` (integración externa “portfolio moderno”)

**Propósito**

- Mostrar actividad real: repos, estrellas, contribuciones, lenguajes top.

**Opciones**

- Consumir GitHub REST/GraphQL desde server (recomendado)
- Cachear respuestas para evitar rate limits

**Seguridad**

- Si usas token, guardarlo en `.env` (no se commitea)
- Devolver solo lo necesario al frontend

**Endpoints sugeridos**

- `GET /api/github/repos?user=<...>`
- `GET /api/github/summary?user=<...>`

**Dónde va**

- `src/app/api/github/summary/route.ts`
- Provider: `src/lib/server/providers/github.ts`

---

### 3.5 `GET /api/analytics` (telemetría básica)

**Propósito**

- Contar visitas a proyectos o clicks (sin invadir privacidad).

**Recomendación**

- Si lo haces, hazlo “privacy-first”: sin PII, sin fingerprinting.
- Persistencia: DB o proveedor simple.

---

## 4) Cómo consumir APIs desde el frontend (sin mal diseño)

Para un portafolio “serio”:

- Llamadas desde Server Components cuando el dato sea público y cacheable (mejor SEO/perf).
- Llamadas desde Client Components cuando sea interacción (form, toggles).

**Patrón recomendado**

- `src/lib/api/client.ts`: helper de fetch para cliente (manejo de errores)
- `src/lib/api/server.ts`: helper para server (si aplicas)
- Evitar duplicar lógica de parseo: usar Zod también en cliente (o compartir types).

---

## 5) Seguridad mínima (checklist)

- **Validación de input**: Zod en `POST`/`PUT`.
- **Rate limiting**: por IP y ruta (`/api/contact` especialmente).
- **CORS**: normalmente innecesario si todo se consume desde el mismo dominio.
- **Headers**: content-type estricto, no aceptar payloads gigantes.
- **No secrets en el repo**: tokens en `.env` + mínimo privilegio.
- **Logs**: no loggear emails o mensajes completos en producción.

---

## 6) Plan de implementación por fases (lo más rentable primero)

### Fase 1 — Base backend (1–2 endpoints)

- Implementar `GET /api/health`
- Implementar `POST /api/contact` con:
  - Zod validation
  - Rate limiting
  - Provider de email (o stub si aún no eliges proveedor)
- Conectar `ContactForm` a la API

**Resultado**

- Portafolio ya usa API real y demuestra backend con buenas prácticas.

---

### Fase 2 — Proyectos data-driven

- Crear fuente tipada de proyectos (local)
- Implementar `GET /api/projects`
- Modificar `ProjectsGrid` para consumir `/api/projects`
- Añadir caché/revalidación

**Resultado**

- UI “vive” por datos y el contenido es mantenible.

---

### Fase 3 — Integración GitHub (impacto alto)

- Implementar provider GitHub (token opcional)
- Endpoint `GET /api/github/summary`
- Añadir sección “GitHub / Open Source” en Home o About

**Resultado**

- Señal fuerte de seniority: integración externa + caching + manejo de rate limits.

---

### Fase 4 — Persistencia / CMS (opcional)

- Añadir DB (Postgres + Prisma) o CMS headless
- Endpoints con CRUD (si quieres demostrar API design)

---

## 7) Qué necesito de ti (cuando toque implementarlo)

Para ejecutar fase 1–3 sin improvisar:

- Email destino real para contacto
- Proveedor de email preferido (Resend/SendGrid/SMTP)
- Usuario GitHub (y si quieres token)
- Decidir si quieres i18n real (ES/EN/AR) o solo ES por ahora

