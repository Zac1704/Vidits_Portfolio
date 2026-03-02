"use client";

import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        }
    }
};

export default function SkillBadge({ icon: Icon, text }) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 md:gap-4 bg-[#f4f5f7] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-full pr-6 pl-2 py-2 cursor-pointer transition-colors hover:bg-white hover:shadow-[0_8px_30px_rgba(47,104,255,0.15)]"
        >
            <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#2f68ff] rounded-full text-white shadow-md">
                <Icon className="text-lg md:text-2xl" />
            </div>
            <span className="text-gray-800 font-semibold text-sm md:text-[28px] tracking-tight">
                {text}
            </span>
        </motion.div>
    );
}
