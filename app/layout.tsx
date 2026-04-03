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
  title: "Don't Betray God — Wear Your Conviction",
  description: "Faith is not fashion. It’s identity. Premium, minimal, spiritually grounded footwear and apparel.",
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
