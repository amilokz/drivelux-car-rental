import { ShieldCheck, KeyRound, Plane, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Well-Maintained Fleet",
    text: "Every car is serviced, detailed and safety-inspected before each rental. You get showroom condition, every time.",
  },
  {
    icon: KeyRound,
    title: "With or Without Driver",
    text: "Prefer to drive yourself? Go ahead. Want to relax? Add a professional, verified driver to any booking.",
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    text: "Landing at Islamabad International? Your car will be waiting at arrivals — day or night, on the dot.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    text: "Flat tyre at 2am on the Motorway? One call and our on-road team is rolling. We never leave you stranded.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-amber-500/[0.06] blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Why DriveLux
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Rental, <span className="text-luxe">perfected</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-glow rounded-2xl bg-[#0e0e12] p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 ring-1 ring-amber-400/30">
                <f.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
