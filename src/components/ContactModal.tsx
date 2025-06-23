"use client";

import { useState } from "react";
import "../styles/components/ContactModal.css";

interface IModalProps {
  isOpen: boolean;
}

export default function ContactModal({ isOpen }: IModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen);

  return (
    <>
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-image">
              <img src="/images/image-vector-modal.jpg" alt="vector" />
            </div>
            <div className="modal-form">
              <button
                className="modal-close"
                onClick={() => setIsVisible(false)}
              >
                X
              </button>

              <p>Preencha o formulário e</p>
              <p>fale com nossa equipe.</p>
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
                  <input type="radio" name="accept" value="1" />

                  <p>
                    Concordo com a [Política de Privacidade] e autorizo o uso
                    dos meus dados apenas para fins de contato relacionados ao
                    meu interesse.
                  </p>
                </div>

                <button type="submit">Entre em contato agora</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
