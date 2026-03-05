"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Buttons from "../Buttons";

export default function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Disable scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [showPopup]);

  const handleOpen = () => {
    setShowPopup(true);
    setTimeout(() => setIsVisible(true), 20);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowPopup(false), 450);
  };

  // Animation transitions
  const bounceSpring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
    bounce: 0.45,
  };
  const popupBounceSpring = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    mass: 0.8,
  };

  return (
    <div className="mt-16 sm:mt-0 pb-10 sm:pb-0 relative w-full overflow-hidden">
      <motion.div
        className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...bounceSpring, duration: 0.6 }}
      >
        {/* Custom Cursor */}
        {showCursor && !showPopup && (
          <div
            className="fixed pointer-events-none z-[9999] flex items-center gap-1 bg-black/50 rounded-full p-2"
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
        {/* <motion.div
          className="text-center mb-6 sm:mb-16 select-none "
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...bounceSpring, delay: 0.1 }}
        >
          <h3 className="text-xs sm:text-sm md:text-base lg:text-[24px] font-medium text-gray-800/65 mb-3">
            Bhopal, INDIA
          </h3>
          <p className="lowercase text-gray-800/65 text-xs sm:text-sm md:text-base lg:text-[24px] font-medium">
            VIDITSHAH2019@GMAIL.COM
          </p>
        </motion.div> */}

        {/* Name Section */}
        <motion.div
          className="relative px-4 z-[100] mt-[76px]"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...bounceSpring, delay: 0.2 }}
        >
          {/* Yellow Note */}
          <div
            className="absolute z-10 top-[12px] xs:top-[5px] sm:top-[12px] md:top-[9px] lg:top-[8px] left-[0.2%] xs:-left-[1%] sm:-left-[1.5%] md:-left-[2%] lg:-left-[2%] xl:-left-[2.2%] transition-all duration-500 ease-in-out"
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
            onClick={handleOpen}
          >
            <div className="cursor-none relative w-[70px] sm:w-[65px] md:w-[60px] inline-block origin-top transition-transform duration-500 ease-[cubic-bezier(0.25,1.25,0.5,1)] rotate-[24deg] hover:rotate-[34deg] hover:scale-[1.4]">
              <Image
                src="/Images/svg/smallNote.svg"
                alt="Sticky note hint"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-8 sm:w-13 md:w-16 lg:w-20 xl:w-24 pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Popup */}
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
                  className="fixed inset-0 bg-black z-[998]"
                  onClick={handleClose}
                />

                {/* Popup Note */}
                <motion.div
                  key="popup"
                  className="fixed inset-0 flex items-center justify-center z-[999]"
                  initial={{ opacity: 0, scale: 0.3, y: 100 }}
                  animate={
                    isVisible
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.3, y: 100 }
                  }
                  exit={{ opacity: 0, scale: 0.3, y: 100 }}
                  transition={popupBounceSpring}
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
                      className="w-[260px] sm:w-[340px] md:w-[480px] lg:w-[500px] h-auto select-none drop-shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Name */}
          <motion.div
            className="relative z-50 text-center font-bold text-gray-900 tracking-[-0.025em] leading-none text-[40px] sm:text-[60px] md:text-8xl mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...bounceSpring, delay: 0.3 }}
          >
            {/* <Image
              src="/Images/svg/name.svg"
              alt="Vidit Shah"
              width={70}
              height={70}
              className="w-[205px] sm:w-[400px] md:w-full h-auto mx-auto"
            /> */}
            <h1 className="text-5xl xs:text-7xl sm:text-8xl text-(--text-color) font-(--font-futura)">
              ViDiT SHaH
            </h1>
          </motion.div>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          className="sm:text-[24px] font-medium text-[#1a1a1aA6] text-center tracking-tight max-w-xs sm:max-w-lg mb-3 sm:mb-8 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounceSpring, delay: 0.35 }}
        >
          Turning complex problems into simple and intuitive digital
          experiences.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          className="flex justify-center sm:mb-6  mt-5 sm:mt-0 space-x-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.3,
          }}
        >
          <Buttons
            ButtonName="View Resume"
            href="/files/vidit_shah_resume.pdf"
            className=" rounded-full py-3 px-5 bg-(--button-color)/95 hover:bg-(--button-color) text-white cursor-pointer"
          />
          {/* <Buttons
            ButtonName="Cover Letter"
            className=" rounded-full py-3 px-5 bg-[#1a1a1a1a] hover:bg-[#dddddd] text-black cursor-pointer font-semibold"
          /> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
