"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/who-we-serve": "Who We Serve",
  "/how-care-works": "How Care Works",
  "/why-choose-beyond-care": "Why Choose Beyond Care",
  "/caregiver-standards": "Caregiver Standards",
  "/locations": "Locations",
  "/payment-options": "Payment Options",
  "/schedule-consultation": "Schedule Consultation",
  "/faq": "FAQ",
  "/resources": "Resources",
  "/blog": "Blog",
  "/careers": "Careers",
  "/contact": "Contact",
  "/privacy-policy": "Privacy Policy",
};

export default function FeedbackWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const pageName = PAGE_NAMES[pathname] ?? pathname;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pageName, slug: pathname, feedback, priority }),
    });

    if (res.ok) {
      setStatus("done");
      setFeedback("");
      setTimeout(() => {
        setOpen(false);
        setStatus("idle");
      }, 2500);
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Tab button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Leave feedback"
        className="fixed z-50 bg-teal-700 text-white font-semibold shadow-lg hover:bg-teal-800 transition-colors
          bottom-6 right-4 flex items-center gap-2 text-sm px-4 py-2.5 rounded-full
          sm:bottom-8 sm:right-0 sm:rounded-l-full sm:rounded-r-none sm:px-4 sm:py-2"
      >
        <span className="material-symbols-outlined text-base leading-none" style={{ fontFamily: "Material Symbols Outlined" }}>
          chat
        </span>
        <span>Feedback</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full sm:max-w-sm bg-white shadow-2xl rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <p className="font-semibold text-gray-900 text-sm">Leave Feedback</p>
            <p className="text-xs text-gray-500 mt-0.5">Page: {pageName}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined" style={{ fontFamily: "Material Symbols Outlined" }}>close</span>
          </button>
        </div>

        {status === "done" ? (
          <div className="px-5 py-10 text-center">
            <p className="text-2xl mb-2">✓</p>
            <p className="font-semibold text-gray-900">Got it, thanks!</p>
            <p className="text-sm text-gray-500 mt-1">Your feedback was submitted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                What would you like changed?
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={5}
                required
                placeholder="e.g. Change the headline to... / Remove this section... / Add a photo of..."
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Priority</label>
              <div className="flex gap-2">
                {["Low", "Medium", "High"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 text-xs font-medium py-1.5 rounded-lg border transition-colors ${
                      priority === p
                        ? p === "High"
                          ? "bg-red-50 border-red-400 text-red-700"
                          : p === "Medium"
                          ? "bg-yellow-50 border-yellow-400 text-yellow-700"
                          : "bg-gray-100 border-gray-300 text-gray-700"
                        : "border-gray-200 text-gray-400 hover:border-gray-300"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {status === "error" && (
              <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Submitting…" : "Submit Feedback"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
