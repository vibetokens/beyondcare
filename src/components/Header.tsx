"use client"
import { useState } from "react"
import Image from "next/image"

const NAV = [
  { label: "Services", href: "/services" },
  { label: "How Care Works", href: "/how-care-works" },
  { label: "About Us", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Payment Options", href: "/payment-options" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header id="site-header">
        <div className="wrap header-inner">
          <a href="/" className="header-logo" aria-label="Beyond Care Home">
            <Image src="/images/logo.png" alt="Beyond Care Home Care Services" width={160} height={48} priority style={{ height: 48, width: "auto" }} />
          </a>

          <nav className="header-nav" aria-label="Main navigation">
            {NAV.map(n => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>

          <div className="header-cta">
            <a href="tel:8648412500" className="header-phone">(864) 841-2500</a>
            <a href="/schedule-consultation" className="btn btn-p" style={{ padding: "10px 20px", fontSize: ".875rem" }}>
              Free Consultation
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: "block", width: 24, height: 2, background: "var(--t1)", borderRadius: 2 }} />
            ))}
          </button>
        </div>
      </header>

      <nav id="mobile-nav" className={open ? "open" : ""} aria-label="Mobile navigation">
        <a href="tel:8648412500" style={{ color: "var(--teal)", fontWeight: 700 }}>(864) 841-2500</a>
        {NAV.map(n => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <div style={{ marginTop: 20 }}>
          <a href="/schedule-consultation" className="btn btn-p" style={{ width: "100%", justifyContent: "center" }}>
            Free Consultation
          </a>
        </div>
      </nav>
    </>
  )
}
