"use client";

import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

import Image from "next/image";

// 🔹 Base component
export default function MomentumHoverCardsBase({
  cards,
  intensity = 2,
  cardWidth = 220,
  cardHeight = 220,
  overlap = 0.8,
  maxRotation = 5,
  dampening = 50,
  stiffness = 300,
  cardBorderRadius = 12,
  enableEntranceAnimation = true,
  entranceStaggerDelay = 0.1,
  respectMotionPreference = true,
  style,
  rotate,
  height,
  wrapperClassName = "",
  mobileWidth = 110,
  mobileHeight = 110,
}) {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const containerRectRef = useRef(null);

  // 🔹 Responsive card sizing
  const [dimensions, setDimensions] = useState({
    width: cardWidth,
    height: cardHeight,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 375) {
          setDimensions({ width: mobileWidth - 10, height: mobileHeight - 10 }); // smaller Mobile
        } else if (window.innerWidth < 640) {
          setDimensions({ width: mobileWidth, height: mobileHeight }); // Mobile
        } else if (window.innerWidth < 1024) {
          setDimensions({ width: 160, height: 160 }); // Tablet
        } else {
          setDimensions({ width: cardWidth, height: cardHeight }); // Desktop
        }
      }
    };

    updateDimensions();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimensions);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateDimensions);
      }
    };
  }, [cardWidth, cardHeight, mobileWidth, mobileHeight]);

  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    respectMotionPreference &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const calculateStaggerDelay = useCallback(
    (index, totalCards) => {
      if (!enableEntranceAnimation || prefersReducedMotion) return 0;
      const center = (totalCards - 1) / 2;
      const dist = Math.abs(index - center);
      return dist * entranceStaggerDelay;
    },
    [enableEntranceAnimation, entranceStaggerDelay, prefersReducedMotion],
  );

  // Mouse/touch motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseVX = useMotionValue(0);
  const mouseVY = useMotionValue(0);
  const prevMouseX = useRef(0);
  const prevMouseY = useRef(0);
  const lastTime = useRef(Date.now());
  const springConfig = useMemo(
    () => ({
      damping: dampening,
      stiffness: stiffness,
    }),
    [dampening, stiffness],
  );

  const handlePointerMove = useCallback(
    (x, y) => {
      if (!containerRef.current) return;
      const rect = containerRectRef.current || containerRef.current.getBoundingClientRect();
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current;

      const relX = x - rect.left;
      const relY = y - rect.top;

      if (deltaTime > 0) {
        const vx = ((relX - prevMouseX.current) / deltaTime) * 1000;
        const vy = ((relY - prevMouseY.current) / deltaTime) * 1000;
        mouseVX.set(vx);
        mouseVY.set(vy);
      }

      mouseX.set(relX);
      mouseY.set(relY);
      prevMouseX.current = relX;
      prevMouseY.current = relY;
      lastTime.current = currentTime;
    },
    [mouseX, mouseY, mouseVX, mouseVY],
  );

  const handleMouseMove = useCallback(
    (e) => handlePointerMove(e.clientX, e.clientY),
    [handlePointerMove],
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove(touch.clientX, touch.clientY);
      }
    },
    [handlePointerMove],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    if (containerRef.current) {
      containerRectRef.current = containerRef.current.getBoundingClientRect();
    }
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    mouseVX.set(0);
    mouseVY.set(0);
  }, [mouseVX, mouseVY]);

  const handleTouchStart = useCallback(() => {
    setIsTouching(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);
    mouseVX.set(0);
    mouseVY.set(0);
  }, [mouseVX, mouseVY]);

  // render cards
  const renderedCards = useMemo(() => {
    return cards.map((card, index) => (
      <MomentumCard
        key={card.id || index}
        card={card}
        index={index}
        totalCards={cards.length}
        mouseX={mouseX}
        mouseY={mouseY}
        mouseVX={mouseVX}
        mouseVY={mouseVY}
        isHovering={isHovering || isTouching}
        cardWidth={dimensions.width}
        cardHeight={dimensions.height}
        intensity={intensity}
        maxRotation={maxRotation}
        cardBorderRadius={cardBorderRadius}
        isInView={isInView}
        staggerDelay={calculateStaggerDelay(index, cards.length)}
        enableEntranceAnimation={enableEntranceAnimation}
        prefersReducedMotion={prefersReducedMotion}
        springConfig={springConfig}
        rotate={rotate}
        height={height}
      />
    ));
  }, [
    cards,
    mouseX,
    mouseY,
    mouseVX,
    mouseVY,
    isHovering,
    isTouching,
    dimensions,
    intensity,
    maxRotation,
    cardBorderRadius,
    isInView,
    calculateStaggerDelay,
    enableEntranceAnimation,
    prefersReducedMotion,
    springConfig,
    rotate,
    height,
  ]);

  return (
    <motion.div
      ref={containerRef}
      className={wrapperClassName}
      style={{
        ...style,
        position: "relative",
        width: `${dimensions.width + (cards.length - 1) * dimensions.width * overlap
          }px`,
        height: `${dimensions.height}px`,
        overflow: "visible",
        touchAction: "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {renderedCards.map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: `${i * dimensions.width * overlap}px`,
            zIndex: i,
          }}
        >
          {card}
        </div>
      ))}
    </motion.div>
  );
}

// 🔹 Shared Card Component
function MomentumCard({
  card,
  index,
  mouseX,
  mouseY,
  mouseVX,
  mouseVY,
  isHovering,
  cardWidth,
  cardHeight,
  intensity,
  maxRotation,
  cardBorderRadius,
  isInView,
  staggerDelay,
  enableEntranceAnimation,
  prefersReducedMotion,
  springConfig,
  rotate,
  height,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const gapEstimate = 20;
  const cardCenterX = (index + 0.5) * (cardWidth + gapEstimate);
  const cardCenterY = cardHeight / 2;

  const relativeX = useTransform(mouseX, (x) => x - cardCenterX);
  const relativeY = useTransform(mouseY, (y) => y - cardCenterY);
  const distance = useTransform([relativeX, relativeY], ([x, y]) =>
    Math.sqrt(x * x + y * y),
  );
  const influence = useTransform(distance, [0, 200], [1, 0], { clamp: true });

  const rotateX = useTransform(
    [relativeY, mouseVY, influence],
    ([y, vy, inf]) =>
      !isHovering
        ? 0
        : -(
          (y / 100) * maxRotation * inf +
          (vy / 1000) * maxRotation * intensity * inf
        ),
  );
  const rotateY = useTransform(
    [relativeX, mouseVX, influence],
    ([x, vx, inf]) =>
      !isHovering
        ? 0
        : (x / 100) * maxRotation * inf +
        (vx / 1000) * maxRotation * intensity * inf,
  );

  const translateX = useTransform(
    [relativeX, mouseVX, influence],
    ([x, vx, inf]) =>
      !isHovering
        ? 0
        : ((x / 50) * intensity * inf + (vx / 100) * intensity * inf) * 10,
  );
  const translateY = useTransform(
    [relativeY, mouseVY, influence],
    ([y, vy, inf]) =>
      !isHovering
        ? 0
        : ((y / 50) * intensity * inf + (vy / 100) * intensity * inf) * 10,
  );

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springTranslateX = useSpring(translateX, springConfig);
  const springTranslateY = useSpring(translateY, springConfig);
  const scale = useTransform(influence, [0, 1], [1.02, 1], { clamp: true });
  const springScale = useSpring(
    useTransform(scale, (s) => (isHovering ? s : 1)),
    springConfig,
  );

  const entranceVariants = {
    hidden: {
      opacity: enableEntranceAnimation ? 0 : 1,
      y: enableEntranceAnimation ? "35%" : "0%",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: {
        duration: 0.6,
        delay: staggerDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const shouldAnimate = enableEntranceAnimation && !prefersReducedMotion;

  return (
    <motion.div
      variants={shouldAnimate ? entranceVariants : undefined}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={shouldAnimate && isInView ? "visible" : "visible"}
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        transformStyle: "preserve-3d",
        rotateX: springRotateX,
        rotateY: springRotateY,
        translateX: springTranslateX,
        translateY: springTranslateY,
        scale: springScale,
        transformOrigin: "center center",
        boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
        borderRadius: `${cardBorderRadius}px`,
        willChange: "transform",
      }}
      className={`${rotate}`}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: `${cardBorderRadius}px`,
          overflow: "hidden",
          position: "relative",
          marginTop: `${height}px`,
        }}
      >
        {/* Skeleton Loader */}
        {!isLoaded && (
          <div
            className="absolute inset-0"
            style={{
              background: "#e5e7eb",
              borderRadius: `${cardBorderRadius}px`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(110deg, #e5e7eb 0%, #f4f4f4 50%, #e5e7eb 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
          </div>
        )}

        <Image
          src={card.src}
          alt={`Card ${index + 1}`}
          fill
          onLoadingComplete={() => setIsLoaded(true)}
          priority
          style={{
            objectFit: "cover",
            borderRadius: `${cardBorderRadius}px`,
            border: "4px solid #fff",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
