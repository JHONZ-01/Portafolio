"use client";

import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { useT } from "@/lib/i18n/useT";
import { photos } from "@/lib/photos";

/** Recorte pequeño que acompaña a algunos nombres del índice. */
const FRAMES: Partial<Record<string, { src: string; pos: string }>> = {
  candado: { src: photos.repairBench.src, pos: "38% 74%" },
  soporte: { src: photos.phoneBoard.src, pos: "55% 40%" },};

export function Projects() {
  const { t, lang } = useT();
  const c = content[lang];

  return (
    <section id="trabajo" className="section work" aria-labelledby="work-title">
      <ul className="work__names" data-reveal>
        <li>
          <h2 id="work-title" className="lead" style={{ display: "inline", font: "inherit" }}>
            {t("sections.work.title")}
          </h2>{" "}
        </li>
        {c.projects.map((p, i) => {
          const frame = FRAMES[p.id];
          return (
            <li key={p.id}>
              <Link href={`/projects#${p.id}`}>
                {p.name}
                {frame ? (
                  <span className="work__frame" aria-hidden="true">
                    <Image
                      src={frame.src}
                      alt=""
                      width={240}
                      height={150}
                      style={{ objectPosition: frame.pos }}
                    />
                  </span>
                ) : null}
              </Link>
              {i < c.projects.length - 1 ? ", " : "."}
            </li>
          );
        })}
      </ul>
      <p className="work__meta" data-reveal style={{ ["--d" as string]: 1 }}>
        {c.workMeta}{" "}
        <Link href="/projects" className="link" style={{ color: "var(--ink)" }}>
          {t("nav.projects")} →
        </Link>
      </p>
    </section>
  );
}
