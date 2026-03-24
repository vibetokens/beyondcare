"use client";
import { useState, FormEvent } from "react";

const SURFACE = "#e5f7f9";
const P       = "#00343e";

export default function HomepageCTAForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const data: Record<string, string> = { type: "consultation" };
    new FormData(e.currentTarget).forEach((v, k) => { data[k] = v.toString(); });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(75,191,204,0.15)" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4BBFCC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-bold text-xl" style={{ color: "#fff" }}>Request Received</h3>
        <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 380, lineHeight: 1.7 }}>
          We&apos;ll be in touch within one business day. For urgent needs, call{" "}
          <a href="tel:8648412500" className="font-bold underline" style={{ color: "#4BBFCC" }}>(864) 841-2500</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5 text-left" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: "rgba(0,52,62,0.5)" }}>Full Name</label>
          <input name="fname" type="text" required placeholder="Jane Doe"
            className="w-full rounded-xl p-4 font-light focus:outline-none focus:ring-1 text-sm"
            style={{ background: SURFACE, color: P, border: "none" }} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: "rgba(0,52,62,0.5)" }}>Phone Number</label>
          <input name="phone" type="tel" required placeholder="(864) 000-0000"
            className="w-full rounded-xl p-4 font-light focus:outline-none focus:ring-1 text-sm"
            style={{ background: SURFACE, color: P, border: "none" }} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: "rgba(0,52,62,0.5)" }}>Your Care Vision</label>
        <textarea name="careVision" rows={3} placeholder="Share your unique requirements…"
          className="w-full rounded-xl p-4 font-light focus:outline-none focus:ring-1 resize-none text-sm"
          style={{ background: SURFACE, color: P, border: "none" }} />
      </div>

      {status === "error" && (
        <p className="text-sm text-center" style={{ color: "#D94F5C" }}>
          Something went wrong. Please call (864) 841-2500.
        </p>
      )}

      <button type="submit" disabled={status === "loading"}
        className="w-full p-4 sm:p-5 rounded-xl font-bold text-base sm:text-lg transition-all active:scale-[0.98]"
        style={{ background: P, color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}>
        {status === "loading" ? "Sending…" : "Request Private Consultation"}
      </button>
    </form>
  );
}
