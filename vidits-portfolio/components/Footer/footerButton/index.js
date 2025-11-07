"use client";

import Image from "next/image";
import Link from "next/link";

export default function LiquidGlassButton({ type, label, icon }) {
  return (
    <Link href={`tel:${type}`} passHref className="block w-[188px] h-[62px] sm:w-[228px] sm:h-[76px]">
      <div
        className="relative z-10 flex items-center justify-center space-x-4 w-full h-full rounded-full
    bg-[#363636]/45 backdrop-blur-[32px] text-white select-none cursor-pointer
    border border-white/20 overflow-hidden
    shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4),inset_-2px_-2px_6px_rgba(255,255,255,0.2),0_6px_20px_rgba(0,0,0,0.3)]
    transition-all duration-500 hover:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.45),inset_-3px_-3px_8px_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.4)] hover:bg-[#3a3a3a]/50"
      >
        {/* Soft Highlight */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(at_25%_75%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_35%,transparent_70%)]/30 mix-blend-screen pointer-events-none"></div>

        {/* Frosted Dispersion */}
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_210deg_at_50%_50%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_25%,transparent_60%,rgba(255,255,255,0.15)_100%)] opacity-50 mix-blend-overlay blur-[2px] pointer-events-none"></div>

        {/* Edge Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 pointer-events-none mix-blend-soft-light"></div>

        {/* Button Content */}
        <Image
          src={icon}
          alt={label}
          width={30}
          height={30}
          className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] relative z-10 drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]"
        />
        <h1 className="text-xl sm:text-2xl uppercase tracking-wide relative z-10 drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]">
          {label}
        </h1>
      </div>
    </Link>
  );
}
