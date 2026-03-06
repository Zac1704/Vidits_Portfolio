"use client";

import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { motion, useSpring, AnimatePresence } from "framer-motion";

const springTransition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

const MagneticIcon = ({
  icon: Icon,
  iconSrc,
  color,
  label,
  delay,
  top,
  left,
  size,
  iconScale = 1,
  id,
}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(0, springTransition);
  const springY = useSpring(0, springTransition);

  // Stabilize random durations across renders
  const floatingAnimation = useMemo(
    () => ({
      y: ["-8px", "8px"],
      x: ["-4px", "4px"],
      transition: {
        y: {
          duration: 2.5 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
        x: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay + 0.5,
        },
      },
    }),
    [delay],
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const pullX = (clientX - (left + width / 2)) * 0.4;
    const pullY = (clientY - (top + height / 2)) * 0.4;
    springX.set(pullX);
    springY.set(pullY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="absolute z-10 flex flex-col items-center justify-center"
      style={{
        top,
        left,
        x: springX,
        y: springY,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={isHovered ? {} : floatingAnimation}
      tabIndex={0}
      role="button"
      aria-label={`${label ?? id} tool icon`}
    >
      {/* Icon card */}
      <div
        className="relative  bg-white rounded-[2rem] flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.04)",
        }}
      >
        {Icon ? (
          <Icon
            style={{
              color,
              fill: color,
              fontSize: size * 0.48 * iconScale,
            }}
          />
        ) : (
          <Image
            src={iconSrc}
            alt={`${id} icon`}
            width={size * 0.48 * iconScale}
            height={size * 0.48 * iconScale}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>

      {/* Hover label tag */}
      <AnimatePresence>
        {isHovered && label && (
          <motion.span
            key="label"
            initial={{ opacity: 0, y: -6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.92 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute pointer-events-none select-none whitespace-nowrap"
            style={{
              top: "calc(100% + 8px)",
              background: "rgba(17,17,17,0.88)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "#fff",
              fontSize: Math.max(size * 0.115, 11),
              fontWeight: 600,
              letterSpacing: "-0.01em",
              padding: "4px 10px",
              borderRadius: "999px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
              zIndex: 50,
            }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MagneticIcon;
