"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: (direction) => ({
    x: direction === "next" ? "100%" : "-100%",
  }),
  animate: {
    x: 0,
    transition: { duration: 0.65, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction === "next" ? "-100%" : "100%",
    transition: { duration: 0.6, ease: "easeInOut" },
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
    margin: "mt-18",
  },
  {
    title: "I'M POROUS - I ABSORB PERSPECTIVES LIKE A SPONGE",
    content:
      "I listen, learn, and adapt. Whether it's feedback or new ideas, I'm all about growing and evolving.",
    color: "bg-[#FFB629]",
    height: "275px",
    rotate: "-rotate-[1.72deg]",
    position: "top-[120px] left-3",
    margin: "mt-42",
  },
  {
    title: "I'LL LEARN IT, NO MATTER WHAT.",
    content:
      "If I don't know something, I own it and give it my all to learn. Consider this a friendly warning-I'll do whatever it takes to get the job done.",
    color: "bg-[#276A96]",
    height: "320px",
    rotate: "rotate-[2.18deg]",
    position: "top-[30px] ",
    margin: "mt-18",
  },
  {
    title: "I'M A COCONUT-TOUGH OUTSIDE, SOFT INSIDE.",
    content:
      "I balance strength and sensitivity, logic and creativity. Multitasking? It's just another day in the life.",
    color: "bg-[#0E7F01]",
    height: "275px",
    rotate: "-rotate-[2.57deg]",
    position: "top-[116px] -left-5",
    margin: "mt-42",
  },
];

const KEYCHAINS = [
  {
    id: "ps",
    name: "Photoshop",
    bg: "#001E36",
    svg: "/Images/svg/keychain/svg1.svg",
    marign: "-ml-[3px]",
  },
  {
    id: "ai",
    name: "Illustrator",
    bg: "#330000",
    svg: "/Images/svg/keychain/svg2.svg",
    marign: "-ml-2",
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
        "absolute note tracking-wider left-16 top-36 w-[156px] h-[156px] bg-[#9B1B25] text-white p-3 shadow-xl z-10 max-w-xs ",
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
        "absolute top-64 left-36 bg-[#FFB629] text-white w-[143px] h-[178px] p-3 note tracking-wider shadow-xl max-w-xs",
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
        "absolute -left-20 top-24 w-[143px] h-[112px] p-3 note tracking-wider bg-[#276A96] text-white shadow-xl z-10 max-w-xs ",
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
        "absolute right-12 top-57 w-[143px] h-[156px] bg-[#0E7F01] text-white p-3 note tracking-wider shadow-xl z-10 max-w-xs ",
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

const PrimaryCard = ({ card, index }) => (
  <div
    key={index}
    className={`transform ${card.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-105`}
  >
    <div
      className={`${card.color} ${card.margin} w-[270px] h-auto text-white p-5 shadow-xl transition-all duration-300`}
    >
      <h3 className="font-bold text-xl mb-4 border-b-2 border-white pb-4 uppercase">
        {card.title}
      </h3>
      <p className="text-lg md:text-2xl note leading-snug">{card.content}</p>
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

const Keychain = ({ keychain }) => {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!hovered) return; // Only follow mouse when hovered

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const offsetX = e.clientX - centerX;

    // Map offset to rotation (-180° to +180° for extreme swing)
    const angle = Math.max(-180, Math.min(180, offsetX / 2));

    setRotation(angle);

    // Clear any pending timeout
    clearTimeout(timeoutRef.current);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    clearTimeout(timeoutRef.current);

    // Pendulum swing back with momentum
    timeoutRef.current = setTimeout(() => {
      setRotation(0);
    }, 50);
  };

  return (
    <motion.div
      className="relative cursor-pointer origin-top"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotate: rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 8,
        mass: 1.5,
      }}
      style={{
        transformOrigin: "top center",
      }}
    >
      <div className="flex justify-center">
        <div
          className={`w-[75px] h-[154px] ${keychain.marign}  flex items-center justify-center`}
        >
          <Image
            src={keychain.svg}
            alt={keychain.name}
            width={75}
            height={154}
          />
        </div>
      </div>
    </motion.div>
  );
};
const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState("primary");
  const [direction, setDirection] = useState("next");

  const handleSectionChange = (section) => {
    setDirection(section === "secondary" ? "next" : "prev");
    setActiveSection(section);
  };

  return (
    <>
      <div className="min-h-screen max-w-[1238px] mx-auto relative overflow-hidden">
        <div className="relative z-10 container mx-auto ">
          {/* Dotted Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              width: "1260px", // 42 * 30
              height: "900px", // 30 * 30
              backgroundImage: `radial-gradient(circle, #c0c0c0 5px, transparent 5px)`,
              backgroundSize: "30px 30px",
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
          <div className="w-full overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeSection}
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {activeSection === "primary" ? (
                  <div className="space-y-16 ">
                    <div className="flex flex-wrap gap-6 justify-center">
                      {PRIMARY_CARDS.map((card, index) => (
                        <PrimaryCard key={index} card={card} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                      {SECONDARY_IMAGES.map((image, index) => (
                        <SecondaryImage
                          key={index}
                          image={image}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated Heading */}
          <div className="relative flex justify-center mt-137">
            <div className="bg-[var(--background)] w-[700px] text-center py-2 overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeSection}
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex justify-center"
                >
                  <h2 className="text-[64px] font-black uppercase tracking-wider text-[var(--gray-text-color)]">
                    {activeSection === "primary"
                      ? "Primary Research"
                      : "Secondary Research"}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Keychains Section */}
      {/* Keychains Section */}
      <div className="z-30 max-w-7xl mx-auto flex justify-center flex-wrap gap-x-20 gap-y-8 px-4 pb-10 relative">
        {KEYCHAINS.map((keychain, i) => (
          <div
            key={keychain.id}
            className={`flex flex-col items-center ${keychain.marign || ""}`}
            style={{
              marginTop: i % 2 === 0 ? "-12px" : "-27px", // aligns to dot rows visually
            }}
          >
            {/* Keychain animation */}
            <Keychain keychain={keychain} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioPage;
