import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Booked a Fortuner for a family trip to Naran. Car arrived spotless at 6am sharp, and the driver knew every stop on the way. Flawless experience.",
    name: "Ahmed Raza",
    meta: "Islamabad · Toyota Fortuner · 5 days",
  },
  {
    quote:
      "I needed a Civic for a week of client meetings in Lahore. Online quote matched the final bill to the rupee — no hidden charges at all. Highly recommended.",
    name: "Fatima Khan",
    meta: "Lahore · Honda Civic · 7 days",
  },
  {
    quote:
      "Their 24/7 support is real. Got a flat near Gujar Khan at midnight and their team reached me in 40 minutes with a replacement tyre. These guys care.",
    name: "Bilal Sheikh",
    meta: "Rawalpindi · Kia Sportage · 3 days",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Testimonials
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Renters <span className="text-luxe">love us</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="card-glow flex flex-col rounded-2xl bg-[#0e0e12] p-7"
            >
              <Quote className="h-8 w-8 text-amber-400/40" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="font-display font-semibold text-white">
                  {t.name}
                </div>
                <div className="mt-0.5 text-xs text-zinc-500">{t.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
