import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import {
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { SERVICES, PHONES, SITE } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
};

export async function generateStaticParams() {
  // De-duplicate slugs (Medication Reminders & Management share a slug)
  const seen = new Set<string>();
  return SERVICES.filter(s => {
    const key = s.slug.replace("/services/", "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map(s => ({ slug: s.slug.replace("/services/", "") }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === `/services/${slug}`);
  if (!service) return {};
  return {
    title: `${service.title} | Beyond Care Home Care Services`,
    description: service.desc,
    alternates: { canonical: `${SITE.domain}/services/${slug}` },
    openGraph: {
      title: `${service.title} | Beyond Care Home Care Services`,
      description: service.desc,
      url: `${SITE.domain}/services/${slug}`,
    },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === `/services/${slug}`);
  if (!service) notFound();

  const Icon = ICON_MAP[service.icon] ?? Heart;

  // Other services to show at bottom (exclude current)
  const related = SERVICES.filter(
    s => s.slug !== service.slug && s.slug !== "/services/medication-reminders" || s.title === "Medication Reminders"
  ).filter(s => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-sm bg-teal-deep" aria-label={`${service.title} service`}>
        <div className="wrap">
          <div className="max-w-2xl">
            <Link href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6"
              style={{ color: "var(--teal-light)" }}>
              ← All Services
            </Link>

            <div className="svc-icon-wrap mb-5"
              style={{ background: "rgba(75,191,204,0.15)", color: "var(--teal-light)", width: 56, height: 56, borderRadius: 14 }}>
              <Icon size={26} />
            </div>

            <h1 className="text-white font-extrabold mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              {service.title}
            </h1>

            {"tagline" in service && (
              <p className="text-lg font-semibold mb-3" style={{ color: "var(--teal-light)" }}>
                {(service as typeof service & { tagline: string }).tagline}
              </p>
            )}

            <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              {service.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2">

            {/* Benefits */}
            <div className="reveal">
              <span className="eyebrow">What's included</span>
              <h2 className="h-lg mb-6">How we help with {service.title.toLowerCase()}.</h2>

              {"benefits" in service && (
                <ul className="space-y-4 mb-8">
                  {(service as typeof service & { benefits: string[] }).benefits.map(b => (
                    <li key={b} className="check-item">
                      <div className="check-dot">
                        <CheckCircle size={11} className="text-teal-brand" />
                      </div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-coral">
                  Request a Free Consultation
                </Link>
                <a href={PHONES.primaryHref} className="btn-outline">
                  <Phone size={14} /> Call Us
                </a>
              </div>
            </div>

            {/* Who it's for + CTA box */}
            <div className="space-y-6 reveal reveal-delay-1">

              {"whoFor" in service && (
                <div className="card" style={{ background: "var(--teal-pale)", border: "none" }}>
                  <span className="eyebrow">Who this is for</span>
                  <p className="body-lg">
                    {(service as typeof service & { whoFor: string }).whoFor}
                  </p>
                </div>
              )}

              <div className="card">
                <h3 className="h-sm mb-2">Questions about this service?</h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  Our team will walk you through exactly how {service.title.toLowerCase()} works,
                  what to expect, and whether it's the right fit — no pressure.
                </p>
                <Link href="/contact"
                  className="block btn-coral text-center w-full justify-center mb-3">
                  Schedule a Free Consultation
                </Link>
                <a href={PHONES.primaryHref}
                  className="flex items-center justify-center gap-2 text-sm font-bold text-teal-brand hover:text-teal-deep transition-colors">
                  <Phone size={13} /> {PHONES.primary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other services ── */}
      {related.length > 0 && (
        <section className="section-sm bg-canvas">
          <div className="wrap">
            <div className="mb-8 reveal">
              <span className="eyebrow">More services</span>
              <h2 className="h-md">Other ways Beyond Care can help.</h2>
            </div>
            <div className="grid-4">
              {related.map((s, i) => {
                const RelIcon = ICON_MAP[s.icon] ?? Heart;
                return (
                  <Link key={s.slug} href={s.slug}
                    className={`card group cursor-pointer reveal reveal-delay-${i + 1}`}>
                    <div className="svc-icon-wrap mb-3 group-hover:bg-teal-brand group-hover:text-white transition-all">
                      <RelIcon size={18} />
                    </div>
                    <h3 className="h-sm mb-1 group-hover:text-teal-brand transition-colors">{s.title}</h3>
                    <p className="text-xs text-muted leading-relaxed mb-3">{s.desc}</p>
                    <span className="flex items-center gap-1 text-coral text-xs font-semibold">
                      Learn more <ArrowRight size={11} />
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 reveal">
              <Link href="/services" className="link-cta-teal">
                View all services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
