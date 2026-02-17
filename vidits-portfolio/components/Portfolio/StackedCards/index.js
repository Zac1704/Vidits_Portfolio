"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
  { color: "#9B1B25", title: "Card One" },
  { color: "#FFB629", title: "Card Two" },
  { color: "#276A96", title: "Card Three" },
  { color: "#0E7F01", title: "Card Four" },
];

const CARD_HEIGHT = 400;
const CARD_GAP = 40;

const StackedCards = ({ containerRef }) => {
  // Track scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full py-20">
      {CARDS.map((card, index) => {
        return (
          <Card
            key={index}
            {...card}
            index={index}
            totalCards={CARDS.length}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
};

const Card = ({ color, index, totalCards, progress }) => {
  // Logic: Each card starts scaling down as we progress through the scroll
  // We calculate the 'start' point based on the card's index
  const start = index * (1 / totalCards);
  const targetScale = 1 - (totalCards - index) * 0.05;

  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="flex items-start justify-center h-screen sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          height: `${CARD_HEIGHT}px`,
          top: `calc(10% + ${index * CARD_GAP}px)`,
          scale,
          transformOrigin: "top center",
        }}
        className="relative w-full max-w-4xl rounded-3xl shadow-2xl p-8 text-white"
      >
        <h2 className="text-4xl font-bold">Card {index + 1}</h2>
      </motion.div>
    </div>
  );
};

export default StackedCards;
