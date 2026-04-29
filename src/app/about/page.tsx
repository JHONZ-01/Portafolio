import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <div className="min-h-full bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Sobre mí
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Este es un buen lugar para tu resumen profesional, stack y enfoque de
          trabajo.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Experiencia
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Añade aquí roles, logros y el impacto medible que has generado.
            </p>
          </Card>
          <Card>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Tecnologías
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Lista tu stack (frontend, backend, testing, CI/CD) y nivel.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
