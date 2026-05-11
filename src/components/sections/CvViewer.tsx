"use client";

import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import { useT } from "@/lib/i18n/useT";

function getCvUrl(lang: "es" | "en") {
  return lang === "es"
    ? "/cv/Jhon-Paucar-CV-ES.pdf"
    : "/cv/Jhon-Paucar-CV-EN.pdf";
}

export function CvViewer() {
  const { lang } = useAppPreferences();
  const { t } = useT();
  const src = getCvUrl(lang);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  function onPrint() {
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.focus();
      win.print();
      return;
    }
    window.open(src, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="mt-8 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <a href={src} download>
          <Button>{t("cv.actions.download")}</Button>
        </a>
        <Button variant="secondary" onClick={onPrint}>
          {t("cv.actions.print")}
        </Button>
        <a href={src} target="_blank" rel="noreferrer">
          <Button variant="ghost">{t("cv.actions.open")}</Button>
        </a>
        <div className="ml-auto font-mono text-xs text-[var(--text-muted)]">
          {lang.toUpperCase()}
        </div>
      </div>

      <Card className="overflow-hidden p-0">
        <iframe
          ref={iframeRef}
          src={src}
          title="CV"
          className="h-[75vh] w-full border-0"
        />
        <div className="p-6 text-sm text-[var(--text-muted)]">
          {t("cv.missing")}
        </div>
      </Card>
    </section>
  );
}

