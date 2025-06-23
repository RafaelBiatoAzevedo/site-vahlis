"use client";

import ContactModal from "@/components/ContactModal";
import { useContactModalContext } from "@/context/ContactModalContext";

export default function ContactModalWrapper() {
  const { isOpen, closeModal } = useContactModalContext();

  return <ContactModal isOpen={isOpen} onClose={closeModal} />;
}
