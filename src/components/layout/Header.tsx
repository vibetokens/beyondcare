"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { MEGA_NAV, PHONES, OFFICES } from "@/lib/constants";
import clsx from "clsx";

export default function Header() {
  const [scrolled,       setScrolled]      = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeMenu,     setActiveMenu]     = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMenu  = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 300);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const activeItem = MEGA_NAV.find(n => n.label === activeMenu);

  return (
    <>
      {/* ── Top utility bar ── */}
      <div className="hidden lg:block bg-teal-deep">
        <div className="wrap flex items-center justify-between py-2">
          <p className="text-xs text-white/60 font-medium">
            Serving Upstate South Carolina &nbsp;·&nbsp; Mon–Fri 8am–4pm &nbsp;·&nbsp; After-hours on-call available
          </p>
          <div className="flex items-center gap-5">
            {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
              <a key={o.name} href={`tel:${o.phone.replace(/-/g,"")}`}
                className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors font-medium">
                <Phone size={11} />
                <span>{o.city}: {o.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header ref={headerRef} className={clsx("site-header", scrolled && "scrolled")}>
        <div className="wrap flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/beyond-care-logo.png"
              alt="Beyond Care Home Care Services"
              width={220}
              height={211}
              className="h-14 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* ── Desktop mega nav ── */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={closeMenu}
          >
            {MEGA_NAV.map(item => (
              <div
                key={item.label}
                onMouseEnter={() => openMenu(item.label)}
              >
                {item.groups ? (
                  <button
                    className={clsx(
                      "flex items-center gap-1 px-4 py-2.5 rounded-lg text-[0.9375rem] font-semibold transition-colors duration-150",
                      activeMenu === item.label
                        ? "bg-teal-pale text-teal-brand"
                        : "text-body hover:bg-teal-pale hover:text-teal-brand"
                    )}
                    aria-expanded={activeMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown size={13} className={clsx(
                      "transition-transform duration-200",
                      activeMenu === item.label && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2.5 rounded-lg text-[0.9375rem] font-semibold text-body hover:bg-teal-pale hover:text-teal-brand transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a href={PHONES.primaryHref}
              className="hidden lg:flex items-center gap-1.5 text-[0.9375rem] font-bold text-ink hover:text-teal-brand transition-colors">
              <Phone size={15} strokeWidth={2.5} />
              {PHONES.primary}
            </a>
            <Link href="/care-quiz"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[0.9375rem] font-semibold border transition-colors"
              style={{ borderColor: "var(--teal-brand)", color: "var(--teal-brand)" }}>
              Care Finder
            </Link>
            <Link href="/contact"
              className="hidden lg:inline-flex btn-coral text-[0.9375rem]">
              Free Consultation
            </Link>
            <a href={PHONES.primaryHref}
              className="lg:hidden flex items-center gap-1 text-sm font-bold text-teal-brand">
              <Phone size={16} strokeWidth={2.5} />
              <span className="xs:inline hidden">{PHONES.primary}</span>
            </a>
            <button
              className="lg:hidden p-2 rounded-lg text-ink hover:bg-teal-pale transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mega nav dropdown panel ── */}
        {activeMenu && activeItem?.groups && (
          <div
            className="mega-nav-panel"
            onMouseEnter={cancelClose}
            onMouseLeave={closeMenu}
          >
            <div className="wrap">
              <div
                className="mega-nav-inner py-8"
                style={{
                  gridTemplateColumns: `repeat(${activeItem.groups.length}, 1fr)`,
                }}
              >
                {activeItem.groups.map(group => (
                  <div key={group.heading}>
                    <p className="mega-group-heading">{group.heading}</p>
                    <ul className="space-y-0.5">
                      {group.links.map(link => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="mega-link"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="mega-link-label">{link.label}</span>
                            <span className="mega-link-desc">{link.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile full-screen drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto"
          style={{ top: 0 }}>
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-20 border-b border-rule flex-shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/images/beyond-care-logo.png" alt="Beyond Care" width={220} height={211} className="h-14 w-auto" />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg text-ink" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          {/* Drawer body */}
          <div className="flex-1 px-5 py-4 overflow-y-auto">
            {MEGA_NAV.map(item => (
              <div key={item.label} className="mobile-nav-section">
                {item.groups ? (
                  <>
                    <button
                      onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-2.5 text-base font-bold text-ink"
                    >
                      {item.label}
                      <ChevronDown size={16} className={clsx(
                        "transition-transform duration-200 text-muted",
                        expandedMobile === item.label && "rotate-180"
                      )} />
                    </button>
                    {expandedMobile === item.label && (
                      <div className="pb-3 space-y-4">
                        {item.groups.map(group => (
                          <div key={group.heading}>
                            <p className="mobile-nav-section-title">{group.heading}</p>
                            <ul className="space-y-0.5">
                              {group.links.map(link => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="mobile-nav-link pl-2"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2.5 text-base font-bold text-ink"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Drawer footer */}
          <div className="flex-shrink-0 px-5 py-5 border-t border-rule bg-canvas space-y-3">
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="block btn-coral text-center w-full justify-center text-base py-3.5">
              Schedule a Free Consultation
            </Link>
            <div className="grid grid-cols-2 gap-3">
              {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
                <a key={o.name} href={`tel:${o.phone.replace(/-/g,"")}`}
                  className="flex items-center gap-2 bg-white border border-rule rounded-xl px-4 py-3 text-sm font-semibold text-ink">
                  <Phone size={14} className="text-teal-brand flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-muted">{o.city}</div>
                    <div>{o.phone}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
