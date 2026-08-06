import { Card } from "@/components/ui/Card";

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contacto
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Si quieres colaborar o tienes una oportunidad, hablemos.
      </p>

      <div className="mt-6">
        <Card className="flex flex-col gap-2">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Email
          </p>
          <a
            className="text-base font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
            href="mailto:tu-email@ejemplo.com"
          >
            tu-email@ejemplo.com
          </a>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Cambia este correo por el tuyo cuando quieras.
          </p>
        </Card>
      </div>
    </section>
  );
}
