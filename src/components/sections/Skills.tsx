"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { useT } from "@/lib/i18n/useT";
import { cn } from "@/lib/utils";

export type SkillLevel = "intermediate" | "basic" | "learning";

type Skill = {
  name: string;
  level: SkillLevel;
};

/** Ancho de barra solo para animación (no se muestra el número). */
const LEVEL_WIDTH: Record<SkillLevel, number> = {
  intermediate: 85,
  basic: 55,
  learning: 35,
};

const skills: { title: string; items: Skill[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: "intermediate" },
      { name: "CSS3", level: "intermediate" },
      { name: "JavaScript", level: "basic" },
      { name: "Bootstrap", level: "basic" },
      { name: "React.js", level: "learning" },
      { name: "Tailwind CSS", level: "learning" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "C# / .NET", level: "intermediate" },
      { name: "SQL", level: "basic" },
      { name: "PHP", level: "basic" },
      { name: "APIs REST", level: "basic" },
      { name: "Laravel", level: "learning" },
    ],
  },
  {
    title: "Móvil & Otros",
    items: [
      { name: "Android", level: "basic" },
      { name: "Apps de candado (MDM)", level: "intermediate" },
      { name: "Plataformas web (operación)", level: "intermediate" },
      { name: "Git / GitHub", level: "basic" },
    ],
  },
];

function levelLabelKey(level: SkillLevel) {
  switch (level) {
    case "intermediate":
      return "sections.skills.level.intermediate" as const;
    case "basic":
      return "sections.skills.level.basic" as const;
    case "learning":
      return "sections.skills.level.learning" as const;
  }
}

function barColorClass(level: SkillLevel) {
  switch (level) {
    case "intermediate":
      return "bg-[var(--skill-bar-intermediate)]";
    case "basic":
      return "bg-[var(--skill-bar-basic)]";
    case "learning":
      return "bg-[var(--skill-bar-learning)]";
  }
}

function SkillRow({ name, level }: Skill) {
  const { t } = useT();
  const w = LEVEL_WIDTH[level];
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-sm font-medium text-[var(--text-secondary)]">
          {name}
        </span>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 font-mono text-xs font-semibold",
            level === "intermediate" && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
            level === "basic" && "bg-amber-500/15 text-amber-700 dark:text-amber-400",
            level === "learning" &&
              "bg-violet-500/15 text-violet-700 dark:text-violet-400",
          )}
        >
          {t(levelLabelKey(level))}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-darker)]">
        <motion.div
          className={cn("h-full rounded-full transition-colors", barColorClass(level))}
          initial={{ width: 0 }}
          whileInView={{ width: `${w}%` }}
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
