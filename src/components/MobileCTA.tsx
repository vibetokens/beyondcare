"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// Sticky bottom bar — only visible on mobile, only after scrolling past the hero
export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
      aria-hidden={!visible}
    >
      {/* Safe area padding for iPhone home bar */}
      <div className="w-full flex gap-0" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        <a
          href="tel:8648412500"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm"
          style={{ background: "#0a4a52", color: "#fff" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.57 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call Now
        </a>
        <Link
          href="/schedule-consultation"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm"
          style={{ background: "#D94F5C", color: "#fff" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Free Consultation
        </Link>
      </div>
    </div>
  );
}
