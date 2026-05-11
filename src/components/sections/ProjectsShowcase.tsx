"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { SocialLinks } from "@/components/ui/SocialLinks";
import type { MessageKey } from "@/lib/i18n/messages";
import {
  PROJECT_SHOWCASE_VISUAL,
  type ShowcaseProjectIndex,
} from "@/lib/projects-showcase-config";
import { useT } from "@/lib/i18n/useT";

import "@/styles/projects-showcase.css";

const ITEM_MSG = [
  {
    pillPrimary: "sections.projectsShowcase.item0.pillPrimary",
    pillGhost: "sections.projectsShowcase.item0.pillGhost",
    title: "sections.projectsShowcase.item0.title",
    subtitle: "sections.projectsShowcase.item0.subtitle",
    tags: "sections.projectsShowcase.item0.tags",
    specs: "sections.projectsShowcase.item0.specs",
    metaLabel: "sections.projectsShowcase.item0.metaLabel",
    metaValue: "sections.projectsShowcase.item0.metaValue",
    metaFine: "sections.projectsShowcase.item0.metaFine",
  },
  {
    pillPrimary: "sections.projectsShowcase.item1.pillPrimary",
    pillGhost: "sections.projectsShowcase.item1.pillGhost",
    title: "sections.projectsShowcase.item1.title",
    subtitle: "sections.projectsShowcase.item1.subtitle",
    tags: "sections.projectsShowcase.item1.tags",
    specs: "sections.projectsShowcase.item1.specs",
    metaLabel: "sections.projectsShowcase.item1.metaLabel",
    metaValue: "sections.projectsShowcase.item1.metaValue",
    metaFine: "sections.projectsShowcase.item1.metaFine",
  },
  {
    pillPrimary: "sections.projectsShowcase.item2.pillPrimary",
    pillGhost: "sections.projectsShowcase.item2.pillGhost",
    title: "sections.projectsShowcase.item2.title",
    subtitle: "sections.projectsShowcase.item2.subtitle",
    tags: "sections.projectsShowcase.item2.tags",
    specs: "sections.projectsShowcase.item2.specs",
    metaLabel: "sections.projectsShowcase.item2.metaLabel",
    metaValue: "sections.projectsShowcase.item2.metaValue",
    metaFine: "sections.projectsShowcase.item2.metaFine",
  },
] as const satisfies readonly Record<string, MessageKey>[];

type ShowcaseItem = {
  id: ShowcaseProjectIndex;
  accent: string;
  image: string;
  metaBarPct: number;
  demoHref: string;
  repoHref: string;
  pillPrimary: string;
  pillGhost: string;
  title: string;
  subtitle: string;
  tags: string[];
  specs: { k: string; v: string }[];
  metaLabel: string;
  metaValue: string;
  metaFine: string;
};

function splitTags(csv: string) {
  return csv
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseSpecs(raw: string): { k: string; v: string }[] {
  return raw.split("|").map((seg) => {
    const idx = seg.indexOf(":");
    if (idx === -1) return { k: seg.trim(), v: "" };
    return { k: seg.slice(0, idx).trim(), v: seg.slice(idx + 1).trim() };
  });
}

function shuffleOrder(order: ShowcaseProjectIndex[]): ShowcaseProjectIndex[] {
  const a = [...order];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j]!;
    a[j] = tmp!;
  }
  return a;
}

function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace("#", "").trim();
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

export function ProjectsShowcase() {
  const { t } = useT();
  const reduceMotion = useReducedMotion();

  const [order, setOrder] = useState<ShowcaseProjectIndex[]>([0, 1, 2]);
  const [activeSlot, setActiveSlot] = useState(0);
  const [ambient, setAmbient] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [parallax, setParallax] = useState("");

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = setTimeout(() => {
      setToast(null);
      toastTimer.current = null;
    }, 2000);
  }, []);

  const items = useMemo<ShowcaseItem[]>(() => {
    return ([0, 1, 2] as const).map((i) => {
      const keys = ITEM_MSG[i]!;
      const vis = PROJECT_SHOWCASE_VISUAL[i];
      return {
        id: i,
        accent: vis.accent,
        image: vis.image,
        metaBarPct: vis.metaBarPct,
        demoHref: vis.demoHref,
        repoHref: vis.repoHref,
        pillPrimary: t(keys.pillPrimary),
        pillGhost: t(keys.pillGhost),
        title: t(keys.title),
        subtitle: t(keys.subtitle),
        tags: splitTags(t(keys.tags)),
        specs: parseSpecs(t(keys.specs)),
        metaLabel: t(keys.metaLabel),
        metaValue: t(keys.metaValue),
        metaFine: t(keys.metaFine),
      };
    });
  }, [t]);

  const activeProjectId = order[activeSlot] ?? 0;
  const activeItem = items[activeProjectId]!;

  const go = useCallback(
    (delta: number) => {
      setActiveSlot((s) => (s + delta + order.length) % order.length);
    },
    [order.length],
  );

  const shuffle = useCallback(() => {
    setOrder((o) => shuffleOrder(o));
    setActiveSlot(0);
    showToast(t("sections.projectsShowcase.shuffleToast"));
  }, [showToast, t]);

  const toggleAmbient = useCallback(() => {
    setAmbient((prev) => {
      const next = !prev;
      showToast(
        next
          ? t("sections.projectsShowcase.ambientOnToast")
          : t("sections.projectsShowcase.ambientOffToast"),
      );
      return next;
    });
  }, [showToast, t]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (
        el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key.toLowerCase() === "a") {
        e.preventDefault();
        toggleAmbient();
      }
      if (e.key.toLowerCase() === "s") {
        e.preventDefault();
        shuffle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, shuffle, toggleAmbient]);

  const onPanelMove = useCallback(
    (e: React.MouseEvent<HTMLElement>, active: boolean) => {
      if (!active || reduceMotion) return;
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setParallax(
        `scale(1.14) translate(${x * 10}px, ${y * 8}px)`,
      );
    },
    [reduceMotion],
  );

  const clearParallax = useCallback(() => {
    setParallax("");
  }, []);

  const queueAction = useCallback(
    (title: string) => {
      showToast(t("sections.projectsShowcase.actionQueued", { title }));
    },
    [showToast, t],
  );

  const rootClass =
    "projectsStage" + (ambient ? " projectsStage--ambient" : "");

  return (
    <motion.section
      className="py-8"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className={rootClass}>
        <header className="ps-topbar">
          <div className="ps-brand">
            <span
              className="ps-dot"
              style={{
                background: activeItem.accent,
                boxShadow: `0 0 18px ${hexToRgba(activeItem.accent, 0.55)}`,
              }}
              aria-hidden
            />
            <div className="min-w-0">
              <div className="ps-brand-title">
                {t("sections.projectsShowcase.brandTitle")}
              </div>
              <div className="ps-brand-sub">
                {t("sections.projectsShowcase.brandSub")}
              </div>
            </div>
          </div>
          <div className="ps-top-actions">
            <div className="hidden sm:flex">
              <SocialLinks size="sm" />
            </div>
            <button
              type="button"
              className="ps-chip"
              onClick={shuffle}
            >
              {t("sections.projectsShowcase.shuffle")}
            </button>
            <button
              type="button"
              className="ps-chip"
              onClick={toggleAmbient}
            >
              {ambient
                ? t("sections.projectsShowcase.crisp")
                : t("sections.projectsShowcase.ambient")}
            </button>
          </div>
        </header>

        <main className="ps-stage" aria-label={t("sections.projectsShowcase.brandTitle")}>
          <div className="ps-status">
            <span
              className="ps-status-led"
              style={{
                background: activeItem.accent,
                boxShadow: `0 0 16px ${hexToRgba(activeItem.accent, 0.55)}`,
              }}
            />
            <span className="ps-status-text">
              {t("sections.projectsShowcase.statusPrefix")}{" "}
              <b>{activeItem.title}</b>
            </span>
            <span className="ps-status-hint">
              {t("sections.projectsShowcase.statusHint")}
            </span>
          </div>

          <div className="ps-accordion" role="tablist" aria-orientation="horizontal">
            {[0, 1, 2].map((slot) => {
              const projectId = order[slot]!;
              const p = items[projectId]!;
              const isActive = activeSlot === slot;
              const panelNum = String(slot + 1).padStart(2, "0");

              return (
                <div
                  key={slot}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  className={
                    isActive ? "ps-panel ps-panel--active" : "ps-panel"
                  }
                  onClick={() => setActiveSlot(slot)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveSlot(slot);
                    }
                  }}
                  onMouseMove={(e) => onPanelMove(e, isActive)}
                  onMouseLeave={clearParallax}
                >
                  <div
                    className="ps-panel-bg"
                    style={{
                      backgroundImage: `url(${p.image})`,
                      transform: isActive && parallax ? parallax : undefined,
                    }}
                  />
                  <div className="ps-panel-content">
                    <div className="ps-panel-kicker">
                      <span className="ps-pill">{p.pillPrimary}</span>
                      <span className="ps-pill ps-pill--ghost">{p.pillGhost}</span>
                    </div>
                    <div className="ps-panel-id">{panelNum}</div>
                    <h2 className="ps-panel-title">{p.title}</h2>
                    <p className="ps-panel-subtitle">{p.subtitle}</p>

                    <div className="ps-grid">
                      <div className="ps-specs">
                        {p.specs.map((row, ri) => (
                          <div key={`${slot}-${ri}-${row.k}`} className="ps-row">
                            <span className="ps-k">{row.k}</span>
                            <span className="ps-v">{row.v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ps-meta">
                        <div className="ps-meta-card">
                          <div className="ps-meta-top">
                            <span className="ps-label">{p.metaLabel}</span>
                            <span className="ps-value">{p.metaValue}</span>
                          </div>
                          <div className="ps-bar">
                            <span
                              className="ps-bar-fill"
                              style={{ width: `${p.metaBarPct}%` }}
                            />
                          </div>
                          <div className="ps-fine">{p.metaFine}</div>
                        </div>
                        <div className="ps-badges">
                          {p.tags.map((tag) => (
                            <span key={tag} className="ps-badge">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="ps-cta-row">
                      <Link
                        href={p.demoHref}
                        className="ps-cta"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (p.demoHref === "#") {
                            e.preventDefault();
                            queueAction(p.title);
                          }
                        }}
                      >
                        {t("sections.projectsShowcase.ctaDemo")}
                      </Link>
                      <Link
                        href={p.repoHref}
                        className="ps-ghost-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (p.repoHref === "#") {
                            e.preventDefault();
                            queueAction(p.title);
                          }
                        }}
                      >
                        {t("sections.projectsShowcase.ctaRepo")}
                      </Link>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="ps-corner"
                    aria-label={t("sections.projectsShowcase.cornerAria")}
                    onClick={(e) => {
                      e.stopPropagation();
                      queueAction(p.title);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="ps-nav ps-nav--prev"
            aria-label={t("a11y.projectsShowcase.prev")}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="ps-nav ps-nav--next"
            aria-label={t("a11y.projectsShowcase.next")}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            ›
          </button>
        </main>

        <footer className="ps-foot">
          <div className="ps-mini">
            <span className="ps-mini-dot" aria-hidden />
            <span>{t("sections.projectsShowcase.footerInteraction")}</span>
          </div>
          <div className="ps-mini">
            <span className="ps-mini-dot" aria-hidden />
            <span>
              {ambient
                ? t("sections.projectsShowcase.modeAmbient")
                : t("sections.projectsShowcase.modeCrisp")}
            </span>
          </div>
        </footer>
      </div>

      {toast ? (
        <output className="projectsStage-toast" aria-live="polite">
          {toast}
        </output>
      ) : null}
    </motion.section>
  );
}
