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

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState("primary");
  const [direction, setDirection] = useState("next");

  const [hoveredKeychain, setHoveredKeychain] = useState(null);
  const keychainStates = useRef({});
  const animationFrames = useRef({});

  const primaryCards = [
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
      position: "top-[30px] ",
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

  const keychains = [
    {
      id: "ps",
      name: "Photoshop",
      bg: "#001E36",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <text
            x="12"
            y="17"
            fontSize="14"
            fontWeight="bold"
            fill="#31A8FF"
            textAnchor="middle"
            fontFamily="system-ui"
          >
            Ps
          </text>
        </svg>
      ),
    },
    {
      id: "ai",
      name: "Illustrator",
      bg: "#330000",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <text
            x="12"
            y="17"
            fontSize="14"
            fontWeight="bold"
            fill="#FF9A00"
            textAnchor="middle"
            fontFamily="system-ui"
          >
            Ai
          </text>
        </svg>
      ),
    },
    {
      id: "figma",
      name: "Figma",
      bg: "#000000",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path
            d="M8 6a2 2 0 0 0 0 4 2 2 0 0 0 0 4 2 2 0 1 0 2 2V6H8z"
            fill="#F24E1E"
          />
          <circle cx="12" cy="8" r="2" fill="#FF7262" />
          <circle cx="12" cy="12" r="2" fill="#1ABCFE" />
          <path
            d="M10 14a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2h-2z"
            fill="#0ACF83"
          />
          <path d="M8 6a2 2 0 0 1 2 2v2H8a2 2 0 0 1 0-4z" fill="#A259FF" />
        </svg>
      ),
    },
    {
      id: "canva",
      name: "Canva",
      bg: "#00C4CC",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <text
            x="12"
            y="17"
            fontSize="11"
            fontWeight="600"
            fill="white"
            textAnchor="middle"
            fontFamily="system-ui"
          >
            Canva
          </text>
        </svg>
      ),
    },
    {
      id: "framer",
      name: "Framer",
      bg: "#000000",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M7 5h10v6H7zm0 6h10l-5 6zm0 0v6l5-6z" fill="white" />
        </svg>
      ),
    },
    {
      id: "topaz",
      name: "Topaz",
      bg: "#000000",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="12" r="2.5" fill="white" />
          <circle cx="12" cy="7" r="1" fill="white" />
          <circle cx="12" cy="17" r="1" fill="white" />
          <circle cx="7" cy="12" r="1" fill="white" />
          <circle cx="17" cy="12" r="1" fill="white" />
        </svg>
      ),
    },
    {
      id: "luminar",
      name: "Luminar",
      bg: "linear-gradient(135deg, #FF6B9D 0%, #C239B3 100%)",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path
            d="M12 6l2.5 5.5h5.5l-4.5 3.5 1.5 5.5L12 17l-5 3.5 1.5-5.5-4.5-3.5h5.5z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "kapwing",
      name: "Kapwing",
      bg: "#00BAB3",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <text
            x="12"
            y="17"
            fontSize="14"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="system-ui"
          >
            K
          </text>
        </svg>
      ),
    },
  ];

  // Initialize keychain states
  useEffect(() => {
    keychains.forEach((keychain) => {
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

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Improved distance calculation with vertical consideration
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 250;

    // Smoother influence curve using easing
    const normalizedDistance = Math.min(1, distance / maxDistance);
    const influence = Math.pow(1 - normalizedDistance, 2);

    // Enhanced angle calculation with better response
    const maxAngle = 25;
    const angle = Math.atan2(deltaX, Math.max(1, deltaY)) * (180 / Math.PI);
    const targetAngle = angle * influence * 0.8;

    if (keychainStates.current[keychainId]) {
      keychainStates.current[keychainId].targetAngle = Math.max(
        -maxAngle,
        Math.min(maxAngle, targetAngle)
      );
    }
  };

  const animatePendulum = () => {
    keychains.forEach((keychain) => {
      const state = keychainStates.current[keychain.id];
      if (!state) return;

      const element = document.getElementById(`keychain-chain-${keychain.id}`);
      if (!element) return;

      const isHovered = hoveredKeychain === keychain.id;

      // Enhanced physics parameters
      const springStrength = isHovered ? 0.008 : 0.004;
      const damping = isHovered ? 0.88 : 0.93;
      const gravity = 0.0008;

      // Return force when no mouse influence
      const restingForce = state.targetAngle === 0 ? -state.angle * 0.002 : 0;

      // Calculate forces
      const angleDiff = state.targetAngle - state.angle;
      const springForce = angleDiff * springStrength;
      const gravityForce = Math.sin((state.angle * Math.PI) / 180) * -gravity;

      // Update velocity with all forces
      state.velocity += springForce + gravityForce + restingForce;
      state.velocity *= damping;

      // Add slight randomness for more natural movement
      if (Math.abs(state.velocity) < 0.1 && Math.abs(angleDiff) < 0.5) {
        state.velocity += (Math.random() - 0.5) * 0.02;
      }

      state.angle += state.velocity;

      // Clamp angle to prevent over-rotation
      state.angle = Math.max(-35, Math.min(35, state.angle));

      // Apply transform with smoother interpolation
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
      keychains.forEach((keychain) => {
        handleMouseMove(e, keychain.id);
      });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return (
    <>
      <div className="min-h-screen max-w-[1310px] mx-auto relative overflow-hidden">
        {/* Main Content */}
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
          {activeSection === "primary" ? (
            /* Primary Research Section */
            <div>
              <div className="min-h-screen absolute top-8 right-8 z-20">
                <button
                  onClick={() => setActiveSection("secondary")}
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-16">
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {primaryCards.map((card, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`absolute ${card.position} ${card.color} h-[${card.height}] w-[276px] ${card.rotate} text-white p-6 shadow-xl transform hover:scale-105 transition-transform duration-300`}
                      >
                        <h3 className="font-bold text-xl mb-4 border-b-2 border-white pb-6 uppercase">
                          {card.title}
                        </h3>
                        <p className="text-xl note italic">{card.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="min-h-screen absolute top-8 left-8 z-20">
                <button
                  onClick={() => setActiveSection("primary")}
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
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </button>
              </div>
              {/*  Secondary Research Section */}
              <div className="space-y-16 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {/* First Photo with Text */}
                  <div className="relative">
                    <div className="absolute note tracking-wider left-16 top-36 w-[156px] h-[156px] bg-[#9B1B25] text-white p-3 shadow-xl z-10 max-w-xs italic">
                      <p className="text-sm leading-relaxed">
                        Well not your average photogenic guy. I&apos;m much more
                        into mirror selfies...
                      </p>
                    </div>

                    <Image
                      src="/Images/Portfolio/image1.png"
                      height={288}
                      width={240}
                      alt="Secondary Research"
                      className="absolute left-32 top-48"
                    />
                  </div>

                  {/* Second Photo with Text */}
                  <div className="relative space-y-6">
                    <div>
                      <Image
                        src="/Images/Portfolio/image2.png"
                        height={227}
                        width={189}
                        alt="Secondary Research"
                        className="absolute top-19 left-10"
                      />
                    </div>
                    <div className="absolute top-64 left-36 bg-[#FFB629] text-white w-[143px] h-[178px] p-3 note tracking-wider shadow-xl italic max-w-xs">
                      <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </div>

                  {/* Third Photo with Text */}
                  <div className="relative">
                    <div>
                      <Image
                        src="/Images/Portfolio/image3.png"
                        height={205}
                        width={205}
                        alt="Secondary Research"
                        className="absolute top-24"
                      />
                    </div>
                    <div className="absolute -left-20 top-24 w-[143px] h-[112px] p-3 note tracking-wider bg-[#276A96] text-white shadow-xl z-10 max-w-xs italic">
                      <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  {/* Fourth Photo with Text */}
                  <div className="relative">
                    <div>
                      <Image
                        src="/Images/Portfolio/image4.png"
                        height={259}
                        width={262}
                        alt="Secondary Research"
                        className="absolute right-24 top-14"
                      />
                    </div>
                    <div className="absolute right-12 top-57 w-[143px] h-[156px] bg-[#0E7F01] text-white p-3 note tracking-wider shadow-xl z-10 max-w-xs italic">
                      <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}

          <div className="relative w-full text-center py-20">
            {/* Animated Heading */}
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
                } mx-auto`}
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
      <div className="relative z-30 flex justify-center gap-8 md:gap-12 flex-wrap px-4 pt-8">
        {keychains.map((keychain) => (
          <div
            key={keychain.id}
            id={`keychain-${keychain.id}`}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredKeychain(keychain.id)}
            onMouseLeave={() => setHoveredKeychain(null)}
          >
            {/* Ring */}
            <div className="w-12 h-5 flex justify-center relative z-30">
              <div className="w-10 h-10 rounded-full border-4 border-gray-400 shadow-lg bg-gray-300"></div>
            </div>

            {/* Swinging chain and icon */}
            <div
              id={`keychain-chain-${keychain.id}`}
              className="absolute left-1/2 top-5"
              style={{
                transform: "rotate(0deg)",
                transformOrigin: "top center",
                transition: "none",
              }}
            >
              <div className="relative" style={{ marginLeft: "-2px" }}>
                {/* Chain links */}
                <div className="absolute top-2 flex flex-col items-center">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-4 bg-gradient-to-b from-gray-500 to-gray-400 rounded-full mb-0.5 shadow-md"
                    ></div>
                  ))}
                </div>

                {/* Icon card */}
                <div
                  className="absolute top-14 w-20 h-20 rounded-2xl shadow-2xl flex items-center justify-center transform transition-transform hover:scale-110"
                  style={{
                    marginLeft: "-36px",
                    background: keychain.bg,
                  }}
                >
                  {keychain.svg}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </>
  );
};

export default PortfolioPage;
