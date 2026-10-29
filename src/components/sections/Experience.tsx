"use client";

import { content } from "@/lib/content";
import { useT } from "@/lib/i18n/useT";

export function Experience() {
  const { t, lang } = useT();
  const e = content[lang].experience;

  return (
    <section className="section experience" aria-labelledby="exp-title">
      <div>
        <h2 id="exp-title" className="section-title" data-reveal>
          {t("sections.experience.title")}
        </h2>
        <div style={{ marginTop: 32 }} data-reveal>
          <h3 className="experience__role">{e.role}</h3>
          <p>
            {e.company} · {e.period}
          </p>
        </div>
      </div>

      <ul className="experience__list">
        {e.duties.map((d, i) => (
          <li key={d.title} data-reveal style={{ ["--d" as string]: i }}>
            <strong>{d.title}</strong>
            <span>{d.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
