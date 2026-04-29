"use client";

import { useT } from "@/lib/i18n/useT";

export function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 text-sm text-[var(--text-secondary)]">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
