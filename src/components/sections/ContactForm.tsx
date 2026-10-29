"use client";

import * as React from "react";

import { contactInfo } from "@/lib/contact";
import { useT } from "@/lib/i18n/useT";

/**
 * Contacto sin backend: el formulario arma un `mailto:` con el asunto y el
 * mensaje ya escritos y abre la app de correo del visitante.
 */
export function ContactForm() {
  const { t } = useT();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = name ? `${message}\n\n— ${name}` : message;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <div className="contact__intro">
        <h2 id="contact-title" className="section-title" data-reveal>
          {t("sections.contact.title")}
        </h2>
        <p data-reveal style={{ ["--d" as string]: 1 }}>
          {t("contact.lead")}
        </p>
      </div>

      <form
        className="contact__form"
        onSubmit={onSubmit}
        data-reveal
        style={{ ["--d" as string]: 2 }}
      >
        <label>
          {t("contact.form.name")}
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          {t("contact.form.subject")}
          <input name="subject" required />
        </label>
        <label className="full">
          {t("contact.form.message")}
          <textarea name="message" rows={4} required />
        </label>
        <div className="contact__form-foot full">
          <button type="submit" className="btn btn--primary">
            {t("contact.form.send")}
          </button>
          <p>{t("contact.form.hint")}</p>
        </div>
      </form>

      <a
        className="contact__mail"
        href={`mailto:${contactInfo.email}`}
        aria-label={t("contact.mailLabel", { email: contactInfo.email })}
        data-reveal
      >
        <span>{contactInfo.email.split("@")[0]}@</span>
        <span>{contactInfo.email.split("@")[1]}</span>
      </a>
    </section>
  );
}
