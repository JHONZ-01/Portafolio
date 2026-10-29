"use client";

import { content } from "@/lib/content";
import { useT } from "@/lib/i18n/useT";

export function About({ titled = true }: { titled?: boolean }) {
  const { t, lang } = useT();
  const c = content[lang];

  return (
    <section className="section about" aria-labelledby="about-title">
      <h2
        id="about-title"
        className={titled ? "section-title about__title" : "sr-only"}
        data-reveal
      >
        {t("sections.about.title")}
      </h2>

      <dl className="about__facts">
        {c.facts.map((f, i) => (
          <div key={f.label} data-reveal style={{ ["--d" as string]: i + 1 }}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <p className="about__text" data-reveal style={{ ["--d" as string]: 2 }}>
        {c.aboutText}
      </p>

      <p className="about__record-label" data-reveal>
        {c.recordLabel}
      </p>
      <div className="about__lists">
        {[c.jobList, c.studyList].map((list, i) => (
          <div key={list.title} className="record">
            <h3>{list.title}</h3>
            <ul>
              {list.items.map(([name, when], j) => (
                <li key={name} data-reveal style={{ ["--d" as string]: i + j }}>
                  <span>{name}</span>
                  <span>{when}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
