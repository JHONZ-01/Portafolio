"use client";

import { content } from "@/lib/content";
import { useT } from "@/lib/i18n/useT";

export function Skills() {
  const { t, lang } = useT();
  const groups = content[lang].stack;

  return (
    <section className="section stack" aria-labelledby="stack-title">
      <h2 id="stack-title" className="section-title" data-reveal>
        {t("sections.stack.title")}
      </h2>

      <table className="stack__table">
        <thead>
          <tr>
            <th scope="col">{t("sections.stack.colName")}</th>
            <th scope="col">{t("sections.stack.colUse")}</th>
            <th scope="col">{t("sections.stack.colLevel")}</th>
            <th scope="col">{t("sections.stack.colWhere")}</th>
          </tr>
        </thead>
        {groups.map((g) => (
          <tbody key={g.group}>
            <tr className="group">
              <th colSpan={4} scope="colgroup">
                {g.group}
              </th>
            </tr>
            {g.rows.map((r, i) => (
              <tr
                key={r.name}
                className="row"
                data-reveal
                style={{ ["--d" as string]: Math.min(i, 5) }}
              >
                <td>{r.name}</td>
                <td>{r.use}</td>
                <td>{r.level}</td>
                <td>{r.where}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </section>
  );
}
