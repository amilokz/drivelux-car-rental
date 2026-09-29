"use client";

import Image from "next/image";
import { Users, Cog, Fuel, ArrowUpRight } from "lucide-react";
import { CARS, formatPKR, type Car } from "@/data/cars";

export default function Fleet({ onBook }: { onBook: (car: Car) => void }) {
  return (
    <section id="fleet" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Our Fleet
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pick your <span className="text-luxe">ride</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Every car is deep-cleaned, fully serviced and inspected before each
            trip. Transparent daily rates — no hidden charges, ever.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARS.map((car) => (
            <article
              key={car.id}
              className="card-glow group flex flex-col overflow-hidden rounded-2xl bg-[#0e0e12]"
            >
              {/* art panel */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={car.image}
                  alt={`${car.name} — DriveLux rental car`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                {car.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
                    {car.tag}
                  </span>
                )}
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {car.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-amber-400/80" />
                    {car.seats} seats
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Cog className="h-4 w-4 text-amber-400/80" />
                    {car.transmission}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Fuel className="h-4 w-4 text-amber-400/80" />
                    {car.fuel}
                  </span>
                </div>
                <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="font-display text-2xl font-bold text-white">
                      {formatPKR(car.dailyRate)}
                    </div>
                    <div className="text-xs text-zinc-500">per day</div>
                  </div>
                </div>
                <button
                  onClick={() => onBook(car)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition-all hover:bg-amber-400 hover:text-black hover:ring-amber-400"
                >
                  Book This Car
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
