"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import "../styles/components/Contact.css";
import ButtonContact from "./ContactButton";

export default function Contact() {
  const { width } = useWindowSize();

  return (
    <div className="main-contact">
      <div>
        <p>Entre em contato e conheça nossas</p>
        <p>oportunidades de desenvolvimento.</p>
      </div>
      <ButtonContact
        size={width >= 1336 ? "large" : "medium"}
        fontColor="#000000"
      />
    </div>
  );
}
