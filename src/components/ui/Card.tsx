import * as React from "react";

import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

/** Superficie plana: un paso de tono sobre el fondo, sin borde ni sombra. */
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-[4px] bg-[var(--paper-2)] p-6 text-[var(--ink)]", className)}
      {...props}
    />
  );
}
