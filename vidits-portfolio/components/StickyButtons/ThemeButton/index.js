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
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative flex items-center justify-center">
        {/* Expanding Color Circles */}
        <AnimatePresence>
          {open &&
            colors.map((item, index) => {
              const angle = -20 + index * (120 / (colors.length - 1));
              const radius = 64;
              const x = -Math.cos((angle * Math.PI) / 180) * radius;
              const y = -Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, x, y, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  transition={{
                    duration: 0.18, // ⚡ faster animation
                    ease: [0.4, 0, 0.2, 1], // smooth cubic ease
                    delay: index * 0.015, // quicker stagger
                  }}
                  className="absolute -z-10"
                >
                  <button
                    onClick={() => console.log(`Color selected: ${item.color}`)}
                    className="w-10 h-10 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-150"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>

        {/* Central Button */}
        <button
          onClick={togglePalette}
          className="bg-gray-200 p-4 rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer relative z-10"
        >
          <ThemeIcon size={40} color="#363636" />
        </button>
      </div>
    </div>
  );
}
