import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DriveLux — Premium Car Rental in Islamabad, Rawalpindi & Lahore",
  description:
    "Rent luxury and family cars by the day in Pakistan. Well-maintained fleet, self-drive or with driver, airport pickup and 24/7 support. Book instantly on WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#08080a] font-sans text-zinc-200">
        {children}
      </body>
    </html>
  );
}
