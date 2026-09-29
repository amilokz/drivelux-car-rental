import { Info } from "lucide-react";
import { formatPKR } from "@/data/cars";

const EXAMPLES = [
  { car: "Toyota Corolla", base: 6500 },
  { car: "Honda Civic", base: 8500 },
  { car: "Mercedes C-Class", base: 30000 },
];

export default function PricingNote() {
  return (
    <section id="pricing" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.08] via-[#0e0e12] to-[#0e0e12] p-8 sm:p-12">
          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 ring-1 ring-amber-400/40 sm:flex">
              <Info className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Simple, honest <span className="text-luxe">pricing</span>
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
                All rates are per 24-hour day and include basic insurance and
                250&nbsp;km mileage. Need a driver? Add a professional,
                background-verified driver to any booking for just{" "}
                <span className="font-semibold text-amber-300">+30%</span> of
                the daily rate — fuel and driver meals included.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {EXAMPLES.map((e) => (
              <div
                key={e.car}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <div className="text-sm font-medium text-zinc-300">{e.car}</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-xl font-bold text-white">
                    {formatPKR(e.base)}
                  </span>
                  <span className="text-xs text-zinc-500">self-drive</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-xl font-bold text-amber-400">
                    {formatPKR(e.base * 1.3)}
                  </span>
                  <span className="text-xs text-zinc-500">with driver</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-zinc-600">
            Extra mileage at Rs 40/km · Security deposit (refundable) Rs 25,000
            for self-drive · CNIC + driving licence required at pickup.
          </p>
        </div>
      </div>
    </section>
  );
}
