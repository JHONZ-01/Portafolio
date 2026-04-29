"use client";

import { useMemo } from "react";

import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import type { Lang, MessageKey } from "@/lib/i18n/messages";
import { messages } from "@/lib/i18n/messages";

type Params = Record<string, string | number>;

function format(template: string, params?: Params) {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const v = params[key];
    return v === undefined ? `{${key}}` : String(v);
  });
}

export function useT() {
  const { lang } = useAppPreferences();

  return useMemo(() => {
    const safeLang: Lang = lang === "en" ? "en" : "es";
    const dict = messages[safeLang];

    function t(key: MessageKey, params?: Params) {
      return format(dict[key], params);
    }

    return { t, lang: safeLang };
  }, [lang]);
}
