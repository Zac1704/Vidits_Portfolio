"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

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

const ImageModal = ({ img, title, onClose }) => {
  // Close on Esc key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = img ? "hidden" : "auto";
  }, [img]);

  return (
    <AnimatePresence>
      {img && (
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
            className="absolute inset-0 m-5 bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden"
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="w-full h-full overflow-auto rounded-[20px] hide-scrollbar"
            >
              <div className="flex justify-center items-center min-w-full min-h-full">
                <Image
                  src={img || "/Images/image.jpg"}
                  alt={title}
                  width={2000}
                  height={2000}
                  className="object-contain select-none mx-auto"
                  priority
                />
              </div>
            </motion.div>
            {/* <iframe
                src="/Images/jimmypetShop.pdf"
                title={title}
                className="w-[90vw] h-[90vh] rounded-[20px] border-none"
              /> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
