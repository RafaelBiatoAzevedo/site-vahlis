import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // ajuste os pesos conforme necessário
  variable: "--font-playfair", // opcional: define uma CSS custom property
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vahlis",
  description: "Vahlis encorporadora",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={(outfit.variable, playfair.variable)}>
      <head />
      <body>
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
