import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";
import Contact from "@/components/Contact";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vahlis",
  description: "Vahlis encorporadora",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${playfair.variable}`}>
      <head />
      <body>
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
