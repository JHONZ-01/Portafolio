"use client";

import type { ProjectId } from "@/lib/content";
import type { Lang } from "@/lib/i18n/messages";

/*
 * Fragmentos de interfaz recreados en HTML para cada proyecto.
 * Todos los datos son de ejemplo; los totales cuadran entre sí.
 */

const L = {
  es: {
    client: "Cliente",
    instalment: "Cuota",
    amount: "Monto",
    due: "Vence",
    status: "Estado",
    paid: "Pagada",
    overdue: "Vencida",
    pending: "Pendiente",
    instalments: "Cuotas de octubre",
    devices: "Equipos con candado",
    model: "Modelo",
    lock: "Candado",
    locked: "Bloqueado",
    active: "Activo",
    released: "Liberado",
    ticket: "Orden de servicio",
    device: "Equipo",
    issue: "Falla reportada",
    issueText: "Se reinicia solo y no carga.",
    steps: ["Diagnóstico de batería y puerto", "Respaldo de datos", "Restauración de fábrica", "Candado reinstalado", "Prueba de carga 30 min"],
    done: "Hecho",
    next: "En curso",
    siteNav: ["Equipos", "Cómo pagar", "Tiendas", "Contacto"],
    siteTitle: "Tu celular hoy, en cuotas.",
    siteBody: "Llévalo con tu DNI y paga semanal o mensual.",
    siteCta: "Ver equipos",
    report: "Reporte de cobranza · 27/10",
    collected: "Cobrado",
    outstanding: "Pendiente",
    branch: "Tienda",
    payments: "Pagos",
    total: "Total",
  },
  en: {
    client: "Customer",
    instalment: "Instalment",
    amount: "Amount",
    due: "Due",
    status: "Status",
    paid: "Paid",
    overdue: "Overdue",
    pending: "Pending",
    instalments: "October instalments",
    devices: "Locked devices",
    model: "Model",
    lock: "Lock",
    locked: "Locked",
    active: "Active",
    released: "Released",
    ticket: "Service ticket",
    device: "Device",
    issue: "Reported fault",
    issueText: "Restarts by itself and won’t charge.",
    steps: ["Battery and port diagnosis", "Data backup", "Factory restore", "Lock reinstalled", "30 min charge test"],
    done: "Done",
    next: "In progress",
    siteNav: ["Phones", "How to pay", "Stores", "Contact"],
    siteTitle: "Your phone today, in instalments.",
    siteBody: "Take it home with your ID and pay weekly or monthly.",
    siteCta: "See phones",
    report: "Collections report · 27/10",
    collected: "Collected",
    outstanding: "Outstanding",
    branch: "Store",
    payments: "Payments",
    total: "Total",
  },
} as const;

function Instalments({ l }: { l: (typeof L)[Lang] }) {
  const rows = [
    ["María Q.", "4/12", "89.00", "05/10", "paid"],
    ["Luis R.", "7/10", "120.00", "08/10", "paid"],
    ["Ana T.", "2/12", "75.50", "12/10", "overdue"],
    ["Jorge P.", "9/12", "64.00", "15/10", "pending"],
    ["Rosa C.", "1/6", "142.00", "20/10", "pending"],
  ] as const;
  return (
    <div className="ui-panel" data-ui>
      <div className="ui-panel__bar">
        <span>{l.instalments}</span>
        <span className="ui-panel__id tabular">5</span>
      </div>
      <table className="ui-table tabular">
        <thead>
          <tr>
            <th>{l.client}</th>
            <th>{l.instalment}</th>
            <th>{l.amount}</th>
            <th className="ui-opt">{l.due}</th>
            <th>{l.status}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([c, q, a, d, s]) => (
            <tr key={c}>
              <td>{c}</td>
              <td>{q}</td>
              <td>S/ {a}</td>
              <td className="ui-opt">{d}</td>
              <td>
                <span className={`ui-tag ui-tag--${s}`}>{l[s]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Devices({ l }: { l: (typeof L)[Lang] }) {
  const rows = [
    ["35•••••••••2041", "Galaxy A15", "María Q.", "active"],
    ["86•••••••••7713", "Redmi 13C", "Ana T.", "locked"],
    ["35•••••••••9902", "Moto G24", "Luis R.", "active"],
    ["86•••••••••3358", "Galaxy A05", "Pedro V.", "released"],
  ] as const;
  return (
    <div className="ui-panel" data-ui>
      <div className="ui-panel__bar">
        <span>{l.devices}</span>
        <span className="ui-panel__id tabular">4</span>
      </div>
      <table className="ui-table tabular">
        <thead>
          <tr>
            <th>IMEI</th>
            <th>{l.model}</th>
            <th className="ui-opt">{l.client}</th>
            <th>{l.lock}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([imei, m, c, s]) => (
            <tr key={imei}>
              <td>{imei}</td>
              <td>{m}</td>
              <td className="ui-opt">{c}</td>
              <td>
                <span
                  className={`ui-tag ui-tag--${
                    s === "locked" ? "overdue" : s === "active" ? "pending" : "paid"
                  }`}
                >
                  {l[s]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Ticket({ l }: { l: (typeof L)[Lang] }) {
  return (
    <div className="ui-panel" data-ui>
      <div className="ui-panel__bar">
        <span>{l.ticket}</span>
        <span className="ui-panel__id tabular">#OS-0387</span>
      </div>
      <dl className="ui-panel__rows">
        <div>
          <dt>{l.device}</dt>
          <dd>Redmi 13C · 86•••7713</dd>
        </div>
        <div>
          <dt>{l.issue}</dt>
          <dd>{l.issueText}</dd>
        </div>
      </dl>
      <ul className="ui-checklist">
        {l.steps.map((s, i) => (
          <li key={s} data-done={i < 4}>
            <span>{s}</span>
            <span className={`ui-tag ui-tag--${i < 4 ? "paid" : "pending"}`}>
              {i < 4 ? l.done : l.next}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Site({ l }: { l: (typeof L)[Lang] }) {
  return (
    <div className="ui-browser" data-ui>
      <div className="ui-browser__bar">
        <span className="ui-browser__url">tienda-ejemplo.pe</span>
      </div>
      <div className="ui-browser__page">
        <div className="ui-browser__nav">
          <strong>Celucred</strong>
          <span>{l.siteNav.join("   ")}</span>
        </div>
        <p className="ui-browser__title">{l.siteTitle}</p>
        <p className="ui-browser__body">{l.siteBody}</p>
        <span className="ui-browser__cta">{l.siteCta}</span>
        <div className="ui-browser__grid">
          {["Galaxy A15", "Redmi 13C", "Moto G24"].map((m, i) => (
            <div key={m}>
              <span className="ui-browser__phone" data-tone={i} />
              <span>{m}</span>
              <span className="tabular">S/ {[89, 72, 68][i]} × 12</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Report({ l }: { l: (typeof L)[Lang] }) {
  const rows = [
    ["Centro", 18, 1642.5],
    ["Norte", 11, 987.0],
    ["Sur", 7, 655.5],
  ] as const;
  const totalPays = rows.reduce((s, r) => s + r[1], 0);
  const total = rows.reduce((s, r) => s + r[2], 0);
  return (
    <div className="ui-panel" data-ui>
      <div className="ui-panel__bar">
        <span>{l.report}</span>
        <span className="ui-panel__id">.xlsx</span>
      </div>
      <div className="ui-kpis tabular">
        <div>
          <span>{l.collected}</span>
          <strong>S/ {total.toFixed(2)}</strong>
        </div>
        <div>
          <span>{l.outstanding}</span>
          <strong>S/ 1,208.00</strong>
        </div>
      </div>
      <table className="ui-table tabular">
        <thead>
          <tr>
            <th>{l.branch}</th>
            <th>{l.payments}</th>
            <th>{l.collected}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([b, p, c]) => (
            <tr key={b}>
              <td>{b}</td>
              <td>{p}</td>
              <td>S/ {c.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="ui-table__total">
            <td>{l.total}</td>
            <td>{totalPays}</td>
            <td>S/ {total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const CODE = `const RECORD = {
  overdue: { instalment: "4 / 12", lock: "locked" },
  paid:    { instalment: "5 / 12", lock: "released" },
  done:    { instalment: "12 / 12", lock: "removed" },
};

const [state, setState] = useState<DemoState>("overdue");
const r = RECORD[state];`;

function Code() {
  return (
    <div className="ui-code" data-ui>
      <div className="ui-panel__bar">
        <span>PhoneDemo.tsx</span>
        <span className="ui-panel__id">TypeScript</span>
      </div>
      <pre>
        <code>{CODE}</code>
      </pre>
    </div>
  );
}

export function Fragment({ id, lang }: { id: ProjectId; lang: Lang }) {
  const l = L[lang];
  switch (id) {
    case "plataforma":
      return <Instalments l={l} />;
    case "candado":
      return <Devices l={l} />;
    case "soporte":
      return <Ticket l={l} />;
    case "web":
      return <Site l={l} />;
    case "herramientas":
      return <Report l={l} />;
    case "portafolio":
      return <Code />;
  }
}
