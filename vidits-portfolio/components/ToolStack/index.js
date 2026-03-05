"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import {
  SiOpenai,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

// Cubic bezier for Apple-style smoothness
const springTransition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

const MagneticIcon = ({
  icon: Icon,
  iconSrc,
  color,
  badgeCount,
  delay,
  top,
  left,
  size,
  iconScale = 1,
  id,
}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Springs for magnetic effect
  const springX = useSpring(0, springTransition);
  const springY = useSpring(0, springTransition);

  // Floating animation definition
  const floatingAnimation = {
    y: ["-8px", "8px"],
    x: ["-4px", "4px"],
    transition: {
      y: {
        duration: 2.5 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
      x: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay + 0.5,
      },
    },
  };

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const pullX = (clientX - centerX) * 0.4;
    const pullY = (clientY - centerY) * 0.4;

    springX.set(pullX);
    springY.set(pullY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`absolute z-10 flex items-center justify-center`}
      style={{
        top,
        left,
        x: springX,
        y: springY,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={isHovered ? {} : floatingAnimation}
      tabIndex={0}
      role="button"
      aria-label={`${id} tool icon`}
    >
      {/* The white card container matching the image */}
      <div
        className="relative bg-white rounded-[2rem] flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.04)",
        }}
      >
        {/* Special case for Instagram gradient */}
        {id === "instagram" ? (
          <svg width="0" height="0">
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </svg>
        ) : null}

        {Icon ? (
          <Icon
            style={{
              color: id === "instagram" ? "url(#ig-grad)" : color,
              fill: id === "instagram" ? "url(#ig-grad)" : color,
              fontSize: size * 0.48 * iconScale,
            }}
          />
        ) : (
          <Image
            src={iconSrc}
            alt={`${id} icon`}
            width={size * 0.48 * iconScale}
            height={size * 0.48 * iconScale}
            style={{ objectFit: "contain" }}
          />
        )}

        {/* Developer Badge Matching Design exactly */}
        {/* <motion.div
          className="absolute -top-1 -right-1 bg-[#FF1E56] text-white text-[12px] font-bold min-w-[28px] h-[28px] flex items-center justify-center px-1.5 rounded-full z-20 shadow-sm"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? [1, 1.25, 1] : 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transform: "translate(10%, -10%)" }}
        >
          {badgeCount}
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default function ToolStack() {
  // -------------------------
  // Mobile Detection
  // -------------------------
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // trigger once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconsData = [
    // Top Left: Figma
    {
      id: "figma",
      iconSrc: "/Images/svg/toolstack/appIcons/figma-svgrepo-com.svg",
      color: "#F24E1E",
      badgeCount: 5,
      delay: 0.4,
      top: isMobile ? "45%" : "35%",
      left: isMobile ? "15%" : "20%",
      size: isMobile ? 65 : 100,
    },
    // Top Center-Left: FigJam
    {
      id: "figjam",
      icon: CgFigma, // Still using react-icons for FigJam as there was no file for it
      color: "#A259FF", // Distinct color for FigJam flavor
      badgeCount: 2,
      delay: 0,
      top: isMobile ? "10%" : "18%",
      left: isMobile ? "45%" : "39%",
      size: isMobile ? 75 : 110,
    },
    // Top Right: Adobe Illustrator
    {
      id: "illustrator",
      iconSrc: "/Images/svg/toolstack/appIcons/adobe-illustrator-svgrepo-com.svg",
      color: "#FF9A00",
      badgeCount: 12,
      delay: 0.2,
      top: isMobile ? "22%" : "18%",
      left: isMobile ? "80%" : "62%",
      size: isMobile ? 70 : 115,
    },
    // Mid Right: Adobe Photoshop
    {
      id: "photoshop",
      iconSrc: "/Images/svg/toolstack/appIcons/adobe-photoshop-svgrepo-com.svg",
      color: "#31A8FF",
      badgeCount: 3,
      delay: 0.6,
      top: isMobile ? "45%" : "35%",
      left: isMobile ? "85%" : "78%",
      size: isMobile ? 60 : 110,
    },
    // Bottom Right: Framer (Mirrors Photoshop)
    {
      id: "framer",
      iconSrc: "/Images/svg/toolstack/appIcons/framer-black-icon.svg",
      color: "#0055FF",
      badgeCount: 8,
      delay: 0.8,
      top: isMobile ? "55%" : "65%",
      left: isMobile ? "85%" : "78%",
      size: isMobile ? 60 : 110,
      iconScale: 0.7, // Downscale the inner icon so it matches others
    },
    // Bottom Center-Right: Canva (Mirrors Illustrator)
    {
      id: "canva",
      iconSrc: "/Images/svg/toolstack/appIcons/canva-icon.svg",
      color: "#00C4CC",
      badgeCount: 15,
      delay: 1.0,
      top: isMobile ? "78%" : "82%",
      left: isMobile ? "80%" : "62%",
      size: isMobile ? 70 : 115,
    },
    // Bottom Center-Left: Notion (Mirrors FigJam)
    {
      id: "notion",
      iconSrc: "/Images/svg/toolstack/appIcons/notion-svgrepo-com.svg",
      color: "#333333",
      badgeCount: 21,
      delay: 1.2,
      top: isMobile ? "90%" : "82%",
      left: isMobile ? "45%" : "39%",
      size: isMobile ? 75 : 110,
    },
    // Bottom Left: ChatGPT (Mirrors Figma)
    {
      id: "chatgpt",
      icon: SiOpenai, // Using react-icons for ChatGPT since no SVG file was provided in the directory
      color: "black",
      badgeCount: 9,
      delay: 1.4,
      top: isMobile ? "55%" : "65%",
      left: isMobile ? "15%" : "20%",
      size: isMobile ? 65 : 100,
    },
  ];

  return (
    <div className="relative w-full h-[450px] md:h-[600px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Center Text matching image style */}
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#111111] z-0"
        style={{ letterSpacing: "-0.04em" }}
      >
        Tool Stack
      </h2>

      {/* Orbiting Icons Container */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
        <div className="relative w-full h-full pointer-events-auto">
          {iconsData.map((icon) => (
            <MagneticIcon key={icon.id} {...icon} />
          ))}
        </div>
      </div>

      {/* Decorative SVGs Matching the Image precisely */}
      <div className="hidden sm:block absolute inset-0 max-w-[1200px] mx-auto pointer-events-none z-[-1]">
        {/* 1. Swoosh Arrow between Instagram and Center */}
        {/*
        <svg
          className="absolute top-[32%] left-[28%] w-24 h-24 text-gray-300 dark:text-gray-600 opacity-80"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M 0 0 Q 60 50 85 80" strokeDasharray="6 6" />
          <path
            d="M 85 80 L 70 75 L 80 65 Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
        */}
        <Image
          src="/Images/svg/toolstack/Scribble 2.svg"
          alt="Scribble 2"
          width={96}
          height={96}
          className="absolute top-[40%] left-[25%] -rotate-10 w-24 h-24 opacity-80"
        />

        {/* 2. Dotted loop between YouTube and LinkedIn */}
        {/*
        <svg
          className="absolute top-[28%] right-[22%] w-32 h-32 text-gray-300 dark:text-gray-600 opacity-80"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M 10 0 C 80 -10, 110 60, 50 80 C 0 100, -20 40, 20 20"
            strokeDasharray="5 5"
          />
        </svg>
        */}
        <Image
          src="/Images/svg/toolstack/Container.svg"
          alt="Container"
          width={128}
          height={128}
          className="absolute top-[28%] right-[22%] w-32 h-32 opacity-80"
        />

        {/* 3. Three Spark Lines above Telegram */}
        {/*
        <svg
          className="absolute bottom-[28%] left-[45%] w-24 h-24 text-gray-300 dark:text-gray-600 opacity-80"
          viewBox="0 0 100 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="30" y1="50" x2="15" y2="25" />
          <line x1="50" y1="40" x2="50" y2="10" />
          <line x1="70" y1="50" x2="85" y2="25" />
        </svg>
        */}
        <Image
          src="/Images/svg/toolstack/Scribble 1.svg"
          alt="Scribble 1"
          width={96}
          height={96}
          className="absolute bottom-[21%] left-[43%] w-40 h-40 opacity-80"
        />
      </div>
    </div>
  );
}
