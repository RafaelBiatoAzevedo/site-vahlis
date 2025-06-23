import { useEffect, useRef } from "react";

export function useScrollFadeIn(delayStep = 0.2, threshold = 0.1) {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elementsRef.current.indexOf(
              entry.target as HTMLElement
            );
            const el = entry.target as HTMLElement;
            el.style.transition = `opacity 0.6s ease-out ${
              index * delayStep
            }s, transform 0.6s ease-out ${index * delayStep}s`;
            el.classList.add("visible");
            observer.unobserve(entry.target);
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
