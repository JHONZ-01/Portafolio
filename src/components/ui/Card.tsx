import * as React from "react";

import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-[var(--bg-card)] p-6 shadow-sm",
        "border-[var(--border)] text-[var(--text-primary)]",
        className,
      )}
      {...props}
    />
  );
}
