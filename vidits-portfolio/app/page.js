"use client";

import Buttons from "@/components/Buttons";
import HeroSection from "@/components/HeroSection";
import HoverRevealText from "@/components/HoverRevealText";
import MyWork from "@/components/MyWork";
import ToolStack from "@/components/ToolStack";
import Skills from "@/components/Skills";
import ExperienceJourney from "@/components/ExperienceJourney";
import MyStory from "@/components/MyStory";
import { motion } from "framer-motion";
import ScrollReveal from "../hooks/ScrollRevealHooks";
import { useState } from "react";
import ImageModal from "../components/MyWork/ImageModal";
import PortfolioRow from "@/components/HeroSection/ShakingPortfolioSection";
import ProjectArchieve from "@/components/ProjectArchieve";

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
          <MyWork
            onImageSelect={(items, index) => {
              setCarouselData(items);
              setCarouselIndex(index);
            }}
          />
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
