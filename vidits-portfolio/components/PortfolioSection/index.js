"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Bgright } from "../SVG/Portfoliobackground/Bgright";
// import { Bgleft } from "../SVG/Portfoliobackground/Bgleft";
import { PRIMARY_CARDS, SECONDARY_IMAGES, KEYCHAINS } from "./index.constant";
import { BgCombined } from "../SVG/Portfoliobackground/Combined";

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
          className={`w-[75.8px] h-[154.9px] ${keychain.marign} flex items-center justify-center`}
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
  const [visible, setVisible] = useState(false);

  const handleSectionChange = (section) => {
    setDirection(section === "secondary" ? "next" : "prev");
    setActiveSection(section);
    setVisible(section === "secondary");
  };

  return (
    <>
      <div className="min-h-screen max-w-[1238px] mx-auto relative overflow-hidden">
        <div className="relative z-10 container mx-auto ">
          {/* Dotted Background Pattern */}
          {/* <div
            className="absolute inset-0 pointer-events-none"
            style={{
              width: "1260px", // 42 * 30
              height: "900px", // 30 * 30
              backgroundImage: `radial-gradient(circle, #d9d9d9 5px, transparent 5px)`,
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0",
            }}
          /> */}

          <div>
            <BgCombined
              visible={visible}
              className="w-[1238.16px] h-[669.01px]"
            />
          </div>

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
          <div className="relative flex justify-center -mt-40">
            <div className="bg-[var(--background)] w-[700px] text-center overflow-hidden">
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
      <div className="z-30  space-x-[74.6px] flex justify-center -mt-27 flex-wrap pb-5">
        {KEYCHAINS.map((keychain) => (
          <Keychain key={keychain.id} keychain={keychain} />
        ))}
      </div>
    </>
  );
};

export default PortfolioPage;
