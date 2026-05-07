export type SocialId = "github" | "linkedin" | "instagram" | "facebook";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
];

