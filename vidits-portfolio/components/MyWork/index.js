"use client";

import Image from "next/image";
import { useState } from "react";

const PortfolioCard = ({ img, title, shadow }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className="relative w-[380px] h-[300px] rounded-[32px] flex items-center justify-center bg-transparent transition-transform duration-300 cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        if (isPressed) return; // Disable tilt when pressed

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
        // 🧹 Removed spring bounce effect
        card.style.transition = "transform 0.2s ease-out";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        setIsPressed(false);
        console.log(`Clicked on ${title}`);
      }}
    >
      <div
        className={`inner w-full h-full rounded-[32px] overflow-hidden border-[4px] border-white flex items-center justify-center bg-white transition-all duration-200 ${
          isPressed ? "brightness-95" : ""
        }`}
        style={{
          transform: "rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d",
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
          className="w-full h-full object-cover rounded-[28px] select-none pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(ellipse 100% 100% at center, black 96%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 100% at center, black 96%, transparent 100%)",
          }}
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
      <header className="text-center pb-5 px-4">
        <h1 className="text-5xl font-black text-(--text-color) mb-4">
          MY WORK
        </h1>
        <p className="text-[#D6D6D6] text-sm md:text-lg">
          Don&apos;t be shy, check my work all you want
        </p>
      </header>

      {/* Portfolio Grid */}
      <section className="px-4 py-8 flex justify-center items-center">
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
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
