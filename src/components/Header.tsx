import Image from "next/image";
import ButtonContact from "./ButtonContact";
import "../styles/components/Header.css";
import Link from "next/link";

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicos", label: "Serviços" },
  { href: "/vahlis", label: "A Vahlis" },
];

type HeaderProps = {
  absolute?: boolean;
};
export default function Header({ absolute }: HeaderProps) {
  return (
    <div className={`main ${absolute ? "header-absolute" : ""}`}>
      <Image src="/SVG/vahlisLogo.svg" alt="Logo" width={120} height={40} />
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <p>{item.label}</p>
          </Link>
        ))}
      </nav>
      <ButtonContact />
    </div>
  );
}
