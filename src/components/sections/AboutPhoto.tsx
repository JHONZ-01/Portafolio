"use client";

import { useT } from "@/lib/i18n/useT";
import { photos } from "@/lib/photos";

import { PhotoBand } from "./PhotoBand";

export function AboutPhoto() {
  const { t } = useT();
  const caption = t("experience.photoCaption");

  return (
    <PhotoBand
      photo={photos.repairTable}
      alt={caption}
      caption={caption}
      position="60% 88%"
    />
  );
}
