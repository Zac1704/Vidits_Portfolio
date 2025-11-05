"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeIcon from "../../SVG/themeIcon";

export default function ThemeButton() {
  const [open, setOpen] = useState(false);

  const colors = [
    { color: "#E74C3C" }, // red
    { color: "#5FA7D9" }, // light blue
    { color: "#2E6A91" }, // dark blue
    { color: "#2F2F2F" }, // black
  ];

  const togglePalette = () => setOpen(!open);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50">
      <div className="relative flex items-center justify-center">
        {/* Expanding Color Circles */}
        <AnimatePresence>
          {open &&
            colors.map((item, index) => {
              // Default values
              let radius = 64;
              let spacingFactor = 1; // multiplier to adjust how spread out the items are

              // Handle responsiveness safely (client-side only)
              if (typeof window !== "undefined") {
                const width = window.innerWidth;

                if (width < 640) {
                  radius = 44; // mobile radius
                  spacingFactor = 0.8; // tighter cluster
                } else if (width >= 640 && width < 1024) {
                  radius = 64; // tablet
                  spacingFactor = 1; // normal spacing
                } else {
                  radius = 64; // large screens
                  spacingFactor = 1.2; // slightly wider spread
                }
              }

              // angle between buttons (adjusted spacing)
              const totalAngle = 120 * spacingFactor;
              const angle = -20 + index * (totalAngle / (colors.length - 1));

              const x = -Math.cos((angle * Math.PI) / 180) * radius;
              const y = -Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, x, y, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  transition={{
                    duration: 0.18,
                    ease: [0.4, 0, 0.2, 1],
                    delay: index * 0.015,
                  }}
                  className="absolute -z-10"
                >
                  <button
                    onClick={() => console.log(`Color selected: ${item.color}`)}
                    className="
            w-8 h-8 sm:w-10 sm:h-10
            rounded-full shadow-md cursor-pointer
            hover:scale-110 transition-transform duration-150
          "
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>

        {/* Central Button */}
        <button
          onClick={togglePalette}
          className="
        backdrop-blur-md bg-white/30 border border-white/20 
        hover:bg-white/40 active:scale-95 
        transition-all duration-300 cursor-pointer relative z-10 
        rounded-full shadow-lg flex items-center justify-center
        p-2 pr-[10px] sm:p-3 md:p-4
      "
        >
          {/* Hydration-safe SVG rendering */}
          <div className="flex items-center justify-center">
            <ThemeIcon size={40} color="#363636" />
          </div>
        </button>
      </div>
    </div>
  );
}
