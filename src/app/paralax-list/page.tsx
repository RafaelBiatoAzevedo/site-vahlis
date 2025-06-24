"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/components/Paralax.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSplit() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !imageRef.current) return;

    const sections = gsap.utils.toArray(".text-item");

    gsap.to(textRef.current, {
      xPercent: -170 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${window.innerWidth * (sections.length - 1)}`,
      },
    });

    // Efeito de destaque para cada texto
    sections.forEach((section) => {
      if (section instanceof HTMLElement) {
        ScrollTrigger.create({
          trigger: section,
          start: "center center",
          end: "center center",
          toggleClass: { targets: section, className: "active" },
          scrub: true,
        });
      }
    });

    const sections2 = gsap.utils.toArray(".image-item");
    const totalScroll = window.innerWidth * (sections.length - 1);
    const imageOffset = 100 * sections2.length;

    // Scroll vertical simulado
    gsap.to(imageRef.current, {
      yPercent: -imageOffset,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        end: () => `+=${totalScroll}`,
      },
    });

    // Efeito de destaque para cada imagem
    sections2.forEach((section) => {
      if (section instanceof HTMLElement) {
        ScrollTrigger.create({
          trigger: section,
          start: "center center",
          end: "center center",
          toggleClass: { targets: section, className: "active" },
          scrub: true,
        });
      }
    });
  }, []);

  return (
    <>
      <div className="scroll-container" ref={containerRef}>
        <div className="text-list" ref={textRef}>
          <div className="text-item">Texto 1</div>
          <div className="text-item">Texto 2</div>
          <div className="text-item">Texto 3</div>
          <div className="text-item">Texto 4</div>
        </div>

        <div className="image-list" ref={imageRef}>
          <img src="/images/image-history.jpg" className="image-item" />
          <img src="/images/image-history.jpg" className="image-item" />
          <img src="/images/image-history.jpg" className="image-item" />
          <img src="/images/image-history.jpg" className="image-item" />
        </div>
      </div>
    </>
  );
}
