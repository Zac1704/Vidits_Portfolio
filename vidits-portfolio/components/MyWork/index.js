"use client";

import Image from "next/image";
import { useState } from "react";

const PortfolioCard = ({ img, title, shadow }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className="relative w-[150px] h-[120px] sm:w-[200px] sm:h-[160px] md:w-[230px] md:h-[190px] lg:w-[280px] lg:h-[230px] xl:w-[320px] xl:h-[260px] 2xl:w-[360px] 2xl:h-[280px] rounded-[24px] flex items-center justify-center bg-transparent transition-transform duration-300 cursor-pointer"
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

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

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
    >
      <div
        className={`inner rounded-[24px] w-full h-full overflow-hidden border-[4px] border-white flex items-center justify-center bg-white transition-all duration-200 ${
          isPressed ? "brightness-95" : ""
        }`}
        style={{
          transform: "rotateX(0deg) rotateY(0deg)",
          willChange: "transform, box-shadow",
          boxShadow: isPressed ? `${shadow.replace("22px", "12px")}` : shadow,
        }}
      >
        <Image
          src={img}
          alt={title}
          width={380}
          height={300}
          draggable={false}
          className="w-full h-full object-cover rounded-[20px] select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

// ✅ Main Component
export default function MyWork() {
  const Portfolio = [
    {
      title: "Baking Gharana",
      img: "/Images/myWork/baking.webp",
      shadow: "rgba(197, 173, 150, 0.7) 0px 0px 22px 0px",
    },
    {
      title: "Jimmy The Pet Shop",
      img: "/Images/myWork/JimmyThePetShop.webp",
      shadow: "rgba(207, 144, 82, 0.7) 0px 0px 22px 0px",
    },
    {
      title: "Relaxzone",
      img: "/Images/myWork/Relaxzone.webp",
      shadow: "rgba(91, 131, 166, 0.7) 0px 0px 22px 0px",
    },
    {
      title: "AK Studio",
      img: "/Images/myWork/AK.webp",
      shadow: "rgba(124, 80, 56, 0.7) 0px 0px 22px 0px",
    },
    {
      title: "Nalanda",
      img: "/Images/myWork/Nalanda.webp",
      shadow: "rgba(178, 131, 126, 0.7) 0px 0px 22px 0px",
    },
    {
      title: "Shudh Kesari",
      img: "/Images/myWork/ShudhKesari.webp",
      shadow: "rgba(222, 135, 96, 0.7) 0px 0px 22px 0px",
    },
    {
      title: "Vistaar Webx",
      img: "/Images/myWork/VistaarWebx.webp",
      shadow: "rgba(236, 209, 209, 0.7) 0px 0px 22px 0px",
    },
    {
      title: "Frame 43",
      img: "/Images/myWork/Frame43.webp",
      shadow: "rgba(118, 140, 148, 0.7) 0px 0px 22px 0px",
    },
  ];

  return (
    <div className="uppercase bg-white">
      {/* Header */}
      <header className="text-center px-4">
        <h1 className="text-[40px] sm:text-[48px] font-black text-(--text-color)">
          MY WORK
        </h1>
        <p className="text-[#D6D6D6] text-sm sm:text-base md:text-lg">
          Don&apos;t be shy, check my work all you want
        </p>
      </header>

      {/* Portfolio Grid */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20  py-10 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 place-items-center max-w-[1400px] w-full">
          {Portfolio.map((work, index) => (
            <PortfolioCard
              key={index}
              img={work.img}
              title={work.title}
              shadow={work.shadow}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
