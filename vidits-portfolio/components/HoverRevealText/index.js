"use client";
import { useState } from "react";

export default function HoverRevealText() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className=" bg-white flex items-center justify-center pb-8">
      <div
        className="max-w-6xl w-full text-center relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Blurred Background Effect - Always Visible */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-40 blur-3xl"></div>
        </div>

        {/* Text Content - Reveals on Hover */}
        <div
          className={`relative text-[#363636] z-10 transition-all duration-700 ease-out ${
            isHovered ? "opacity-100 blur-none" : "opacity-0 blur-2xl"
          }`}
        >
          <h2 className=" text-4xl font-black  leading-tight">
            THANKS FOR DROPPING BY!
          </h2>
          <p className="text-4xl font-black leading-tight">
            IF SOMETHING HERE CAUGHT YOUR EYE, SPARKED A THOUGHT,
            <br className="hidden md:block" />
            OR JUST FELT RIGHT, FEEL FREE TO REACH OUT. LET&apos;S CREATE
            <br className="hidden md:block" />
            WHAT DOESN&apos;T EXIST YET OR MAKE WHAT DOES FEEL SIMPLER.
          </p>
          <p className="text-4xl font-black ">
            <span className="inline-block">~</span> VIDIT
          </p>
        </div>

        {/* Mobile Tap Hint */}
        <div
          className={`md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-50"
          }`}
        >
          <p className="text-sm text-gray-500">Tap to reveal</p>
        </div>
      </div>
    </section>
  );
}
