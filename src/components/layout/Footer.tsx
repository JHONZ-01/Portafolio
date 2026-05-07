"use client";

import { useT } from "@/lib/i18n/useT";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 text-sm text-[var(--text-secondary)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
