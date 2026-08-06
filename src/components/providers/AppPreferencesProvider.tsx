"use client";

import * as React from "react";

export type Theme = "dark" | "light";
export type Lang = "es" | "en";
export type Dir = "ltr" | "rtl";

type PreferencesContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  dir: Dir;
};

const PreferencesContext = React.createContext<PreferencesContextValue | null>(
  null,
);

const STORAGE_THEME = "portfolio-theme";
const STORAGE_LANG = "portfolio-lang";

function getDir(): Dir {
  return "ltr";
}

export function AppPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = window.localStorage.getItem(STORAGE_THEME) as Theme | null;
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "dark";
  });

  const [lang, setLangState] = React.useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    const savedLang = window.localStorage.getItem(STORAGE_LANG) as Lang | null;
    return savedLang === "es" || savedLang === "en" ? savedLang : "es";
  });

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_THEME, theme);
  }, [theme]);

  React.useEffect(() => {
    const dir = getDir();
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.setAttribute("data-lang", lang);
    document.body.setAttribute("data-dir", dir);
    window.localStorage.setItem(STORAGE_LANG, lang);
  }, [lang]);

  const dir = getDir();

  const setTheme = React.useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = React.useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  const setLang = React.useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = React.useCallback(() => {
    setLangState((l) => {
      return l === "es" ? "en" : "es";
    });
  }, []);

  const value = React.useMemo<PreferencesContextValue>(
    () => ({ theme, setTheme, toggleTheme, lang, setLang, toggleLang, dir }),
    [theme, setTheme, toggleTheme, lang, setLang, toggleLang, dir],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function useAppPreferences(): PreferencesContextValue {
  const ctx = React.useContext(PreferencesContext);
  if (!ctx) {
    throw new Error(
      "useAppPreferences debe usarse dentro de AppPreferencesProvider",
    );
  }
  return ctx;
}
