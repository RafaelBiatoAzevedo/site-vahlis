"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  onChange?: (value: number) => void; // se quiser usar o valor externamente
}

export default function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
}
