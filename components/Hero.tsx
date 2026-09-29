"use client";

import { MessageCircle, ArrowRight, Star, MapPin } from "lucide-react";
import CarSilhouette from "./CarSilhouette";
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
      {/* backdrop */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <MapPin className="h-3.5 w-3.5" />
              Islamabad · Rawalpindi · Lahore
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Drive <span className="text-luxe">Luxury</span>,
              <br />
              Pay Daily.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
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
            <div className="mt-10 flex items-center gap-2 text-sm text-zinc-500">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              Trusted by 2,000+ happy renters across Pakistan
            </div>
          </div>

          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="animate-float">
              <CarSilhouette className="w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.8)]" />
            </div>
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
