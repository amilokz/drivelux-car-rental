"use client";

import { useEffect, useMemo, useState } from "react";
import { X, CalendarDays, MessageCircle, UserCheck } from "lucide-react";
import { CARS, WHATSAPP_NUMBER, formatPKR, type Car } from "@/data/cars";

interface Props {
  car: Car | null;
  onPick: (car: Car) => void;
  onClose: () => void;
}

const DAY_MS = 86_400_000;

function prettyDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BookingModal({ car, onPick, onClose }: Props) {
  const [pickup, setPickup] = useState("");
  const [ret, setRet] = useState("");
  const [driver, setDriver] = useState(false);

  // lock body scroll + close on Escape (only while the modal is open)
  useEffect(() => {
    if (!car) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [car, onClose]);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const days = useMemo(() => {
    if (!pickup || !ret) return 0;
    const diff = new Date(ret).getTime() - new Date(pickup).getTime();
    return diff < 0 ? 0 : Math.max(1, Math.ceil(diff / DAY_MS));
  }, [pickup, ret]);

  const total = useMemo(() => {
    if (!car || days === 0) return 0;
    return days * car.dailyRate * (driver ? 1.3 : 1);
  }, [car, days, driver]);

  const valid = car !== null && days > 0;

  const waLink = useMemo(() => {
    if (!valid || !car) return "#";
    const lines = [
      "Assalam-o-Alaikum DriveLux! I would like to book a car:",
      "",
      `Car: ${car.name}`,
      `Pickup: ${prettyDate(pickup)}`,
      `Return: ${prettyDate(ret)}`,
      `Rental days: ${days}`,
      `With driver: ${driver ? "Yes (+30%)" : "No (self-drive)"}`,
      `Estimated total: ${formatPKR(total)}`,
      "",
      "Please confirm availability. Thank you!",
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [valid, car, pickup, ret, days, driver, total]);

  if (!car) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a car"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-t-3xl border border-white/10 bg-[#101014] shadow-[0_0_80px_rgba(245,158,11,0.15)] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-amber-400/15 to-transparent px-6 py-5">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Book your ride
            </h3>
            <p className="text-sm text-zinc-500">
              Instant quote — confirm on WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] space-y-5 overflow-y-auto px-6 py-6">
          {/* car picker */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Select car
            </label>
            <select
              value={car.id}
              onChange={(e) => {
                const next = CARS.find((c) => c.id === e.target.value);
                if (next) onPick(next);
              }}
              className="w-full rounded-xl border border-white/10 bg-[#0a0a0d] px-4 py-3 text-white outline-none transition-colors focus:border-amber-400/60"
            >
              {CARS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} — {formatPKR(c.dailyRate)}/day
                </option>
              ))}
            </select>
          </div>

          {/* dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-zinc-300">
                <CalendarDays className="h-4 w-4 text-amber-400" />
                Pickup
              </label>
              <input
                type="date"
                min={today}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0a0a0d] px-4 py-3 text-white outline-none transition-colors focus:border-amber-400/60"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-zinc-300">
                <CalendarDays className="h-4 w-4 text-amber-400" />
                Return
              </label>
              <input
                type="date"
                min={pickup || today}
                value={ret}
                onChange={(e) => setRet(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0a0a0d] px-4 py-3 text-white outline-none transition-colors focus:border-amber-400/60"
              />
            </div>
          </div>

          {/* driver toggle */}
          <button
            onClick={() => setDriver((v) => !v)}
            className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${
              driver
                ? "border-amber-400/60 bg-amber-400/10"
                : "border-white/10 bg-white/[0.02] hover:border-white/25"
            }`}
          >
            <span className="flex items-center gap-3">
              <UserCheck className="h-5 w-5 text-amber-400" />
              <span>
                <span className="block text-sm font-semibold text-white">
                  Add professional driver
                </span>
                <span className="block text-xs text-zinc-500">
                  +30% of daily rate
                </span>
              </span>
            </span>
            <span
              className={`relative h-6 w-11 rounded-full transition-colors ${
                driver ? "bg-amber-400" : "bg-zinc-700"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
                  driver ? "left-[22px]" : "left-0.5"
                }`}
              />
            </span>
          </button>

          {/* live quote */}
          <div className="rounded-xl border border-amber-400/25 bg-amber-400/[0.06] px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">
                {formatPKR(car.dailyRate)} × {days} day{days === 1 ? "" : "s"}
                {driver ? " × 1.3 (driver)" : ""}
              </span>
              <span className="text-zinc-500">
                {days > 0 ? `${days} day${days === 1 ? "" : "s"}` : "—"}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-300">
                Estimated total
              </span>
              <span className="font-display text-3xl font-bold text-amber-400">
                {total > 0 ? formatPKR(total) : "—"}
              </span>
            </div>
            {!valid && (
              <p className="mt-2 text-xs text-zinc-500">
                Select pickup and return dates to see your quote.
              </p>
            )}
          </div>
        </div>

        {/* footer */}
        <div className="border-t border-white/10 px-6 py-5">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!valid) e.preventDefault();
            }}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold transition-all ${
              valid
                ? "bg-amber-400 text-black shadow-[0_0_32px_rgba(245,158,11,0.4)] hover:bg-amber-300"
                : "cursor-not-allowed bg-zinc-800 text-zinc-500"
            }`}
          >
            <MessageCircle className="h-5 w-5" />
            Confirm via WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-zinc-600">
            No advance needed online — pay at pickup. Free cancellation up to 12
            hours before.
          </p>
        </div>
      </div>
    </div>
  );
}
