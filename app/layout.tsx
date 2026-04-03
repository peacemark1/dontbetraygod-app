import type { Metadata } from "next";
import { Inter, Grenze_Gotisch, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const gothic = Grenze_Gotisch({
  weight: ["400", "700", "800"],
  variable: "--font-gothic",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DON'T BETRAY GOD — Wear Your Conviction",
  description: "Faith is not fashion. It’s identity. Premium, minimalist, spiritually grounded apparel for the modern collective. Built on unwavering conviction.",
  keywords: ["dont betray god", "dbg apparel", "religious streetwear", "faith-based fashion", "luxury hoodies", "minimalist accessories", "spiritual garments"],
  authors: [{ name: "DBG Collective" }],
  openGraph: {
    title: "DON'T BETRAY GOD — Wear Your Conviction",
    description: "Premium, minimalist, spiritually grounded apparel. Built on unwavering conviction.",
    url: "https://dontbetraygod.com",
    siteName: "Don't Betray God",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DON'T BETRAY GOD — Wear Your Conviction",
    description: "Premium, minimalist, spiritually grounded apparel. Built on unwavering conviction.",
    creator: "@dontbetraygod1",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import UXEnhancements from "../components/UXEnhancements";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gothic.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full font-inter selection:bg-neutral-800 selection:text-white bg-[#F5F5F5] text-[#0A0A0A]">
        <UXEnhancements />
        {children}
      </body>
    </html>
  );
}
