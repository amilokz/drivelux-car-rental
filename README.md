# DriveLux — Premium Car Rental (Demo Website)

A polished demo website for **DriveLux**, a fictional premium car rental company
operating in Islamabad, Rawalpindi and Lahore, Pakistan. Built as a portfolio
demo for AKCLNT — sleek dark-luxury design, fully responsive, no backend.

> **Note:** DriveLux is a fictional business created for demonstration purposes.
> Phone numbers, prices, testimonials and addresses are placeholders.

## Tech

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- **lucide-react** for icons
- No backend, no database, no external image URLs — all car art is pure CSS/SVG

## Features

- Sticky navbar with mobile menu (Home, Fleet, Pricing, Contact + Book Now)
- Hero with "Drive Luxury, Pay Daily" headline and a hand-drawn **SVG car
  silhouette** (amber underglow, headlight beam, animated)
- Fleet grid of **8 cars** (Corolla → Land Cruiser ZX) with daily PKR rates,
  seats, transmission, fuel type and gradient monogram card art
- **Booking modal** with a working price calculator:
  - pick any car, choose pickup/return dates
  - live day-count and total (with optional +30% professional driver)
  - "Confirm via WhatsApp" opens a `wa.me` deep link with the full booking
    pre-filled
- "Why choose us" (4 features), pricing note (driver +30% with examples),
  3 testimonials, contact cards + 3 city locations + footer

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Standard Next.js app — deploy to Vercel with `vercel` or by importing the repo;
no environment variables required.

## Project structure

```
app/
  page.tsx          # home page composition + booking modal state
  layout.tsx        # metadata, fonts (Space Grotesk + Inter)
  globals.css       # Tailwind v4 theme, glow utilities, animations
components/
  Navbar.tsx        # sticky nav + mobile menu
  Hero.tsx          # headline, CTAs, stats
  CarSilhouette.tsx # pure-SVG luxury car art
  Fleet.tsx         # 8-car grid
  BookingModal.tsx  # date math, live quote, WhatsApp deep link
  WhyUs.tsx         # 4 feature cards
  PricingNote.tsx   # driver +30% explainer
  Testimonials.tsx  # 3 fictional renters
  Contact.tsx       # contact cards, locations, footer
data/
  cars.ts           # fleet data, WhatsApp number, PKR formatter
```
