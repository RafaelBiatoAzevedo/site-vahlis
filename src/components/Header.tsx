"use client";

import Image from "next/image";
import ButtonContact from "./ButtonContact";
import "../styles/components/Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicos", label: "Serviços" },
  { href: "/vahlis", label: "A Vahlis" },
];

type HeaderProps = {
  absolute?: boolean;
};

export default function Header({ absolute }: HeaderProps) {
  const pathname = usePathname();

  return (
    <div className={`main ${absolute ? "header-absolute" : ""}`}>
      <Image src="/SVG/vahlisLogo.svg" alt="Logo" width={120} height={40} />
      <nav className="nav-menu">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <p className={isActive ? "active" : ""}>{item.label}</p>
            </Link>
          );
        })}
      </nav>
      <ButtonContact size="small" />
    </div>
  );
}
