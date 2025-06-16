import { useEffect, useState } from "react";

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const distance = rect.top;
      const total = windowHeight * 0.4;

      const p = 1 - Math.min(Math.max(distance / total, 0), 1);
      setProgress(p);
    };

    handleScroll(); // inicial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}
