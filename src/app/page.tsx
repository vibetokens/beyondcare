import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Phone, CheckCircle, Shield, Award, Star,
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
};
import {
  PHONES, OFFICES, AWARDS, PAYMENT_OPTIONS,
  SERVICES, PROCESS_STEPS, TRUST_SIGNALS,
  TESTIMONIALS, OWNER, SITE, LOCAL_BUSINESS_SCHEMA,
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

// FAQ schema for AI / Google rich results
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What services does Beyond Care provide?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care provides non-medical in-home support including personal care, companion care, respite care, meal preparation, transportation, medication reminders, light housekeeping, mobility assistance, hospital discharge support, and 24-hour home care." } },
    { "@type": "Question", "name": "Where does Beyond Care serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care serves families throughout Upstate South Carolina, including Honea Path, Williamston, and Anderson, Greenville, Abbeville, Pickens, and Greenwood Counties. They have two offices: one in Honea Path and one in Williamston." } },
    { "@type": "Question", "name": "Who owns Beyond Care?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care is owned and operated by Sarah Atkin, RN, BSN, a Registered Nurse with over 20 years of nursing experience who is personally involved in daily operations and home visits." } },
    { "@type": "Question", "name": "How much does home care from Beyond Care cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care accepts private pay, long-term care insurance, Community Long Term Care (CLTC), Medicaid Waiver, VA benefits, and vouchers. Contact them at 864-841-2500 for a free consultation and cost discussion." } },
    { "@type": "Question", "name": "Are Beyond Care caregivers employees or contractors?",
      "acceptedAnswer": { "@type": "Answer", "text": "All Beyond Care caregivers are employees, not independent contractors. They are bonded, insured, covered by workers' compensation, CPR certified, and required to complete ongoing skills training and performance evaluations." } },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* ── Page schema ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-teal-deep"
        style={{ minHeight: "clamp(500px, 85vh, 760px)" }}
        aria-label="Homepage hero">

        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-home.jpg"
            alt="Caregiver helping an elderly woman in her South Carolina home"
            fill priority quality={88}
            className="object-cover object-center"
          />
          {/* Desktop: left-to-right scrim */}
          <div className="hero-scrim-left absolute inset-0 hidden sm:block" />
          {/* Mobile: bottom scrim */}
          <div className="hero-scrim-bottom absolute inset-0 sm:hidden" />
        </div>

        {/* Content */}
        <div className="relative z-10 wrap flex items-end pb-10 sm:pb-14 lg:pb-20"
          style={{ minHeight: "clamp(500px, 85vh, 760px)" }}>
          <div className="max-w-xl py-16 sm:py-20">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm
              text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              Nurse-Led · Locally Owned · Upstate South Carolina
            </div>

            <h1 className="text-white font-extrabold mb-5"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)", lineHeight: "1.04", letterSpacing: "-0.03em" }}>
              Care that feels<br />
              <em className="not-italic" style={{ color: "var(--teal-light)" }}>like home.</em>
            </h1>

            <p className="mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: "1.7" }}>
              Dependable, nurse-guided in-home support for seniors and adults
              in Honea Path, Williamston, and throughout Upstate South Carolina.
            </p>

            <div className="flex flex-col xs:flex-row gap-3">
              <Link href="/contact" className="btn-coral text-base px-7 py-4 justify-center">
                Schedule a Free Consultation
              </Link>
              <a href={PHONES.primaryHref} className="btn-outline-white text-base px-7 py-4 justify-center">
                <Phone size={16} />
                {PHONES.primary}
              </a>
            </div>

            {/* Micro trust */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-7">
              {["Bonded & Insured", "Employee Caregivers", "CPR Certified", "Free Consultation"].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-white/65 text-sm font-medium">
                  <CheckCircle size={13} className="text-teal-light flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating office pills — desktop only */}
        <div className="absolute bottom-6 right-6 hidden xl:flex flex-col gap-2 z-10">
          {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
            <a key={o.name} href={`tel:${o.phone.replace(/-/g,"")}`}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15
                text-white rounded-xl px-4 py-2.5 hover:bg-white/20 transition-colors">
              <Phone size={13} className="text-teal-light flex-shrink-0" />
              <div>
                <div className="text-[11px] text-white/55 font-medium">{o.name}</div>
                <div className="text-sm font-bold">{o.phone}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Award / trust strip ── */}
      <div className="bg-white border-b" style={{ borderColor: "var(--rule)" }}>
        <div className="wrap py-3 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {AWARDS.map(a => (
            <div key={a.label} className="flex items-center gap-2">
              <Award size={13} className="text-teal-brand flex-shrink-0" />
              <span className="text-xs font-bold text-muted whitespace-nowrap">{a.label} — {a.org}</span>
            </div>
          ))}
          <span className="hidden sm:block w-px h-4 bg-rule" />
          <div className="flex items-center gap-2">
            <Shield size={13} className="text-teal-brand flex-shrink-0" />
            <span className="text-xs font-bold text-muted">Nurse-owned &amp; operated since {SITE.founded}</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          ABOUT / SARAH — two column with real photo
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-white" aria-label="About Beyond Care">
        <div className="wrap">
          <div className="grid-2">

            {/* Text */}
            <div className="reveal">
              <span className="eyebrow">Who we are</span>
              <h2 className="h-xl mb-5">
                Locally owned.<br />
                Nurse-led.<br />
                Here for your family.
              </h2>
              <p className="body-lg mb-4">
                Beyond Care is privately owned and operated by{" "}
                <strong className="font-bold text-ink">Sarah Atkin, RN, BSN</strong> — a
                Registered Nurse with over {OWNER.yearsNursing} years of nursing experience
                who is personally involved in daily operations and home visits.
              </p>
              <p className="body-lg mb-8 text-muted">
                Two offices. Flexible scheduling. Real caregiver standards. This is not a
                franchise — it's a company that shows up because the owner does.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="btn-coral">Our Story</Link>
                <Link href="/why-choose-beyond-care" className="btn-outline">Why Choose Us</Link>
              </div>
            </div>

            {/* Sarah photo with badge */}
            <div className="relative reveal reveal-delay-2">
              <div className="rounded-img aspect-3-4 max-w-sm mx-auto lg:mx-0 overflow-hidden">
                <Image
                  src="/images/sarah-atkin-owner.jpg"
                  alt="Sarah Atkin, RN, BSN — Owner of Beyond Care Home Care Services"
                  width={400}
                  height={513}
                  className="img-cover"
                />
              </div>
              {/* Floating name badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3">
                <p className="text-sm font-bold text-ink">{OWNER.name}, {OWNER.credentials}</p>
                <p className="text-xs text-teal-brand font-semibold mt-0.5">{OWNER.title}</p>
                <p className="text-xs text-muted mt-0.5">{OWNER.yearsNursing} years in nursing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* ══════════════════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-canvas" aria-label="Home care services">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="eyebrow">Our services</span>
            <h2 className="h-xl mb-4">
              Everything your loved one<br className="hidden sm:block" /> needs at home.
            </h2>
            <p className="body-lg text-muted">
              From a few hours a week to 24/7 support — we build care plans around real
              life and adjust as needs change.
            </p>
          </div>

          <div className="grid-4">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={s.slug}
                className={`card group cursor-pointer reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <div className="svc-icon-wrap mb-4 group-hover:bg-teal-brand group-hover:text-white transition-all">
                  {(() => { const Icon = ICON_MAP[s.icon] ?? Heart; return <Icon size={20} />; })()}
                </div>
                <h3 className="h-sm mb-2 group-hover:text-teal-brand transition-colors">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                <span className="flex items-center gap-1 text-coral text-sm font-semibold">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="bg-teal-deep py-14" aria-label="Company statistics">
        <div className="wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { n: "20+",  l: "Years of nursing\nexperience"       },
              { n: "2",    l: "Community\noffices"                 },
              { n: "24/7", l: "On-call staff\navailability"        },
              { n: "100%", l: "Employee caregivers\nnot contractors"},
            ].map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <div className="stat-big">{s.n}</div>
                <p className="stat-label whitespace-pre-line">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAREGIVER STANDARDS
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-white" aria-label="Caregiver standards">
        <div className="wrap">
          <div className="grid-2">

            {/* Image */}
            <div className="order-2 lg:order-1 reveal">
              <div className="rounded-img aspect-4-3 overflow-hidden">
                <Image
                  src="/images/caregiver-standards.jpg"
                  alt="Beyond Care caregiver with a client in their home"
                  width={580} height={435}
                  className="img-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 reveal reveal-delay-1">
              <span className="eyebrow">Caregiver standards</span>
              <h2 className="h-xl mb-5">
                Every caregiver vetted,<br />trained, and accountable.
              </h2>
              <p className="body-lg mb-7">
                Trust is built through systems, not promises. Every caregiver we place is a
                full employee — screened, trained, bonded, and monitored — because
                accountability is our responsibility, not yours.
              </p>
              <ul className="space-y-3 mb-8">
                {TRUST_SIGNALS.map(s => (
                  <li key={s} className="check-item">
                    <div className="check-dot">
                      <CheckCircle size={11} className="text-teal-brand" />
                    </div>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/caregiver-standards" className="link-cta-teal">
                Our full caregiver standards <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* ══════════════════════════════════════════════════════
          HOW CARE WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-canvas" aria-label="How care works">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="eyebrow">Getting started</span>
            <h2 className="h-xl mb-4">Simpler than you might expect.</h2>
            <p className="body-lg text-muted">
              Most families don't know where to begin. We make the first step easy
              and the whole process clear.
            </p>
          </div>

          {/* Steps — stack on mobile, row on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.n} className={`reveal reveal-delay-${i + 1}`}>
                <div className="process-number mb-3">{step.n}</div>
                <h3 className="h-sm mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col xs:flex-row gap-3 mt-12 reveal">
            <Link href="/contact" className="btn-coral">
              Start with a Free Consultation
            </Link>
            <Link href="/how-care-works" className="btn-outline">
              See Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-white" aria-label="Client testimonials">
        <div className="wrap">
          <div className="mb-10 reveal">
            <span className="eyebrow">What families say</span>
            <h2 className="h-xl">What our clients<br />are saying.</h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`}
                itemScope itemType="https://schema.org/Review">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="text-gold fill-gold" fill="currentColor" />
                  ))}
                </div>
                <p className="testi-quote mb-5" itemProp="reviewBody">"{t.quote}"</p>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <p className="text-sm font-bold text-ink" itemProp="name">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VETERANS SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-navy" aria-label="Veterans home care benefits">
        <div className="wrap">
          <div className="grid-2">
            <div className="reveal">
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Veterans &amp; Families</span>
              <h2 className="h-xl text-white mb-5">
                VA benefits for<br />in-home care.
              </h2>
              <p className="body-lg mb-7" style={{ color: "rgba(255,255,255,0.65)" }}>
                Veterans and surviving spouses may qualify for VA Aid &amp; Attendance and
                Respite Care benefits to help cover the cost of non-medical home care.
                Beyond Care works with families to understand and access these benefits.
              </p>
              <ul className="space-y-3 mb-8">
                {["Aid & Attendance Allowance", "VA Respite Care Benefit", "VA Voucher Programs"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold"
                    style={{ color: "rgba(255,255,255,0.75)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,151,58,0.15)", border: "1px solid rgba(201,151,58,0.4)" }}>
                      <CheckCircle size={11} style={{ color: "var(--gold)" }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/payment-options/va-benefits"
                className="inline-flex items-center gap-2 text-sm font-bold pb-px border-b"
                style={{ color: "var(--gold)", borderColor: "rgba(201,151,58,0.5)" }}>
                Learn about VA benefits <ArrowRight size={14} />
              </Link>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="rounded-img aspect-4-3 overflow-hidden">
                <Image
                  src="/images/veterans-care.jpg"
                  alt="Veteran at home receiving care support"
                  width={580} height={435}
                  className="img-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PAYMENT OPTIONS
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-canvas" aria-label="Payment options">
        <div className="wrap">
          <div className="grid-2">
            <div className="reveal">
              <span className="eyebrow">Payment options</span>
              <h2 className="h-xl mb-5">
                Flexible ways<br />to pay for care.
              </h2>
              <p className="body-lg mb-7">
                We work with families using a wide range of payment and coverage options so
                that cost doesn't stand in the way of getting the right support.
              </p>
              <ul className="space-y-3 mb-8">
                {PAYMENT_OPTIONS.map(opt => (
                  <li key={opt.label}>
                    <Link href={opt.href}
                      className="flex items-center gap-3 text-base font-semibold text-body hover:text-teal-brand transition-colors">
                      <span className="w-2 h-2 rounded-full bg-teal-brand flex-shrink-0" />
                      {opt.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/payment-options" className="link-cta-teal">
                Explore all payment options <ArrowRight size={14} />
              </Link>
            </div>

            {/* Quick contact box */}
            <div className="reveal reveal-delay-1">
              <div className="bg-white rounded-2xl border p-8 lg:p-10" style={{ borderColor: "var(--rule)" }}>
                <h3 className="h-md mb-3">
                  Not sure what applies<br />to your family?
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Our team walks through the options with you — no pressure, no jargon.
                  Call either office or request a free consultation.
                </p>
                <Link href="/contact" className="block btn-coral text-center mb-4 w-full justify-center">
                  Request a Free Consultation
                </Link>
                {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
                  <a key={o.name} href={`tel:${o.phone.replace(/-/g,"")}`}
                    className="flex items-center justify-between py-3 border-t text-sm font-bold text-ink hover:text-teal-brand transition-colors"
                    style={{ borderColor: "var(--rule)" }}>
                    <span>{o.name}</span>
                    <span className="flex items-center gap-1.5">
                      <Phone size={13} />{o.phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LOCATIONS
      ══════════════════════════════════════════════════════ */}
      <section className="section-sm bg-white" aria-label="Service locations">
        <div className="wrap">
          <div className="text-center mb-10 reveal">
            <span className="eyebrow">Where we serve</span>
            <h2 className="h-xl">Two offices. One team.</h2>
            <p className="body-lg text-muted max-w-xl mx-auto mt-3">
              Beyond Care operates from Honea Path and Williamston to serve families
              across Upstate South Carolina.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[OFFICES.honeaPath, OFFICES.williamston].map((o, i) => (
              <div key={o.name} className={`card reveal reveal-delay-${i + 1}`}>
                <h3 className="h-sm mb-3">{o.name}</h3>
                <p className="text-sm text-muted mb-1">{o.full}</p>
                <a href={`tel:${o.phone.replace(/-/g,"")}`}
                  className="flex items-center gap-2 text-teal-brand font-bold text-sm mb-4 hover:text-teal-deep transition-colors">
                  <Phone size={13} />{o.phone}
                </a>
                <Link href={`/locations/${o.slug}`}
                  className="flex items-center gap-1.5 text-coral text-sm font-semibold hover:gap-3 transition-all">
                  Home care in {o.city} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 reveal">
            <Link href="/locations" className="link-cta-teal">
              View all service areas <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAREERS BAND
      ══════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ background: "var(--teal-pale)" }}
        aria-label="Careers at Beyond Care">
        <div className="wrap">
          <div className="grid-2">
            <div className="reveal">
              <span className="eyebrow">Join our team</span>
              <h2 className="h-xl mb-4">
                Are you a caregiver?<br />We're hiring.
              </h2>
              <p className="body-lg text-muted mb-6 max-w-md">
                Beyond Care is a growing employer in Upstate South Carolina offering
                competitive pay, real benefits, and meaningful work in your community.
                Weekly pay, health insurance, paid training, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/careers" className="btn-teal">
                  View Open Positions
                </Link>
                <a href={`tel:${PHONES.careers.replace(/-/g,"")}`}
                  className="btn-outline text-sm">
                  <Phone size={14} /> Call to Apply: {PHONES.careers}
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="rounded-img aspect-3-2 overflow-hidden">
                <Image
                  src="/images/careers-caregiver.jpg"
                  alt="Beyond Care caregiver — careers in home care in Upstate South Carolina"
                  width={580} height={387}
                  className="img-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
