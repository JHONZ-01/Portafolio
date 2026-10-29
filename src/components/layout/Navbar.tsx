"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import { useT } from "@/lib/i18n/useT";

const navItems = [
  { href: "/projects", labelKey: "nav.projects" as const },
  { href: "/about", labelKey: "nav.about" as const },
  { href: "/cv", labelKey: "nav.cv" as const },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, toggleLang } = useAppPreferences();
  // El menú queda abierto solo en la ruta donde se abrió.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const { t } = useT();

  const themeLabel = theme === "dark" ? t("actions.themeLight") : t("actions.themeDark");

  return (
    <header id="top">
      <div className="site-header">
        <Link href="/" className="site-header__mark link">
          {t("brand")}
        </Link>

        <nav className="site-header__nav" aria-label={t("nav.label")}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="site-header__tools">
          <button
            type="button"
            className="tool"
            onClick={toggleLang}
            aria-label={t("actions.toggleLang")}
          >
            {t("actions.langOther")}
          </button>
          <button
            type="button"
            className="tool"
            onClick={toggleTheme}
            aria-label={t("actions.toggleTheme")}
          >
            {themeLabel}
          </button>
          <Link href="/#contacto" className="btn btn--primary">
            {t("nav.contact")}
          </Link>
          <button
            type="button"
            className="tool site-header__menu"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? t("nav.close") : t("nav.menu")}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="mobile-menu"
        data-open={open}
        aria-label={t("nav.label")}
      >
        <ul onClick={() => setOpenOn(null)}>
          <li>
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
              {t("nav.home")}
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {t(item.labelKey)}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contacto">{t("nav.contact")}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
