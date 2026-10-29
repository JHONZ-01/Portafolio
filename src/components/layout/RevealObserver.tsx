"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Marca con `data-in` cada `[data-reveal]` al entrar en pantalla.
 * Sin JS la clase `js` no existe y el contenido se ve desde el inicio.
 */
export function RevealObserver() {
  const pathname = usePathname();

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    const scan = () => {
      document
        .querySelectorAll("[data-reveal]:not([data-in])")
        .forEach((el) => io.observe(el));
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
