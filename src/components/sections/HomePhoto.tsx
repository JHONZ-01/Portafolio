"use client";

import Image from "next/image";

import { useT } from "@/lib/i18n/useT";
import { photos, type Photo } from "@/lib/photos";

type Shot = { photo: Photo; position: string; caption: { es: string; en: string } };

const SHOTS: Shot[] = [
  {
    photo: photos.repairBench,
    position: "40% 62%",
    caption: {
      es: "Taller abierto de reparación de teléfonos, Hamburgo, 2019.",
      en: "An open phone repair workshop, Hamburg, 2019.",
    },
  },
  {
    photo: photos.phoneBoard,
    position: "50% 50%",
    caption: {
      es: "Placa base de un teléfono, con la ranura de la SIM.",
      en: "A phone’s main board, with its SIM slot.",
    },
  },
  {
    photo: photos.repairTable,
    position: "62% 88%",
    caption: {
      es: "Herramientas y pantallas de repuesto sobre la mesa.",
      en: "Tools and spare screens on the table.",
    },
  },
];

export function HomePhoto() {
  const { lang } = useT();

  return (
    <div className="trio">
      {SHOTS.map((s, i) => (
        <figure key={s.photo.src} data-reveal style={{ ["--d" as string]: i }}>
          <div className="trio__frame">
            <Image
              src={s.photo.src}
              alt={s.caption[lang]}
              width={s.photo.width}
              height={s.photo.height}
              sizes={i === 0 ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 50vw, 25vw"}
              style={{ objectPosition: s.position }}
            />
          </div>
          <figcaption>{s.caption[lang]}</figcaption>
        </figure>
      ))}
    </div>
  );
}
