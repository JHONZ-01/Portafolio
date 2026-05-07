"use client";

import { Particles } from "@/components/sections/Particles";

export function PageBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="code-grid-bg absolute inset-0" />
      <Particles />
    </div>
  );
}

