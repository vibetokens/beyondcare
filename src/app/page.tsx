import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Down for maintenance",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: "2rem",
        background: "#ffffff",
        color: "#111111",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Down for maintenance
        </h1>
        <p
          style={{
            marginTop: "1rem",
            marginBottom: 0,
            fontSize: "1rem",
            color: "#666666",
          }}
        >
          We&rsquo;ll be back shortly.
        </p>
      </div>
    </main>
  );
}
