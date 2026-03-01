"use client";

import SkillsList from "./SkillsList";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 bg-transparent relative z-10">
            {/* Center Text */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-color)] mb-10 md:mb-16 text-center"
            >
                Skills
            </motion.h2>

            <SkillsList />
        </div>
    );
}
