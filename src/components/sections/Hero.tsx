"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Camera } from "lucide-react";

import { CircuitFxCanvas } from "@/components/layout/CircuitFxCanvas";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useT } from "@/lib/i18n/useT";

export function Hero() {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm font-medium text-[var(--text-muted)]"
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
            <span className="typewriter text-[var(--primary)]">
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
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/projects">
              <Button>{t("home.ctaProjects")}</Button>
            </Link>
            <Link href="/cv">
              <Button variant="ghost">CV</Button>
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
          className="relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[var(--border)] bg-[var(--bg-card)]/60 shadow-sm backdrop-blur sm:h-80 sm:w-80"
        >
          <CircuitFxCanvas
            mode="full"
            showChips={false}
            particleCount={40}
            glowBlur={10}
          />
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <span className="font-mono text-5xl font-semibold tracking-tight text-[var(--primary)] sm:text-6xl">
              JP
            </span>
            <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
              <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              Agrega tu foto aquí
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
