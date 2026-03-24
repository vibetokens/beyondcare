"use client";
import Script from "next/script";

export default function CareersApplyForm() {
  return (
    <div style={{ width: "100%", minHeight: 600 }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/kwXDU0PTp8KBjTh0VBJh"
        style={{ width: "100%", height: 600, border: "none", overflow: "hidden" }}
        scrolling="no"
        id="kwXDU0PTp8KBjTh0VBJh"
        title="Caregiver Application"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
