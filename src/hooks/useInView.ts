import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.3, loop = false) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add("animate-project");
        } else if (loop) {
          setIsVisible(false);
          entry.target.classList.remove("animate-project");
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, loop]);

  return { ref, isVisible };
}
