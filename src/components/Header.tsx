"use client";

import Image from "next/image";
import ButtonContact from "./ContactButton";
import "../styles/components/Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/hooks/useWindowSize";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import { useContactModalContext } from "@/context/ContactModalContext";

import { menuItems } from "@/constants/menuItems";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

type HeaderProps = {
  absolute?: boolean;
};

export default function Header({ absolute }: HeaderProps) {
  const pathname = usePathname();
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useContactModalContext();
  const { toggleMenu } = useMobileMenuContext();

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
        <ButtonContact onClick={openModal} size="small" />
        <button className="menu-mobile" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
}
