"use client";

import * as React from "react";

import { Loader } from "@/components/sections/Loader";

const STORAGE_KEY = "portfolio-loader-seen";

export function InitialLoader({ enabled = true }: { enabled?: boolean }) {
  const shouldRender = React.useState(() => {
    if (typeof window === "undefined") return false;
    if (!enabled) return false;
    const seen = window.sessionStorage.getItem(STORAGE_KEY);
    if (seen) return false;
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    return true;
  })[0];

  return <Loader show={shouldRender} />;
}
