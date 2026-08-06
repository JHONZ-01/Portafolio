"use client";

import { useMemo } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useT } from "@/lib/i18n/useT";

export function Projects() {
  const { t } = useT();

  const cards = useMemo(
    () =>
      [
        {
          title: t("sections.featuredProjects.c1.title"),
          description: t("sections.featuredProjects.c1.description"),
          href: "/projects" as const,
        },
        {
          title: t("sections.featuredProjects.c2.title"),
          description: t("sections.featuredProjects.c2.description"),
          href: "/projects" as const,
        },
        {
          title: t("sections.featuredProjects.c3.title"),
          description: t("sections.featuredProjects.c3.description"),
          href: "/projects" as const,
        },
      ] as const,
    [t],
  );

  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t("sections.featuredProjects.title")}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {t("sections.featuredProjects.subtitle")}
          </p>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <SocialLinks size="sm" />
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--text-primary)] underline-offset-4 hover:underline"
          >
            {t("sections.featuredProjects.viewAll")}
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((p) => (
          <Card key={p.title} className="flex flex-col gap-3">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {p.description}
              </p>
            </div>
            <div className="mt-auto">
              <Link
                href={p.href}
                className="text-sm font-medium text-[var(--text-primary)] underline-offset-4 hover:underline"
              >
                {t("sections.featuredProjects.detailCta")}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
