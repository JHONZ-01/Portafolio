"use client";

import * as React from "react";

type Particle = {
  id: string;
  symbol: string;
  className: string;
};

const codeSymbols = [
  "{",
  "}",
  "[",
  "]",
  "(",
  ")",
  "<",
  ">",
  "/",
  "*",
  "=",
  "+",
  "-",
  ";",
  ":",
  "&",
  "|",
  "%",
  "$",
  "#",
  "@",
] as const;

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Particles({ count = 20 }: { count?: number }) {
  const particles = React.useMemo<Particle[]>(() => {
    const n = Math.max(0, Math.min(20, count));
    return Array.from({ length: n }).map((_, idx) => {
      const rnd = mulberry32(1337 + idx * 97 + count * 13);
      const symbol = codeSymbols[Math.floor(rnd() * codeSymbols.length)]!;
      return {
        id: `p-${idx}`,
        symbol,
        className: `particle-${idx}`,
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.className}`}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
}
