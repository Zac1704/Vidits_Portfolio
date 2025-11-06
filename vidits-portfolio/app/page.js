"use client";

import Buttons from "@/components/Buttons";
import HeroSection from "@/components/HeroSection";
import HoverRevealText from "@/components/HoverRevealText";
import MyWork from "@/components/MyWork";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <div className="max-w-7xl space-y-10 mx-auto hide-scrollbar">
      <HeroSection />
      {/* <motion.div
        className="flex justify-center py-10"
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
      </motion.div> */}
      <ScrollReveal>
        <MyWork />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <HoverRevealText />
      </ScrollReveal>
    </div>
  );
}

function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 },
        y: { type: "spring", stiffness: 100, damping: 20 },
        scale: { duration: 0.6 },
      }}
    >
      {children}
    </motion.div>
  );
}
