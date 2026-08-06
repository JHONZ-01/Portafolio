"use client";

import { CircuitFxCanvas } from "@/components/layout/CircuitFxCanvas";
import { Card } from "@/components/ui/Card";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useT } from "@/lib/i18n/useT";

export function About() {
  const { t } = useT();

  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t("sections.about.title")}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {t("sections.about.subtitle")}
          </p>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <SocialLinks size="sm" />
          <div className="font-mono text-sm text-[var(--text-muted)]">{"<about />"}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:items-start">
        <Card className="relative overflow-hidden border-transparent">
          <CircuitFxCanvas
            mode="border"
            borderVariant="perimeter"
            borderInsetPx={1}
            particleCount={44}
            glowBlur={8}
            className="opacity-100"
          />
          <p className="relative z-10 text-sm leading-7 text-[var(--text-secondary)]">
            {t("sections.about.body")}
          </p>
        </Card>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="text-center">
            <div className="font-mono text-3xl font-semibold text-[var(--text-primary)]">
              50+
            </div>
            <div className="mt-1 text-sm text-[var(--text-secondary)]">
              {t("sections.about.stats.projects")}
            </div>
          </Card>
          <Card className="text-center">
            <div className="font-mono text-3xl font-semibold text-[var(--text-primary)]">
              5+
            </div>
            <div className="mt-1 text-sm text-[var(--text-secondary)]">
              {t("sections.about.stats.years")}
            </div>
          </Card>
          <Card className="text-center">
            <div className="font-mono text-3xl font-semibold text-[var(--text-primary)]">
              30+
            </div>
            <div className="mt-1 text-sm text-[var(--text-secondary)]">
              {t("sections.about.stats.clients")}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
