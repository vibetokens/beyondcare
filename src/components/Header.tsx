"use client"
import { useState } from "react"
import Image from "next/image"

const NAV = [
  { label: "About",            href: "/about" },
  { label: "Services",         href: "/services" },
  { label: "Locations",        href: "/locations" },
  { label: "Payment",          href: "/payment-options" },
  { label: "Careers",          href: "/careers" },
  { label: "Contact",          href: "/contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header id="site-header">
        <div className="wrap header-inner">
          <a href="/" className="header-logo" aria-label="Beyond Care Home">
            <Image
              src="/images/logo.png"
              alt="Beyond Care Home Care Services"
              width={160} height={50}
              priority
              style={{ height: 50, width: "auto" }}
            />
          </a>

          <nav className="header-nav" aria-label="Main navigation">
            {NAV.map(n => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>

          <a
            href="/schedule-consultation"
            className="btn btn-r"
            style={{ padding: "11px 24px", fontSize: ".875rem", borderRadius: 6 }}
          >
            Free Consultation
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 8, display: "flex", flexDirection: "column", gap: 5,
            }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: "block", width: 24, height: 2, background: "var(--t1)", borderRadius: 2 }} />
            ))}
          </button>
        </div>
      </header>

      <nav id="mobile-nav" className={open ? "open" : ""} aria-label="Mobile navigation">
        <a href="tel:8648412500" style={{ color: "var(--teal-mid)", fontWeight: 700 }}>(864) 841-2500</a>
        {NAV.map(n => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <div className="mobile-cta">
          <a href="/schedule-consultation" className="btn btn-r" style={{ width: "100%", justifyContent: "center" }} onClick={() => setOpen(false)}>
            Free Consultation
          </a>
        </div>
      </nav>
    </>
  )
}
