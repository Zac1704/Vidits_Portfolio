"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import LeftArrow from "@/public/Images/svg/LeftArrow.svg";
import RightArrow from "@/public/Images/svg/RightArrow.svg";

const projects = [
  {
    id: 1,
    color: "bg-blue-400",
    patternColor: "%234f46e5",
    title: "Project Alpha",
  },
  {
    id: 2,
    color: "bg-red-500",
    patternColor: "%23991b1b",
    title: "Project Beta",
  },
  {
    id: 3,
    color: "bg-gray-400",
    patternColor: "%231f2937",
    title: "Project Gamma",
  },
  {
    id: 4,
    color: "bg-yellow-400",
    patternColor: "%23b45309",
    title: "Project Delta",
  },
  {
    id: 5,
    color: "bg-emerald-400",
    patternColor: "%23047857",
    title: "Project Epsilon",
  },
];

export default function Carousel({ title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + projects.length) % projects.length;

    if (diff === 0) {
      return "z-30 translate-x-0 scale-100 opacity-100";
    } else if (diff === 1 || diff === -4) {
      return "z-20 translate-x-[15%] md:translate-x-[20%] scale-90 opacity-70";
    } else if (diff === 2 || diff === -3) {
      return "z-10 translate-x-[30%] md:translate-x-[40%] scale-80 opacity-40";
    } else if (diff === projects.length - 1 || diff === -1) {
      return "z-20 -translate-x-[15%] md:-translate-x-[20%] scale-90 opacity-70";
    } else {
      return "z-10 -translate-x-[30%] md:-translate-x-[40%] scale-80 opacity-40";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-[32px] md:text-[40px] lg:text-5xl font-black text-(--text-color) mb-8 md:mb-16 tracking-tight uppercase">
        {title}
      </h1>

      <div className="relative w-full max-w-6xl h-64 md:h-80 lg:h-96 mb-12 md:mb-16">
        <div className="absolute inset-0 flex items-center justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute w-[85%] md:w-[70%] lg:w-[60%] h-full rounded-3xl transition-all duration-700 ease-out ${getCardStyle(
                index
              )} ${project.color}`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo${index}' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 50 Q 30 30, 50 50 T 90 50' stroke='${project.patternColor}' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 30 Q 25 15, 50 30 T 100 30' stroke='${project.patternColor}' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M20 70 Q 40 55, 60 70 T 100 70' stroke='${project.patternColor}' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M-10 90 Q 15 80, 40 90 T 90 90' stroke='${project.patternColor}' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo${index})'/%3E%3C/svg%3E")`,
                backgroundSize: "100px 100px",
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative">
        <button
          onClick={goToPrevious}
          className="absolute cursor-pointer left-0 md:-left-12 top-1/2 -translate-y-1/2 z-40 rounded-full p-2 md:p-3 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.82843 4.70711H12.4142V6.70711H3.82843L7.12132 10L5.70711 11.4142L0 5.70711L5.70711 0L7.12132 1.41421L3.82843 4.70711Z"
              fill="#999999"
            />
          </svg>
        </button>

        <div className="flex gap-2 md:gap-3">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#7B61FF] scale-130"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="absolute cursor-pointer right-0 md:-right-12 top-1/2 -translate-y-1/2 z-40 rounded-full p-2 md:p-3  transition-colors"
          aria-label="Next slide"
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.36912 6.962H0V4.88599H8.36912L5.15933 1.46796L6.53785 0L12.1009 5.92399L6.53785 11.848L5.15933 10.38L8.36912 6.962Z"
              fill="#999999"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
