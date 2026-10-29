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
    <div className="page-head">
      <h1 className="page-head__title hero__title">
        <span className="line">
          <span>{t(titleKey)}</span>
        </span>
      </h1>
      <p className="page-head__lead">{t(subtitleKey)}</p>
    </div>
  );
}
