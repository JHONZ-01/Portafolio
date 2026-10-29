import Image from "next/image";

import type { Photo } from "@/lib/photos";

export function PhotoBand({
  photo,
  alt,
  caption,
  position = "50% 50%",
}: {
  photo: Photo;
  alt: string;
  caption: string;
  position?: string;
}) {
  return (
    <figure className="bleed" style={{ margin: "var(--gap-section) 0 0" }}>
      <div className="bleed__frame">
        <Image
          src={photo.src}
          alt={alt}
          width={photo.width}
          height={photo.height}
          sizes="100vw"
          style={{ objectPosition: position }}
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
