"use client";

import { createContext, useContext } from "react";
import { useMobileMenu } from "@/hooks/useMobileMenu";

const MobileMenuContext = createContext<ReturnType<
  typeof useMobileMenu
> | null>(null);

export function MobileMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = useMobileMenu();
  return (
    <MobileMenuContext.Provider value={menu}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenuContext() {
  const context = useContext(MobileMenuContext);
  if (!context)
    throw new Error(
      "useMobileMenuContext must be used within a MobileMenuProvider"
    );
  return context;
}
