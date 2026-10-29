"use client";

import * as React from "react";
import Link from "next/link";

import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import { useT } from "@/lib/i18n/useT";

function getCvUrl(lang: "es" | "en") {
  return lang === "es"
    ? "/cv/Jhon-Paucar-CV-ES.pdf"
    : "/cv/Jhon-Paucar-CV-EN.pdf";
}

type Availability = "checking" | "ready" | "missing";

export function CvViewer() {
  const { lang } = useAppPreferences();
  const { t } = useT();
  const src = getCvUrl(lang);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const [checked, setChecked] = React.useState<{ src: string; ok: boolean } | null>(null);
  const availability: Availability =
    checked?.src !== src ? "checking" : checked.ok ? "ready" : "missing";

  React.useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((res) => {
        const isPdf = res.headers.get("content-type")?.includes("pdf") ?? false;
        if (!cancelled) setChecked({ src, ok: res.ok && isPdf });
      })
      .catch(() => {
        if (!cancelled) setChecked({ src, ok: false });
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  function onPrint() {
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.focus();
      win.print();
      return;
    }
    window.open(src, "_blank", "noopener,noreferrer");
  }

  if (availability === "missing") {
    return (
      <section className="section cv" aria-label={t("pages.cv.title")}>
        <div className="cv__missing">
          <p>{t("cv.missing")}</p>
          <div>
            <Link href="/about" className="btn btn--primary">
              {t("cv.missingCta")}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section cv" aria-label={t("pages.cv.title")}>
      <div className="cv__bar">
        <a href={src} download className="btn btn--primary">
          {t("cv.actions.download")}
        </a>
        <button type="button" className="btn btn--secondary" onClick={onPrint}>
          {t("cv.actions.print")}
        </button>
        <a href={src} target="_blank" rel="noreferrer" className="btn btn--ghost link">
          {t("cv.actions.open")}
        </a>
      </div>

      <div className="cv__frame">
        {availability === "ready" ? (
          <iframe ref={iframeRef} src={src} title={t("pages.cv.title")} />
        ) : (
          <div style={{ height: "80vh" }} />
        )}
      </div>
    </section>
  );
}
