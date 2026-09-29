"use client";

import { MessageCircle, ArrowRight, Star, MapPin } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/cars";

const STATS = [
  { value: "40+", label: "Cars in fleet" },
  { value: "3", label: "Cities served" },
  { value: "4.9", label: "Average rating" },
  { value: "24/7", label: "On-road support" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* cinematic video backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          src="/hero.mp4"
          poster="/car-land-cruiser.webp"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/75 to-[#08080a]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/70" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Islamabad · Rawalpindi · Lahore
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Drive <span className="text-luxe">Luxury</span>,
            <br />
            Pay Daily.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Pakistan&apos;s premium car rental — from dependable daily drivers
            to chauffeur-driven flagships. Immaculate cars, transparent daily
            rates, and keys in your hand within the hour.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-black shadow-[0_0_36px_rgba(245,158,11,0.45)] transition-all hover:bg-amber-300 hover:shadow-[0_0_48px_rgba(245,158,11,0.65)]"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <a
              href="#fleet"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-amber-400/50 hover:text-amber-300"
            >
              Explore Fleet
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm text-zinc-400">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            Trusted by 2,000+ happy renters across Pakistan
          </div>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="card-glow rounded-2xl bg-white/[0.03] p-5 text-center backdrop-blur"
            >
              <div className="font-display text-3xl font-bold text-amber-400">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
