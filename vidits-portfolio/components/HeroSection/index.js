"use client";

import Image from "next/image";
import Buttons from "../Buttons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BouncyImageStack from "./ShakingPortfolioSection";

export default function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleOpen = () => {
    setShowPopup(true);
    setTimeout(() => setIsVisible(true), 20);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowPopup(false), 450);
  };

  return (
    <div className="sm:min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-6 overflow-x-hidden">
      {/* Custom Cursor */}
      {showCursor && !showPopup && (
        <div
          className="fixed pointer-events-none z-[9999] flex items-center gap-1 transition-transform duration-100 bg-black/50 rounded-full p-2"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-base">🤔</span>
          <span className="text-white font-bold text-base">HUHH!!</span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 select-none">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-[20px] font-bold text-gray-800 mb-2">
          INDORE, INDIA
        </h3>
        <p className="text-(--gray-text-color) text-xs sm:text-sm md:text-base lg:text-[20px] font-bold">
          VIDITSHAH2019@GMAIL.COM
        </p>
      </div>

      {/* Name Section */}
      <div className="relative mb-5 sm:mb-10 px-4 z-[100]">
        {/* Yellow Note */}
        <div
          className="absolute z-10 top-1 sm:top-2.5 md:top-2 lg:top-[3px] -left-[3.5%] sm:-left-[5%] md:-left-[5.5%] lg:-left-[5%] xl:-left-[2.1%] transition-all duration-500 ease-in-out cursor-none"
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onClick={handleOpen}
        >
          <div
            className="relative w-[70px] sm:w-[65px] md:w-[60px] inline-block origin-top transition-transform duration-500 ease-[cubic-bezier(0.25,1.25,0.5,1)] rotate-[24deg] hover:rotate-[34deg] hover:scale-[1.4] cursor-none"
            style={{
              transformOrigin: "top center",
              willChange: "transform",
            }}
          >
            <Image
              src="/Images/svg/smallNote.svg"
              alt="Note Background"
              width={60}
              height={60}
              className="w-full h-auto pointer-events-none select-none cursor-none"
            />
          </div>
        </div>

        {/* Popup with animation */}
        <AnimatePresence>
          {showPopup && (
            <>
              {/* Overlay */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 0.8 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 bg-black z-[998] cursor-pointer"
                onClick={handleClose}
              />

              {/* Popup SVG */}
              <motion.div
                key="popup"
                className="fixed inset-0 flex items-center justify-center z-[999]"
                initial={{ opacity: 0, scale: 0.7, y: 60 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1, y: 0, rotate: 0 }
                    : { opacity: 0, scale: 0.8, y: 50 }
                }
                exit={{ opacity: 0, scale: 0.6, y: 100, rotate: 12 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                onClick={handleClose}
              >
                <motion.div
                  className="relative transform transition-transform duration-300 ease-in-out"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src="/Images/svg/Note.svg"
                    alt="Popup Note"
                    width={500}
                    height={500}
                    className="w-[300px] sm:w-[350px] md:w-[500px] h-auto select-none drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Name */}
        <div className="relative z-50 text-center text-5xl sm:text-8xl font-black text-gray-900 tracking-[-0.025em] leading-none">
          <Image
            src="/Images/svg/name.svg"
            alt="Note Background"
            width={70}
            height={70}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Portfolio Images */}
      <BouncyImageStack />
      {/* <div className="w-full py-2">
        <div className="flex justify-center items-center -space-x-20">
          <div className="transform rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={200}
                height={200}
                src="/Images/heroSection/post1.webp"
                alt="Atulyn K Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="transform -rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-10 -mt-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={192}
                height={192}
                src="/Images/heroSection/post2.webp"
                alt="Rollin & Purrin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="transform rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-black rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={192}
                height={192}
                src="/Images/heroSection/post3.webp"
                alt="The Eyes Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="transform -rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-30 -mt-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={192}
                height={192}
                src="/Images/heroSection/post4.webp"
                alt="Modern Typography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div> */}

      
      {/* Title */}
      <div className="text-center relative px-4 w-full mt-7">
        <h2 className="text-4xl sm:text-8xl font-black text-(--gray-text-color) tracking-tight leading-tight">
          GRAPHICS & UI/UX
        </h2>
        <div className="flex items-center justify-center flex-wrap">
          <h2 className="text-3xl sm:text-8xl font-black text-(--gray-text-color) tracking-tight">
            DESIGNE₹
          </h2>
        </div>
      </div>

      <div className="py-8">
        <Buttons ButtonName="resume" src="/Images/Button/star.svg" />
      </div>
    </div>
  );
}
