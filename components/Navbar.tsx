"use client";

import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Fleet", href: "#fleet" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08080a]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.5)]">
            <Zap className="h-5 w-5 text-black" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Drive<span className="text-amber-400">Lux</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-300"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onBook}
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(245,158,11,0.4)] transition-all hover:bg-amber-300 hover:shadow-[0_0_32px_rgba(245,158,11,0.6)]"
          >
            Book Now
          </button>
        </div>

        <button
          className="rounded-lg p-2 text-zinc-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-white/10 bg-[#08080a]/95 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-amber-300"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="mt-3 rounded-full bg-amber-400 px-5 py-3 text-base font-semibold text-black"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
