"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import BookingModal from "@/components/BookingModal";
import WhyUs from "@/components/WhyUs";
import PricingNote from "@/components/PricingNote";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { CARS, type Car } from "@/data/cars";

export default function Home() {
  const [activeCar, setActiveCar] = useState<Car | null>(null);

  return (
    <main className="relative">
      <Navbar onBook={() => setActiveCar(CARS[0])} />
      <Hero />
      <Fleet onBook={setActiveCar} />
      <WhyUs />
      <PricingNote />
      <Testimonials />
      <Contact />
      <BookingModal
        car={activeCar}
        onPick={setActiveCar}
        onClose={() => setActiveCar(null)}
      />
    </main>
  );
}
