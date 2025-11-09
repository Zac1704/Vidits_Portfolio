import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Animate only once
    margin: "0px 0px -150px 0px", // start a bit earlier
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="will-change-transform" // helps GPU acceleration
    >
      {children}
    </motion.div>
  );
}
