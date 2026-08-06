export type Lang = "es" | "en";

export type MessageKey =
  | "brand"
  | "nav.home"
  | "nav.about"
  | "nav.projects"
  | "nav.cv"
  | "actions.toggleTheme"
  | "actions.toggleLang"
  | "home.devTagline"
  | "home.titlePrefix"
  | "home.titleValue"
  | "home.description"
  | "home.ctaProjects"
  | "home.ctaContact"
  | "sections.about.title"
  | "sections.about.subtitle"
  | "sections.about.body"
  | "sections.about.stats.projects"
  | "sections.about.stats.years"
  | "sections.about.stats.clients"
  | "sections.skills.title"
  | "sections.skills.subtitle"
  | "sections.skills.level.intermediate"
  | "sections.skills.level.basic"
  | "sections.skills.level.learning"
  | "sections.languages.title"
  | "sections.languages.subtitle"
  | "sections.languages.level"
  | "sections.experience.title"
  | "sections.experience.subtitle"
  | "sections.experience.current"
  | "sections.experience.job1.period"
  | "sections.experience.job1.role"
  | "sections.experience.job1.company"
  | "sections.experience.job1.description"
  | "sections.experience.job1.tags"
  | "sections.featuredProjects.title"
  | "sections.featuredProjects.subtitle"
  | "sections.featuredProjects.viewAll"
  | "sections.featuredProjects.detailCta"
  | "sections.featuredProjects.c1.title"
  | "sections.featuredProjects.c1.description"
  | "sections.featuredProjects.c2.title"
  | "sections.featuredProjects.c2.description"
  | "sections.featuredProjects.c3.title"
  | "sections.featuredProjects.c3.description"
  | "sections.projects.title"
  | "sections.projects.subtitle"
  | "sections.projectsGrid.card0.title"
  | "sections.projectsGrid.card0.description"
  | "sections.projectsGrid.card0.tags"
  | "sections.projectsGrid.card1.title"
  | "sections.projectsGrid.card1.description"
  | "sections.projectsGrid.card1.tags"
  | "sections.projectsGrid.card2.title"
  | "sections.projectsGrid.card2.description"
  | "sections.projectsGrid.card2.tags"
  | "sections.projectsShowcase.brandTitle"
  | "sections.projectsShowcase.brandSub"
  | "sections.projectsShowcase.shuffle"
  | "sections.projectsShowcase.ambient"
  | "sections.projectsShowcase.crisp"
  | "sections.projectsShowcase.statusPrefix"
  | "sections.projectsShowcase.statusHint"
  | "sections.projectsShowcase.footerInteraction"
  | "sections.projectsShowcase.modeCrisp"
  | "sections.projectsShowcase.modeAmbient"
  | "sections.projectsShowcase.shuffleToast"
  | "sections.projectsShowcase.ambientOnToast"
  | "sections.projectsShowcase.ambientOffToast"
  | "sections.projectsShowcase.actionQueued"
  | "sections.projectsShowcase.ctaDemo"
  | "sections.projectsShowcase.ctaRepo"
  | "sections.projectsShowcase.cornerAria"
  | "sections.projectsShowcase.item0.pillPrimary"
  | "sections.projectsShowcase.item0.pillGhost"
  | "sections.projectsShowcase.item0.title"
  | "sections.projectsShowcase.item0.subtitle"
  | "sections.projectsShowcase.item0.tags"
  | "sections.projectsShowcase.item0.specs"
  | "sections.projectsShowcase.item0.metaLabel"
  | "sections.projectsShowcase.item0.metaValue"
  | "sections.projectsShowcase.item0.metaFine"
  | "sections.projectsShowcase.item1.pillPrimary"
  | "sections.projectsShowcase.item1.pillGhost"
  | "sections.projectsShowcase.item1.title"
  | "sections.projectsShowcase.item1.subtitle"
  | "sections.projectsShowcase.item1.tags"
  | "sections.projectsShowcase.item1.specs"
  | "sections.projectsShowcase.item1.metaLabel"
  | "sections.projectsShowcase.item1.metaValue"
  | "sections.projectsShowcase.item1.metaFine"
  | "sections.projectsShowcase.item2.pillPrimary"
  | "sections.projectsShowcase.item2.pillGhost"
  | "sections.projectsShowcase.item2.title"
  | "sections.projectsShowcase.item2.subtitle"
  | "sections.projectsShowcase.item2.tags"
  | "sections.projectsShowcase.item2.specs"
  | "sections.projectsShowcase.item2.metaLabel"
  | "sections.projectsShowcase.item2.metaValue"
  | "sections.projectsShowcase.item2.metaFine"
  | "a11y.openProject"
  | "a11y.openRepo"
  | "a11y.projectsShowcase.prev"
  | "a11y.projectsShowcase.next"
  | "sections.contact.title"
  | "sections.contact.subtitle"
  | "contact.emailLabel"
  | "contact.locationLabel"
  | "contact.phonePrimaryLabel"
  | "contact.phoneSecondaryLabel"
  | "contact.hoursLabel"
  | "contact.noteLabel"
  | "contact.form.name"
  | "contact.form.email"
  | "contact.form.subject"
  | "contact.form.message"
  | "contact.form.send"
  | "contact.form.sending"
  | "contact.form.successHint"
  | "pages.about.title"
  | "pages.about.subtitle"
  | "pages.projects.title"
  | "pages.projects.subtitle"
  | "pages.cv.title"
  | "pages.cv.subtitle"
  | "cv.actions.download"
  | "cv.actions.print"
  | "cv.actions.open"
  | "cv.missing"
  | "footer.copyright";

type Messages = Record<MessageKey, string>;

export const messages: Record<Lang, Messages> = {
  es: {
    brand: "Portafolio",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.cv": "CV",
    "actions.toggleTheme": "Cambiar tema",
    "actions.toggleLang": "Cambiar idioma",

    "home.devTagline": "Tecnólogo en Desarrollo de Software · Portafolio",
    "home.titlePrefix": "const",
    "home.titleValue": "Jhon Paucar",
    "home.description":
      "Tecnólogo en Desarrollo de Software en proceso de graduación (2025), con experiencia práctica en el sector empresarial: desarrollo de soluciones internas, soporte técnico Android y administración de plataformas web de crédito.",
    "home.ctaProjects": "Ver proyectos",
    "home.ctaContact": "Contactar",

    "sections.about.title": "Sobre mí",
    "sections.about.subtitle":
      "Perfil profesional, formación y enfoque de crecimiento continuo.",
    "sections.about.body":
      "Soy Jhon Paucar, tecnólogo en Desarrollo de Software (en proceso de titulación) y Programador Junior & Técnico de Servicio en una empresa de créditos para adquisición de celulares. Mi trabajo combina desarrollo de herramientas internas y operación/soporte: instalación y configuración de apps de candado (MDM), gestión de plataformas de crédito, soporte Android y actualización de sitios corporativos. Tengo base sólida en desarrollo web y tecnologías Microsoft (C#/.NET) y estoy fortaleciendo habilidades en React + Tailwind y PHP + Laravel, además de integración de APIs REST.",
    "sections.about.stats.projects": "Proyectos",
    "sections.about.stats.years": "Años",
    "sections.about.stats.clients": "Clientes",

    "sections.skills.title": "Habilidades",
    "sections.skills.subtitle":
      "Stack actual, tecnologías en aprendizaje y herramientas operativas del día a día.",
    "sections.skills.level.intermediate": "Intermedio",
    "sections.skills.level.basic": "Básico",
    "sections.skills.level.learning": "En aprendizaje",

    "sections.languages.title": "Idiomas",
    "sections.languages.subtitle":
      "Idiomas de comunicación. Puedes reemplazar las banderas en /public/images.",
    "sections.languages.level": "Nivel: por definir",

    "sections.experience.title": "Experiencia",
    "sections.experience.subtitle":
      "Experiencia real en empresa: desarrollo + soporte técnico y operación.",
    "sections.experience.current": "Actual",
    "sections.experience.job1.period": "2025 - Presente",
    "sections.experience.job1.role": "Programador Junior & Técnico de Servicio",
    "sections.experience.job1.company": "Empresa de créditos para adquisición de celulares",
    "sections.experience.job1.description":
      "Desarrollo de soluciones internas y soporte operativo: instalación y configuración de apps de candado (MDM), gestión de plataformas de crédito, soporte técnico Android y actualización de páginas web corporativas.",
    "sections.experience.job1.tags":
      "C#/.NET, SQL, Android, MDM, Git, PHP (base)",

    "sections.featuredProjects.title": "Proyectos destacados",
    "sections.featuredProjects.subtitle":
      "Una selección corta para navegar rápido.",
    "sections.featuredProjects.viewAll": "Ver todos",
    "sections.featuredProjects.detailCta": "Ver detalle",
    "sections.featuredProjects.c1.title": "Proyecto 1",
    "sections.featuredProjects.c1.description":
      "Descripción breve del proyecto y su impacto.",
    "sections.featuredProjects.c2.title": "Proyecto 2",
    "sections.featuredProjects.c2.description":
      "Stack, funcionalidades y resultados principales.",
    "sections.featuredProjects.c3.title": "Proyecto 3",
    "sections.featuredProjects.c3.description":
      "Caso de uso, enfoque técnico y aprendizajes.",

    "sections.projects.title": "Proyectos",
    "sections.projects.subtitle":
      "Grid del template migrada a cards con overlay y animación.",

    "sections.projectsGrid.card0.title": "Plataforma e-commerce",
    "sections.projectsGrid.card0.description":
      "Plataforma e-commerce con integración de pagos y gestión de inventario.",
    "sections.projectsGrid.card0.tags": "React, Node.js, MongoDB",
    "sections.projectsGrid.card1.title": "App de gestión de tareas",
    "sections.projectsGrid.card1.description":
      "App de gestión de tareas con sincronización en tiempo real y diseño moderno.",
    "sections.projectsGrid.card1.tags": "React, TypeScript, Firebase",
    "sections.projectsGrid.card2.title": "Plataforma de blog",
    "sections.projectsGrid.card2.description":
      "Blog moderno con capacidades tipo CMS y UI cuidada.",
    "sections.projectsGrid.card2.tags": "Next.js, PostgreSQL, Prisma",

    "a11y.openProject": "Abrir {title}",
    "a11y.openRepo": "Repositorio de {title}",
    "a11y.projectsShowcase.prev": "Proyecto anterior",
    "a11y.projectsShowcase.next": "Proyecto siguiente",

    "sections.projectsShowcase.brandTitle": "Galería de proyectos",
    "sections.projectsShowcase.brandSub":
      "Selección interactiva · teclado y vista ambient",
    "sections.projectsShowcase.shuffle": "Mezclar",
    "sections.projectsShowcase.ambient": "Ambient",
    "sections.projectsShowcase.crisp": "Nítido",
    "sections.projectsShowcase.statusPrefix": "Vista:",
    "sections.projectsShowcase.statusHint": "Tip: ← → · A ambient · S mezclar",
    "sections.projectsShowcase.footerInteraction":
      "Interacción: clic en paneles · flechas · teclado",
    "sections.projectsShowcase.modeCrisp": "Modo: nítido",
    "sections.projectsShowcase.modeAmbient": "Modo: ambient",
    "sections.projectsShowcase.shuffleToast": "Orden mezclado",
    "sections.projectsShowcase.ambientOnToast": "Modo ambient activado",
    "sections.projectsShowcase.ambientOffToast": "Modo nítido activado",
    "sections.projectsShowcase.actionQueued": "{title}: acción en cola",
    "sections.projectsShowcase.ctaDemo": "Ver demo",
    "sections.projectsShowcase.ctaRepo": "Código",
    "sections.projectsShowcase.cornerAria": "Más detalles",

    "sections.projectsShowcase.item0.pillPrimary": "Web",
    "sections.projectsShowcase.item0.pillGhost": "Full-stack",
    "sections.projectsShowcase.item0.title": "Plataforma e-commerce",
    "sections.projectsShowcase.item0.subtitle":
      "Integración de pagos, inventario y panel administrativo.",
    "sections.projectsShowcase.item0.tags": "React, Node.js, MongoDB",
    "sections.projectsShowcase.item0.specs":
      "Frontend:React|API:Node|Datos:MongoDB|Pagos:Stripe",
    "sections.projectsShowcase.item0.metaLabel": "Estado",
    "sections.projectsShowcase.item0.metaValue": "Prototipo",
    "sections.projectsShowcase.item0.metaFine": "Listo para iterar: 72%",

    "sections.projectsShowcase.item1.pillPrimary": "App",
    "sections.projectsShowcase.item1.pillGhost": "Tiempo real",
    "sections.projectsShowcase.item1.title": "Gestión de tareas",
    "sections.projectsShowcase.item1.subtitle":
      "Sincronización en vivo, roles y diseño responsive.",
    "sections.projectsShowcase.item1.tags": "React, TypeScript, Firebase",
    "sections.projectsShowcase.item1.specs":
      "Auth:Firebase|DB:Firestore|UI:React|Push:FCM",
    "sections.projectsShowcase.item1.metaLabel": "Sincronización",
    "sections.projectsShowcase.item1.metaValue": "Activa",
    "sections.projectsShowcase.item1.metaFine": "Cobertura de features: 58%",

    "sections.projectsShowcase.item2.pillPrimary": "Contenido",
    "sections.projectsShowcase.item2.pillGhost": "CMS",
    "sections.projectsShowcase.item2.title": "Plataforma de blog",
    "sections.projectsShowcase.item2.subtitle":
      "Editor, SEO básico, temas y API de contenidos.",
    "sections.projectsShowcase.item2.tags": "Next.js, PostgreSQL, Prisma",
    "sections.projectsShowcase.item2.specs":
      "Framework:Next|ORM:Prisma|DB:PostgreSQL|Deploy:Vercel",
    "sections.projectsShowcase.item2.metaLabel": "Rendimiento",
    "sections.projectsShowcase.item2.metaValue": "Alto",
    "sections.projectsShowcase.item2.metaFine": "Lighthouse estimado: 84%",

    "sections.contact.title": "Contacto",
    "sections.contact.subtitle":
      "Datos de contacto y formulario. Sustituye teléfonos y email en src/lib/contact.ts.",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Ubicación",
    "contact.phonePrimaryLabel": "Teléfono",
    "contact.phoneSecondaryLabel": "Teléfono alternativo",
    "contact.hoursLabel": "Horario",
    "contact.noteLabel": "Información adicional",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar",
    "contact.form.sending": "Enviando...",
    "contact.form.successHint":
      "Mensaje preparado. Conectaremos el envío real a continuación.",

    "pages.about.title": "Sobre mí",
    "pages.about.subtitle":
      "Esta página agrupa secciones migradas del template: About, Skills y Experience.",
    "pages.projects.title": "Proyectos",
    "pages.projects.subtitle":
      "Galería interactiva: expande cada proyecto, mezcla el orden o activa el modo ambient.",

    "pages.cv.title": "CV",
    "pages.cv.subtitle":
      "Vista previa, descarga e impresión. El PDF cambia automáticamente según el idioma.",
    "cv.actions.download": "Descargar",
    "cv.actions.print": "Imprimir",
    "cv.actions.open": "Abrir",
    "cv.missing":
      "CV no disponible todavía. Sube el PDF a /public/cv y vuelve a intentar.",

    "footer.copyright":
      "© {year} Jhon Paucar. Todos los derechos reservados.",
  },
  en: {
    brand: "Portfolio",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "actions.toggleTheme": "Toggle theme",
    "actions.toggleLang": "Toggle language",

    "home.devTagline": "Software Development Technologist · Portfolio",
    "home.titlePrefix": "const",
    "home.titleValue": "Jhon Paucar",
    "home.description":
      "Software Development Technologist (graduation in progress, 2025) with hands-on experience: internal tooling, Android support, and credit-platform web operations.",
    "home.ctaProjects": "View projects",
    "home.ctaContact": "Contact",

    "sections.about.title": "About",
    "sections.about.subtitle":
      "Professional profile, education, and continuous learning.",
    "sections.about.body":
      "I’m Jhon Paucar, a Software Development Technologist (degree in progress) and a Junior Programmer & Service Technician at a company that provides phone credit programs. My role blends internal development with hands-on operations: MDM lock app setup, credit platform management, Android device support, and corporate website updates. I have a solid base in web development and Microsoft technologies (C#/.NET) and I’m strengthening skills in React + Tailwind and PHP + Laravel, plus REST API integration.",
    "sections.about.stats.projects": "Projects",
    "sections.about.stats.years": "Years",
    "sections.about.stats.clients": "Clients",

    "sections.skills.title": "Skills",
    "sections.skills.subtitle":
      "Current stack, in-progress learning, and day-to-day tooling.",
    "sections.skills.level.intermediate": "Intermediate",
    "sections.skills.level.basic": "Basic",
    "sections.skills.level.learning": "Learning",

    "sections.languages.title": "Languages",
    "sections.languages.subtitle":
      "Communication languages. Replace flag images in /public/images.",
    "sections.languages.level": "Level: TBD",

    "sections.experience.title": "Experience",
    "sections.experience.subtitle":
      "Real company experience: development + technical support and operations.",
    "sections.experience.current": "Current",
    "sections.experience.job1.period": "2025 - Present",
    "sections.experience.job1.role": "Junior Programmer & Service Technician",
    "sections.experience.job1.company":
      "Company providing mobile device credit programs",
    "sections.experience.job1.description":
      "Internal tooling and operational support: MDM lock app setup, credit platform administration, Android technical support, and corporate website updates.",
    "sections.experience.job1.tags":
      "C#/.NET, SQL, Android, MDM, Git, PHP (basics)",

    "sections.featuredProjects.title": "Featured projects",
    "sections.featuredProjects.subtitle": "A short selection for quick browsing.",
    "sections.featuredProjects.viewAll": "View all",
    "sections.featuredProjects.detailCta": "View details",
    "sections.featuredProjects.c1.title": "Project 1",
    "sections.featuredProjects.c1.description":
      "Short description of the project and its impact.",
    "sections.featuredProjects.c2.title": "Project 2",
    "sections.featuredProjects.c2.description":
      "Stack, core features, and main outcomes.",
    "sections.featuredProjects.c3.title": "Project 3",
    "sections.featuredProjects.c3.description":
      "Use case, technical approach, and learnings.",

    "sections.projects.title": "Projects",
    "sections.projects.subtitle":
      "Template grid migrated into cards with overlay and animation.",

    "sections.projectsGrid.card0.title": "E-commerce platform",
    "sections.projectsGrid.card0.description":
      "E-commerce platform with payment integration and inventory management.",
    "sections.projectsGrid.card0.tags": "React, Node.js, MongoDB",
    "sections.projectsGrid.card1.title": "Task management app",
    "sections.projectsGrid.card1.description":
      "Task management app with real-time sync and a modern UI.",
    "sections.projectsGrid.card1.tags": "React, TypeScript, Firebase",
    "sections.projectsGrid.card2.title": "Blog platform",
    "sections.projectsGrid.card2.description":
      "Modern blog with CMS-like capabilities and polished UI.",
    "sections.projectsGrid.card2.tags": "Next.js, PostgreSQL, Prisma",

    "a11y.openProject": "Open {title}",
    "a11y.openRepo": "Repository for {title}",
    "a11y.projectsShowcase.prev": "Previous project",
    "a11y.projectsShowcase.next": "Next project",

    "sections.projectsShowcase.brandTitle": "Project gallery",
    "sections.projectsShowcase.brandSub":
      "Interactive selection · keyboard · ambient view",
    "sections.projectsShowcase.shuffle": "Shuffle",
    "sections.projectsShowcase.ambient": "Ambient",
    "sections.projectsShowcase.crisp": "Crisp",
    "sections.projectsShowcase.statusPrefix": "Preview:",
    "sections.projectsShowcase.statusHint": "Tip: ← → · A ambient · S shuffle",
    "sections.projectsShowcase.footerInteraction":
      "Interaction: click panels · arrows · keyboard",
    "sections.projectsShowcase.modeCrisp": "Mode: crisp",
    "sections.projectsShowcase.modeAmbient": "Mode: ambient",
    "sections.projectsShowcase.shuffleToast": "Order shuffled",
    "sections.projectsShowcase.ambientOnToast": "Ambient mode on",
    "sections.projectsShowcase.ambientOffToast": "Crisp mode on",
    "sections.projectsShowcase.actionQueued": "{title}: action queued",
    "sections.projectsShowcase.ctaDemo": "View demo",
    "sections.projectsShowcase.ctaRepo": "Source",
    "sections.projectsShowcase.cornerAria": "More details",

    "sections.projectsShowcase.item0.pillPrimary": "Web",
    "sections.projectsShowcase.item0.pillGhost": "Full-stack",
    "sections.projectsShowcase.item0.title": "E-commerce platform",
    "sections.projectsShowcase.item0.subtitle":
      "Payments integration, inventory, and admin dashboard.",
    "sections.projectsShowcase.item0.tags": "React, Node.js, MongoDB",
    "sections.projectsShowcase.item0.specs":
      "Frontend:React|API:Node|Data:MongoDB|Payments:Stripe",
    "sections.projectsShowcase.item0.metaLabel": "Status",
    "sections.projectsShowcase.item0.metaValue": "Prototype",
    "sections.projectsShowcase.item0.metaFine": "Iteration readiness: 72%",

    "sections.projectsShowcase.item1.pillPrimary": "App",
    "sections.projectsShowcase.item1.pillGhost": "Realtime",
    "sections.projectsShowcase.item1.title": "Task management",
    "sections.projectsShowcase.item1.subtitle":
      "Live sync, roles, and responsive UI.",
    "sections.projectsShowcase.item1.tags": "React, TypeScript, Firebase",
    "sections.projectsShowcase.item1.specs":
      "Auth:Firebase|DB:Firestore|UI:React|Push:FCM",
    "sections.projectsShowcase.item1.metaLabel": "Sync",
    "sections.projectsShowcase.item1.metaValue": "On",
    "sections.projectsShowcase.item1.metaFine": "Feature coverage: 58%",

    "sections.projectsShowcase.item2.pillPrimary": "Content",
    "sections.projectsShowcase.item2.pillGhost": "CMS",
    "sections.projectsShowcase.item2.title": "Blog platform",
    "sections.projectsShowcase.item2.subtitle":
      "Editor, basic SEO, themes, and content API.",
    "sections.projectsShowcase.item2.tags": "Next.js, PostgreSQL, Prisma",
    "sections.projectsShowcase.item2.specs":
      "Framework:Next|ORM:Prisma|DB:PostgreSQL|Deploy:Vercel",
    "sections.projectsShowcase.item2.metaLabel": "Performance",
    "sections.projectsShowcase.item2.metaValue": "High",
    "sections.projectsShowcase.item2.metaFine": "Estimated Lighthouse: 84%",

    "sections.contact.title": "Contact",
    "sections.contact.subtitle":
      "Contact details and form. Replace phones and email in src/lib/contact.ts.",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Location",
    "contact.phonePrimaryLabel": "Phone",
    "contact.phoneSecondaryLabel": "Alternate phone",
    "contact.hoursLabel": "Availability",
    "contact.noteLabel": "Additional information",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send",
    "contact.form.sending": "Sending...",
    "contact.form.successHint":
      "Message prepared. We’ll wire real delivery next.",

    "pages.about.title": "About",
    "pages.about.subtitle":
      "This page groups template-migrated sections: About, Skills and Experience.",
    "pages.projects.title": "Projects",
    "pages.projects.subtitle":
      "Interactive gallery: expand each project, shuffle order, or enable ambient mode.",

    "pages.cv.title": "CV",
    "pages.cv.subtitle":
      "Preview, download and print. The PDF switches automatically with language.",
    "cv.actions.download": "Download",
    "cv.actions.print": "Print",
    "cv.actions.open": "Open",
    "cv.missing":
      "CV not available yet. Upload the PDF to /public/cv and try again.",

    "footer.copyright": "© {year} Jhon Paucar. All rights reserved.",
  },
};
