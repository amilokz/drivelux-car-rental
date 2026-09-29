import { Phone, MessageCircle, MapPin, Zap, Clock } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/cars";

const LOCATIONS = [
  { city: "Islamabad", addr: "Blue Area, Jinnah Avenue" },
  { city: "Rawalpindi", addr: "Saddar, Haider Road" },
  { city: "Lahore", addr: "Gulberg III, Main Boulevard" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get your <span className="text-luxe">keys</span> today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Call, WhatsApp, or walk into any of our offices. Average response
            time: under 5 minutes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* contact cards */}
          <div className="flex flex-col gap-6">
            <a
              href="tel:+923001234567"
              className="card-glow flex items-center gap-5 rounded-2xl bg-[#0e0e12] p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-400/30">
                <Phone className="h-6 w-6 text-amber-400" />
              </span>
              <span>
                <span className="block text-sm text-zinc-500">Call us</span>
                <span className="font-display text-2xl font-bold text-white">
                  0300 1234567
                </span>
              </span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow flex items-center gap-5 rounded-2xl bg-[#0e0e12] p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-400/30">
                <MessageCircle className="h-6 w-6 text-emerald-400" />
              </span>
              <span>
                <span className="block text-sm text-zinc-500">WhatsApp</span>
                <span className="font-display text-2xl font-bold text-white">
                  Chat instantly
                </span>
              </span>
            </a>
            <div className="card-glow flex items-center gap-5 rounded-2xl bg-[#0e0e12] p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-400/30">
                <Clock className="h-6 w-6 text-amber-400" />
              </span>
              <span>
                <span className="block text-sm text-zinc-500">Hours</span>
                <span className="font-display text-2xl font-bold text-white">
                  Open 24/7
                </span>
              </span>
            </div>
          </div>

          {/* locations */}
          <div className="card-glow rounded-2xl bg-[#0e0e12] p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white">
              Our locations
            </h3>
            <div className="mt-5 space-y-4">
              {LOCATIONS.map((l) => (
                <div
                  key={l.city}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  <div>
                    <div className="font-semibold text-white">{l.city}</div>
                    <div className="text-sm text-zinc-500">{l.addr}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-500">
              Airport delivery available at Islamabad International (ISB) and
              Allama Iqbal International (LHE) — free with bookings of 3+ days.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400">
              <Zap className="h-4 w-4 text-black" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold text-white">
              Drive<span className="text-amber-400">Lux</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#fleet" className="transition-colors hover:text-amber-300">
              Fleet
            </a>
            <a href="#pricing" className="transition-colors hover:text-amber-300">
              Pricing
            </a>
            <a href="#contact" className="transition-colors hover:text-amber-300">
              Contact
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            © 2026 DriveLux Car Rental · Demo website — fictional business
          </p>
        </div>
      </footer>
    </section>
  );
}
