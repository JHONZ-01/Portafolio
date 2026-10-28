"use client";

import { Card } from "@/components/ui/Card";
import { useT } from "@/lib/i18n/useT";

type LanguageItem = {
  code: "es" | "en";
  name: string;
  flagEmoji: string;
};

const languages: LanguageItem[] = [
  { code: "es", name: "Español", flagEmoji: "🇪🇸" },
  { code: "en", name: "English", flagEmoji: "🇬🇧" },
];

export function Languages() {
  const { t } = useT();

  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t("sections.languages.title")}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {t("sections.languages.subtitle")}
          </p>
        </div>
        <div className="hidden font-mono text-sm text-[var(--text-muted)] sm:block">
          {"<languages />"}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {languages.map((lang) => (
          <Card key={lang.code} className="flex items-center justify-between gap-4">
            <div>
              <div className="font-mono text-base font-semibold text-[var(--text-primary)]">
                {lang.name}
              </div>
              <div className="mt-1 text-sm text-[var(--text-secondary)]">
                {t("sections.languages.level")}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-darker)] text-2xl"
                role="img"
                aria-label={`Bandera ${lang.name}`}
              >
                {lang.flagEmoji}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

