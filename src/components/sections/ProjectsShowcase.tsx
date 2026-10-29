"use client";

import { content } from "@/lib/content";
import { useT } from "@/lib/i18n/useT";

import { Fragment } from "./Fragments";

export function ProjectsShowcase() {
  const { t, lang } = useT();
  const projects = content[lang].projects;

  return (
    <div className="section projects">
      {projects.map((p) => (
        <article key={p.id} id={p.id} className="project" aria-labelledby={`${p.id}-title`}>
          <div className="project__text" data-reveal>
            <h2 id={`${p.id}-title`} className="project__title">
              {p.name}
            </h2>
            <p>{p.summary}</p>
            <dl className="project__facts">
              <dt>{t("project.role")}</dt>
              <dd>{p.role}</dd>
              <dt>{t("project.stack")}</dt>
              <dd>{p.stack}</dd>
              <dt>{t("project.status")}</dt>
              <dd>{p.status}</dd>
            </dl>
          </div>
          <figure data-reveal style={{ ["--d" as string]: 2 }}>
            <Fragment id={p.id} lang={lang} />
            <figcaption>{p.caption}</figcaption>
          </figure>
        </article>
      ))}
    </div>
  );
}
