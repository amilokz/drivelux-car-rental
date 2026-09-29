export interface Car {
  id: string;
  name: string;
  monogram: string;
  dailyRate: number; // PKR per day
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid";
  tag?: string;
  /** gradient classes for the card art panel */
  art: string;
  /** accent text color for the monogram */
  accent: string;
}

export const WHATSAPP_NUMBER = "923001234567";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CARS: Car[] = [
  {
    id: "corolla",
    name: "Toyota Corolla",
    monogram: "TC",
    dailyRate: 6500,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    tag: "Most Popular",
    art: "from-sky-950 via-slate-900 to-black",
    accent: "text-sky-300",
  },
  {
    id: "civic",
    name: "Honda Civic",
    monogram: "HC",
    dailyRate: 8500,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    art: "from-rose-950 via-zinc-900 to-black",
    accent: "text-rose-300",
  },
  {
    id: "sportage",
    name: "Kia Sportage",
    monogram: "KS",
    dailyRate: 12000,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    tag: "Family Pick",
    art: "from-emerald-950 via-zinc-900 to-black",
    accent: "text-emerald-300",
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    monogram: "TF",
    dailyRate: 18000,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    art: "from-stone-900 via-zinc-900 to-black",
    accent: "text-stone-300",
  },
  {
    id: "audi-a4",
    name: "Audi A4",
    monogram: "A4",
    dailyRate: 25000,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    tag: "Executive",
    art: "from-violet-950 via-zinc-900 to-black",
    accent: "text-violet-300",
  },
  {
    id: "bmw-3",
    name: "BMW 3 Series",
    monogram: "B3",
    dailyRate: 28000,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    art: "from-cyan-950 via-zinc-900 to-black",
    accent: "text-cyan-300",
  },
  {
    id: "c-class",
    name: "Mercedes C-Class",
    monogram: "MC",
    dailyRate: 30000,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    tag: "Luxury",
    art: "from-indigo-950 via-zinc-900 to-black",
    accent: "text-indigo-300",
  },
  {
    id: "land-cruiser",
    name: "Land Cruiser ZX",
    monogram: "ZX",
    dailyRate: 45000,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    tag: "Flagship",
    art: "from-amber-950 via-zinc-900 to-black",
    accent: "text-amber-300",
  },
];

export function formatPKR(n: number): string {
  return "Rs " + Math.round(n).toLocaleString("en-US");
}
