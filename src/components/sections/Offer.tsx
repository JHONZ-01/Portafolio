"use client";

import { content } from "@/lib/content";
import { useT } from "@/lib/i18n/useT";

export function Offer() {
  const { t, lang } = useT();
  const items = content[lang].offer;

  return (
    <section className="section offer" aria-labelledby="offer-title">
      <h2 id="offer-title" className="section-title" data-reveal>
        {t("sections.offer.title")}
      </h2>
      <ul className="offer__list">
        {items.map((it, i) => (
          <li key={it.title} data-reveal style={{ ["--d" as string]: i }}>
            <strong>{it.title}</strong>
            <span>{it.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
