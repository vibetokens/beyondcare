"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Lightweight PostHog loader — only initialises if NEXT_PUBLIC_POSTHOG_KEY is set.
// No cookie banner required (PostHog can run in cookieless mode).
export default function PostHogProvider() {
  const key  = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  const pathname     = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!key) return;

    // Dynamically load PostHog so it never blocks the main bundle
    import("posthog-js").then(({ default: posthog }) => {
      if (!posthog.__loaded) {
        posthog.init(key, {
          api_host:          host,
          capture_pageview:  false, // we handle it manually below
          persistence:       "memory", // cookieless — GDPR-friendly
          autocapture:       true,
        });
      }

      const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
      posthog.capture("$pageview", { $current_url: url });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return null;
}
