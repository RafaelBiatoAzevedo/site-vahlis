"use client";

import Image from "next/image";
import ButtonContact from "./ButtonContact";
import "../styles/components/Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/hooks/useWindowSize";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import CloseIcon from "./CloseIcon";

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
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`main ${absolute ? "header-absolute" : ""}`}>
        <Image
          src="/SVG/vahlisLogo.svg"
          alt="Logo"
          width={width > 600 ? 120 : 80}
          height={width > 600 ? 40 : 30}
        />
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <p className={isActive ? "active" : ""}>{item.label}</p>
              </Link>
            );
          })}
        </nav>
        <ButtonContact size="small" />
        <button className="menu-toggle" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>

      {isOpen && width <= 360 && (
        <div className="dropdown-menu">
          <div>
            <Image
              src="/SVG/vahlisLogo.svg"
              alt="Logo"
              width={width > 600 ? 120 : 80}
              height={width > 600 ? 40 : 30}
            />
            <CloseIcon onClick={toggleMenu} />
          </div>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <p className={isActive ? "active" : ""}>{item.label}</p>
              </Link>
            );
          })}
          <ButtonContact size="small" />
        </div>
      )}
    </>
  );
}
