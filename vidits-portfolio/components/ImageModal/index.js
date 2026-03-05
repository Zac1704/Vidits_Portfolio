"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const modal = {
  hidden: { scale: 0.85, opacity: 0, y: 30 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
      mass: 0.7,
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const ImageModal = ({ items = [], initialIndex = -1, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const hasItems = items.length > 0 && currentIndex >= 0;
  const currentItem = hasItems ? items[currentIndex] : null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Close on Esc key, Navigation on Arrows
  useEffect(() => {
    const handleKey = (e) => {
      if (!hasItems) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "ArrowLeft") handlePrev(e);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, hasItems, items.length]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = hasItems ? "hidden" : "auto";
  }, [hasItems]);

  return (
    <AnimatePresence>
      {hasItems && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          {/* Pop-in Modal Container */}
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 m-5  border-white bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-5 right-5 bg-white rounded-full shadow-lg hover:bg-gray-100 transition p-2 cursor-pointer z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Prev Button */}
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-5 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition p-2 cursor-pointer z-50 flex items-center justify-center"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition p-2 cursor-pointer z-50 flex items-center justify-center"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-full overflow-auto rounded-[20px] hide-scrollbar"
            >
              <div className="flex justify-center items-center min-w-full min-h-full">
                <Image
                  src={currentItem.img || "/Images/image.jpg"}
                  alt={currentItem.title || "Image"}
                  width={2000}
                  height={2000}
                  className="object-contain select-none mx-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
