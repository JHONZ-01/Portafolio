export type Lang = "es" | "en";

export type MessageKey =
  | "brand"
  | "nav.home"
  | "nav.about"
  | "nav.projects"
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
  | "sections.projects.title"
  | "sections.projects.subtitle"
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
  | "footer.copyright";

type Messages = Record<MessageKey, string>;

export const messages: Record<Lang, Messages> = {
  es: {
    brand: "Portafolio",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
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

    "sections.projects.title": "Proyectos",
    "sections.projects.subtitle":
      "Grid del template migrada a cards con overlay y animación.",

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
      "Aquí vive el grid migrado del template. Próximo paso: datos reales y páginas de detalle.",

    "footer.copyright":
      "© {year} Jhon Paucar. Todos los derechos reservados.",
  },
  en: {
    brand: "Portfolio",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
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

    "sections.projects.title": "Projects",
    "sections.projects.subtitle":
      "Template grid migrated into cards with overlay and animation.",

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
      "This page hosts the template-migrated grid. Next: real data and detail pages.",

    "footer.copyright": "© {year} Jhon Paucar. All rights reserved.",
  },
};
