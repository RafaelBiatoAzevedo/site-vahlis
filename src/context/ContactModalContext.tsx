"use client";

import { createContext, useContext, ReactNode } from "react";
import { useContactModal } from "@/hooks/useContactModal";

const ContactModalContext = createContext<ReturnType<
  typeof useContactModal
> | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const modal = useContactModal();
  return (
    <ContactModalContext.Provider value={modal}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModalContext() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error(
      "useContactModalContext must be used within ContactModalProvider"
    );
  }
  return context;
}
