"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "naslovnica", label: "Naslovnica", numeral: "I" },
  { id: "prica", label: "Priča", numeral: "II" },
  { id: "jelovnik", label: "Jelovnik", numeral: "III" },
  { id: "glasovi", label: "Glasovi gostiju", numeral: "IV" },
  { id: "mjesto", label: "Uvala i mjesto", numeral: "V" },
  { id: "posjet", label: "Posjet", numeral: "VI" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("naslovnica");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 md:px-8 md:py-6 pointer-events-none">
        <a
          href="#naslovnica"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("naslovnica");
          }}
          className="pointer-events-auto font-display text-xl md:text-2xl tracking-wide"
          style={{ color: "var(--foreground)" }}
        >
          Angela
          <span className="text-label ml-2 align-middle hidden sm:inline" style={{ color: "var(--terracotta)" }}>
            Herbarium
          </span>
        </a>

        <button
          aria-label="Otvori kazalo stranica"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto md:hidden leaf-paper flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm"
        >
          <span className="block h-px w-5" style={{ background: "var(--foreground)" }} />
          <span className="block h-px w-5" style={{ background: "var(--foreground)" }} />
          <span className="block h-px w-3.5 self-center" style={{ background: "var(--foreground)" }} />
        </button>
      </header>

      {/* Desktop: fixed archival tab rail along the right edge — folder tabs, not a navbar */}
      <nav
        aria-label="Kazalo poglavlja"
        className="hidden md:flex fixed right-0 top-1/2 z-40 -translate-y-1/2 flex-col items-end gap-2"
      >
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollToId(s.id)}
              className="group flex items-center gap-3 py-1.5 pl-4 pr-2 transition-all duration-300"
              style={{
                background: isActive ? "var(--card)" : "var(--muted)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                borderLeft: "1px solid var(--border)",
                transform: isActive ? "translateX(0)" : "translateX(46px)",
              }}
            >
              <span className="text-label whitespace-nowrap" style={{ color: isActive ? "var(--terracotta)" : "var(--muted-foreground)" }}>
                {s.numeral} · {s.label}
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: isActive ? "var(--terracotta)" : "var(--border)" }}
              />
            </button>
          );
        })}
      </nav>

      {/* Mobile fullscreen index-card nav — sibling of <header>, never nested inside it,
          so header's own stacking context can never clip this fixed overlay. */}
      <nav
        aria-label="Kazalo poglavlja"
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 px-8 transition-opacity duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--background)" }}
      >
        <div className="text-label mb-4" style={{ color: "var(--terracotta)" }}>
          Kazalo stranica
        </div>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setOpen(false);
              scrollToId(s.id);
            }}
            className="leaf-paper w-full max-w-xs px-6 py-3 text-center"
          >
            <span className="text-label block mb-1" style={{ color: "var(--terracotta)" }}>
              {s.numeral}
            </span>
            <span className="font-display text-xl" style={{ color: "var(--foreground)" }}>
              {s.label}
            </span>
          </button>
        ))}
        <a
          href="tel:+38523389254"
          className="mt-4 text-label"
          style={{ color: "var(--moss)" }}
        >
          +385 23 389 254
        </a>
        <button
          aria-label="Zatvori kazalo"
          onClick={() => setOpen(false)}
          className="mt-2 text-2xl leading-none"
          style={{ color: "var(--foreground)" }}
        >
          ✕
        </button>
      </nav>
    </>
  );
}
