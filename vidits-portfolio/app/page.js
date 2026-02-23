"use client";

import Buttons from "@/components/Buttons";
import HeroSection from "@/components/HeroSection";
import HoverRevealText from "@/components/HoverRevealText";
import MyWork from "@/components/MyWork";
import { motion } from "framer-motion";
import ScrollReveal from "../hooks/ScrollRevealHooks";
import { useState } from "react";
import ImageModal from "../components/MyWork/ImageModal";
import PortfolioRow from "@/components/HeroSection/ShakingPortfolioSection";

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const bounceSpring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
    bounce: 0.45,
  };

  return (
    <>
      {/* Main content constrained */}
      <div className="max-w-7xl space-y-8 mx-auto">
        <HeroSection />

        {/* Portfolio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...bounceSpring, delay: 0.4 }}
          className="mb-20"
        >
          <PortfolioRow />
        </motion.div>

        <ScrollReveal>
          <MyWork
            onImageSelect={(img, title) => {
              setSelectedImg(img);
              setSelectedTitle(title);
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <HoverRevealText />
        </ScrollReveal>
      </div>

      {/* Modal rendered outside container */}
      <ImageModal
        img={selectedImg}
        title={selectedTitle}
        onClose={() => setSelectedImg(null)}
      />
    </>
  );
}
