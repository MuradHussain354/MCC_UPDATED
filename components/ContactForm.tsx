"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { mainContact } from "@/data/team";

// ─────────────────────────────────────────────────────────────────────────
// FORMSPREE SETUP — one manual step needed before this goes live:
//
// 1. Go to https://formspree.io and sign up (use info@mccgroup.lk so
//    notifications land in the company inbox).
// 2. Create a new form and set its notification email to info@mccgroup.lk
//    (or whichever inbox should receive contact-form submissions).
// 3. Formspree will give you an endpoint that looks like:
//      https://formspree.io/f/abcdwxyz
// 4. Paste that endpoint below, replacing the placeholder.
//
// Until that's done, this constant is a non-working placeholder and the
// form will show the error state (with a mailto: fallback link) on submit.
// ─────────────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-sm bg-mcc-steel border border-mcc-line px-4 py-3 text-sm text-mcc-paper placeholder:text-mcc-paper/35 focus:border-mcc-red focus:ring-2 focus:ring-mcc-red/30 outline-none transition-colors disabled:opacity-50";

  const mailtoHref = `mailto:${mainContact.email}?subject=${encodeURIComponent(
    `Website inquiry from ${form.name || "a visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
  )}`;

  if (status === "success") {
    return (
      <motion.div className="ticket-card p-7 sm:p-9 text-center py-16">
        <CheckCircle2 size={40} className="text-mcc-red mx-auto mb-4" />
        <h3 className="font-display text-2xl tracking-wide text-mcc-paper mb-2">
          Message Sent
        </h3>
        <p className="text-sm text-mcc-paper/60">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form onSubmit={handleSubmit} className="ticket-card p-7 sm:p-9 space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs eyebrow mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={status === "submitting"}
          value={form.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs eyebrow mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={status === "submitting"}
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs eyebrow mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            disabled={status === "submitting"}
            value={form.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+94 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs eyebrow mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={status === "submitting"}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us about your inquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-sm bg-mcc-red px-8 py-3.5 text-sm font-semibold tracking-wide text-mcc-paper hover:bg-mcc-red-deep transition-colors disabled:opacity-60"
      >
        <Send size={16} />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-sm border border-mcc-red/40 bg-mcc-red/10 px-4 py-3 text-sm text-mcc-paper/80">
          <AlertCircle size={18} className="text-mcc-red shrink-0 mt-0.5" />
          <p>
            Something went wrong sending this. You can also{" "}
            <a href={mailtoHref} className="text-mcc-red underline hover:text-mcc-paper">
              email us directly
            </a>
            .
          </p>
        </div>
      )}
    </motion.form>
  );
}
