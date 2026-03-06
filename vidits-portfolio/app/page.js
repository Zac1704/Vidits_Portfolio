"use client";

import dynamic from "next/dynamic";
import Buttons from "@/components/Buttons";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import ScrollReveal from "../hooks/ScrollRevealHooks";
import { useState } from "react";
import PortfolioRow from "@/components/HeroSection/ShakingPortfolioSection";

// Lazy load below-the-fold components to reduce initial bundle size and speed up page load
const HoverRevealText = dynamic(() => import("@/components/HoverRevealText"));
const MyWork = dynamic(() => import("@/components/MyWork"));
const ToolStack = dynamic(() => import("@/components/ToolStack"));
const Skills = dynamic(() => import("@/components/Skills"));
const ExperienceJourney = dynamic(() => import("@/components/ExperienceJourney"));
const MyStory = dynamic(() => import("@/components/MyStory"));
const ProjectArchieve = dynamic(() => import("@/components/ProjectArchieve"));
const ImageModal = dynamic(() => import("../components/ImageModal"));

export default function Home() {
  const [carouselData, setCarouselData] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(-1);

  const bounceSpring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
    bounce: 0.45,
  };

  return (
    <>
      {/* Main content constrained */}
      <div className="flex flex-col gap-24 sm:gap-32 overflow-clip">
        <HeroSection />

        {/* Portfolio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...bounceSpring, delay: 0.4 }}
          className="w-full flex justify-center -mt-20"
        >
          <PortfolioRow />
        </motion.div>

        <ScrollReveal>
          <MyWork />
        </ScrollReveal>

        <ScrollReveal>
          <ToolStack />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ExperienceJourney />

        <MyStory />

        <ProjectArchieve
          onImageSelect={(items, index) => {
            setCarouselData(items);
            setCarouselIndex(index);
          }}
        />

        <ScrollReveal delay={0.2}>
          <HoverRevealText />
        </ScrollReveal>
      </div>

      {/* Modal rendered outside container */}
      <ImageModal
        items={carouselData}
        initialIndex={carouselIndex}
        onClose={() => {
          setCarouselData([]);
          setCarouselIndex(-1);
        }}
      />
    </>
  );
}
