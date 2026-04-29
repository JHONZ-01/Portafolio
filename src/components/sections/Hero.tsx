"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/sections/Particles";
import { useT } from "@/lib/i18n/useT";

export function Hero() {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="code-grid-bg absolute inset-0" />
        <Particles />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("home.devTagline")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl"
          >
            <span className="font-mono text-[var(--text-muted)]">
              {t("home.titlePrefix")}
            </span>{" "}
            <span className="bg-[var(--gradient-1)] bg-clip-text text-transparent">
              {t("home.titleValue")}
            </span>
            <span className="blink-cursor font-mono text-[var(--text-muted)]">
              |
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]"
          >
            {t("home.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/projects">
              <Button>{t("home.ctaProjects")}</Button>
            </Link>
            <a href="#contact">
              <Button variant="secondary">{t("home.ctaContact")}</Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)]/60 shadow-sm backdrop-blur sm:h-80 sm:w-80"
        >
          <div className="text-center">
            <div className="text-5xl text-[var(--text-muted)]">{"</>"}</div>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              Foto / avatar aquí
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
