"use client";

import Link from "next/link";

import { useT } from "@/lib/i18n/useT";

export function Hero() {
  const { t } = useT();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        <span className="line">
          <span>{t("home.title1")}</span>
        </span>
        <span className="line">
          <span>{t("home.title2")}</span>
        </span>
      </h1>

      <p className="hero__lead">{t("home.lead")}</p>
      <div className="hero__actions">
        <a href="#trabajo" className="btn btn--primary">
          {t("home.ctaWork")}
        </a>
        <Link href="/cv" className="link">
          {t("home.ctaCv")}
        </Link>
      </div>
    </section>
  );
}
