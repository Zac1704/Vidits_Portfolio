"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaTelegram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

// Cubic bezier for Apple-style smoothness
const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
};

const MagneticIcon = ({ icon: Icon, color, badgeCount, delay, top, left, size, id }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Springs for magnetic effect
    const springX = useSpring(0, springTransition);
    const springY = useSpring(0, springTransition);

    // Floating animation definition
    const floatingAnimation = {
        y: ["-8px", "8px"],
        x: ["-4px", "4px"],
        transition: {
            y: {
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            },
            x: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay + 0.5,
            }
        }
    };

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const pullX = (clientX - centerX) * 0.4;
        const pullY = (clientY - centerY) * 0.4;

        springX.set(pullX);
        springY.set(pullY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        springX.set(0);
        springY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`absolute z-10 flex items-center justify-center`}
            style={{ top, left, x: springX, y: springY, width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            animate={isHovered ? {} : floatingAnimation}
        >
            {/* The white card container matching the image */}
            <div
                className="relative bg-white rounded-[2rem] flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                style={{
                    width: size * 0.85,
                    height: size * 0.85,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.04)",
                }}
            >
                {/* Special case for Instagram gradient */}
                {id === 'instagram' && (
                    <svg width="0" height="0">
                        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f09433" />
                            <stop offset="25%" stopColor="#e6683c" />
                            <stop offset="50%" stopColor="#dc2743" />
                            <stop offset="75%" stopColor="#cc2366" />
                            <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                    </svg>
                )}

                <Icon style={{
                    color: id === 'instagram' ? "url(#ig-grad)" : color,
                    fill: id === 'instagram' ? "url(#ig-grad)" : color,
                    fontSize: size * 0.48
                }} />

                {/* Developer Badge Matching Design exactly */}
                <motion.div
                    className="absolute -top-1 -right-1 bg-[#FF1E56] text-white text-[12px] font-bold min-w-[28px] h-[28px] flex items-center justify-center px-1.5 rounded-full z-20 shadow-sm"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? [1, 1.25, 1] : 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transform: 'translate(10%, -10%)' }}
                >
                    {badgeCount}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function ToolStack() {
    const iconsData = [
        // Top Left: Instagram
        { id: 'instagram', icon: FaInstagram, color: "#E4405F", badgeCount: 17, delay: 0.4, top: "30%", left: "20%", size: 100 },
        // Top Center-Left: Facebook
        { id: 'facebook', icon: FaFacebook, color: "#1877F2", badgeCount: 13, delay: 0, top: "15%", left: "42%", size: 110 },
        // Top Right: YouTube
        { id: 'youtube', icon: FaYoutube, color: "#FF0000", badgeCount: 39, delay: 0.2, top: "18%", left: "62%", size: 115 },
        // Mid Right: LinkedIn
        { id: 'linkedin', icon: FaLinkedin, color: "#0A66C2", badgeCount: 21, delay: 0.6, top: "35%", left: "78%", size: 110 },
        // Bottom Left: TikTok
        { id: 'tiktok', icon: FaTiktok, color: "#000000", badgeCount: 76, delay: 0.8, top: "72%", left: "30%", size: 105 },
        // Bottom Center: Telegram
        { id: 'telegram', icon: FaTelegram, color: "#229ED9", badgeCount: 18, delay: 1.0, top: "82%", left: "50%", size: 115 },
        // Bottom Right: Threads
        { id: 'threads', icon: SiThreads, color: "#000000", badgeCount: 11, delay: 1.2, top: "72%", left: "70%", size: 110 },
    ];

    return (
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-transparent font-sans">
            {/* Center Text matching image style */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#111111] dark:text-white z-0" style={{ letterSpacing: "-0.04em" }}>
                Tool Stack
            </h2>

            {/* Orbiting Icons Container */}
            <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
                <div className="relative w-full h-full pointer-events-auto">
                    {iconsData.map((icon) => (
                        <MagneticIcon key={icon.id} {...icon} />
                    ))}
                </div>
            </div>

            {/* Decorative SVGs Matching the Image precisely */}
            <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none z-[-1]">
                {/* 1. Swoosh Arrow between Instagram and Center */}
                <svg className="absolute top-[32%] left-[28%] w-24 h-24 text-gray-300 dark:text-gray-600 opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    {/* Curved line towards center */}
                    <path d="M 0 0 Q 60 50 85 80" strokeDasharray="6 6" />
                    {/* Arrowhead */}
                    <path d="M 85 80 L 70 75 L 80 65 Z" fill="currentColor" stroke="none" />
                </svg>

                {/* 2. Dotted loop between YouTube and LinkedIn */}
                <svg className="absolute top-[28%] right-[22%] w-32 h-32 text-gray-300 dark:text-gray-600 opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {/* Looping path */}
                    <path d="M 10 0 C 80 -10, 110 60, 50 80 C 0 100, -20 40, 20 20" strokeDasharray="5 5" />
                </svg>

                {/* 3. Three Spark Lines above Telegram */}
                <svg className="absolute bottom-[28%] left-[45%] w-24 h-24 text-gray-300 dark:text-gray-600 opacity-80" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    {/* Left line */}
                    <line x1="30" y1="50" x2="15" y2="25" />
                    {/* Center line */}
                    <line x1="50" y1="40" x2="50" y2="10" />
                    {/* Right line */}
                    <line x1="70" y1="50" x2="85" y2="25" />
                </svg>
            </div>
        </div>
    );
}
