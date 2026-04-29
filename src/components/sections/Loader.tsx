"use client";

import { motion } from "framer-motion";

export function Loader({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-darker)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1.6, times: [0, 0.75, 1], ease: "easeInOut" }}
      style={{ pointerEvents: "none" }}
      aria-label="Cargando"
      role="status"
    >
      <div className="w-full max-w-sm px-6 text-center">
        <div className="font-mono text-sm text-[var(--primary)]">
          <div>{"const portfolio = {"}</div>
          <div className="opacity-80">{"  loading: true,"}</div>
          <div className="opacity-80">{"  status: 'initializing...'"}</div>
          <div>{"};"}</div>
        </div>

        <div className="mt-6">
          <motion.div
            className="mx-auto h-12 w-12 rounded-full border-2 border-[var(--border)] border-t-[var(--primary)] border-r-[var(--cyan)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </div>

        <div className="mt-6 h-1 overflow-hidden rounded bg-[var(--border)]">
          <motion.div
            className="h-full bg-[var(--gradient-1)]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
