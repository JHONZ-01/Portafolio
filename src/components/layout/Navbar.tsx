"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Languages, Menu, Moon, Sun, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import { useT } from "@/lib/i18n/useT";

const navItems = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "/about", labelKey: "nav.about" as const },
  { href: "/projects", labelKey: "nav.projects" as const },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, lang, toggleLang, dir } = useAppPreferences();
  const [open, setOpen] = useState(false);
  const { t } = useT();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg-dark)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-[var(--text-primary)]"
        >
          {t("brand")}
        </Link>

        <div className="flex items-center gap-2">
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label={t("brand")}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
                    { "text-[var(--text-primary)]": isActive },
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
            aria-label={t("actions.toggleLang")}
            title={t("actions.toggleLang")}
          >
            <div className="flex items-center gap-1">
              <Languages className="h-5 w-5" />
              <span className="hidden text-xs font-semibold sm:inline">
                {lang.toUpperCase()}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
            aria-label={t("actions.toggleTheme")}
            title={t("actions.toggleTheme")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] md:hidden"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          open
            ? "border-t border-[var(--border)] bg-[color:var(--bg-dark)]/95 backdrop-blur"
            : "hidden",
        )}
      >
        <nav className="mx-auto w-full max-w-5xl px-6 py-3" aria-label="Navegación móvil">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                    "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
                    { "text-[var(--text-primary)]": isActive },
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            <div className="mt-2 text-xs text-[var(--text-muted)]">
              Preferencias: idioma <span className="font-medium">{lang.toUpperCase()}</span> · dirección{" "}
              <span className="font-medium">{dir.toUpperCase()}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
