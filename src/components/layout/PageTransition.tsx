"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/** Fundido corto al cambiar de ruta (CSS: funciona también sin JS). */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
