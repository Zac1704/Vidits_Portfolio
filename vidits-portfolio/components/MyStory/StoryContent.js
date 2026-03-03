"use client";

import { motion } from "framer-motion";
import Odometer from "./Odometer";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; // Need a fallback if not installed, let's use standard svgs or what they had. Assuming react-icons is available as it was used in ToolStack.

// Fallback to simple SVGs if react-icons imports fail differently, but FaYoutube works.
// We'll use custom SVGs to be perfectly safe and exact.
const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#ig-grad)" className="mr-2">
        <defs>
            <linearGradient id="ig-grad" x1="2" y1="2" x2="22" y2="22">
                <stop offset="0%" stopColor="#feda75" />
                <stop offset="25%" stopColor="#fa7e1e" />
                <stop offset="50%" stopColor="#d62976" />
                <stop offset="75%" stopColor="#962fbf" />
                <stop offset="100%" stopColor="#4f5bd5" />
            </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const TiktokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const YoutubeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000" className="mr-2">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

export default function StoryContent() {
    return (
        <motion.div
            className="flex flex-col justify-between h-full p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div>
                <motion.div variants={itemVariants}>
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#a3a3a3]">About</span>
                    <h2 className="text-5xl md:text-6xl font-semibold mt-2 mb-8 tracking-tight text-black">
                        My story
                    </h2>
                </motion.div>

                <div className="space-y-6 text-lg md:text-xl text-[#363636] dark:text-[#d2d2d2] opacity-90 leading-relaxed font-medium">
                    <motion.p variants={itemVariants}>
                        I created Tokko after years of trying to stay consistent, figure out what to post, and understand why some content worked while other posts didn&apos;t. Over time, that process became a system built from real experience and testing.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        This course is everything I wish I had earlier – a practical framework that brings structure to content, removes guesswork, and makes growth simpler to sustain.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        This course is everything I wish I had earlier – a practical framework that brings structure to content, removes guesswork, and makes growth simpler to sustain.
                    </motion.p>
                </div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 relative">
                <span className="text-sm font-semibold text-[#a3a3a3] mb-4 block">Total followers</span>

                <div className="flex flex-wrap items-center gap-6 md:gap-10">
                    <div className="flex items-center text-(--text-color)">
                        <InstagramIcon />
                        <Odometer value="1.1M+" label="Instagram" />
                    </div>
                    <div className="flex items-center text-(--text-color)">
                        <TiktokIcon />
                        <Odometer value="4.6M+" label="TikTok" />
                    </div>
                    <div className="flex items-center text-(--text-color)">
                        <YoutubeIcon />
                        <Odometer value="750K+" label="YouTube" />
                    </div>
                </div>

                {/* Decorative Swirl Arrow */}
                <div className="absolute right-0 bottom-4 opacity-40 rotate-[15deg] pointer-events-none scale-75 md:scale-100 hidden sm:block">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-(--text-color)">
                        <path d="M 30,70 C 10,50 30,10 60,30 C 80,45 80,70 50,90" />
                        <path d="M 50,90 L 70,85 M 50,90 L 45,70" />
                    </svg>
                </div>
            </motion.div>
        </motion.div>
    );
}
