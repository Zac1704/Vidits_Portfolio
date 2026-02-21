"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { designSystemSections } from "./DesignComponents";

const DesignSystemSection = () => {
  const [active, setActive] = useState("Color Palette");
  const options = Object.keys(designSystemSections);

  const ActiveComponent = designSystemSections[active];

  return (
    <>
      {/* Top Segment Selector */}
      <div className="relative w-full overflow-x-auto mb-8">
        <div className="flex p-1 bg-[#eeeeee] rounded-xl border border-zinc-200/50 w-max md:w-fit mx-auto md:mx-0 gap-1">
          {options.map((option) => {
            const isActive = active === option;

            return (
              <button
                key={option}
                onClick={() => setActive(option)}
                className={`relative px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-colors duration-300 rounded-lg font-inter ${
                  isActive
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-md shadow-sm ring-1 ring-black/5"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Section */}
      <div className="space-y-8">
        <ActiveComponent />
      </div>
    </>
  );
};

export default DesignSystemSection;
