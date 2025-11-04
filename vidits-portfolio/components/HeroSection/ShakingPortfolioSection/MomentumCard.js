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
  disableMotionOnMobile = true,
  style,
  rotate,
}) {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        const mobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || window.innerWidth <= 768;
        setIsMobile(mobile);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const shouldDisableMotion = disableMotionOnMobile && isMobile;
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
    [enableEntranceAnimation, entranceStaggerDelay, prefersReducedMotion]
  );

  // mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseVX = useMotionValue(0);
  const mouseVY = useMotionValue(0);
  const prevMouseX = useRef(0);
  const prevMouseY = useRef(0);
  const lastTime = useRef(Date.now());
  const springConfig = { damping: dampening, stiffness: stiffness };

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (deltaTime > 0) {
        const vx = ((x - prevMouseX.current) / deltaTime) * 1000;
        const vy = ((y - prevMouseY.current) / deltaTime) * 1000;
        mouseVX.set(vx);
        mouseVY.set(vy);
      }

      mouseX.set(x);
      mouseY.set(y);
      prevMouseX.current = x;
      prevMouseY.current = y;
      lastTime.current = currentTime;
    },
    [mouseX, mouseY, mouseVX, mouseVY]
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
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
        isHovering={isHovering}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        intensity={intensity}
        maxRotation={maxRotation}
        cardBorderRadius={cardBorderRadius}
        isInView={isInView}
        staggerDelay={calculateStaggerDelay(index, cards.length)}
        enableEntranceAnimation={enableEntranceAnimation}
        prefersReducedMotion={prefersReducedMotion}
        springConfig={springConfig}
        shouldDisableMotion={shouldDisableMotion}
        rotate={rotate}
      />
    ));
  }, [
    cards,
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
    calculateStaggerDelay,
    enableEntranceAnimation,
    prefersReducedMotion,
    springConfig,
    shouldDisableMotion,
    rotate,
  ]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        ...style,
        position: "relative",
        width: `${cardWidth + (cards.length - 1) * cardWidth * overlap}px`,
        height: `${cardHeight}px`,
        overflow: "visible",
      }}
      onMouseMove={shouldDisableMotion ? undefined : handleMouseMove}
      onMouseEnter={shouldDisableMotion ? undefined : handleMouseEnter}
      onMouseLeave={shouldDisableMotion ? undefined : handleMouseLeave}
    >
      {renderedCards.map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: `${i * cardWidth * overlap}px`,
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
}) {
  const gapEstimate = 20;
  const cardCenterX = (index + 0.5) * (cardWidth + gapEstimate);
  const cardCenterY = cardHeight / 2;

  const relativeX = useTransform(mouseX, (x) => x - cardCenterX);
  const relativeY = useTransform(mouseY, (y) => y - cardCenterY);
  const distance = useTransform([relativeX, relativeY], ([x, y]) =>
    Math.sqrt(x * x + y * y)
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
          )
  );
  const rotateY = useTransform(
    [relativeX, mouseVX, influence],
    ([x, vx, inf]) =>
      !isHovering
        ? 0
        : (x / 100) * maxRotation * inf +
          (vx / 1000) * maxRotation * intensity * inf
  );

  const translateX = useTransform(
    [relativeX, mouseVX, influence],
    ([x, vx, inf]) =>
      !isHovering
        ? 0
        : ((x / 50) * intensity * inf + (vx / 100) * intensity * inf) * 10
  );
  const translateY = useTransform(
    [relativeY, mouseVY, influence],
    ([y, vy, inf]) =>
      !isHovering
        ? 0
        : ((y / 50) * intensity * inf + (vy / 100) * intensity * inf) * 10
  );

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springTranslateX = useSpring(translateX, springConfig);
  const springTranslateY = useSpring(translateY, springConfig);
  const scale = useTransform(influence, [0, 1], [1.015, 1], { clamp: true });
  const springScale = useSpring(
    useTransform(scale, (s) => (isHovering ? s : 1)),
    springConfig
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
        }}
      >
        <Image
          src={card.src}
          alt={`Card ${index + 1}`}
          fill
          style={{
            objectFit: "cover",
            borderRadius: `${cardBorderRadius}px`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
