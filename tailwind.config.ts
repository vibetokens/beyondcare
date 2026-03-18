import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:    "#0a2d32",
        body:   "#2a4a4e",
        muted:  "#5a7a7e",
        rule:   "#ddeef0",
        canvas: "#f5f9f9",
      },

      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },

      fontSize: {
        "7xl":  ["5rem",    { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "6xl":  ["4rem",    { lineHeight: "1.08", letterSpacing: "-0.02em"  }],
        "5xl":  ["3.25rem", { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "4xl":  ["2.5rem",  { lineHeight: "1.15", letterSpacing: "-0.01em"  }],
        "3xl":  ["2rem",    { lineHeight: "1.2",  letterSpacing: "-0.005em" }],
        "2xl":  ["1.5rem",  { lineHeight: "1.3"  }],
        "xl":   ["1.25rem", { lineHeight: "1.4"  }],
        "lg":   ["1.125rem",{ lineHeight: "1.6"  }],
        "base": ["1rem",    { lineHeight: "1.7"  }],
        "sm":   ["0.875rem",{ lineHeight: "1.6"  }],
        "xs":   ["0.75rem", { lineHeight: "1.5"  }],
      },

      spacing: {
        section:      "7rem",
        "section-sm": "4.5rem",
        "section-xs": "3rem",
      },

      maxWidth: {
        site:  "1200px",
        prose: "680px",
        tight: "520px",
      },

      borderRadius: {
        sm:      "4px",
        DEFAULT: "8px",
        md:      "12px",
        lg:      "20px",
        full:    "9999px",
      },

      boxShadow: {
        subtle: "0 1px 4px rgba(0,0,0,0.06)",
        card:   "0 2px 12px rgba(0,0,0,0.07)",
        lift:   "0 8px 32px rgba(0,0,0,0.10)",
      },

      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },

      animation: {
        "fade-up":   "fade-up 0.6s ease-out forwards",
        "fade-up-1": "fade-up 0.6s 0.1s ease-out forwards",
        "fade-up-2": "fade-up 0.6s 0.2s ease-out forwards",
        "fade-up-3": "fade-up 0.6s 0.35s ease-out forwards",
        "fade-in":   "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
