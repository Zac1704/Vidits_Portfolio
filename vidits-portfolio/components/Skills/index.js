"use client";

import SkillsList from "./SkillsList";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-10 md:py-20 px-4 mt-8 md:mt-16 bg-transparent relative z-10 overflow-hidden">
            {/* Center Text */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-color)] mb-8 md:mb-16 text-center"
            >
                Skills
            </motion.h2>

            <div className="w-full max-w-[100vw] overflow-hidden px-2">
                <SkillsList />
            </div>
        </div>
    );
}
