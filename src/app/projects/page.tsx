import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";

const projects = [
  {
    title: "Proyecto 1",
    description: "Qué problema resuelve, stack y resultado.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Proyecto 2",
    description: "Arquitectura, decisiones técnicas y métricas.",
    tags: ["React", "API", "DX"],
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="min-h-full bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Proyectos
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Añade aquí tus proyectos con enlaces, capturas y detalles técnicos.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="space-y-3">
              <div>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
