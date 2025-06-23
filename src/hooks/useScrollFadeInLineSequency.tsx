import { useEffect, useRef } from "react";

export function useScrollFadeIn(delayStep = 0.6, threshold = 0.1) {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const index = elementsRef.current.indexOf(el);

          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.6s ease-out ${
              index * delayStep
            }s, transform 0.6s ease-out ${index * delayStep}s`;
            el.classList.add("visible");
          } else {
            // Reverte animação ao sair da tela
            el.style.transition =
              "opacity 0.4s ease-in, transform 0.4s ease-in";
            el.classList.remove("visible");
          }
        });
      },
      { threshold }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [delayStep, threshold]);

  const setRef = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return setRef;
}
