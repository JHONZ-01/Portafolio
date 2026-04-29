"use client";

import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { useT } from "@/lib/i18n/useT";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma e-commerce con integración de pagos y gestión de inventario.",
    tags: ["React", "Node.js", "MongoDB"],
    href: "#",
    repo: "#",
  },
  {
    title: "Task Management App",
    description:
      "App de gestión de tareas con sincronización en tiempo real y diseño moderno.",
    tags: ["React", "TypeScript", "Firebase"],
    href: "#",
    repo: "#",
  },
  {
    title: "Blog Platform",
    description: "Blog moderno con capacidades tipo CMS y UI cuidada.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    href: "#",
    repo: "#",
  },
];

export function ProjectsGrid() {
  const { t } = useT();

  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t("sections.projects.title")}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {t("sections.projects.subtitle")}
          </p>
        </div>
        <div className="hidden font-mono text-sm text-[var(--text-muted)] sm:block">
          {"<projects />"}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
          >
            <Card className="group relative overflow-hidden p-0">
              <div className="relative flex h-44 items-center justify-center bg-[var(--bg-darker)]">
                <div className="text-4xl text-[var(--text-muted)] transition-transform duration-300 group-hover:scale-110">
                  {"</>"}
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="relative flex h-full items-center justify-center gap-3">
                    {p.href ? (
                      <Link
                        href={p.href}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 transition hover:bg-white"
                        aria-label={`Abrir ${p.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    ) : null}
                    {p.repo ? (
                      <Link
                        href={p.repo}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 transition hover:bg-white"
                        aria-label={`Ver repositorio de ${p.title}`}
                      >
                        <Code className="h-5 w-5" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="space-y-3 p-6">
                <div>
                  <h3 className="font-mono text-base font-semibold text-[var(--text-primary)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {p.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-darker)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
