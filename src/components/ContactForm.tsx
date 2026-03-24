"use client";
import { useState, FormEvent } from "react";

const inputCls = "w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A9DAB] transition";
const inputStyle = { borderColor: "var(--rule)", fontFamily: "var(--font-sans)" } as const;

type Props = {
  type?: "contact" | "consultation";
};

export default function ContactForm({ type = "contact" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data: Record<string, string> = { type };
    new FormData(form).forEach((v, k) => { data[k] = v.toString(); });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "var(--teal-pale)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-extrabold text-xl" style={{ color: "var(--ink)" }}>Message Received</h3>
        <p style={{ color: "var(--muted)", maxWidth: 360, lineHeight: 1.7 }}>
          We&apos;ll be in touch within one business day. For urgent needs, call us directly at{" "}
          <a href="tel:8648412500" className="font-bold" style={{ color: "var(--teal-brand)" }}>(864) 841-2500</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div className="flex flex-col gap-1.5">
          <label className="block text-sm font-semibold" style={{ color: "var(--ink)" }} htmlFor="cf-fname">First Name *</label>
          <input id="cf-fname" name="fname" type="text" required className={inputCls} style={inputStyle} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="block text-sm font-semibold" style={{ color: "var(--ink)" }} htmlFor="cf-lname">Last Name *</label>
          <input id="cf-lname" name="lname" type="text" required className={inputCls} style={inputStyle} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-5">
        <label className="block text-sm font-semibold" style={{ color: "var(--ink)" }} htmlFor="cf-phone">Phone Number *</label>
        <input id="cf-phone" name="phone" type="tel" required placeholder="(864) 000-0000" className={inputCls} style={inputStyle} />
      </div>

      <div className="flex flex-col gap-1.5 mb-5">
        <label className="block text-sm font-semibold" style={{ color: "var(--ink)" }} htmlFor="cf-email">Email Address</label>
        <input id="cf-email" name="email" type="email" className={inputCls} style={inputStyle} />
      </div>

      {type === "consultation" && (
        <>
          <div className="flex flex-col gap-1.5 mb-5">
            <label className="block text-sm font-semibold" style={{ color: "var(--ink)" }} htmlFor="cf-city">City / Area</label>
            <input id="cf-city" name="city" type="text" placeholder="e.g., Honea Path, Williamston, Anderson…" className={inputCls} style={inputStyle} />
          </div>

          <div className="flex flex-col gap-1.5 mb-5">
            <label className="block text-sm font-semibold" style={{ color: "var(--ink)" }} htmlFor="cf-services">Services of Interest</label>
            <select id="cf-services" name="services" className={inputCls} style={inputStyle}>
              <option value="">Select a service…</option>
              <option>Personal Care</option>
              <option>Companion Care</option>
              <option>Respite Care</option>
              <option>Meal Preparation</option>
              <option>Light Housekeeping</option>
              <option>Transportation</option>
              <option>Medication Reminders</option>
              <option>Hospital Discharge Support</option>
              <option>24-Hour Home Care</option>
              <option>Overnight Care</option>
              <option>Multiple / Not Sure</option>
            </select>
          </div>
        </>
      )}

      <div className="flex flex-col gap-1.5 mb-6">
        <label className="block text-sm font-semibold" style={{ color: "var(--ink)" }} htmlFor="cf-message">
          {type === "consultation" ? "Tell Us More (Optional)" : "Message *"}
        </label>
        <textarea
          id="cf-message" name="message"
          required={type === "contact"}
          rows={4}
          placeholder={type === "consultation" ? "Share any details that would help us prepare…" : "How can we help you?"}
          className={inputCls + " resize-none"}
          style={inputStyle}
        />
      </div>

      {status === "error" && (
        <p className="mb-4 text-sm text-center" style={{ color: "#D94F5C" }}>
          Something went wrong. Please call us at (864) 841-2500.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-coral w-full"
        style={{ justifyContent: "center", fontSize: "1rem", padding: "16px", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Sending…" : type === "consultation" ? "Submit Request" : "Send Message"}
      </button>
    </form>
  );
}
