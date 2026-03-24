import Link from "next/link";
import { PHONES, SERVICES } from "@/lib/constants";

const P = "#00343e";
const MUTED = "#40484b";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-5 py-24 text-center">
      <span
        className="font-serif block mb-4 select-none leading-none"
        style={{ fontSize: "clamp(5rem, 20vw, 12rem)", color: "rgba(0,52,62,0.06)" }}
      >
        404
      </span>

      <h1
        className="font-serif tracking-tight mb-4"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", color: P, marginTop: "-2rem" }}
      >
        Page Not Found
      </h1>
      <p className="font-light mb-10 max-w-md" style={{ color: MUTED, fontSize: "1.0625rem", lineHeight: 1.7 }}>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let us help you find what you need.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-16">
        <Link
          href="/"
          className="px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
          style={{ background: P, color: "#fff" }}
        >
          Go Home
        </Link>
        <a
          href={PHONES.primaryHref}
          className="px-7 py-3.5 rounded-xl font-bold text-sm border transition-all"
          style={{ borderColor: P, color: P }}
        >
          Call {PHONES.primary}
        </a>
      </div>

      <div className="w-full max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(0,52,62,0.4)" }}>
          Popular Pages
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Our Services",           href: "/services"               },
            { label: "How Care Works",         href: "/how-care-works"         },
            { label: "Payment Options",        href: "/payment-options"        },
            { label: "Locations We Serve",     href: "/locations"              },
            { label: "Free Consultation",      href: "/schedule-consultation"  },
            { label: "Contact Us",             href: "/contact"                },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-xl text-sm font-semibold border transition-all hover:opacity-70"
              style={{ borderColor: "rgba(0,52,62,0.12)", color: P }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
