"use client";

import { useState, useRef, useMemo, memo, useEffect } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { DEFAULT_ITEMS } from "./AppleDock.constant";
import Image from "next/image";

// ------------------------------------------
// Responsive Settings
// ------------------------------------------
const responsiveConfig = (width) => {
  if (width < 480)
    return {
      baseSize: 45,
      magnification: 1.15,
      gap: 6,
      distance: 100,
      paddingX: 8,
      paddingY: 6,
    };

  if (width < 768)
    return {
      baseSize: 50,
      magnification: 1.25,
      gap: 8,
      distance: 120,
      paddingX: 10,
      paddingY: 8,
    };

  return {
    baseSize: 58,
    magnification: 1.3,
    gap: 10,
    distance: 140,
    paddingX: 10,
    paddingY: 8,
  };
};

// ------------------------------------------
// AppleDock Component
// ------------------------------------------
const AppleDock = ({ items = DEFAULT_ITEMS, borderRadius = 20, hoverText }) => {
  const mouseX = useMotionValue(Infinity);
  const finalItems = useMemo(() => items ?? DEFAULT_ITEMS, [items]);

  // Handle scroll hide/show
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // -------------------------
  // ✅ Make width reactive
  // -------------------------
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1600,
  );

  useEffect(() => {
    const updateSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { baseSize, magnification, gap, distance, paddingX, paddingY } =
    responsiveConfig(screenWidth);

  const isMobile = screenWidth < 480;

  return (
    <>

      <motion.div
        className="flex justify-center fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[999]"
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 100, opacity: 0 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.nav
          className="rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-[0_28px_100px_rgba(0,0,0,0.2),inset_1px_1px_0_rgba(255,255,255,0.8),inset_-1px_-1px_0_rgba(255,255,255,0.1)] inline-flex"
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: `${paddingY}px ${paddingX}px`,
            backdropFilter: "url(#glass-distortion) saturate(120%)",
            WebkitBackdropFilter: "url(#glass-distortion) saturate(120%)",
            // Hardware acceleration hints for the backdrop-filter
            transform: "translateZ(0)",
            willChange: "transform, backdrop-filter",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: gap,
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {finalItems.map((item, i) => (
              <DockIcon
                key={i}
                item={item}
                mouseX={mouseX}
                baseSize={baseSize}
                magnification={magnification}
                distance={distance}
                borderRadius={borderRadius}
                isMobile={false}
                hoverText={
                  hoverText || {
                    bgColor: "rgba(0,0,0,0.75)",
                    textColor: "#fff",
                    size: 14,
                    padding: 6,
                  }
                }
              />
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </>
  );
};

// ------------------------------------------
// Dock Icon Component
// ------------------------------------------
const DockIcon = memo(function DockIcon({
  item,
  mouseX,
  baseSize,
  magnification,
  distance,
  borderRadius,
  hoverText,
  isMobile,
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseSize, baseSize * magnification, baseSize],
  );

  const width = useSpring(widthSync, {
    mass: 0.15,
    stiffness: 150,
    damping: 14,
  });

  const finalWidth = shouldReduceMotion || isMobile ? baseSize : width;

  const [hovered, setHovered] = useState(false);

  return (
    <li style={{ display: "flex", alignItems: "flex-end" }}>
      <motion.div
        ref={ref}
        style={{
          width: finalWidth,
          height: finalWidth,
          borderRadius,
          position: "relative",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.88 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          window.location.href = item.link;
        }}
      >
        {/* Tooltip (Desktop Only) */}
        {!isMobile && (
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 0, x: "-50%" }}
                animate={{ opacity: 1, y: -14, x: "-50%" }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  top: -hoverText.size - hoverText.padding * 2 - 6,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: hoverText.bgColor,
                  color: hoverText.textColor,
                  padding: hoverText.padding,
                  borderRadius: 6,
                  fontSize: hoverText.size,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                {item.title}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </motion.div>
    </li>
  );
});

export default AppleDock;
