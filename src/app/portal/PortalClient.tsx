"use client";

import { useState, useEffect } from "react";
import type { Resource } from "./page";

const PASSWORD = "beyondcare2026";
const AUTH_KEY = "beyondcare_portal_auth";

const TYPE_ICON: Record<string, string> = {
  svg:  "image",
  pdf:  "picture_as_pdf",
  doc:  "description",
  docx: "description",
  png:  "image",
  jpg:  "image",
  zip:  "folder_zip",
};

const TYPE_COLOR: Record<string, string> = {
  svg:  "bg-teal-50 text-teal-700",
  pdf:  "bg-red-50 text-red-600",
  doc:  "bg-blue-50 text-blue-700",
  docx: "bg-blue-50 text-blue-700",
  png:  "bg-purple-50 text-purple-700",
  jpg:  "bg-purple-50 text-purple-700",
  zip:  "bg-gray-100 text-gray-600",
};

function msIcon(name: string, className = "") {
  return (
    <span className={`material-symbols-outlined ${className}`} style={{ fontFamily: "Material Symbols Outlined" }}>
      {name}
    </span>
  );
}

export default function PortalClient({ initialResources }: { initialResources: Resource[] }) {
  const [authed, setAuthed]         = useState(false);
  const [pwInput, setPwInput]       = useState("");
  const [pwError, setPwError]       = useState(false);
  const [resources, setResources]   = useState<Resource[]>(initialResources);
  const [activeTab, setActiveTab]   = useState("All");
  const [modal, setModal]           = useState<Resource | null>(null);

  // Check localStorage auth
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(AUTH_KEY) === "true") {
      setAuthed(true);
    }
  }, []);

  // Refresh manifest client-side for latest deploy
  useEffect(() => {
    if (!authed) return;
    fetch("/portal/manifest.json?t=" + Date.now())
      .then(r => r.json())
      .then(data => setResources(data.resources))
      .catch(() => {});
  }, [authed]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (pwInput === PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setPwInput("");
  }

  // Password gate
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--canvas)" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: "var(--teal-pale)" }}>
              {msIcon("lock", "text-2xl")}
            </div>
            <h1 className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>Client Portal</h1>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Beyond Care — Assets & Resources</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-card p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--body)" }}>
                Password
              </label>
              <input
                type="password"
                value={pwInput}
                onChange={e => { setPwInput(e.target.value); setPwError(false); }}
                placeholder="Enter portal password"
                className="w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: pwError ? "var(--coral)" : "var(--rule)",
                  color: "var(--ink)",
                }}
                autoFocus
              />
              {pwError && (
                <p className="text-xs mt-1.5 font-medium" style={{ color: "var(--coral)" }}>
                  Incorrect password. Try again.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--teal-deep)" }}
            >
              Enter Portal
            </button>
          </form>

          <p className="text-center text-xs mt-6" style={{ color: "var(--muted)" }}>
            Need access? Contact your project manager.
          </p>
        </div>
      </div>
    );
  }

  // Derive categories
  const categories = ["All", ...Array.from(new Set(resources.map(r => r.category)))];
  const filtered = activeTab === "All" ? resources : resources.filter(r => r.category === activeTab);
  const newCount = resources.filter(r => r.isNew).length;

  return (
    <>
      {/* Header */}
      <div style={{ background: "var(--teal-deep)" }}>
        <div className="max-w-site mx-auto px-6 py-5 flex items-center justify-between" style={{ maxWidth: "var(--wrap)" }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "var(--teal-light)" }}>
              Beyond Care
            </p>
            <h1 className="text-xl font-extrabold text-white leading-none">Client Portal</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
            style={{ color: "var(--teal-light)", border: "1px solid rgba(75,191,204,0.3)" }}
          >
            {msIcon("logout", "text-sm")}
            Sign out
          </button>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-10" style={{ maxWidth: "var(--wrap)" }}>

        {/* Stats bar */}
        <div className="flex items-center gap-6 mb-8">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            <span className="font-bold text-lg" style={{ color: "var(--ink)" }}>{resources.length}</span> assets
          </p>
          {newCount > 0 && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--teal-pale)", color: "var(--teal-deep)" }}>
              {newCount} new this week
            </span>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
              style={
                activeTab === cat
                  ? { background: "var(--teal-deep)", color: "#fff" }
                  : { background: "var(--rule)", color: "var(--muted)" }
              }
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  {resources.filter(r => r.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20" style={{ color: "var(--muted)" }}>
            No assets in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(resource => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onVersionClick={() => setModal(resource)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Version history modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lift"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--teal-brand)" }}>
                  Version History
                </p>
                <h3 className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>{modal.name}</h3>
              </div>
              <button onClick={() => setModal(null)} style={{ color: "var(--muted)" }}>
                {msIcon("close")}
              </button>
            </div>

            <div className="space-y-3">
              {[...modal.versions].reverse().map(v => (
                <div
                  key={v.v}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: v.current ? "var(--teal-pale)" : "var(--canvas)" }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={
                        v.current
                          ? { background: "var(--teal-deep)", color: "#fff" }
                          : { background: "var(--rule)", color: "var(--muted)" }
                      }
                    >
                      {v.v}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{v.note}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{v.date}</p>
                  </div>
                  {v.current && (
                    <span className="text-xs font-semibold flex-shrink-0" style={{ color: "var(--teal-brand)" }}>Current</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ResourceCard({ resource, onVersionClick }: { resource: Resource; onVersionClick: () => void }) {
  const icon  = TYPE_ICON[resource.type]  ?? "draft";
  const color = TYPE_COLOR[resource.type] ?? "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white rounded-2xl shadow-card p-5 flex flex-col gap-4 hover:shadow-lift transition-shadow">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
          {msIcon(icon, "text-xl")}
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {resource.isNew && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "var(--teal-pale)", color: "var(--teal-deep)" }}>
              New
            </span>
          )}
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--rule)", color: "var(--muted)" }}>
            {resource.version}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="font-bold text-sm leading-snug" style={{ color: "var(--ink)" }}>{resource.name}</p>
        {resource.description && (
          <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--muted)" }}>{resource.description}</p>
        )}
        <p className="text-xs mt-1 font-semibold uppercase tracking-wide" style={{ color: "var(--teal-brand)" }}>
          {resource.category}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-1 border-t" style={{ borderColor: "var(--rule)" }}>
        <a
          href={`/portal/assets/${resource.filename}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-opacity hover:opacity-80"
          style={{ background: "var(--teal-pale)", color: "var(--teal-deep)" }}
        >
          {msIcon("open_in_new", "text-sm")}
          Preview
        </a>
        <a
          href={`/portal/assets/${resource.filename}`}
          download={resource.filename}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-80"
          style={{ background: "var(--teal-deep)" }}
        >
          {msIcon("download", "text-sm")}
          Download
        </a>
        <button
          onClick={onVersionClick}
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors hover:opacity-80"
          style={{ background: "var(--rule)", color: "var(--muted)" }}
          title="Version history"
        >
          {msIcon("history", "text-sm")}
        </button>
      </div>
    </div>
  );
}
