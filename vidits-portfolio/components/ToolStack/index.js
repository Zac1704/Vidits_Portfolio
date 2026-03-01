"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

// Cubic bezier for Apple-style smoothness
const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
};

const MagneticIcon = ({ icon: Icon, color, badgeCount, delay, top, left, size }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Springs for magnetic effect
    const springX = useSpring(0, springTransition);
    const springY = useSpring(0, springTransition);

    // Floating animation definition
    const floatingAnimation = {
        y: ["-5px", "5px"],
        x: ["-3px", "3px"],
        transition: {
            y: {
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            },
            x: {
                duration: 2.5 + Math.random() * 2,
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

        // Magnetic pull calculation (pulls toward cursor)
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
            className={`absolute z-10`}
            style={{ top, left, x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            animate={isHovered ? {} : floatingAnimation}
        >
            <div
                className="relative bg-white shadow-xl rounded-2xl flex items-center justify-center cursor-pointer transition-shadow hover:shadow-2xl"
                style={{ width: size, height: size }}
            >
                <Icon style={{ color, fontSize: size * 0.45 }} />

                {/* Badge */}
                <motion.div
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-20"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {badgeCount}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function ToolStack() {
    const iconsData = [
        { id: 1, icon: FaFacebook, color: "#1877F2", badgeCount: 13, delay: 0, top: "20%", left: "30%", size: 70 },
        { id: 2, icon: FaYoutube, color: "#FF0000", badgeCount: 39, delay: 0.2, top: "20%", left: "60%", size: 75 },
        { id: 3, icon: FaInstagram, color: "#E4405F", badgeCount: 17, delay: 0.4, top: "45%", left: "20%", size: 65 },
        { id: 4, icon: FaLinkedin, color: "#0A66C2", badgeCount: 21, delay: 0.6, top: "45%", left: "75%", size: 65 },
        { id: 5, icon: FaTiktok, color: "#000000", badgeCount: 76, delay: 0.8, top: "70%", left: "28%", size: 70 },
        { id: 6, icon: FaTelegramPlane, color: "#229ED9", badgeCount: 18, delay: 1.0, top: "75%", left: "50%", size: 85 },
        { id: 7, icon: SiThreads, color: "#000000", badgeCount: 11, delay: 1.2, top: "70%", left: "68%", size: 65 },
    ];

    return (
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-transparent">
            {/* Center Text */}
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-(--text-color) z-0">
                Tool Stack
            </h2>

            {/* Orbiting Icons */}
            <div className="absolute inset-0 max-w-5xl mx-auto pointer-events-none">
                <div className="relative w-full h-full pointer-events-auto">
                    {iconsData.map((icon) => (
                        <MagneticIcon key={icon.id} {...icon} />
                    ))}
                </div>
            </div>

            {/* Decorative Dashed Lines (Orbit Paths) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
                <svg className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-20 dark:opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
                    <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" />
                </svg>
            </div>
        </div>
    );
}
