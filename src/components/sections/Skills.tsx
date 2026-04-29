"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { useT } from "@/lib/i18n/useT";

type Skill = {
  name: string;
  percent: number;
};

const skills: { title: string; items: Skill[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", percent: 95 },
      { name: "Next.js", percent: 88 },
      { name: "TypeScript", percent: 90 },
      { name: "Tailwind", percent: 90 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", percent: 92 },
      { name: "APIs", percent: 90 },
      { name: "PostgreSQL", percent: 80 },
      { name: "MongoDB", percent: 85 },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", percent: 95 },
      { name: "Docker", percent: 75 },
      { name: "AWS", percent: 70 },
      { name: "Figma", percent: 88 },
    ],
  },
];

function SkillRow({ name, percent }: Skill) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-medium text-[var(--text-secondary)]">
          {name}
        </span>
        <span className="font-mono text-sm font-medium text-[var(--text-muted)]">
          {percent}%
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-darker)]">
        <motion.div
          className="h-full rounded-full bg-[var(--gradient-1)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useT();

  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t("sections.skills.title")}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {t("sections.skills.subtitle")}
          </p>
        </div>
        <div className="hidden font-mono text-sm text-[var(--text-muted)] sm:block">
          {"<skills />"}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.title} className="space-y-5">
            <h3 className="font-mono text-base font-semibold text-[var(--text-primary)]">
              {group.title}
            </h3>
            <div className="space-y-5">
              {group.items.map((s) => (
                <SkillRow key={s.name} {...s} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
