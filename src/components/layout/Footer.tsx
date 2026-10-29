"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { contactInfo } from "@/lib/contact";
import { useT } from "@/lib/i18n/useT";
import { photoCredits } from "@/lib/photos";
import { socialLinks } from "@/lib/social";

export function Footer() {
  const { t } = useT();
  const pathname = usePathname();
  // En la portada el pie continúa el bloque oscuro de contacto.
  const solo = pathname !== "/";

  return (
    <footer className={solo ? "site-footer site-footer--solo" : "site-footer"}>
      <p className="site-footer__name" aria-hidden="true" data-reveal>
        {t("brand")}
      </p>

      <div className="site-footer__row">
        <ul className="site-footer__places" data-reveal>
          <li>
            <a className="link" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </li>
          <li>
            <a className="link" href={`tel:${contactInfo.phonePrimaryTel}`}>
              {contactInfo.phonePrimaryDisplay}
            </a>
          </li>
          <li>{contactInfo.location}</li>
        </ul>

        <div className="site-footer__col" data-reveal style={{ ["--d" as string]: 1 }}>
          <h2>{t("footer.pages")}</h2>
          <ul>
            <li>
              <Link href="/">{t("nav.home")}</Link>
            </li>
            <li>
              <Link href="/projects">{t("nav.projects")}</Link>
            </li>
            <li>
              <Link href="/about">{t("nav.about")}</Link>
            </li>
            <li>
              <Link href="/cv">{t("nav.cv")}</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col" data-reveal style={{ ["--d" as string]: 2 }}>
          <h2>{t("footer.social")}</h2>
          <ul>
            {socialLinks.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__legal">
        <p>
          {t("footer.copyright", { year: new Date().getFullYear() })}{" "}
          {t("footer.credits")}:{" "}
          {photoCredits.map((p, i) => (
            <span key={p.src}>
              {i > 0 ? "; " : ""}
              <a href={p.page} target="_blank" rel="noreferrer">
                “{p.title}”
              </a>{" "}
              {p.creator},{" "}
              <a href={p.licenseUrl} target="_blank" rel="noreferrer">
                {p.license}
              </a>
            </span>
          ))}
          .
        </p>
        <a href="#top">{t("footer.top")}</a>
      </div>
    </footer>
  );
}
