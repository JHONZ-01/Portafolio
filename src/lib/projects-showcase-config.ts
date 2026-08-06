/** URLs de imagen y metadatos no traducibles. Textos: `messages.ts` → `sections.projectsShowcase.itemN.*` */
export const PROJECT_SHOWCASE_VISUAL = [
  {
    accent: "#2b91af",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    metaBarPct: 72,
    demoHref: "#",
    repoHref: "#",
  },
  {
    accent: "#6688cc",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    metaBarPct: 58,
    demoHref: "#",
    repoHref: "#",
  },
  {
    accent: "#22aa44",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
    metaBarPct: 84,
    demoHref: "#",
    repoHref: "#",
  },
] as const;

export type ShowcaseProjectIndex = 0 | 1 | 2;
