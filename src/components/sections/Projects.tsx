import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { SocialLinks } from "@/components/ui/SocialLinks";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto y su impacto.",
    href: "/projects",
  },
  {
    title: "Proyecto 2",
    description: "Stack, funcionalidades y resultados principales.",
    href: "/projects",
  },
  {
    title: "Proyecto 3",
    description: "Caso de uso, enfoque técnico y aprendizajes.",
    href: "/projects",
  },
] as const;

export function Projects() {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Proyectos destacados
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Una selección corta para navegar rápido.
          </p>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <SocialLinks size="sm" />
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            Ver todos
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col gap-3">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {p.title}
              </h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {p.description}
              </p>
            </div>
            <div className="mt-auto">
              <Link
                href={p.href}
                className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              >
                Ver detalle
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
