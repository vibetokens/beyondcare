"use client";
import { useState } from "react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4 | 5;

const STEP_LABELS = ["Who", "Need", "Timeline", "Location", "Results"];

const WHO_OPTIONS   = ["My parent", "My spouse or partner", "Myself", "Someone else"];
const NEED_OPTIONS  = [
  { label: "Help with daily tasks",       icon: "self_care"         },
  { label: "Loneliness & companionship",  icon: "diversity_3"       },
  { label: "Safety at home",              icon: "shield_with_heart" },
  { label: "Recovery after surgery",      icon: "health_and_safety" },
  { label: "Memory or cognitive concerns",icon: "psychology"        },
  { label: "Relief for a family caregiver",icon: "replay"          },
];
const TIME_OPTIONS  = [
  "Right away",
  "Within 1–2 weeks",
  "Within a month",
  "Just exploring options",
];

const RECOMMENDATIONS: Record<string, { title: string; slug: string; desc: string }[]> = {
  "Help with daily tasks": [
    { title: "Personal Care",      slug: "/services/personal-care",        desc: "Bathing, grooming, dressing, and hygiene support." },
    { title: "Light Housekeeping", slug: "/services/light-housekeeping",   desc: "Keeping the home safe, clean, and comfortable." },
    { title: "Meal Preparation",   slug: "/services/meal-preparation",     desc: "Nutritious meals built around preferences and needs." },
  ],
  "Loneliness & companionship": [
    { title: "Companion Care",     slug: "/services/companion-care",       desc: "Meaningful daily connection and engagement." },
    { title: "Meal Preparation",   slug: "/services/meal-preparation",     desc: "Shared mealtimes and kitchen companionship." },
    { title: "Transportation",     slug: "/services/transportation",       desc: "Rides to outings, events, and errands." },
  ],
  "Safety at home": [
    { title: "Mobility & Transfers",slug: "/services/mobility-transfer-support", desc: "Safe movement and fall prevention every day." },
    { title: "Medication Reminders",slug: "/services/medication-reminders",      desc: "Consistent on-schedule medication reminders." },
    { title: "Personal Care",      slug: "/services/personal-care",              desc: "Hands-on help that keeps daily routines safe." },
  ],
  "Recovery after surgery": [
    { title: "Hospital Discharge Support", slug: "/services/hospital-discharge-support", desc: "Seamless care at home after surgery or a hospital stay." },
    { title: "Personal Care",              slug: "/services/personal-care",              desc: "Hands-on help during recovery." },
    { title: "Meal Preparation",           slug: "/services/meal-preparation",           desc: "Nourishing meals to support healing." },
  ],
  "Memory or cognitive concerns": [
    { title: "Companion Care",    slug: "/services/companion-care",      desc: "Consistent, familiar companionship and engagement." },
    { title: "24-Hour Home Care", slug: "/services/24-hour-home-care",  desc: "Around-the-clock support for continuous peace of mind." },
    { title: "Personal Care",     slug: "/services/personal-care",      desc: "Respectful daily support that preserves dignity." },
  ],
  "Relief for a family caregiver": [
    { title: "Respite Care",      slug: "/services/respite-care",       desc: "Planned breaks so you can rest and recharge." },
    { title: "Overnight Care",    slug: "/services/overnight-care",     desc: "Overnight coverage so the whole family can sleep." },
    { title: "Companion Care",    slug: "/services/companion-care",     desc: "Reliable presence your loved one will look forward to." },
  ],
};

export default function CareQuiz() {
  const [step,     setStep]     = useState<Step>(1);
  const [who,      setWho]      = useState("");
  const [need,     setNeed]     = useState("");
  const [timeline, setTimeline] = useState("");
  const [city,     setCity]     = useState("");

  const progress = ((step - 1) / 4) * 100;
  const recs = RECOMMENDATIONS[need] ?? [];

  function restart() {
    setStep(1); setWho(""); setNeed(""); setTimeline(""); setCity("");
  }

  return (
    <div className="card" style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(24px, 5vw, 48px)" }}>

      {/* Progress bar */}
      {step < 5 && (
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {STEP_LABELS.slice(0, 4).map((label, i) => (
              <span
                key={label}
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: i < step - 1 ? "var(--teal-brand)" : i === step - 1 ? "var(--ink)" : "var(--muted)" }}
              >
                {label}
              </span>
            ))}
          </div>
          <div style={{ height: 4, borderRadius: 999, background: "var(--rule)" }}>
            <div
              style={{
                height: "100%", borderRadius: 999,
                background: "var(--teal-brand)",
                width: `${progress}%`,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      )}

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h2 className="h-md mb-2" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            Who are you looking for care for?
          </h2>
          <p className="text-muted mb-6" style={{ fontSize: ".9375rem" }}>
            Help us point you in the right direction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHO_OPTIONS.map(opt => (
              <button
                key={opt}
                onClick={() => { setWho(opt); setStep(2); }}
                className="quiz-option text-left p-4 rounded-xl border font-semibold text-sm transition-all hover:border-teal-brand hover:text-teal-brand"
                style={{ borderColor: "var(--rule)", color: "var(--ink)", background: "#fff" }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h2 className="h-md mb-2" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            What&apos;s the biggest concern right now?
          </h2>
          <p className="text-muted mb-6" style={{ fontSize: ".9375rem" }}>
            Choose the one that fits best — we&apos;ll tailor our recommendations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NEED_OPTIONS.map(opt => (
              <button
                key={opt.label}
                onClick={() => { setNeed(opt.label); setStep(3); }}
                className="text-left p-4 rounded-xl border font-semibold text-sm transition-all hover:border-teal-brand hover:bg-teal-pale"
                style={{ borderColor: "var(--rule)", color: "var(--ink)", background: "#fff" }}
              >
                <span className="material-symbols-outlined block mb-2" style={{ fontSize: 22, color: "var(--teal-brand)" }}>
                  {opt.icon}
                </span>
                {opt.label}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="mt-4 text-sm text-muted hover:text-ink transition-colors">
            ← Back
          </button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h2 className="h-md mb-2" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            How soon do you need care?
          </h2>
          <p className="text-muted mb-6" style={{ fontSize: ".9375rem" }}>
            No pressure — we work with whatever your timeline is.
          </p>
          <div className="flex flex-col gap-3">
            {TIME_OPTIONS.map(opt => (
              <button
                key={opt}
                onClick={() => { setTimeline(opt); setStep(4); }}
                className="text-left p-4 rounded-xl border font-semibold text-sm transition-all hover:border-teal-brand hover:bg-teal-pale"
                style={{ borderColor: "var(--rule)", color: "var(--ink)", background: "#fff" }}
              >
                {opt}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="mt-4 text-sm text-muted hover:text-ink transition-colors">
            ← Back
          </button>
        </div>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <div>
          <h2 className="h-md mb-2" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            What city or area are you in?
          </h2>
          <p className="text-muted mb-6" style={{ fontSize: ".9375rem" }}>
            We serve Upstate SC — let&apos;s confirm we cover your area.
          </p>
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="e.g., Honea Path, Anderson, Greenville…"
            className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 mb-4"
            style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
          />
          <button
            onClick={() => setStep(5)}
            disabled={!city.trim()}
            className="btn-coral w-full"
            style={{ justifyContent: "center", opacity: city.trim() ? 1 : 0.5 }}
          >
            See My Recommendations →
          </button>
          <button onClick={() => setStep(3)} className="mt-4 block text-sm text-muted hover:text-ink transition-colors">
            ← Back
          </button>
        </div>
      )}

      {/* Step 5 — Results */}
      {step === 5 && (
        <div>
          <div className="mb-6">
            <span className="eyebrow">Your Results</span>
            <h2 className="h-md mt-1 mb-2" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
              Here&apos;s what we&apos;d recommend
            </h2>
            <p className="text-muted" style={{ fontSize: ".9375rem" }}>
              Based on your answers, these services are the best starting point.
              {timeline === "Right away" && " Since you need care right away — please call us directly."}
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            {recs.map(rec => (
              <Link
                key={rec.slug}
                href={rec.slug}
                className="flex items-start gap-4 p-4 rounded-xl border transition-all hover:border-teal-brand hover:bg-teal-pale"
                style={{ borderColor: "var(--rule)" }}
              >
                <span className="material-symbols-outlined mt-0.5 flex-shrink-0" style={{ color: "var(--teal-brand)", fontSize: 20 }}>
                  arrow_forward
                </span>
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--ink)" }}>{rec.title}</p>
                  <p className="text-muted" style={{ fontSize: ".875rem", lineHeight: 1.6 }}>{rec.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-xl p-5 mb-4" style={{ background: "var(--teal-pale)" }}>
            <p className="font-bold text-sm mb-3" style={{ color: "var(--ink)" }}>
              Ready to take the next step?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/schedule-consultation" className="btn-coral" style={{ flex: 1, justifyContent: "center", fontSize: ".875rem" }}>
                Request Free Consultation
              </Link>
              <a href="tel:8648412500" className="btn-teal" style={{ flex: 1, justifyContent: "center", fontSize: ".875rem" }}>
                Call (864) 841-2500
              </a>
            </div>
          </div>

          <button onClick={restart} className="text-sm text-muted hover:text-ink transition-colors">
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
