import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Care Locations in Upstate South Carolina | Beyond Care",
  description:
    "Beyond Care operates from two offices in Upstate South Carolina — Honea Path and Williamston — serving Anderson, Greenville, Abbeville, Pickens, and Greenwood counties.",
}

const OFFICES = [
  {
    name: "Honea Path Office (Main)",
    address: "512A East Greer St",
    city: "Honea Path, SC 29654",
    phone: "(864) 841-2500",
    tel: "8648412500",
    href: "/locations/honea-path",
  },
  {
    name: "Williamston Office",
    address: "103 Belton Dr",
    city: "Williamston, SC 29697",
    phone: "(864) 369-0222",
    tel: "8643690222",
    href: "/locations/williamston",
  },
]

const COUNTIES = [
  { name: "Anderson County", href: "/locations/anderson-county", cities: "Honea Path, Williamston, Anderson, Belton, Iva" },
  { name: "Greenville County", href: "/locations/greenville-county", cities: "Greenville, Simpsonville, Mauldin, Greer" },
  { name: "Abbeville County", href: "/locations/abbeville-county", cities: "Abbeville, Donalds, Due West" },
  { name: "Pickens County", href: "/locations/pickens-county", cities: "Pickens, Easley, Liberty, Clemson" },
  { name: "Greenwood County", href: "/locations/greenwood-county", cities: "Greenwood, Ninety Six" },
]

export default function LocationsPage() {
  return (
    <>
              <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">Locations</span>
            <h1>Home Care Services Across Upstate South Carolina</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              Beyond Care is rooted in Upstate South Carolina — with two office locations and a service area that
              spans multiple counties across the region. We are not a distant brand. We are here, we know this
              community, and we are personally invested in the families we serve.
            </p>
          </div>
        </section>

        {/* Offices */}
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Our Offices</span>
            <h2>Two Convenient Locations</h2>
            <div className="grid-2" style={{ marginTop: 40 }}>
              {OFFICES.map(o => (
                <div key={o.name} className="location-card">
                  <h4>{o.name}</h4>
                  <address style={{ marginBottom: 16 }}>
                    {o.address}<br />
                    {o.city}<br /><br />
                    <a href={`tel:${o.tel}`}>{o.phone}</a>
                  </address>
                  <p style={{ fontSize: ".875rem", marginBottom: 4 }}>
                    <strong>Hours:</strong> Mon–Fri, 8:00 AM – 4:00 PM
                  </p>
                  <p style={{ fontSize: ".875rem", marginBottom: 16 }}>
                    <strong>After Hours:</strong> Urgent calls forwarded to on-call staff
                  </p>
                  <a href={o.href} style={{ fontSize: ".875rem", fontWeight: 700, color: "var(--teal)" }}>
                    View Location Details →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="section section-alt">
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
              <span className="eyebrow">Where We Serve</span>
              <h2>Counties We Cover</h2>
              <p style={{ marginTop: 12 }}>
                Not sure if we cover your specific area? Call us at{" "}
                <a href="tel:8648412500" style={{ color: "var(--teal)", fontWeight: 700 }}>(864) 841-2500</a>{" "}
                and we will confirm.
              </p>
            </div>
            <div className="grid-3" style={{ gap: 20 }}>
              {COUNTIES.map(c => (
                <div key={c.name} className="card" style={{ textAlign: "center" }}>
                  <h4 style={{ color: "var(--teal)", marginBottom: 8 }}>{c.name}</h4>
                  <p style={{ fontSize: ".875rem", marginBottom: 14 }}>Including {c.cities} and surrounding communities</p>
                  <a href={c.href} style={{ fontSize: ".8125rem", fontWeight: 700, color: "var(--teal)" }}>
                    View Location Page →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="wrap">
            <h2>Serving Families Close to Home</h2>
            <p>Contact us today to find out if we serve your area and to request a free consultation.</p>
            <div className="cta-actions">
              <a href="/schedule-consultation" className="btn btn-w">Request a Free Consultation</a>
            </div>
            <div className="cta-phone">
              <span>📞</span>
              <a href="tel:8648412500" style={{ color: "rgba(255,255,255,.9)" }}>(864) 841-2500</a>
            </div>
          </div>
        </section>

    </>
  )
}
