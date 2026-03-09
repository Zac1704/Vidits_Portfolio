"use client";

import SkillsList from "./SkillsList";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-transparent relative z-10 overflow-visible">
            {/* Center Text */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black text-center"
            >
                Skills
            </motion.h2>

            <div className="w-full max-w-[100vw] overflow-visible px-2 pt-12 md:pt-14 lg:pt-16">
                <SkillsList />
            </div>
        </div>
    );
}
