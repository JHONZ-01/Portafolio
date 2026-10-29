"use client";

import { useState } from "react";

import type { MessageKey } from "@/lib/i18n/messages";
import { useT } from "@/lib/i18n/useT";

type DemoState = "overdue" | "paid" | "done";

const STATES: { id: DemoState; label: MessageKey }[] = [
  { id: "overdue", label: "demo.state.overdue" },
  { id: "paid", label: "demo.state.paid" },
  { id: "done", label: "demo.state.done" },
];

/** Datos de ejemplo de la ficha según el estado. */
const RECORD: Record<
  DemoState,
  { instalment: string; due: string; status: MessageKey; lock: MessageKey }
> = {
  overdue: { instalment: "4 / 12", due: "05/11", status: "demo.status.overdue", lock: "demo.lock.on" },
  paid: { instalment: "5 / 12", due: "05/12", status: "demo.status.paid", lock: "demo.lock.off" },
  done: { instalment: "12 / 12", due: "—", status: "demo.status.done", lock: "demo.lock.removed" },
};

export function PhoneDemo() {
  const { t } = useT();
  const [state, setState] = useState<DemoState>("overdue");
  const r = RECORD[state];

  const rows: [MessageKey, string][] = [
    ["demo.panel.client", "María Q."],
    ["demo.panel.device", "Galaxy A15 · 128 GB"],
    ["demo.panel.instalment", r.instalment],
    ["demo.panel.amount", "S/ 89.00"],
    ["demo.panel.due", r.due],
    ["demo.panel.status", t(r.status)],
    ["demo.panel.lock", t(r.lock)],
  ];

  return (
    <section className="demo" aria-labelledby="demo-title">
      <div className="demo__grid">
        <div className="demo__intro">
          <h2 id="demo-title" className="section-title" data-reveal>
            {t("sections.demo.title")}
          </h2>
          <p data-reveal style={{ ["--d" as string]: 1 }}>
            {t("sections.demo.lead")}
          </p>
          <div
            className="demo__switch"
            role="group"
            aria-label={t("demo.panel.status")}
            data-reveal
            style={{ ["--d" as string]: 2 }}
          >
            {STATES.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={state === s.id}
                aria-controls="demo-panel demo-phone"
                onClick={() => setState(s.id)}
              >
                <span>{t(s.label)}</span>
                <span aria-hidden="true">{state === s.id ? "●" : "○"}</span>
              </button>
            ))}
          </div>
        </div>

        <div data-reveal style={{ ["--d" as string]: 2 }}>
          <div id="demo-panel" className="ui-panel" data-ui data-state={state} aria-live="polite">
            <div className="ui-panel__bar">
              <span>{t("demo.panel.title")}</span>
              <span className="ui-panel__id tabular">#C-20418</span>
            </div>
            <dl className="ui-panel__rows">
              {rows.map(([k, v]) => (
                <div key={k} data-key={k}>
                  <dt>{t(k)}</dt>
                  <dd className="tabular">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="demo__caption">{t("demo.caption")}</p>
        </div>

        <div data-reveal style={{ ["--d" as string]: 3 }}>
          <div
            id="demo-phone"
            className="ui-phone"
            data-ui
            data-state={state}
            role="img"
            aria-label={`${t("demo.phone.label")}: ${
              state === "overdue"
                ? t("demo.phone.lockedTitle")
                : state === "paid"
                  ? t("demo.phone.paidTitle")
                  : t("demo.phone.doneTitle")
            }`}
          >
            <div className="ui-phone__screen">
              <div className="ui-phone__status tabular">
                <span>9:41</span>
                <span>4G · 82%</span>
              </div>
              <div className="ui-phone__clock tabular">9:41</div>
              <div className="ui-phone__card" key={state}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="ui-phone__icon">
                  {state === "overdue" ? (
                    <path
                      fill="currentColor"
                      d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"
                    />
                  ) : (
                    <path
                      fill="currentColor"
                      d="M12 2a5 5 0 0 0-5 5h2a3 3 0 1 1 6 0v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Z"
                    />
                  )}
                </svg>
                <strong>
                  {state === "overdue"
                    ? t("demo.phone.lockedTitle")
                    : state === "paid"
                      ? t("demo.phone.paidTitle")
                      : t("demo.phone.doneTitle")}
                </strong>
                <span>
                  {state === "overdue"
                    ? t("demo.phone.lockedBody")
                    : state === "paid"
                      ? t("demo.phone.paidBody")
                      : t("demo.phone.doneBody")}
                </span>
              </div>
              {state === "overdue" ? (
                <span className="ui-phone__call">{t("demo.phone.call")}</span>
              ) : (
                <div className="ui-phone__apps" aria-hidden="true">
                  {Array.from({ length: 8 }, (_, i) => (
                    <span key={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
