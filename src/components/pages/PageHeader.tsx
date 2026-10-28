"use client";

import { useT } from "@/lib/i18n/useT";
import type { MessageKey } from "@/lib/i18n/messages";

export function PageHeader({
  titleKey,
  subtitleKey,
}: {
  titleKey: MessageKey;
  subtitleKey: MessageKey;
}) {
  const { t } = useT();

  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
        {t(titleKey)}
      </h1>
      <p className="mt-2 text-[var(--text-secondary)]">{t(subtitleKey)}</p>
    </>
  );
}
