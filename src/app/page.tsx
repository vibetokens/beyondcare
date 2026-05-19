import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { PHONES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "We'll be right back | Beyond Care Home Care Services",
  description:
    "Beyond Care is making a few updates to our website. Our caregivers and nurses are still here. Call 864-369-0222 or email satkin@beyondcarehc.com.",
  alternates: { canonical: SITE.domain },
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <main className="bg-[var(--canvas)]">
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--teal-pale)] px-4 py-1.5 text-sm font-semibold tracking-wide text-[var(--teal-brand)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--coral)]" aria-hidden="true" />
            Site updates in progress
          </span>

          <h1 className="mt-6 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.1] text-[var(--ink)]">
            We&rsquo;ll be right back.
          </h1>

          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed text-[var(--body)]">
            We&rsquo;re making a few updates to our website. Our caregivers and
            nurses are still here, still showing up, and still doing what we do
            best &mdash; caring for the people you love.
          </p>

          <p className="mx-auto mt-4 max-w-[560px] text-base leading-relaxed text-[var(--muted)]">
            If you need us in the meantime, we&rsquo;d love to hear from you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PHONES.honeaPathHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--coral)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[var(--coral-dark)]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {PHONES.honeaPath}
            </a>
            <a
              href="mailto:satkin@beyondcarehc.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--teal-brand)] bg-white px-6 py-3.5 text-base font-semibold text-[var(--teal-brand)] transition hover:bg-[var(--teal-pale)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Sarah
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-[520px] grid-cols-1 gap-4 rounded-xl border border-[var(--rule)] bg-white p-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Honea Path Office
              </p>
              <a
                href={PHONES.honeaPathHref}
                className="mt-1 inline-block font-serif text-xl font-bold text-[var(--teal-deep)] hover:text-[var(--teal-brand)]"
              >
                {PHONES.honeaPath}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Williamston Office
              </p>
              <a
                href={PHONES.williamstonHref}
                className="mt-1 inline-block font-serif text-xl font-bold text-[var(--teal-deep)] hover:text-[var(--teal-brand)]"
              >
                {PHONES.williamston}
              </a>
            </div>
          </div>

          <p className="mt-10 text-sm text-[var(--muted)]">
            Thank you for your patience &mdash; we&rsquo;ll see you back here
            very soon.
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--teal-deep)]">
            Sarah Atkin, RN, BSN
          </p>

          <div className="mt-10 border-t border-[var(--rule)] pt-6">
            <p className="text-sm text-[var(--muted)]">
              Looking for something specific? You can still explore our{" "}
              <Link href="/services" className="font-semibold text-[var(--teal-brand)] underline-offset-2 hover:underline">
                services
              </Link>
              ,{" "}
              <Link href="/locations" className="font-semibold text-[var(--teal-brand)] underline-offset-2 hover:underline">
                locations
              </Link>
              , or{" "}
              <Link href="/contact" className="font-semibold text-[var(--teal-brand)] underline-offset-2 hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
