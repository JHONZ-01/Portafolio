"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { useT } from "@/lib/i18n/useT";

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export function Experience() {
  const { t } = useT();

  const items = useMemo<ExperienceItem[]>(
    () => [
      {
        period: t("sections.experience.job1.period"),
        role: t("sections.experience.job1.role"),
        company: t("sections.experience.job1.company"),
        description: t("sections.experience.job1.description"),
        tags: t("sections.experience.job1.tags")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        current: true,
      },
    ],
    [t],
  );

  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t("sections.experience.title")}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {t("sections.experience.subtitle")}
          </p>
        </div>
        <div className="hidden font-mono text-sm text-[var(--text-muted)] sm:block">
          {"<experience />"}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((it, idx) => (
          <motion.div
            key={`${it.period}-${it.role}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
          >
            <Card className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-mono text-sm text-[var(--text-muted)]">
                  {it.period}
                </div>
                {it.current ? (
                  <span className="rounded-full bg-[var(--gradient-primary)] px-3 py-1 text-xs font-semibold text-white">
                    {t("sections.experience.current")}
                  </span>
                ) : null}
              </div>
              <div>
                <h3 className="font-mono text-lg font-semibold text-[var(--text-primary)]">
                  {it.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
                  {it.company}
                </p>
              </div>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {it.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {it.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg-darker)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
