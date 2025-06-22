"use client";
import Header from "./Header";
import "../styles/components/Footer.css";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

const linkItems = [
  {
    href: "https://www.facebook.com/profile.php?id=61568730325829",
    iconPath: "/SVG/icons/facebookIcon.svg",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/santosvahlisgroup",
    iconPath: "/SVG/icons/linkedinIcon.svg",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/santosvahlisgroup",
    iconPath: "/SVG/icons/instagram.svg",
    label: "Layer",
  },
];

export default function Footer() {
  const { width } = useWindowSize();

  return (
    <div className="main-footer">
      <Header></Header>

      <div className="wrapper-info-footer">
        <div>
          <p>Sede Vahlis</p>
          <p>Av. Pres. Castelo Branco, 6653 - Andar 11</p>
          <p>Bloco B - Barra Funda, São Paulo</p>
        </div>
        <p>
          <b>CNPJ:</b> 73.178.600/0001-18 | <b>CRECI:</b> J-17.592
        </p>
        <div className="wrapper-social-links">
          <p>Siga-nos em nossas redes</p>
          <div>
            {linkItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Image
                  src={item.iconPath}
                  alt={item.label}
                  width={width >= 1336 ? 35 : 25}
                  height={width >= 1336 ? 35 : 25}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p>Políticas de privacidade</p>
    </div>
  );
}
