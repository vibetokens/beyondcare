"use client";
import { useState } from "react";

type Item = { q: string; a: string };
type Category = { label: string; items: Item[] };

export default function FaqAccordion({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-10">
      {categories.map(cat => (
        <div key={cat.label}>
          <p className="eyebrow mb-4">{cat.label}</p>
          <div style={{ border: "1px solid var(--rule)", borderRadius: 12, overflow: "hidden" }}>
            {cat.items.map(({ q, a }, i) => {
              const isOpen = open === `${cat.label}-${i}`;
              return (
                <div key={q} style={{ borderBottom: i < cat.items.length - 1 ? "1px solid var(--rule)" : "none" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : `${cat.label}-${i}`)}
                    className="w-full flex items-start justify-between gap-4 text-left px-5 py-4 transition-colors hover:bg-teal-pale"
                    style={{ background: isOpen ? "var(--teal-pale)" : "#fff" }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base" style={{ color: "var(--ink)", lineHeight: 1.5 }}>{q}</span>
                    <span
                      className="material-symbols-outlined flex-shrink-0 mt-0.5 transition-transform duration-200"
                      style={{ fontSize: 20, color: "var(--teal-brand)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1" style={{ background: "var(--teal-pale)" }}>
                      <p className="text-muted" style={{ lineHeight: 1.8, fontSize: ".9375rem" }}>{a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
