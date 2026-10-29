/**
 * Fotos de colecciones abiertas usadas en el sitio, con su crédito.
 * Muestran el oficio (reparación y configuración de teléfonos), no a Jhon
 * ni a su empresa. Registro completo: public/images/world/credits.json.
 */
export type Photo = {
  src: string;
  width: number;
  height: number;
  title: string;
  creator: string;
  license: string;
  licenseUrl: string;
  page: string;
};

export const photos = {
  repairBench: {
    src: "/images/world/repair-lab-48115819418.jpg",
    width: 1920,
    height: 1282,
    title: "Repair Lab",
    creator: "Redaktion NdW",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    page: "https://commons.wikimedia.org/wiki/File:Repair_Lab_(48115819418).jpg",
  },
  repairTable: {
    src: "/images/world/repair-lab-48115819578.jpg",
    width: 1920,
    height: 1282,
    title: "Repair Lab",
    creator: "Redaktion NdW",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    page: "https://commons.wikimedia.org/wiki/File:Repair_Lab_(48115819578).jpg",
  },
  phoneBoard: {
    src: "/images/world/placa-movil.jpg",
    width: 1920,
    height: 1440,
    title: "Placa móvil",
    creator: "TorQue Astur",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Placa_m%C3%B3vil.JPG",
  },
} satisfies Record<string, Photo>;

export const photoCredits: Photo[] = [
  photos.repairBench,
  photos.repairTable,
  photos.phoneBoard,
];
