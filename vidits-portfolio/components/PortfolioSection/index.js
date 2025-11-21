"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const PrimaryCard = ({ card }) => (
  <div
    className={`
      transform ${card.rotate}
      transition-transform duration-300 hover:rotate-0 hover:scale-105
      w-full sm:w-auto
      flex justify-center
      px-2 sm:px-0
    `}
  >
    <div
      className={`
        ${card.color} ${card.margin}
        w-[250px] sm:w-[270px]
        h-auto 
        text-white
        p-5 shadow-xl 
        transition-all duration-300
      `}
    >
      <h3 className="font-bold text-xl mb-4 border-b-2 border-white pb-4 uppercase">
        {card.title}
      </h3>
      <p className="text-lg md:text-2xl note leading-snug">{card.content}</p>
    </div>
  </div>
);

const SecondaryImage = ({ image, index }) => (
  <div
    className="
      flex flex-col 
      items-center
      w-full sm:w-auto 
      px-2
    
    "
  >
    <div className={image.note.className}>
      <p className="leading-relaxed note text-[15px]">{image.note.text}</p>
    </div>

    <Image
      src={image.src}
      height={image.images.height}
      width={image.images.width}
      alt={`Secondary Research ${index + 1}`}
      className={`${image.images.className} max-w-full h-auto`}
    />
  </div>
);

const Keychain = ({ keychain }) => {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!hovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const offsetX = e.clientX - centerX;
    const angle = Math.max(-180, Math.min(180, offsetX / 2));
    setRotation(angle);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setRotation(0);
    }, 50);
  };

  return (
    <motion.div
      className="relative cursor-pointer origin-top pointer-events-auto"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotate: rotation }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 8,
        mass: 1.5,
      }}
      style={{ transformOrigin: "top center" }}
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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-auto flex justify-center">
        <BgCombined
          visible={visible}
          className="w-full h-full flex items-center justify-center sm:max-w-7xl mx-auto"
          onLeftClick={() => handleSectionChange("primary")}
          onRightClick={() => handleSectionChange("secondary")}
        />
      </div>

      {/* CONTENT */}
      <div
        className="
    relative z-30 
    flex flex-col items-center 
    w-full
    pointer-events-none
    overflow-y-auto lg:overflow-visible
    pt-30 sm:pt-30 md:pt-20 lg:pt-20
    max-h-[68vh]
    lg:max-h-screen
    px-4 mx-auto
    mb-10 sm:mb-0 lg:mb-0
    md:mt-10 lg:-mt-10 xl:mt-0
  "
      >
        <div className="w-full max-w-7xl overflow-visible pointer-events-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeSection}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="w-full min-h-[450px] flex items-center justify-center"
            >
              {activeSection === "primary" ? (
                <div
                  className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-y-10 gap-8
    w-full
    justify-items-center
    items-start
       /* ⭐ FIXED */
   
  "
                >
                  {PRIMARY_CARDS.map((card, index) => (
                    <PrimaryCard key={index} card={card} />
                  ))}
                </div>
              ) : (
                <div
                  className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      
      w-full
      justify-items-center
      items-start
    "
                >
                  {SECONDARY_IMAGES.map((img, idx) => (
                    <SecondaryImage key={idx} image={img} index={idx} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* TITLE */}
      <div className="z-30 relative flex justify-center mb-8 sm:mb-12 pointer-events-auto">
        <div
          className="
          bg-[var(--background)]
          w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[730px]
          text-center overflow-hidden
          h-[100px]
          flex items-center justify-center 
        "
        >
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-[var(--gray-text-color)] ">
                {activeSection === "primary"
                  ? "Primary Research"
                  : "Secondary Research"}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* KEYCHAINS */}
      <div className="relative z-30 flex justify-center items-center gap-6 sm:gap-12 md:gap-[75px] flex-wrap pb-10 px-4 pointer-events-auto">
        {KEYCHAINS.map((keychain) => (
          <Keychain key={keychain.id} keychain={keychain} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
