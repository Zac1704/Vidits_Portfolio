"use client";

import { motion } from "framer-motion";
import { skillsData } from "./SkillsData";
import SkillBadge from "./SkillBadge";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

export default function SkillsList() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-x-6 md:gap-y-6 max-w-7xl mx-auto px-2"
        >
            {skillsData.map((skill) => (
                <SkillBadge key={skill.id} icon={skill.icon} text={skill.text} className={skill.className} />
            ))}
        </motion.div>
    );
}
