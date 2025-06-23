"use client";

import Image from "next/image";
import "../../styles/components/teste.css";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Footer() {
  const { width } = useWindowSize();
  return (
    <div className="cont">
      <div className="row" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="text-holder">
          <div className="text" style={{ color: "#2B0955" }}>
            <Image
              src="/SVG/vector.svg"
              alt="Logo"
              width={width >= 1336 ? 800 : width >= 900 ? 600 : 450}
              height={width >= 1336 ? 500 : width >= 600 ? 300 : 250}
            />
          </div>
        </div>
      </div>
      <div
        className="row row-background"
        style={{ backgroundColor: "#2B0955" }}
      >
        <div className="text-holder">
          <div className="text" style={{ color: "#AE97CB" }}>
            <Image
              className="vector-image"
              src="/SVG/vector.svg"
              alt="Logo"
              width={width >= 1336 ? 800 : width >= 900 ? 600 : 450}
              height={width >= 1336 ? 500 : width >= 600 ? 300 : 250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
