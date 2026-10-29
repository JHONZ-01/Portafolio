/**
 * Contenido estructurado del portafolio (listas, proyectos, stack).
 * Los textos sueltos de interfaz viven en `i18n/messages.ts`.
 * Fuente: Portafolio.txt. Los datos marcados como "ejemplo" son de muestra.
 */
import type { Lang } from "@/lib/i18n/messages";

export type ProjectId =
  | "plataforma"
  | "candado"
  | "soporte"
  | "web"
  | "herramientas"
  | "portafolio";

export type Project = {
  id: ProjectId;
  name: string;
  summary: string;
  role: string;
  stack: string;
  status: string;
  caption: string;
};

export type StackRow = {
  name: string;
  use: string;
  level: string;
  where: string;
};

type Content = {
  facts: { label: string; value: string }[];
  aboutText: string;
  recordLabel: string;
  jobList: { title: string; items: [string, string][] };
  studyList: { title: string; items: [string, string][] };
  projects: Project[];
  workMeta: string;
  photoCaption: string;
  stack: { group: string; rows: StackRow[] }[];
  experience: {
    role: string;
    company: string;
    period: string;
    duties: { title: string; detail: string }[];
  };
  offer: { title: string; detail: string }[];
};

export const content: Record<Lang, Content> = {
  es: {
    facts: [
      { label: "Rol", value: "Programador junior y técnico de servicio" },
      { label: "Formación", value: "Tecnólogo en Desarrollo de Software, titulación 2025" },
      { label: "Idiomas", value: "Español, inglés" },
      { label: "Busco", value: "Empleo en desarrollo web y proyectos" },
    ],
    aboutText:
      "Trabajo en los dos extremos de un mismo sistema. En la oficina mantengo la plataforma donde se registran los clientes, sus cuotas y sus pagos. En el mostrador instalo el candado en cada celular entregado a crédito y lo libero cuando la deuda se cancela. Esa doble mirada me enseñó a escribir software pensando en quien lo usa.",
    recordLabel: "Registro",
    jobList: {
      title: "En el trabajo",
      items: [
        ["Candado MDM en equipos Android", "2025"],
        ["Plataforma de créditos", "2025"],
        ["Soporte técnico Android", "2025"],
        ["Sitio web corporativo", "2025"],
        ["Herramientas internas", "2025"],
        ["Atención a clientes y equipo", "2025"],
      ],
    },
    studyList: {
      title: "Formación",
      items: [
        ["Programación orientada a objetos (C#, Java)", "Instituto"],
        ["Desarrollo web (HTML, CSS, JS, PHP)", "Instituto"],
        ["Bases de datos relacionales y SQL", "Instituto"],
        ["Aplicaciones móviles Android", "Instituto"],
        ["React y Tailwind CSS", "Ahora"],
        ["Laravel y APIs REST", "Ahora"],
      ],
    },
    projects: [
      {
        id: "plataforma",
        name: "Plataforma de créditos",
        summary:
          "La web interna donde se registra a cada cliente, se programan sus cuotas y se controla cada pago hasta cancelar el equipo.",
        role: "Mantenimiento, ajustes y soporte a usuarios",
        stack: "PHP, SQL, HTML, CSS",
        status: "En uso diario",
        caption: "Recreación de la vista de cuotas (datos de ejemplo)",
      },
      {
        id: "candado",
        name: "Candado MDM",
        summary:
          "Instalo y configuro la app de candado en cada celular vendido a crédito, para que el equipo quede controlado hasta el último pago.",
        role: "Instalación, configuración y liberación de equipos",
        stack: "Android, consola MDM",
        status: "En uso diario",
        caption: "Recreación del listado de equipos (datos de ejemplo)",
      },
      {
        id: "soporte",
        name: "Soporte Android",
        summary:
          "Diagnóstico de fallas de hardware y software, formateo, restauración del sistema y configuración inicial de los equipos.",
        role: "Técnico de servicio",
        stack: "Android, herramientas de diagnóstico",
        status: "En uso diario",
        caption: "Recreación de una orden de servicio (datos de ejemplo)",
      },
      {
        id: "web",
        name: "Sitio web corporativo",
        summary:
          "Administro y actualizo las páginas web de la empresa: contenidos, promociones y datos de contacto al día.",
        role: "Administración y actualización",
        stack: "HTML, CSS, JavaScript",
        status: "En línea",
        caption: "Recreación de la portada del sitio (contenido de ejemplo)",
      },
      {
        id: "herramientas",
        name: "Herramientas internas",
        summary:
          "Pequeñas aplicaciones en C# que automatizan tareas repetitivas del negocio, como armar el reporte diario de cobranza.",
        role: "Desarrollo",
        stack: "C#, .NET, SQL",
        status: "En desarrollo",
        caption: "Recreación del reporte de cobranza (datos de ejemplo)",
      },
      {
        id: "portafolio",
        name: "Este portafolio",
        summary:
          "Mi práctica de React y Tailwind: un sitio en Next.js con dos idiomas, modo claro y oscuro, y la demostración del candado.",
        role: "Diseño y desarrollo",
        stack: "Next.js, React, TypeScript, Tailwind CSS",
        status: "En línea",
        caption: "Fragmento del código de la demostración",
      },
    ],
    workMeta: "Seis frentes de trabajo, de 2025 a hoy.",
    photoCaption: "Un taller abierto de reparación de teléfonos en Hamburgo, 2019.",
    stack: [
      {
        group: "Backend",
        rows: [
          { name: "C# / .NET", use: "Herramientas internas", level: "Intermedio", where: "Trabajo" },
          { name: "SQL", use: "Consultas y reportes", level: "Básico-intermedio", where: "Trabajo" },
          { name: "PHP", use: "Plataforma de créditos", level: "Básico", where: "Trabajo" },
          { name: "Laravel", use: "Backend web", level: "En aprendizaje", where: "Por mi cuenta" },
          { name: "APIs REST", use: "Integraciones", level: "En aprendizaje", where: "Por mi cuenta" },
        ],
      },
      {
        group: "Frontend",
        rows: [
          { name: "HTML5", use: "Maquetación", level: "Intermedio", where: "Trabajo" },
          { name: "CSS3", use: "Estilos y responsive", level: "Intermedio", where: "Trabajo" },
          { name: "JavaScript", use: "Interacción", level: "Básico-intermedio", where: "Trabajo" },
          { name: "React", use: "Interfaces", level: "En aprendizaje", where: "Este sitio" },
          { name: "Tailwind CSS", use: "Estilos", level: "En aprendizaje", where: "Este sitio" },
          { name: "Bootstrap", use: "Maquetación", level: "Básico", where: "Formación" },
        ],
      },
      {
        group: "Móvil y operación",
        rows: [
          { name: "Android", use: "Apps y soporte", level: "Básico-intermedio", where: "Trabajo" },
          { name: "Candado MDM", use: "Control de equipos", level: "Operativo", where: "Trabajo" },
          { name: "Git / GitHub", use: "Versiones", level: "Básico", where: "Proyectos" },
        ],
      },
    ],
    experience: {
      role: "Programador junior y técnico de servicio",
      company: "Empresa de créditos para la compra de celulares",
      period: "2025 – hoy",
      duties: [
        {
          title: "Candado en equipos a crédito",
          detail:
            "Configuro e instalo la app de candado (MDM) para controlar el acceso hasta que el crédito se cancela.",
        },
        {
          title: "Plataforma de créditos",
          detail:
            "Mantengo la plataforma donde se registra, sigue y controla a los clientes y sus pagos.",
        },
        {
          title: "Soporte Android",
          detail:
            "Diagnostico fallas de hardware y software, formateo, restauro el sistema y dejo cada equipo configurado.",
        },
        {
          title: "Sitio web de la empresa",
          detail: "Administro y actualizo las páginas web corporativas.",
        },
        {
          title: "Herramientas internas",
          detail: "Desarrollo apoyos a medida para que las tareas operativas tomen menos tiempo.",
        },
      ],
    },
    offer: [
      {
        title: "Automatizar procesos",
        detail: "Reportes de crédito, avisos de pago o inventario de equipos, con C#, PHP o JavaScript.",
      },
      {
        title: "Mejorar la web",
        detail: "Interfaces más rápidas, modernas y fáciles de usar.",
      },
      {
        title: "Ordenar la operación",
        detail: "Documentar la instalación de candados y plataformas para que el equipo cometa menos errores.",
      },
      {
        title: "Crear apps Android",
        detail: "Consulta de saldo, historial de pagos o reportes en tiempo real.",
      },
      {
        title: "Resolver de punta a punta",
        detail: "Del código al dispositivo físico, sin depender de terceros.",
      },
    ],
  },
  en: {
    facts: [
      { label: "Role", value: "Junior developer and service technician" },
      { label: "Education", value: "Software Development Technologist, graduating 2025" },
      { label: "Languages", value: "Spanish, English" },
      { label: "Looking for", value: "Web development jobs and projects" },
    ],
    aboutText:
      "I work at both ends of the same system. At the desk I maintain the platform where customers, their instalments and their payments are recorded. At the counter I install the lock on every phone sold on credit and release it once the debt is paid. Seeing both sides taught me to write software for the people who use it.",
    recordLabel: "Record",
    jobList: {
      title: "At work",
      items: [
        ["MDM lock on Android phones", "2025"],
        ["Credit platform", "2025"],
        ["Android technical support", "2025"],
        ["Company website", "2025"],
        ["Internal tools", "2025"],
        ["Customer and team support", "2025"],
      ],
    },
    studyList: {
      title: "Education",
      items: [
        ["Object-oriented programming (C#, Java)", "College"],
        ["Web development (HTML, CSS, JS, PHP)", "College"],
        ["Relational databases and SQL", "College"],
        ["Android mobile apps", "College"],
        ["React and Tailwind CSS", "Now"],
        ["Laravel and REST APIs", "Now"],
      ],
    },
    projects: [
      {
        id: "plataforma",
        name: "Credit platform",
        summary:
          "The internal web app where each customer is registered, instalments are scheduled and every payment is tracked until the phone is paid off.",
        role: "Maintenance, fixes and user support",
        stack: "PHP, SQL, HTML, CSS",
        status: "Used daily",
        caption: "Recreation of the instalments view (sample data)",
      },
      {
        id: "candado",
        name: "MDM lock",
        summary:
          "I install and configure the lock app on every phone sold on credit, so the device stays managed until the last payment.",
        role: "Install, configure and release devices",
        stack: "Android, MDM console",
        status: "Used daily",
        caption: "Recreation of the device list (sample data)",
      },
      {
        id: "soporte",
        name: "Android support",
        summary:
          "Diagnosing hardware and software faults, formatting, restoring the system and setting phones up from scratch.",
        role: "Service technician",
        stack: "Android, diagnostic tools",
        status: "Used daily",
        caption: "Recreation of a service ticket (sample data)",
      },
      {
        id: "web",
        name: "Company website",
        summary:
          "I run and update the company’s web pages: content, promotions and contact details kept current.",
        role: "Administration and updates",
        stack: "HTML, CSS, JavaScript",
        status: "Live",
        caption: "Recreation of the site’s front page (sample content)",
      },
      {
        id: "herramientas",
        name: "Internal tools",
        summary:
          "Small C# applications that automate repetitive business tasks, such as building the daily collections report.",
        role: "Development",
        stack: "C#, .NET, SQL",
        status: "In progress",
        caption: "Recreation of the collections report (sample data)",
      },
      {
        id: "portafolio",
        name: "This portfolio",
        summary:
          "My React and Tailwind practice: a Next.js site in two languages, light and dark modes, and the lock demo.",
        role: "Design and development",
        stack: "Next.js, React, TypeScript, Tailwind CSS",
        status: "Live",
        caption: "A piece of the demo’s code",
      },
    ],
    workMeta: "Six areas of work, from 2025 to today.",
    photoCaption: "An open phone repair workshop in Hamburg, 2019.",
    stack: [
      {
        group: "Backend",
        rows: [
          { name: "C# / .NET", use: "Internal tools", level: "Intermediate", where: "Work" },
          { name: "SQL", use: "Queries and reports", level: "Basic-intermediate", where: "Work" },
          { name: "PHP", use: "Credit platform", level: "Basic", where: "Work" },
          { name: "Laravel", use: "Web backend", level: "Learning", where: "Self-taught" },
          { name: "REST APIs", use: "Integrations", level: "Learning", where: "Self-taught" },
        ],
      },
      {
        group: "Frontend",
        rows: [
          { name: "HTML5", use: "Markup", level: "Intermediate", where: "Work" },
          { name: "CSS3", use: "Styling and responsive", level: "Intermediate", where: "Work" },
          { name: "JavaScript", use: "Interaction", level: "Basic-intermediate", where: "Work" },
          { name: "React", use: "Interfaces", level: "Learning", where: "This site" },
          { name: "Tailwind CSS", use: "Styling", level: "Learning", where: "This site" },
          { name: "Bootstrap", use: "Markup", level: "Basic", where: "College" },
        ],
      },
      {
        group: "Mobile and operations",
        rows: [
          { name: "Android", use: "Apps and support", level: "Basic-intermediate", where: "Work" },
          { name: "MDM lock", use: "Device control", level: "Operational", where: "Work" },
          { name: "Git / GitHub", use: "Version control", level: "Basic", where: "Projects" },
        ],
      },
    ],
    experience: {
      role: "Junior developer and service technician",
      company: "A company that finances phone purchases",
      period: "2025 – today",
      duties: [
        {
          title: "Locks on financed phones",
          detail:
            "I set up and install the MDM lock app that controls access until the credit is paid off.",
        },
        {
          title: "Credit platform",
          detail:
            "I maintain the platform where customers and their payments are registered, followed and controlled.",
        },
        {
          title: "Android support",
          detail:
            "I diagnose hardware and software faults, format, restore the system and leave every phone ready to use.",
        },
        {
          title: "Company website",
          detail: "I run and update the corporate web pages.",
        },
        {
          title: "Internal tools",
          detail: "I build small tools so operational tasks take less time.",
        },
      ],
    },
    offer: [
      {
        title: "Automate processes",
        detail: "Credit reports, payment reminders or device inventory, with C#, PHP or JavaScript.",
      },
      {
        title: "Improve the web",
        detail: "Faster, more modern interfaces that are easier to use.",
      },
      {
        title: "Tidy up operations",
        detail: "Documenting lock and platform setup so the team makes fewer mistakes.",
      },
      {
        title: "Build Android apps",
        detail: "Balance lookup, payment history or real-time reports.",
      },
      {
        title: "Solve end to end",
        detail: "From the code to the physical device, without relying on third parties.",
      },
    ],
  },
};
