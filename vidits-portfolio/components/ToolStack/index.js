"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MagneticIcon from "./MagneticIcon";
import { getIconsData } from "./toolstackData";

export default function ToolStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconsData = getIconsData(isMobile);

  return (
    <div className="relative w-full h-[450px] md:h-[600px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Center heading */}
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#111111] z-0"
        style={{ letterSpacing: "-0.04em" }}
      >
        Tool Stack
      </h2>

      {/* Floating icons */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
        <div className="relative w-full h-full pointer-events-auto">
          {iconsData.map((icon) => (
            <MagneticIcon key={icon.id} {...icon} />
          ))}
        </div>
      </div>

      {/* Decorative scribbles */}
      <div className="hidden sm:block absolute inset-0 max-w-[1200px] mx-auto pointer-events-none z-[-1]">
        <Image
          src="/Images/svg/toolstack/scribble-2.svg"
          alt="Scribble 2"
          width={96}
          height={96}
          className="absolute top-[40%] left-[25%] -rotate-10 w-24 h-24 opacity-80"
        />
        <Image
          src="/Images/svg/toolstack/container.svg"
          alt="Container"
          width={128}
          height={128}
          className="absolute top-[25%] right-[26%] w-28 h-28 opacity-80"
        />
        <Image
          src="/Images/svg/toolstack/scribble-1.svg"
          alt="Scribble 1"
          width={96}
          height={96}
          className="absolute bottom-[17%] right-[32%] w-40 h-40 opacity-80"
        />
      </div>
    </div>
  );
}
