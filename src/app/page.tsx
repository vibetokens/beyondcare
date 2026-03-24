import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HomepageCTAForm from "@/components/HomepageCTAForm";

import {
  PHONES, SERVICES, TESTIMONIALS, SITE, AWARDS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Care in Upstate South Carolina | Beyond Care",
  description:
    "Beyond Care provides nurse-led, non-medical in-home support for seniors and adults in Honea Path, Williamston, and Upstate SC. Personal care, companionship, respite, and more. Free consultation.",
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Home Care in Upstate South Carolina | Beyond Care",
    description: "Locally owned, nurse-led home care in Upstate SC. Personal care, companion care, respite, transportation, and more.",
    url: SITE.domain,
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What services does Beyond Care provide?",
      acceptedAnswer: { "@type": "Answer", text: "Beyond Care provides non-medical in-home support including personal care, companion care, respite care, meal preparation, transportation, medication reminders, light housekeeping, mobility assistance, hospital discharge support, and 24-hour home care." } },
    { "@type": "Question", name: "Where does Beyond Care serve?",
      acceptedAnswer: { "@type": "Answer", text: "Beyond Care serves families throughout Upstate South Carolina, including Honea Path, Williamston, and Anderson, Greenville, Abbeville, Pickens, and Greenwood Counties." } },
  ],
};

const SERVICE_ICONS: Record<string, string> = {
  Heart: "self_care", Users: "diversity_3", RefreshCcw: "replay",
  UtensilsCrossed: "local_dining", Car: "directions_car", Bell: "medication",
  Home: "sanitizer", Activity: "health_and_safety",
  MoveHorizontal: "accessibility_new", Pill: "medication",
  Clock: "schedule", Moon: "nights_stay",
};

const PROCESS_STEPS = [
  { n: "01", label: "The Conversation",  body: "We start with a no-pressure call or visit — just an honest conversation about your situation and what you're hoping for." },
  { n: "02", label: "The Assessment",    body: "Our nurse-led team comes to you to understand what day-to-day support will make the biggest difference." },
  { n: "03", label: "The Care Plan",     body: "We build a schedule around real life — a few hours a week, every day, or around the clock." },
  { n: "04", label: "The Match",         body: "We pair your loved one with a caregiver whose skills, personality, and style are the right fit." },
  { n: "05", label: "Ongoing Support",   body: "Care begins — with regular nurse supervisory visits, family check-ins, and a plan that adjusts as needs change." },
];

const P        = "#00343e";
const SURFACE  = "#e5f7f9";
const MUTED    = "#40484b";
const SECONDARY= "#296675";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex items-center overflow-hidden"
        style={{ minHeight: "100svh", background: "#00343e" }}>

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/caregiver-indoor.png"
            alt="Caregiver with senior — Beyond Care home care"
            fill priority quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 sm:hidden"
            style={{ background: "rgba(0,36,44,0.72)" }} />
          <div className="absolute inset-0 hidden sm:block"
            style={{ background: "linear-gradient(to right, rgba(0,36,44,0.88) 0%, rgba(0,36,44,0.72) 45%, rgba(0,36,44,0.35) 100%)" }} />
        </div>

        <div className="relative z-10 w-full mx-auto px-5 sm:px-8 py-24 sm:py-32"
          style={{ maxWidth: 1280 }}>
          <div style={{ maxWidth: 560 }}>
            <span className="inline-block px-3 py-1 rounded-full border text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)" }}>
              Nurse-Led Home Care · Upstate SC
            </span>
            <h1 className="font-serif leading-[1.08] mb-5"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.25rem)", color: "#fff" }}>
              Care that feels<br />like home.
            </h1>
            <p className="font-light leading-relaxed mb-8"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", color: "rgba(255,255,255,0.8)", maxWidth: 460 }}>
              Dependable, compassionate support for seniors and families —
              in Honea Path, Williamston, and throughout Upstate South Carolina.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/how-care-works"
                className="text-center px-7 py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl"
                style={{ background: "#fff", color: P }}>
                See How It Works
              </Link>
              <a href={PHONES.primaryHref}
                className="text-center border px-7 py-4 rounded-xl font-bold text-base sm:text-lg transition-all"
                style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
                {PHONES.primary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS STRIP ─────────────────────────────────────── */}
      <section style={{ background: SURFACE, borderBottom: "1px solid rgba(0,52,62,0.08)" }}>
        <div className="mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          style={{ maxWidth: 1280 }}>
          {AWARDS.map(a => (
            <div key={a.label} className="flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ color: SECONDARY, fontSize: 22 }}>
                military_tech
              </span>
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: SECONDARY }}>{a.org}</p>
                <p className="text-sm font-bold" style={{ color: P }}>{a.label}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined" style={{ color: SECONDARY, fontSize: 22 }}>verified_user</span>
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: SECONDARY }}>Serving SC Since</p>
              <p className="text-sm font-bold" style={{ color: P }}>2013</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS STRIP ──────────────────────────────── */}
      <section className="bg-white" style={{ borderBottom: "1px solid rgba(0,52,62,0.06)" }}>
        <div className="mx-auto px-5 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          style={{ maxWidth: 1280 }}>
          {[
            { icon: "badge",            label: "Employee Caregivers"    },
            { icon: "medical_services", label: "CPR Certified"          },
            { icon: "shield",           label: "Bonded & Insured"       },
            { icon: "stethoscope",      label: "Nurse-Led"              },
            { icon: "workspace_premium",label: "Workers' Comp Covered"  },
            { icon: "calendar_month",   label: "Serving SC Since 2013"  },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ color: SECONDARY, fontSize: 17 }}>{icon}</span>
              <span className="text-xs font-bold tracking-wide" style={{ color: MUTED }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-14 md:py-24 px-5 sm:px-6 mx-auto" style={{ maxWidth: 1280 }}>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-serif mb-4 md:mb-6 tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", color: P }}>
            Support for Every Need
          </h2>
          <p className="font-light leading-relaxed mx-auto"
            style={{ color: MUTED, maxWidth: 680, fontSize: "clamp(0.9375rem, 2vw, 1.125rem)" }}>
            From a few hours of companionship to around-the-clock care — we meet families wherever they are.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14">
          {SERVICES.slice(0, 8).map(s => (
            <Link key={s.slug} href={s.slug} className="group flex flex-col items-center sm:items-start gap-3 md:gap-4 text-center sm:text-left">
              <span className="material-symbols-outlined" style={{ color: SECONDARY, fontSize: 28 }}>
                {SERVICE_ICONS[s.icon] ?? "self_care"}
              </span>
              <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-tight group-hover:opacity-70 transition-opacity"
                style={{ color: P }}>{s.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed font-light hidden sm:block" style={{ color: MUTED }}>{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <Link href="/services"
            className="inline-flex items-center gap-2 font-bold hover:opacity-70 transition-opacity text-sm sm:text-base"
            style={{ color: P }}>
            See all services
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ── TRUST / OWNER ─────────────────────────────────────── */}
      <section className="py-16 md:py-28 overflow-hidden" style={{ background: "rgba(229,247,249,0.35)" }}>
        <div className="mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
          style={{ maxWidth: 1280 }}>

          <div className="relative">
            <div className="overflow-hidden" style={{ borderRadius: "1.5rem" }}>
              <Image
                src="/images/sarah-atkin-owner.jpg"
                alt="Sarah Atkin, RN, BSN — Owner and Founder of Beyond Care"
                width={640} height={480}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            <div className="glass-card absolute z-20 hidden lg:block border"
              style={{ bottom: -28, right: -28, padding: 32, borderRadius: "1.5rem",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)", borderColor: "rgba(255,255,255,0.6)", maxWidth: 260 }}>
              <p className="font-bold text-lg mb-1 tracking-tight" style={{ color: P }}>Nurse-Led Care</p>
              <p className="text-sm font-light" style={{ color: MUTED }}>Founded and led by a Registered Nurse with 20+ years of clinical experience.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div>
              <h2 className="font-serif leading-tight tracking-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: P }}>
                Caregivers Who Actually<br />Care
              </h2>
              <p className="text-base font-light leading-relaxed" style={{ color: MUTED }}>
                Every caregiver we send into a home is someone we&apos;d trust with our own family.
                We hire carefully, train thoroughly, and keep a close eye on the work — because good care
                depends on good people, and good people deserve real support.
              </p>
            </div>

            <ul className="flex flex-col gap-6 md:gap-8">
              {[
                { icon: "verified",           label: "Thorough Background Checks",  body: "Every caregiver goes through multi-point screening, reference checks, and in-person interviews before they meet a single client." },
                { icon: "school",             label: "Ongoing Training",             body: "Our team receives continuous education in geriatric care, safety protocols, and specialized conditions — not just a one-time orientation." },
                { icon: "shield_with_heart",  label: "Employees, Not Contractors",   body: "Every caregiver is a Beyond Care employee — bonded, insured, and covered by workers&apos; compensation. Your family is protected." },
              ].map(({ icon, label, body }) => (
                <li key={label} className="flex items-start gap-4 md:gap-5">
                  <span className="material-symbols-outlined flex-shrink-0 mt-0.5" style={{ color: SECONDARY, fontSize: 22 }}>{icon}</span>
                  <div>
                    <h4 className="font-bold text-base tracking-tight mb-1" style={{ color: P }}>{label}</h4>
                    <p className="font-light text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/caregiver-standards"
              className="inline-flex items-center gap-2 font-bold self-start hover:opacity-70 transition-opacity text-sm sm:text-base"
              style={{ color: P }}>
              Our caregiver standards
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-white">
        <div className="mx-auto px-5 sm:px-6 text-center" style={{ maxWidth: 760 }}>
          <span className="font-serif select-none block mb-3 leading-none" aria-hidden="true"
            style={{ fontSize: "4rem", color: "rgba(0,52,62,0.1)", lineHeight: 1 }}>&ldquo;</span>
          <blockquote className="font-serif italic font-light leading-[1.4] mb-8 md:mb-12 tracking-tight"
            style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.25rem)", color: P }}>
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-10 mb-6" style={{ height: 1, background: "rgba(0,52,62,0.2)" }} />
            <cite className="not-italic">
              <span className="block font-bold text-base sm:text-lg tracking-tight mb-1" style={{ color: P }}>
                {TESTIMONIALS[0].name}
              </span>
              <span className="block text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: MUTED }}>
                {TESTIMONIALS[0].city}
              </span>
            </cite>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────── */}
      <section className="py-14 md:py-24 px-5 sm:px-6" style={{ background: SURFACE }}>
        <div className="mx-auto" style={{ maxWidth: 1280 }}>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", color: P }}>
              Why Families Choose Beyond Care
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8" style={{ maxWidth: 900, margin: "0 auto" }}>
            {[
              { icon: "home_pin",       title: "Locally Owned",              body: "Beyond Care was founded in 2013 right here in Upstate SC. This isn't a franchise — it's a company built by someone who knows this community personally." },
              { icon: "stethoscope",    title: "Nurse-Led",                  body: "Every care plan is designed and overseen by a registered nurse — not just a scheduler. Clinical knowledge is built into how we operate." },
              { icon: "calendar_month", title: "No Long-Term Contracts",     body: "Care that fits your timeline. Start with a few hours a week and adjust as your situation changes — no commitments beyond what you need." },
              { icon: "person_check",   title: "Consistent Caregivers",      body: "We match carefully and keep assignments consistent. Your loved one will see the same familiar faces — and that familiarity makes a real difference." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex items-start gap-5 p-6 rounded-2xl bg-white"
                style={{ border: "1px solid rgba(0,52,62,0.06)" }}>
                <span className="material-symbols-outlined flex-shrink-0 mt-0.5" style={{ color: SECONDARY, fontSize: 24 }}>{icon}</span>
                <div>
                  <h3 className="font-bold text-base mb-2 tracking-tight" style={{ color: P }}>{title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: MUTED }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-14 md:py-28 px-5 sm:px-6" style={{ background: "#f0f9fa" }}>
        <div className="mx-auto" style={{ maxWidth: 1280 }}>

          <div className="mb-12 md:mb-20">
            <h2 className="font-serif mb-3 md:mb-5 tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", color: P }}>
              Getting Started Is Easier Than You Think
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <p className="text-base font-light max-w-lg" style={{ color: MUTED }}>
                We guide families through every step — from the first phone call to the first day of care.
              </p>
              <Link href="/how-care-works"
                className="flex-shrink-0 self-start sm:self-auto px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all"
                style={{ background: P, color: "#fff" }}>
                Learn How It Works
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
            {PROCESS_STEPS.map(step => (
              <div key={step.n} className="relative editorial-step">
                <span className="font-serif block mb-2 leading-none select-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "rgba(0,52,62,0.1)" }}>
                  {step.n}
                </span>
                <h4 className="font-serif italic mb-2 md:mb-3"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.375rem)", color: P }}>
                  {step.label}
                </h4>
                <p className="text-sm font-light leading-relaxed" style={{ color: MUTED }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VA BENEFITS ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 md:py-28 px-5 sm:px-6" style={{ background: P }}>

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/veterans-care.jpg"
            alt="Veteran with caregiver — Beyond Care VA benefits"
            fill quality={85}
            className="object-cover object-center"
          />
          <div className="absolute inset-0"
            style={{ background: "rgba(0,36,44,0.78)" }} />
        </div>

        <div className="relative z-10 mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20"
          style={{ maxWidth: 1200 }}>

          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border text-[10px] font-bold tracking-[0.25em] uppercase"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.65)" }}>
              Honoring Those Who Served
            </div>
            <h2 className="font-serif leading-[1.2] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#fff" }}>
              Helping Veterans<br />Access the Care They Earned
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              Many veterans and surviving spouses qualify for VA Aid &amp; Attendance — a benefit
              that can help pay for in-home care. The application process can feel overwhelming,
              and we&apos;re here to help your family navigate it.
            </p>
            <Link href="/payment-options/va-benefits"
              className="self-start px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all text-white"
              style={{ background: SECONDARY }}>
              Learn About VA Benefits
            </Link>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "account_balance", title: "Reduce Out-of-Pocket Costs", body: "VA benefits can significantly offset the cost of in-home care — we help you understand what's available and how to use it." },
              { icon: "description",     title: "Help With the Paperwork",    body: "We'll guide your family through the application process so you can focus on care, not bureaucracy." },
            ].map(card => (
              <div key={card.title} className="p-6 rounded-2xl border"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                <span className="material-symbols-outlined mb-4 block"
                  style={{ color: "rgba(177,236,253,0.65)", fontSize: 32 }}>{card.icon}</span>
                <h4 className="font-bold text-base sm:text-lg mb-2 tracking-tight" style={{ color: "#fff" }}>{card.title}</h4>
                <p className="text-xs sm:text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ─────────────────────────────────────────── */}
      <section className="py-16 md:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute -bottom-1/2 -left-1/4 rounded-full"
            style={{ width: 800, height: 800, background: P, filter: "blur(160px)" }} />
        </div>

        <div className="relative z-10 mx-auto px-5 sm:px-6 text-center" style={{ maxWidth: 720 }}>
          <h2 className="font-serif mb-4 md:mb-6 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", color: P }}>
            Let&apos;s Talk About Your Family
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light mb-10 md:mb-16" style={{ color: MUTED }}>
            No pressure, no sales pitch — just an honest conversation about your needs
            and how we might be able to help.
          </p>

          <div className="bg-white p-6 sm:p-10 md:p-12 shadow-2xl border mx-auto"
            style={{ borderRadius: "2rem", borderColor: "rgba(0,52,62,0.06)" }}>
            <HomepageCTAForm />
          </div>
        </div>
      </section>
    </>
  );
}
