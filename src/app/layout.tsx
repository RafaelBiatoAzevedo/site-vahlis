import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

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
    <html lang="pt-BR" className={outfit.variable}>
      <head />
      <body>
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
