"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Bus = { x1: number; y1: number; x2: number; y2: number };

export type CircuitFxMode = "full" | "border";
export type CircuitFxBorderVariant = "perimeter" | "corners";

type CircuitColors = {
  fade: string;
  neon: string;
  bus: string;
  chipFill: string;
  chipStroke: string;
  chipText: string;
};

function readCircuitColors(): CircuitColors {
  const css = getComputedStyle(document.documentElement);
  const get = (name: string, fallback: string) =>
    css.getPropertyValue(name).trim() || fallback;
  return {
    fade: get("--circuit-fade", "rgba(0, 0, 0, 0.16)"),
    neon: get("--circuit-neon", "#00ffcc"),
    bus: get("--circuit-bus", "rgba(0, 255, 204, 0.22)"),
    chipFill: get("--circuit-chip-fill", "rgba(10, 20, 18, 0.55)"),
    chipStroke: get("--circuit-chip-stroke", "#00ffcc"),
    chipText: get("--circuit-chip-text", "#00ffcc"),
  };
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class Particle {
  bus: Bus;
  progress = 0;
  speed = 0.01;
  size = 3;
  private rnd: () => number;

  constructor(buses: Bus[], seed: number) {
    this.rnd = mulberry32(seed);
    this.bus = buses[Math.floor(this.rnd() * buses.length)]!;
    this.reset(buses);
  }

  reset(buses: Bus[]) {
    this.bus = buses[Math.floor(this.rnd() * buses.length)]!;
    this.progress = 0;
    this.speed = 0.004 + this.rnd() * 0.012;
    this.size = 2 + Math.floor(this.rnd() * 3);
  }

  update(buses: Bus[]) {
    this.progress += this.speed;
    if (this.progress > 1) this.reset(buses);
  }
}

function drawChip(
  ctx: CanvasRenderingContext2D,
  colors: CircuitColors,
  x: number,
  y: number,
  size: number,
  label: string,
) {
  ctx.save();
  ctx.shadowBlur = 14;
  ctx.shadowColor = colors.chipStroke;
  ctx.fillStyle = colors.chipFill;
  ctx.strokeStyle = colors.chipStroke;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fill();
  ctx.stroke();

  ctx.shadowBlur = 0;
  ctx.fillStyle = colors.chipText;
  ctx.font = "700 12px var(--font-primary, system-ui)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x + size / 2, y + size / 2);
  ctx.restore();
}

function buildBusesFull(w: number, h: number): Bus[] {
  const centerX = w / 2;
  const centerY = h / 2;
  const gap = 22;
  const buses: Bus[] = [];

  for (let i = -3; i <= 3; i++) {
    buses.push({ x1: 0, y1: centerY + i * gap, x2: w, y2: centerY + i * gap });
    buses.push({ x1: centerX + i * gap, y1: 0, x2: centerX + i * gap, y2: h });
  }

  const inset = 24;
  const arm = Math.max(120, Math.min(220, Math.floor(Math.min(w, h) * 0.26)));

  buses.push({ x1: inset, y1: inset, x2: inset + arm, y2: inset });
  buses.push({ x1: inset, y1: inset, x2: inset, y2: inset + arm });
  buses.push({ x1: w - inset, y1: inset, x2: w - inset - arm, y2: inset });
  buses.push({ x1: w - inset, y1: inset, x2: w - inset, y2: inset + arm });
  buses.push({ x1: inset, y1: h - inset, x2: inset + arm, y2: h - inset });
  buses.push({ x1: inset, y1: h - inset, x2: inset, y2: h - inset - arm });
  buses.push({ x1: w - inset, y1: h - inset, x2: w - inset - arm, y2: h - inset });
  buses.push({ x1: w - inset, y1: h - inset, x2: w - inset, y2: h - inset - arm });

  return buses;
}

function buildBusesBorder(
  w: number,
  h: number,
  variant: CircuitFxBorderVariant,
  opts?: { insetPx?: number; armPx?: number },
): Bus[] {
  const inset =
    typeof opts?.insetPx === "number"
      ? Math.max(0, Math.floor(opts.insetPx))
      : Math.max(6, Math.floor(Math.min(w, h) * 0.03));
  const arm =
    typeof opts?.armPx === "number"
      ? Math.max(12, Math.floor(opts.armPx))
      : Math.max(26, Math.floor(Math.min(w, h) * 0.14));
  const buses: Bus[] = [];

  if (variant === "perimeter") {
    buses.push(
      { x1: inset, y1: inset, x2: w - inset, y2: inset },
      { x1: w - inset, y1: inset, x2: w - inset, y2: h - inset },
      { x1: w - inset, y1: h - inset, x2: inset, y2: h - inset },
      { x1: inset, y1: h - inset, x2: inset, y2: inset },
    );
  }

  buses.push({ x1: inset, y1: inset, x2: inset + arm, y2: inset });
  buses.push({ x1: inset, y1: inset, x2: inset, y2: inset + arm });
  buses.push({ x1: w - inset, y1: inset, x2: w - inset - arm, y2: inset });
  buses.push({ x1: w - inset, y1: inset, x2: w - inset, y2: inset + arm });
  buses.push({ x1: inset, y1: h - inset, x2: inset + arm, y2: h - inset });
  buses.push({ x1: inset, y1: h - inset, x2: inset, y2: h - inset - arm });
  buses.push({ x1: w - inset, y1: h - inset, x2: w - inset - arm, y2: h - inset });
  buses.push({ x1: w - inset, y1: h - inset, x2: w - inset, y2: h - inset - arm });

  return buses;
}

export type CircuitFxCanvasProps = {
  mode?: CircuitFxMode;
  borderVariant?: CircuitFxBorderVariant;
  /** Solo para mode=\"border\": distancia al borde en px */
  borderInsetPx?: number;
  /** Solo para mode=\"border\": largo del brazo de la L en px */
  cornerArmPx?: number;
  /** Full page / hero: show corner CPU chips */
  showChips?: boolean;
  chipLabel?: string;
  particleCount?: number;
  glowBlur?: number;
  className?: string;
};

/**
 * Must sit inside a `relative overflow-hidden` container. Canvas is `absolute inset-0 z-0`.
 */
export function CircuitFxCanvas({
  mode = "full",
  borderVariant = "perimeter",
  borderInsetPx,
  cornerArmPx,
  showChips = false,
  chipLabel = "CPU",
  particleCount,
  glowBlur = 12,
  className,
}: CircuitFxCanvasProps) {
  const count =
    particleCount ??
    (mode === "border" ? 48 : 120);

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx0 = canvas.getContext("2d");
    if (!ctx0) return;
    const ctx2d: CanvasRenderingContext2D = ctx0;

    let buses: Bus[] = [];
    let particles: Particle[] = [];
    let raf = 0;
    let stageW = 0;
    let stageH = 0;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function init() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));

      // If the container is not laid out yet, retry next frame.
      if (w <= 1 || h <= 1) {
        window.requestAnimationFrame(init);
        return;
      }
      stageW = w;
      stageH = h;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);

      buses =
        mode === "full"
          ? buildBusesFull(w, h)
          : buildBusesBorder(w, h, borderVariant, {
              insetPx: borderInsetPx,
              armPx: cornerArmPx,
            });

      particles = Array.from({ length: Math.max(0, count) }).map(
        (_, idx) => new Particle(buses, 2026 + idx * 97),
      );
    }

    function drawOnce() {
      const w = stageW;
      const h = stageH;
      const colors = readCircuitColors();

      if (mode === "border") {
        ctx2d.clearRect(0, 0, w, h);
      } else {
        ctx2d.fillStyle = colors.fade;
        ctx2d.fillRect(0, 0, w, h);
      }

      ctx2d.save();
      ctx2d.shadowBlur = 0;
      ctx2d.strokeStyle = colors.bus;
      ctx2d.lineWidth = 1;
      for (const b of buses) {
        ctx2d.beginPath();
        ctx2d.moveTo(b.x1, b.y1);
        ctx2d.lineTo(b.x2, b.y2);
        ctx2d.stroke();
      }
      ctx2d.restore();

      if (showChips && mode === "full") {
        const chipSize = Math.min(86, Math.floor(Math.min(w, h) * 0.22));
        const pad = Math.max(12, Math.floor(Math.min(w, h) * 0.08));
        drawChip(ctx2d, colors, w - pad - chipSize, pad, chipSize, chipLabel);
        drawChip(
          ctx2d,
          colors,
          w - pad - chipSize,
          h - pad - chipSize,
          chipSize,
          chipLabel,
        );
      }

      ctx2d.save();
      ctx2d.shadowBlur = glowBlur;
      ctx2d.shadowColor = colors.neon;
      ctx2d.fillStyle = colors.neon;
      for (const p of particles) {
        const x = p.bus.x1 + (p.bus.x2 - p.bus.x1) * p.progress;
        const y = p.bus.y1 + (p.bus.y2 - p.bus.y1) * p.progress;
        const s = p.size;
        ctx2d.fillRect(x - s / 2, y - s / 2, s, s);
      }
      ctx2d.restore();
    }

    function drawFrame() {
      const w = stageW;
      const h = stageH;
      const colors = readCircuitColors();

      if (mode === "border") {
        ctx2d.clearRect(0, 0, w, h);
      } else {
        ctx2d.fillStyle = colors.fade;
        ctx2d.fillRect(0, 0, w, h);
      }

      ctx2d.save();
      ctx2d.shadowBlur = 0;
      ctx2d.strokeStyle = colors.bus;
      ctx2d.lineWidth = 1;
      for (const b of buses) {
        ctx2d.beginPath();
        ctx2d.moveTo(b.x1, b.y1);
        ctx2d.lineTo(b.x2, b.y2);
        ctx2d.stroke();
      }
      ctx2d.restore();

      if (showChips && mode === "full") {
        const chipSize = Math.min(86, Math.floor(Math.min(w, h) * 0.22));
        const pad = Math.max(12, Math.floor(Math.min(w, h) * 0.08));
        drawChip(ctx2d, colors, w - pad - chipSize, pad, chipSize, chipLabel);
        drawChip(
          ctx2d,
          colors,
          w - pad - chipSize,
          h - pad - chipSize,
          chipSize,
          chipLabel,
        );
      }

      ctx2d.save();
      ctx2d.shadowBlur = glowBlur;
      ctx2d.shadowColor = colors.neon;
      ctx2d.fillStyle = colors.neon;
      for (const p of particles) {
        p.update(buses);
        const x = p.bus.x1 + (p.bus.x2 - p.bus.x1) * p.progress;
        const y = p.bus.y1 + (p.bus.y2 - p.bus.y1) * p.progress;
        const s = p.size;
        ctx2d.fillRect(x - s / 2, y - s / 2, s, s);
      }
      ctx2d.restore();

      raf = window.requestAnimationFrame(drawFrame);
    }

    init();

    if (reducedMotion) {
      drawOnce();
      return () => {};
    }

    raf = window.requestAnimationFrame(drawFrame);

    const onResize = () => init();
    window.addEventListener("resize", onResize, { passive: true });

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => init())
        : null;
    ro?.observe(canvas.parentElement ?? canvas);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [
    borderVariant,
    borderInsetPx,
    chipLabel,
    cornerArmPx,
    count,
    glowBlur,
    mode,
    showChips,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "circuit-fx-canvas pointer-events-none absolute inset-0 z-0",
        className,
      )}
      aria-hidden="true"
    />
  );
}

/** Alias con chips en esquinas (modo full), para compatibilidad. */
export function AboutCircuitBackground({
  particleCount = 120,
  glowBlur = 12,
  chipLabel = "CPU",
}: Pick<CircuitFxCanvasProps, "particleCount" | "glowBlur" | "chipLabel">) {
  return (
    <CircuitFxCanvas
      mode="full"
      showChips
      particleCount={particleCount}
      glowBlur={glowBlur}
      chipLabel={chipLabel}
    />
  );
}
