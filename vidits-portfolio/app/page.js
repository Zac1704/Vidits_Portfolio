"use client";

import Buttons from "@/components/Buttons";
import HeroSection from "@/components/HeroSection";
import HoverRevealText from "@/components/HoverRevealText";
import MyWork from "@/components/MyWork";
import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../hooks/ScrollRevealHooks";

export default function Home() {
  return (
    <div className="max-w-7xl sm:space-y-8 mx-auto hide-scrollbar">
      <HeroSection />
      <motion.div
        className="flex justify-center mb-12 mt-5 sm:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          delay: 0.3,
        }}
      >
        <Buttons ButtonName="resume" src="/Images/Button/star.svg" />
      </motion.div>

      <ScrollReveal>
        <MyWork />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <HoverRevealText />
      </ScrollReveal>
    </div>
  );
}
