import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="py-16">
      <div className="space-y-6">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Desarrollador/a · Portafolio
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Construyo productos web modernos, rápidos y mantenibles.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          Aquí encontrarás una selección de proyectos, tecnologías y formas de
          contacto. Esta estructura está pensada para escalar sin deuda técnica.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/projects">
            <Button>Ver proyectos</Button>
          </Link>
          <a href="#contact">
            <Button variant="secondary">Contactar</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
