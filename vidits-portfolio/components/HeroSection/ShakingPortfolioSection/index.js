"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function BouncyImageStack() {
  // Shared mouse-based motion values
  const baseX = useMotionValue(0);
  const baseY = useMotionValue(0);

  // Gentle, smooth spring motion with optimized settings
  const springX = useSpring(baseX, { stiffness: 80, damping: 20, mass: 1 });
  const springY = useSpring(baseY, { stiffness: 80, damping: 20, mass: 1 });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / 10;
      const offsetY = (e.clientY - innerHeight / 2) / 10;
      baseX.set(offsetX);
      baseY.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [baseX, baseY]);

  const cards = useMemo(
    () => [
      { src: "/Images/heroSection/post1.webp", rotate: "rotate-4", z: "z-0" },
      {
        src: "/Images/heroSection/post2.webp",
        rotate: "-rotate-4",
        z: "z-10 -mt-10",
      },
      { src: "/Images/heroSection/post3.webp", rotate: "rotate-4", z: "z-20" },
      {
        src: "/Images/heroSection/post4.webp",
        rotate: "-rotate-4",
        z: "z-30 -mt-10",
      },
    ],
    []
  );

  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="flex justify-center items-center -space-x-20 cursor-default select-none">
        {cards.map((card, i) => {
          return (
            <CardItem
              key={i}
              card={card}
              index={i}
              springX={springX}
              springY={springY}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          );
        })}
      </div>
    </div>
  );
}

function CardItem({
  card,
  index,
  springX,
  springY,
  hoveredIndex,
  setHoveredIndex,
}) {
  // Smooth intensity blending with stable calculations
  const baseIntensity = 0.8 + index * 0.4;
  const targetIntensity =
    hoveredIndex === index ? baseIntensity * 8 : baseIntensity * 0.3;

  // Animated intensity for smooth transitions
  const animatedIntensity = useSpring(targetIntensity, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  // Memoized transforms to prevent recreation
  const x = useTransform(springX, (val) => val * animatedIntensity.get());
  const y = useTransform(springY, (val) => val * animatedIntensity.get());

  // Update animated intensity when target changes
  useEffect(() => {
    animatedIntensity.set(targetIntensity);
  }, [targetIntensity, animatedIntensity]);

  return (
    <motion.div
      style={{ x, y }}
      className={`transform ${card.rotate} ${card.z}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <motion.div
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 16,
          mass: 0.6,
        }}
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-xl shadow-xl overflow-hidden bg-black will-change-transform"
        style={{ backfaceVisibility: "hidden", perspective: 1000 }}
      >
        <Image
          width={224}
          height={224}
          src={card.src}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover"
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
          priority={index === 0}
          quality={90}
        />
      </motion.div>
    </motion.div>
  );
}
