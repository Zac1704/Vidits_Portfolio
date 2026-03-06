"use client";

import Image from "next/image";
import { useState } from "react";
import { Portfolio } from "./index.constant";

const PortfolioCard = ({ img, title, shadow, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className="relative w-[150px] h-[110px] sm:w-[260px] sm:h-[210px] md:w-[300px] md:h-[240px] lg:w-[360px] lg:h-[290px] xl:w-[400px] xl:h-[320px] 2xl:w-[440px] 2xl:h-[350px] rounded-[16px] sm:rounded-[24px] flex items-center justify-center bg-transparent transition-transform duration-300 cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        if (isPressed) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transition = "transform 0.1s ease-out";
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        setIsPressed(false);
      }}
      onMouseDown={(e) => {
        setIsPressed(true);
        const card = e.currentTarget;
        card.style.transition = "transform 0.1s ease-out";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.97)";
      }}
      onMouseUp={(e) => {
        const card = e.currentTarget;
        card.style.transition = "transform 0.2s ease-out";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        setIsPressed(false);
        console.log(`Clicked on ${title}`);
      }}
      onClick={() => onClick(img, title)}
    >
      <div
        className={`inner rounded-[16px] sm:rounded-[24px] w-full h-full overflow-hidden border-2 sm:border-[4px] border-white flex items-center justify-center bg-white transition-all duration-300 hover:brightness-105 ${isPressed ? "brightness-95" : ""
          }`}
        style={{
          transform: "rotateX(0deg) rotateY(0deg)",
          willChange: "transform, box-shadow",
          boxShadow: isPressed
            ? `${shadow.replace("22px", "4px")}`
            : shadow.replace("22px", "10px"),
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = shadow.replace("22px", "16px");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = shadow.replace("22px", "10px");
        }}
      >
        <Image
          src={img}
          alt={title}
          width={380}
          height={300}
          draggable={false}
          className="w-full h-full object-cover rounded-[12px] sm:rounded-[20px] select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

// ✅ Main Component
const ProjectArchieve = ({ onImageSelect }) => {
  return (
    <div className="">
      {/* Header */}
      <header className="text-center px-4 sm:space-y-3">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black leading-[1.1]"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        >
          Project Archive
        </h1>
      </header>

      {/* Portfolio Grid */}
      <section className="px-2 sm:px-6 md:px-10 lg:px-20 pt-10 sm:pt-16 flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-[40px] place-items-center max-w-[1400px] w-full">
          {Portfolio.map((work, index) => (
            <PortfolioCard
              key={index}
              img={work.img}
              title={work.title}
              shadow={work.shadow}
              onClick={() =>
                onImageSelect(
                  Portfolio.map((p) => ({ img: p.archiveImg, title: p.title })),
                  index,
                )
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectArchieve;
