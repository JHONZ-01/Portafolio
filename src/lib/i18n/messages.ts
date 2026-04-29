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
  | "sections.experience.title"
  | "sections.experience.subtitle"
  | "sections.experience.current"
  | "sections.projects.title"
  | "sections.projects.subtitle"
  | "sections.contact.title"
  | "sections.contact.subtitle"
  | "contact.emailLabel"
  | "contact.locationLabel"
  | "contact.locationValue"
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

    "home.devTagline": "Desarrollador/a · Portafolio",
    "home.titlePrefix": "const",
    "home.titleValue": "Developer",
    "home.description":
      "Portafolio profesional con foco en rendimiento, calidad y una base mantenible. Cada sección está construida con componentes y animaciones declarativas.",
    "home.ctaProjects": "Ver proyectos",
    "home.ctaContact": "Contactar",

    "sections.about.title": "Sobre mí",
    "sections.about.subtitle":
      "Introducción + métricas, adaptado del template pero en componentes.",
    "sections.about.body":
      "Soy un/a desarrollador/a Full Stack con experiencia construyendo aplicaciones web modernas. Me enfoco en arquitecturas limpias, rendimiento y una UX cuidada.",
    "sections.about.stats.projects": "Proyectos",
    "sections.about.stats.years": "Años",
    "sections.about.stats.clients": "Clientes",

    "sections.skills.title": "Skills",
    "sections.skills.subtitle":
      "Migradas del template con animación declarativa en framer-motion.",

    "sections.experience.title": "Experiencia",
    "sections.experience.subtitle":
      "Timeline migrada del template; ahora es data-driven y animada.",
    "sections.experience.current": "Actual",

    "sections.projects.title": "Proyectos",
    "sections.projects.subtitle":
      "Grid del template migrada a cards con overlay y animación.",

    "sections.contact.title": "Contacto",
    "sections.contact.subtitle":
      "Formulario migrado del template. El siguiente paso es conectarlo a envío real.",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Ubicación",
    "contact.locationValue": "Tu ciudad, tu país",
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
      "© {year} Kevin Simba. Todos los derechos reservados.",
  },
  en: {
    brand: "Portfolio",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "actions.toggleTheme": "Toggle theme",
    "actions.toggleLang": "Toggle language",

    "home.devTagline": "Developer · Portfolio",
    "home.titlePrefix": "const",
    "home.titleValue": "Developer",
    "home.description":
      "Professional portfolio focused on performance, quality, and a maintainable foundation. Each section is built with components and declarative animations.",
    "home.ctaProjects": "View projects",
    "home.ctaContact": "Contact",

    "sections.about.title": "About",
    "sections.about.subtitle":
      "Intro + stats, adapted from the template but componentized.",
    "sections.about.body":
      "I’m a Full Stack developer with experience building modern web applications. I focus on clean architecture, performance, and polished UX.",
    "sections.about.stats.projects": "Projects",
    "sections.about.stats.years": "Years",
    "sections.about.stats.clients": "Clients",

    "sections.skills.title": "Skills",
    "sections.skills.subtitle":
      "Migrated from the template with framer-motion declarative animation.",

    "sections.experience.title": "Experience",
    "sections.experience.subtitle":
      "Template timeline migrated; now data-driven and animated.",
    "sections.experience.current": "Current",

    "sections.projects.title": "Projects",
    "sections.projects.subtitle":
      "Template grid migrated into cards with overlay and animation.",

    "sections.contact.title": "Contact",
    "sections.contact.subtitle":
      "Form migrated from the template. Next step is wiring real delivery.",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Location",
    "contact.locationValue": "Your city, your country",
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

    "footer.copyright": "© {year} Kevin Simba. All rights reserved.",
  },
};
