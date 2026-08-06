import * as React from "react";

import { cn } from "@/lib/utils";
import { socialLinks, type SocialId } from "@/lib/social";

type IconProps = React.SVGProps<SVGSVGElement>;

function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.12.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06C21.4 8.58 22 11 22 14.16V21h-4v-6.07c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.87.24-1.46 1.5-1.46h1.6V5.02c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.06V11H8v3h2.3v8h3.2z" />
    </svg>
  );
}

const icons: Record<SocialId, React.ElementType<IconProps>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

export type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

export function SocialLinks({ className, size = "md" }: SocialLinksProps) {
  const sizeClasses =
    size === "sm"
      ? "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4"
      : "h-10 w-10 [&_svg]:h-5 [&_svg]:w-5";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((it) => {
        const Icon = icons[it.id];
        return (
          <a
            key={it.id}
            href={it.href}
            target="_blank"
            rel="noreferrer"
            aria-label={it.label}
            title={it.label}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)]",
              "text-[var(--text-secondary)] transition-colors",
              "hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
              sizeClasses,
            )}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

