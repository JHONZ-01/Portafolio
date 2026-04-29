"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useT } from "@/lib/i18n/useT";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useT();
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    // Placeholder: aquí conectaremos un endpoint (Route Handler) o proveedor de email.
    await new Promise((r) => setTimeout(r, 700));

    setStatus("success");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t("sections.contact.title")}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {t("sections.contact.subtitle")}
          </p>
        </div>
        <div className="hidden font-mono text-sm text-[var(--text-muted)] sm:block">
          {"<contact />"}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card className="space-y-3">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              {t("contact.emailLabel")}
            </p>
            <a
              className="font-mono text-sm font-medium text-[var(--text-primary)] underline-offset-4 hover:underline"
              href="mailto:tu-email@ejemplo.com"
            >
              tu-email@ejemplo.com
            </a>
          </div>
          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              {t("contact.locationLabel")}
            </p>
            <p className="text-sm text-[var(--text-primary)]">
              {t("contact.locationValue")}
            </p>
          </div>
        </Card>

        <Card>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-1">
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  {t("contact.form.name")}
                </span>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-darker)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  {t("contact.form.email")}
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-darker)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </label>
            </div>

            <label className="space-y-1">
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                {t("contact.form.subject")}
              </span>
              <input
                name="subject"
                required
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-darker)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </label>

            <label className="space-y-1">
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                {t("contact.form.message")}
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg-darker)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </label>

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? t("contact.form.sending")
                  : t("contact.form.send")}
              </Button>
              <div className="text-sm text-[var(--text-secondary)]">
                {status === "success" ? (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {t("contact.form.successHint")}
                  </motion.span>
                ) : null}
                {status === "error" && error ? (
                  <span className="text-red-600 dark:text-red-400">{error}</span>
                ) : null}
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
