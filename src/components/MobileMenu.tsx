"use client";

import Image from "next/image";
import Link from "next/link";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import CloseIcon from "./CloseIcon";
import ButtonContact from "./ContactButton";
import { menuItems } from "@/constants/menuItems";
import "../styles/components/MobileMenu.css";
import { useContactModalContext } from "@/context/ContactModalContext";

export default function MobileMenu() {
  const { isOpen, closeMenu, toggleMenu } = useMobileMenuContext();
  const { openModal } = useContactModalContext();

  const handleClose = () => {
    closeMenu();
    openModal();
  };

  return (
    isOpen && (
      <div className="dropdown-menu">
        <div>
          <Image src="/SVG/vahlisLogo.svg" alt="Logo" width={80} height={30} />
          <CloseIcon onClick={toggleMenu} color="#fffff" />
        </div>

        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            <p
              className={item.href === window.location.pathname ? "active" : ""}
            >
              {item.label}
            </p>
          </Link>
        ))}

        <ButtonContact onClick={handleClose} size="medium" />
      </div>
    )
  );
}
