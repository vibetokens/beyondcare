import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Phone, CheckCircle, Shield, Award,
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
  GraduationCap, ShieldCheck,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
};

import {
  PHONES, OFFICES, AWARDS, SERVICES, PROCESS_STEPS,
  TRUST_SIGNALS, TESTIMONIALS, OWNER, SITE, LOCAL_BUSINESS_SCHEMA,
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
  "mainEntity": [
    { "@type": "Question", "name": "What services does Beyond Care provide?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care provides non-medical in-home support including personal care, companion care, respite care, meal preparation, transportation, medication reminders, light housekeeping, mobility assistance, hospital discharge support, and 24-hour home care." } },
    { "@type": "Question", "name": "Where does Beyond Care serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care serves families throughout Upstate South Carolina, including Honea Path, Williamston, and Anderson, Greenville, Abbeville, Pickens, and Greenwood Counties." } },
    { "@type": "Question", "name": "Who owns Beyond Care?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care is owned and operated by Sarah Atkin, RN, BSN, a Registered Nurse with over 20 years of nursing experience who is personally involved in daily operations and home visits." } },
    { "@type": "Question", "name": "How much does home care from Beyond Care cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Beyond Care accepts private pay, long-term care insurance, Community Long Term Care (CLTC), Medicaid Waiver, VA benefits, and vouchers. Contact them at 864-841-2500 for a free consultation." } },
    { "@type": "Question", "name": "Are Beyond Care caregivers employees or contractors?",
      "acceptedAnswer": { "@type": "Answer", "text": "All Beyond Care caregivers are employees, not independent contractors. They are bonded, insured, covered by workers' compensation, CPR certified, and required to complete ongoing skills training." } },
  ],
};

// Editorial process steps with Stitch naming style
const EDITORIAL_STEPS = [
  { n: "01", label: "The Consultation", body: "A confidential conversation — by phone or in person — to understand your situation and care goals." },
  { n: "02", label: "The Appraisal",    body: "Our nurse-led team conducts a thorough in-home assessment of medical, environmental, and personal needs." },
  { n: "03", label: "The Plan",         body: "A fully customized care schedule designed around your loved one's real daily life and health objectives." },
  { n: "04", label: "The Match",        body: "Meticulous pairing with a vetted caregiver whose skills and temperament align with your family." },
  { n: "05", label: "The Transition",   body: "Seamless care begins with 24/7 nurse oversight and continuous family communication." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ══════════════════════════════════════════════════════
          HERO — image + text
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden bg-teal-deep"
        style={{ minHeight: "clamp(500px, 85vh, 760px)" }}
        aria-label="Homepage hero"
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-home.jpg"
            alt="Caregiver helping an elderly woman in her South Carolina home"
            fill priority quality={88}
            className="object-cover object-center"
          />
          <div className="hero-scrim-left absolute inset-0 hidden sm:block" />
          <div className="hero-scrim-bottom absolute inset-0 sm:hidden" />
        </div>

        {/* Content */}
        <div
          className="relative z-10 wrap flex items-end pb-10 sm:pb-14 lg:pb-20"
          style={{ minHeight: "clamp(500px, 85vh, 760px)" }}
        >
          <div className="max-w-xl py-16 sm:py-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm
              text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              Premium Home Care · Upstate South Carolina
            </div>

            <h1
              className="text-white font-extrabold mb-5"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)", lineHeight: "1.04", letterSpacing: "-0.03em" }}
            >
              Care that feels<br />
              <em className="not-italic" style={{ color: "var(--teal-light)" }}>like home.</em>
            </h1>

            <p
              className="mb-8 max-w-md"
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: "1.7" }}
            >
              Personalized support blending nurse-led excellence with the warmth
              of a loved one&apos;s presence — in Honea Path, Williamston, and throughout Upstate SC.
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

        {/* Floating office pills */}
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
          SERVICES — editorial 4-col grid
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-white" aria-label="Home care services">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="eyebrow">Our services</span>
            <h2 className="h-serif-display mb-5">The Premium Standard<br className="hidden sm:block" /> of Home Care</h2>
            <p className="body-lg text-muted">
              From daily assistance to specialized clinical support, every service is delivered
              with uncompromising empathy and nurse-led oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {SERVICES.map((s, i) => {
              const Icon = ICON_MAP[s.icon] ?? Heart;
              return (
                <Link
                  key={s.slug}
                  href={s.slug}
                  className={`group flex flex-col items-start gap-4 reveal reveal-delay-${Math.min(i + 1, 5)}`}
                >
                  <Icon size={28} className="text-teal-brand font-light group-hover:text-teal-mid transition-colors" />
                  <h3 className="text-lg font-bold text-ink tracking-tight group-hover:text-teal-brand transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">{s.desc}</p>
                  <span className="flex items-center gap-1 text-coral text-sm font-semibold mt-auto">
                    Learn more <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-14 reveal">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAREGIVER VETTING — "A Curation of Exceptional Humans"
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-canvas overflow-hidden" aria-label="Caregiver standards">
        <div className="wrap">
          <div className="grid-2">

            {/* Image */}
            <div className="relative group reveal">
              <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full blur-3xl"
                style={{ background: "rgba(10,74,82,0.05)" }} />
              <div className="rounded-img aspect-4-3 overflow-hidden relative z-10">
                <Image
                  src="/images/caregiver-standards.jpg"
                  alt="Beyond Care caregiver providing support to a client"
                  width={580} height={435}
                  className="img-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 p-7 glass-card rounded-2xl shadow-2xl z-20 hidden lg:block border border-white/60 max-w-xs">
                <p className="font-bold text-ink text-lg mb-1 tracking-tight">Elite Vetting Process</p>
                <p className="text-muted text-sm font-light">Only the most qualified caregivers represent Beyond Care.</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-8 reveal reveal-delay-1">
              <div className="space-y-5">
                <span className="eyebrow">Caregiver standards</span>
                <h2 className="h-serif-xl">A Curation of<br />Exceptional Humans</h2>
                <p className="body-lg text-muted">
                  We select our caregivers with the same precision you use to curate your life.
                  Every Beyond Care professional is a reflection of our commitment to excellence,
                  empathy, and clinical integrity.
                </p>
              </div>

              <ul className="space-y-8">
                {[
                  { icon: CheckCircle, label: "Rigorously Authenticated", body: "Multi-point background checks, reference verification, and behavioral alignment analysis." },
                  { icon: GraduationCap, label: "Advanced Clinical Training", body: "Continuous education in the latest geriatric care protocols and specialized conditions." },
                  { icon: ShieldCheck, label: "Fully Bonded & Insured", body: "Every caregiver is an employee — bonded, insured, and workers' comp covered." },
                ].map(({ icon: Icon, label, body }) => (
                  <li key={label} className="flex items-start gap-5">
                    <Icon size={22} className="text-teal-brand mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-ink text-base tracking-tight mb-1">{label}</h4>
                      <p className="text-muted text-sm font-light leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="/caregiver-standards" className="link-cta-teal self-start">
                Our full caregiver standards <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIAL — large serif blockquote
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-40" aria-label="Client testimonial">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="block text-3xl text-muted/30 mb-8 select-none font-serif">&ldquo;</span>
          <blockquote
            className="font-serif italic font-light text-ink mb-12 leading-[1.45]"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            {TESTIMONIALS[0].quote}
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-px mb-8" style={{ background: "var(--rule)" }} />
            <cite className="not-italic">
              <span className="block font-bold text-ink text-lg tracking-tight mb-1">{TESTIMONIALS[0].name}</span>
              <span className="block text-muted tracking-widest uppercase text-xs font-bold">{TESTIMONIALS[0].city}</span>
            </cite>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESS — editorial numbered steps
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "#f0f9fa" }} aria-label="How care works">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 reveal">
            <div className="max-w-2xl">
              <span className="eyebrow">Getting started</span>
              <h2 className="h-serif-display mb-4">The Path to<br className="hidden sm:block" /> Personalized Support</h2>
              <p className="body-lg text-muted">
                A curated journey toward bespoke in-home care, refined across five deliberate stages.
              </p>
            </div>
            <Link href="/how-care-works" className="btn-outline flex-shrink-0">
              Full Process <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
            {EDITORIAL_STEPS.map((step, i) => (
              <div key={step.n} className={`editorial-step reveal reveal-delay-${i + 1}`}>
                <span className="font-serif text-6xl md:text-8xl block mb-2 md:mb-4"
                  style={{ color: "rgba(10,74,82,0.08)", lineHeight: 1 }}>
                  {step.n}
                </span>
                <h4 className="font-serif italic text-xl md:text-2xl text-ink mb-3 md:mb-4">{step.label}</h4>
                <p className="text-muted text-sm md:text-base font-light leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 reveal">
            <Link href="/contact" className="btn-coral">
              Start with a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VETERANS — dark section with glass cards
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-navy" aria-label="Veterans home care benefits">
        <div className="wrap">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="md:w-1/2 space-y-6 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
                Honoring Service
              </div>
              <h2 className="h-serif-xl text-white">The Veteran&apos;s<br />Legacy Benefit</h2>
              <p className="body-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                Navigating VA Aid &amp; Attendance requires expert guidance. We help veterans and
                surviving spouses access the dignified care they earned — without the paperwork burden.
              </p>
              <Link href="/payment-options/va-benefits" className="btn-teal inline-flex">
                Check Eligibility <ArrowRight size={15} />
              </Link>
            </div>

            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 reveal reveal-delay-1">
              {[
                { title: "Financial Strategy", body: "Strategic allocation of VA resources to significantly reduce out-of-pocket care costs." },
                { title: "Concierge Filing",   body: "Expert, white-glove management of the complex VA application and filing process." },
                { title: "Aid & Attendance",   body: "Dedicated guidance on the VA benefit most applicable to in-home care situations." },
                { title: "Respite Coverage",   body: "Access VA Respite Care benefits to provide planned relief for family caregivers." },
              ].map(card => (
                <div key={card.title}
                  className="p-7 rounded-2xl border backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <h4 className="font-bold text-white text-base mb-2 tracking-tight">{card.title}</h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — consultation form
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-white relative overflow-hidden" aria-label="Request a consultation">
        {/* Subtle bg glow */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full blur-[150px]"
            style={{ background: "var(--teal-deep)" }} />
        </div>

        <div className="wrap relative z-10">
          <div className="text-center mb-14 reveal">
            <span className="eyebrow">Begin your journey</span>
            <h2 className="h-serif-display mb-5">Begin Your Journey<br className="hidden sm:block" /> to Better Care</h2>
            <p className="body-lg text-muted max-w-2xl mx-auto">
              Schedule a free in-home consultation. No obligations — just an honest conversation
              about what your family needs and how we can help.
            </p>
          </div>

          <div className="max-w-2xl mx-auto reveal reveal-delay-1">
            <div className="bg-canvas rounded-3xl p-8 md:p-14 shadow-2xl border" style={{ borderColor: "var(--rule)" }}>
              <div className="mb-10 pb-8 border-b" style={{ borderColor: "var(--rule)" }}>
                <h3 className="h-serif-lg text-ink mb-2">Request a Private Consultation</h3>
                <p className="text-muted text-sm">Our care coordinator will reach out within 24 hours.</p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="/contact" method="GET">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-ink/60 uppercase tracking-widest block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-white border rounded-xl p-4 text-ink placeholder:text-muted/50 font-light focus:outline-none focus:ring-2"
                    style={{ borderColor: "var(--rule)", fontSize: "0.9375rem" }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-ink/60 uppercase tracking-widest block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(864) 000-0000"
                    className="w-full bg-white border rounded-xl p-4 text-ink placeholder:text-muted/50 font-light focus:outline-none focus:ring-2"
                    style={{ borderColor: "var(--rule)", fontSize: "0.9375rem" }}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-ink/60 uppercase tracking-widest block">Your Primary Concern</label>
                  <textarea
                    rows={4}
                    placeholder="Share your unique care requirements..."
                    className="w-full bg-white border rounded-xl p-4 text-ink placeholder:text-muted/50 font-light focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: "var(--rule)", fontSize: "0.9375rem" }}
                  />
                </div>
                <div className="md:col-span-2">
                  <Link href="/contact"
                    className="block w-full btn-coral justify-center text-center py-5 text-base rounded-xl">
                    Request Consultation
                  </Link>
                </div>
              </form>
            </div>

            {/* Office quick links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
                <a key={o.name} href={`tel:${o.phone.replace(/-/g,"")}`}
                  className="flex-1 flex items-center justify-between px-5 py-3.5 rounded-xl border bg-white hover:border-teal-brand transition-colors"
                  style={{ borderColor: "var(--rule)" }}>
                  <div>
                    <div className="text-xs font-bold text-muted uppercase tracking-wider">{o.name}</div>
                    <div className="text-sm font-bold text-ink mt-0.5">{o.phone}</div>
                  </div>
                  <Phone size={15} className="text-teal-brand" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
