"use client";

import Image from "next/image";
import { useState } from "react";

export default function HoverRevealText() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-6xl aspect-[16/5] cursor-pointer select-none">
        {/* Base SVG - Slightly Larger */}
        <div className="absolute inset-0 scale-[1.05] flex items-center justify-center transition-transform duration-500 ease-in-out">
          <Image
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/Images/svg/hoverRevealText/svg1.svg"
            alt="Hover Reveal Base"
            fill
            priority
            className={`object-contain transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Hover SVG - Slightly Smaller */}
        <div className="absolute inset-0 scale-[0.98] flex items-center justify-center transition-transform duration-500 ease-in-out">
          <Image
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/Images/svg/hoverRevealText/svg2.svg"
            alt="Hover Reveal Overlay"
            fill
            priority
            className={`object-contain transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
