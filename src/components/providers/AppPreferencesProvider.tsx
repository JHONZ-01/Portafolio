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

export const STORAGE_THEME = "portfolio-theme";
export const STORAGE_LANG = "portfolio-lang";
const CHANGE_EVENT = "portfolio-prefs";

// Respaldo en memoria por si el navegador bloquea localStorage.
const memory = new Map<string, string>();

function readStorage(key: string): string | null {
  if (memory.has(key)) return memory.get(key)!;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  memory.set(key, value);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Almacenamiento bloqueado: la preferencia solo dura esta visita.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

// En el servidor (y al hidratar) siempre claro + español.
const serverSnapshot = () => null;

export function AppPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedTheme = React.useSyncExternalStore(
    subscribe,
    () => readStorage(STORAGE_THEME),
    serverSnapshot,
  );
  const storedLang = React.useSyncExternalStore(
    subscribe,
    () => readStorage(STORAGE_LANG),
    serverSnapshot,
  );

  const theme: Theme = storedTheme === "dark" ? "dark" : "light";
  const lang: Lang = storedLang === "en" ? "en" : "es";

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.body.setAttribute("data-lang", lang);
  }, [lang]);

  const setTheme = React.useCallback((t: Theme) => writeStorage(STORAGE_THEME, t), []);
  const toggleTheme = React.useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme],
  );

  const setLang = React.useCallback((l: Lang) => writeStorage(STORAGE_LANG, l), []);
  const toggleLang = React.useCallback(
    () => setLang(lang === "es" ? "en" : "es"),
    [lang, setLang],
  );

  const value = React.useMemo<PreferencesContextValue>(
    () => ({ theme, setTheme, toggleTheme, lang, setLang, toggleLang, dir: "ltr" }),
    [theme, setTheme, toggleTheme, lang, setLang, toggleLang],
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
