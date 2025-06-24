"use client";

import { useState } from "react";
import "../styles/components/ContactModal.css";
import CloseIcon from "./CloseIcon";
import { useContactModalContext } from "@/context/ContactModalContext";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModalContext();
  const [isAccept, setIsAccept] = useState(false);

  if (!isOpen) return null;

  const toggleAccept = () => {
    setIsAccept(!isAccept);
    console.log(isAccept);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-image">
          <img src="/images/image-vector-modal.jpg" alt="vector" />
        </div>
        <div className="modal-form">
          <button className="modal-close" onClick={closeModal}>
            <CloseIcon />
          </button>

          <p className="fade-in">Preencha o formulário e</p>
          <p className="fade-in">fale com nossa equipe.</p>

          <form>
            <input type="text" name="name" required placeholder="Nome" />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Número de Contato"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Seu melhor e-mail"
            />

            <div>
              <input
                type="checkbox"
                name="accept"
                value="1"
                checked={isAccept}
                onChange={toggleAccept}
              />
              <p>
                Concordo com a [Política de Privacidade] e autorizo o uso dos
                meus dados apenas para fins de contato relacionados ao meu
                interesse.
              </p>
            </div>

            <button type="submit">Entre em contato agora</button>
          </form>
        </div>
      </div>
    </div>
  );
}
