import type { Metadata } from "next"
import Link from "next/link"
import {
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
} from "lucide-react"
import type { LucideProps } from "lucide-react"
import { SERVICES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Home Care Services | Beyond Care Home Care Services",
  description:
    "Beyond Care provides personal care, companion care, respite care, meal preparation, housekeeping, transportation, medication reminders, and more across Upstate South Carolina.",
}

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Heart, Users, RefreshCcw, UtensilsCrossed, Car, Bell,
  Home, Activity, MoveHorizontal, Pill, Clock, Moon,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Our Services</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Non-Medical Home Care in South Carolina
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              We provide a broad range of home care services, customized around each client&apos;s real daily needs.
              Whether your loved one needs a few hours of help each week or consistent daily support, we can
              build a care plan that fits.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 24 }}>
            {SERVICES.map(s => {
              const Icon = ICON_MAP[s.icon]
              return (
                <div key={s.slug} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div className="svc-icon-wrap" style={{ flexShrink: 0 }}>
                    {Icon && <Icon size={22} strokeWidth={1.75} />}
                  </div>
                  <div>
                    <h3 className="h-sm text-ink mb-2">{s.title}</h3>
                    <p className="text-muted mb-4" style={{ lineHeight: 1.75 }}>{s.desc}</p>
                    <Link href={s.slug} className="link-cta-teal">Learn More</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Need help choosing */}
      <section className="section bg-teal-pale">
        <div className="wrap">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Not Sure What You Need?</span>
            <h2 className="h-lg mt-2 mb-4">We Will Help You Figure It Out</h2>
            <p className="body-lg text-muted mb-6">
              Call us or request a free consultation — we will help identify the right services for your loved
              one based on their specific situation and goals.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
              <a href="tel:8648412500" className="btn-outline">(864) 841-2500</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
