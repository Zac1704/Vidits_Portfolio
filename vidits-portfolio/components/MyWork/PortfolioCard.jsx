"use client";
import { useState } from "react";
import Image from "next/image";

export const PortfolioCard = ({
  img,
  title,
  shadow,
  subtitle,
  description,
  onClick,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className="
  relative
  min-w-[90%] sm:min-w-[85%] md:w-full
  h-auto
  aspect-[3/4] sm:aspect-[4/5] cursor-pointer
  bg-transparent
  select-none
  will-change-transform
  snap-center shrink-0
"
      style={{ perspective: "1000px" }}
      onMouseMove={(e) => {
        if (isPressed) return;

        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        const rect = wrapper.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      }}
      onMouseLeave={(e) => {
        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        wrapper.style.transition = "transform 0.4s ease-out";
        wrapper.style.transform = "rotateX(0) rotateY(0) scale(1)";
        setIsPressed(false);
      }}
      onMouseDown={(e) => {
        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        setIsPressed(true);
        wrapper.style.transition = "transform 0.1s ease-out";
        wrapper.style.transform = "rotateX(0) rotateY(0) scale(0.97)";
      }}
      onMouseUp={(e) => {
        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        wrapper.style.transition = "transform 0.15s ease-out";
        wrapper.style.transform = "rotateX(0) rotateY(0) scale(1)";
        setIsPressed(false);
      }}
      onClick={() => onClick(img, title)}
    >
      {/* Inner wrapper (gets animated, outer stays fixed) */}
      <div
        className="tilt-wrapper h-full w-full rounded-3xl md:rounded-[32px] overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
          boxShadow: shadow,
        }}
      >
        {/* Card Content */}
        <div className="relative h-full w-full border-4 border-white bg-zinc-900 rounded-3xl md:rounded-[32px] overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-left transition-transform duration-700 group-hover:scale-110"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col p-5">
            <span className=" mb-1 text-base font-medium text-white/65">
              {subtitle}
            </span>

            <h2 className="mb-2 text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-(--background)">
              {title}
            </h2>

            <p className="whitespace-pre-line max-w-[90%] text-lg font-medium leading-snug text-white/65">
              {description}
            </p>

            <div className="mt-6">
              <button className="inline-flex items-center justify-center rounded-full bg-[#D9D9D9] text-zinc-900 font-semibold transition-all hover:bg-white hover:scale-105 active:scale-95 cursor-pointer px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base">
                Our Approach
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
