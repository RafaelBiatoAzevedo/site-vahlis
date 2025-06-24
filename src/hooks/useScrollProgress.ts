import { useEffect, useState } from "react";

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.6;
      const end = windowHeight * 0.5;

      const distance = rect.top;

      if (distance > start) {
        setProgress(0);
      } else if (distance < end) {
        setProgress(1);
      } else {
        const p = 1 - (distance - end) / (start - end);
        setProgress(p);
      }
    };

    handleScroll(); // inicial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}
