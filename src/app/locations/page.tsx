import type { Metadata } from "next"
import Link from "next/link"
import { OFFICES, LOCATION_PAGES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Home Care Locations in Upstate South Carolina | Beyond Care",
  description:
    "Beyond Care operates from two offices in Upstate South Carolina — Honea Path and Williamston — serving Anderson, Greenville, Abbeville, Pickens, and Greenwood counties.",
}

const COUNTIES = [
  { name: "Anderson County",  href: "/locations/anderson-county",   cities: "Honea Path, Williamston, Anderson, Belton, Iva" },
  { name: "Greenville County",href: "/locations/greenville-county", cities: "Greenville, Simpsonville, Mauldin, Greer" },
  { name: "Abbeville County", href: "/locations/abbeville-county",  cities: "Abbeville, Donalds, Due West" },
  { name: "Pickens County",   href: "/locations/pickens-county",    cities: "Pickens, Easley, Liberty, Clemson" },
  { name: "Greenwood County", href: "/locations/greenwood-county",  cities: "Greenwood, Ninety Six" },
]

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Locations</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Home Care Across Upstate South Carolina
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Beyond Care is rooted in Upstate SC — with two offices and a service area that spans multiple
              counties. We are not a distant brand. We live here, we know this community, and we are personally
              invested in every family we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Our Offices</span>
            <h2 className="h-lg mt-2">Two Convenient Locations</h2>
          </div>
          <div className="grid-2" style={{ gap: 24 }}>
            {[
              {
                name: OFFICES.honeaPath.name + " (Main)",
                address: OFFICES.honeaPath.address,
                cityLine: `${OFFICES.honeaPath.city}, ${OFFICES.honeaPath.state} ${OFFICES.honeaPath.zip}`,
                phone: "(864) 841-2500",
                phoneHref: OFFICES.honeaPath.phoneHref,
                href: `/locations/${OFFICES.honeaPath.slug}`,
              },
              {
                name: OFFICES.williamston.name,
                address: OFFICES.williamston.address,
                cityLine: `${OFFICES.williamston.city}, ${OFFICES.williamston.state} ${OFFICES.williamston.zip}`,
                phone: "(864) 369-0222",
                phoneHref: OFFICES.williamston.phoneHref,
                href: `/locations/${OFFICES.williamston.slug}`,
              },
            ].map(o => (
              <div key={o.name} className="card">
                <h3 className="h-sm text-teal-brand mb-3">{o.name}</h3>
                <address style={{ fontStyle: "normal", marginBottom: 12, lineHeight: 1.65 }}>
                  <span className="text-muted">{o.address}<br />{o.cityLine}</span>
                </address>
                <a href={o.phoneHref} className="text-teal-brand font-bold" style={{ fontSize: "1.0625rem", display: "block", marginBottom: 12 }}>{o.phone}</a>
                <p className="text-muted" style={{ fontSize: ".875rem", marginBottom: 4 }}>
                  <strong>Hours:</strong> Mon–Fri, 8:00 AM – 4:00 PM
                </p>
                <p className="text-muted" style={{ fontSize: ".875rem", marginBottom: 16 }}>
                  <strong>After Hours:</strong> Urgent calls forwarded to on-call staff
                </p>
                <Link href={o.href} className="link-cta-teal">View Location Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Where We Serve</span>
            <h2 className="h-lg mt-2">Counties We Cover</h2>
            <p className="body-lg text-muted mt-3">
              Not sure if we cover your specific area? Call us at{" "}
              <a href="tel:8648412500" className="text-teal-brand font-bold">(864) 841-2500</a>{" "}
              and we will confirm.
            </p>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {COUNTIES.map(c => (
              <div key={c.name} className="card text-center">
                <h3 className="h-sm text-teal-brand mb-2">{c.name}</h3>
                <p className="text-muted mb-4" style={{ fontSize: ".875rem" }}>
                  Including {c.cities} and surrounding communities
                </p>
                <Link href={c.href} className="link-cta-teal">View Location Page</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All location links */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-8">
            <span className="eyebrow">All Service Areas</span>
            <h2 className="h-lg mt-2">Browse by Location</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {LOCATION_PAGES.map(loc => (
              <Link
                key={loc.href}
                href={loc.href}
                className="btn-outline"
                style={{ fontSize: ".875rem" }}
              >
                {loc.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
