"use client";

import { useState } from "react";

const LINKS = [
  { href: "#destinations", label: "Направления" },
  { href: "#services", label: "Услуги" },
  { href: "#packages", label: "Туры" },
  { href: "#about", label: "О нас" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-xl tracking-wide text-cream">
          MIRA<span className="text-gold">LUX</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/80 transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:+998712098677" className="text-sm text-cream/80 hover:text-gold">
            +998 71 209‑86‑77
          </a>
          <a
            href="https://instagram.com/miraluxtravelagency"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/60 px-5 py-2 text-sm text-cream transition hover:bg-gold hover:text-ink"
          >
            Написать нам
          </a>
        </div>

        <button
          className="text-cream lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-ink px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-cream/85"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+998712098677" className="text-base text-gold">
              +998 71 209‑86‑77
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
