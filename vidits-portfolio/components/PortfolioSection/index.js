"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: (direction) => ({
    x: direction === "next" ? 100 : -100,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction === "next" ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.45, ease: "easeIn" },
  }),
};

// Extracted data to constants
const PRIMARY_CARDS = [
  {
    title: "MY SUPERPOWER? CURIOSITY",
    content:
      "I live for understanding users and drawing insights into ideas. It's not just design-it's creating experiences that truly matter.",
    color: "bg-[#9B1B25]",
    height: "310px",
    rotate: "rotate-5",
    position: "left-10 top-8",
  },
  {
    title: "I'M POROUS - I ABSORB PERSPECTIVES LIKE A SPONGE",
    content:
      "I listen, learn, and adapt. Whether it's feedback or new ideas, I'm all about growing and evolving.",
    color: "bg-[#FFB629]",
    height: "275px",
    rotate: "-rotate-[1.72deg]",
    position: "top-[120px] left-5",
  },
  {
    title: "I'LL LEARN IT, NO MATTER WHAT.",
    content:
      "If I don't know something, I own it and give it my all to learn. Consider this a friendly warning-I'll do whatever it takes to get the job done.",
    color: "bg-[#276A96]",
    height: "320px",
    rotate: "rotate-[2.18deg]",
    position: "top-[30px]",
  },
  {
    title: "I'M A COCONUT-TOUGH OUTSIDE, SOFT INSIDE.",
    content:
      "I balance strength and sensitivity, logic and creativity. Multitasking? It's just another day in the life.",
    color: "bg-[#0E7F01]",
    height: "275px",
    rotate: "-rotate-[2.57deg]",
    position: "top-[116px]",
  },
];

const KEYCHAINS = [
  {
    id: "ps",
    name: "Photoshop",
    bg: "#001E36",
    svg: "/Images/svg/keychain/svg1.svg",
  },
  {
    id: "ai",
    name: "Illustrator",
    bg: "#330000",
    svg: "/Images/svg/keychain/svg2.svg",
  },
  {
    id: "figma",
    name: "Figma",
    bg: "#000000",
    svg: "/Images/svg/keychain/svg3.svg",
  },
  {
    id: "canva",
    name: "Canva",
    bg: "#00C4CC",
    svg: "/Images/svg/keychain/svg4.svg",
  },
  {
    id: "framer",
    name: "Framer",
    bg: "#000000",
    svg: "/Images/svg/keychain/svg5.svg",
  },
  {
    id: "topaz",
    name: "Topaz",
    bg: "#000000",
    svg: "/Images/svg/keychain/svg6.svg",
  },
  {
    id: "luminar",
    name: "Luminar",
    bg: "linear-gradient(135deg, #FF6B9D 0%, #C239B3 100%)",
    svg: "/Images/svg/keychain/svg7.svg",
  },
  {
    id: "kapwing",
    name: "Kapwing",
    bg: "#00BAB3",
    svg: "/Images/svg/keychain/svg8.svg",
  },
];

const SECONDARY_IMAGES = [
  {
    src: "/Images/Portfolio/image1.png",
    width: 240,
    height: 288,
    className: "absolute left-32 top-48",
    note: {
      text: "Well not your average photogenic guy. I'm much more into mirror selfies...",
      className:
        "absolute note tracking-wider left-16 top-36 w-[156px] h-[156px] bg-[#9B1B25] text-white p-3 shadow-xl z-10 max-w-xs italic",
    },
  },
  {
    src: "/Images/Portfolio/image2.png",
    width: 189,
    height: 227,
    className: "absolute top-19 left-10",
    note: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      className:
        "absolute top-64 left-36 bg-[#FFB629] text-white w-[143px] h-[178px] p-3 note tracking-wider shadow-xl italic max-w-xs",
    },
  },
  {
    src: "/Images/Portfolio/image3.png",
    width: 205,
    height: 205,
    className: "absolute top-24",
    note: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      className:
        "absolute -left-20 top-24 w-[143px] h-[112px] p-3 note tracking-wider bg-[#276A96] text-white shadow-xl z-10 max-w-xs italic",
    },
  },
  {
    src: "/Images/Portfolio/image4.png",
    width: 262,
    height: 259,
    className: "absolute right-24 top-14",
    note: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor sit amet.",
      className:
        "absolute right-12 top-57 w-[143px] h-[156px] bg-[#0E7F01] text-white p-3 note tracking-wider shadow-xl z-10 max-w-xs italic",
    },
  },
];

// Extracted components
const NavigationButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
  >
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d={
          direction === "left"
            ? "M11 17l-5-5m0 0l5-5m-5 5h12"
            : "M13 7l5 5m0 0l-5 5m5-5H6"
        }
      />
    </svg>
  </button>
);

const PrimaryCard = ({ card }) => (
  <div className="relative">
    <div
      className={`absolute ${card.position} ${card.color} h-[${card.height}] w-[276px] ${card.rotate} text-white p-6 shadow-xl transform hover:scale-105 transition-transform duration-300`}
    >
      <h3 className="font-bold text-xl mb-4 border-b-2 border-white pb-6 uppercase">
        {card.title}
      </h3>
      <p className="text-xl note italic">{card.content}</p>
    </div>
  </div>
);

const SecondaryImage = ({ image, index }) => (
  <div className="relative">
    <div className={image.note.className}>
      <p className="text-sm leading-relaxed">{image.note.text}</p>
    </div>
    <Image
      src={image.src}
      height={image.height}
      width={image.width}
      alt={`Secondary Research ${index + 1}`}
      className={image.className}
    />
  </div>
);

const Keychain = ({ keychain, onMouseEnter, onMouseLeave }) => (
  <div
    className="relative cursor-pointer"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="absolute left-1/2 top-[76px] -ml-10 w-20 h-20 rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-110">
      <Image src={keychain.svg} alt={keychain.name} width={80} height={80} />
    </div>
  </div>
);

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState("primary");
  const [direction, setDirection] = useState("next");
  const [hoveredKeychain, setHoveredKeychain] = useState(null);
  const keychainStates = useRef({});
  const animationFrames = useRef({});

  // Initialize keychain states
  useEffect(() => {
    KEYCHAINS.forEach((keychain) => {
      keychainStates.current[keychain.id] = {
        angle: 0,
        velocity: 0,
        targetAngle: 0,
      };
    });
  }, []);

  const handleMouseMove = (e, keychainId) => {
    const element = document.getElementById(`keychain-${keychainId}`);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + 20;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 250;

    const normalizedDistance = Math.min(1, distance / maxDistance);
    const influence = Math.pow(1 - normalizedDistance, 2);

    const maxAngle = 25;
    const angle = Math.atan2(deltaX, Math.max(1, deltaY)) * (180 / Math.PI);
    const targetAngle = angle * influence * 0.8;

    const state = keychainStates.current[keychainId];
    if (state) {
      state.targetAngle = Math.max(-maxAngle, Math.min(maxAngle, targetAngle));
    }
  };

  const animatePendulum = () => {
    KEYCHAINS.forEach((keychain) => {
      const state = keychainStates.current[keychain.id];
      if (!state) return;

      const element = document.getElementById(`keychain-chain-${keychain.id}`);
      if (!element) return;

      const isHovered = hoveredKeychain === keychain.id;

      const springStrength = isHovered ? 0.008 : 0.004;
      const damping = isHovered ? 0.88 : 0.93;
      const gravity = 0.0008;

      const restingForce = state.targetAngle === 0 ? -state.angle * 0.002 : 0;

      const angleDiff = state.targetAngle - state.angle;
      const springForce = angleDiff * springStrength;
      const gravityForce = Math.sin((state.angle * Math.PI) / 180) * -gravity;

      state.velocity += springForce + gravityForce + restingForce;
      state.velocity *= damping;

      if (Math.abs(state.velocity) < 0.1 && Math.abs(angleDiff) < 0.5) {
        state.velocity += (Math.random() - 0.5) * 0.02;
      }

      state.angle += state.velocity;
      state.angle = Math.max(-35, Math.min(35, state.angle));

      element.style.transform = `rotate(${state.angle}deg)`;
      element.style.transformOrigin = "top center";
    });

    animationFrames.current.main = requestAnimationFrame(animatePendulum);
  };

  useEffect(() => {
    animatePendulum();
    return () => {
      if (animationFrames.current.main) {
        cancelAnimationFrame(animationFrames.current.main);
      }
    };
  }, [hoveredKeychain]);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      KEYCHAINS.forEach((keychain) => handleMouseMove(e, keychain.id));
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const handleSectionChange = (section) => {
    setDirection(section === "secondary" ? "next" : "prev");
    setActiveSection(section);
  };

  return (
    <>
      <div className="min-h-screen max-w-[1310px] mx-auto relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Dotted Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #c0c0c0 5px, transparent 2px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0",
            }}
          />

          {/* Navigation Button */}
          <div
            className={`min-h-screen absolute top-8 z-20 ${
              activeSection === "primary" ? "right-8" : "left-8"
            }`}
          >
            <NavigationButton
              direction={activeSection === "primary" ? "right" : "left"}
              onClick={() =>
                handleSectionChange(
                  activeSection === "primary" ? "secondary" : "primary"
                )
              }
            />
          </div>

          {/* Content Sections */}
          {activeSection === "primary" ? (
            <div className="space-y-16">
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {PRIMARY_CARDS.map((card, index) => (
                  <PrimaryCard key={index} card={card} />
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {SECONDARY_IMAGES.map((image, index) => (
                  <SecondaryImage key={index} image={image} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Animated Heading */}
          <div className="relative w-full text-center py-20">
            <AnimatePresence custom={direction} mode="wait">
              <motion.h2
                key={activeSection}
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`mx-auto text-[64px] font-black uppercase tracking-wider text-(--gray-text-color) bg-(--background) p-1 ${
                  activeSection === "primary"
                    ? "max-w-2xl mt-100"
                    : "max-w-3xl mt-90"
                }`}
              >
                {activeSection === "primary"
                  ? "Primary Research"
                  : "Secondary Research"}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Keychains Section */}
      {/* <div className="relative z-30 flex justify-center gap-8 md:gap-12 flex-wrap px-4 pt-8">
        {KEYCHAINS.map((keychain) => (
          <Keychain
            key={keychain.id}
            keychain={keychain}
            onMouseEnter={() => setHoveredKeychain(keychain.id)}
            onMouseLeave={() => setHoveredKeychain(null)}
          />
        ))}
      </div> */}
    </>
  );
};

export default PortfolioPage;
