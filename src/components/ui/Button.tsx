import * as React from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

/** Botón plano: un color de relleno, 4px de radio. Estilos en portfolio.css (.btn). */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn("btn", `btn--${variant}`, className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
