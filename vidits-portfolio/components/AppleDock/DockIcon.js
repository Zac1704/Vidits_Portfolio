"use client";

import { memo, useRef, useState } from "react";
import {
    motion,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";

const DockIcon = memo(function DockIcon({
    mouseX,
    icon,
    label,
    isActive,
    baseSize,
    magnification,
    distance,
    onClick,
}) {
    const ref = useRef(null);
    const [isHovered, setHovered] = useState(false);

    // Calculate distance from cursor to this icon's center
    const distanceCalc = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Map distance to size: icons near cursor grow, distant ones stay at baseSize
    const sizeSync = useTransform(
        distanceCalc,
        [-distance, 0, distance],
        [baseSize, baseSize * magnification, baseSize]
    );

    // Spring physics for smooth animation
    const size = useSpring(sizeSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            className="relative flex flex-col items-center"
            style={{ width: size, height: size }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            whileTap={{ scale: 0.85 }}
        >
            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 0, x: "-50%" }}
                        animate={{ opacity: 1, y: -8, x: "-50%" }}
                        exit={{ opacity: 0, y: 0, x: "-50%" }}
                        transition={{ duration: 0.15 }}
                        className="absolute -top-8 left-1/2 pointer-events-none z-10"
                    >
                        <span className="px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap bg-black/70 text-white/90 backdrop-blur-sm shadow-sm">
                            {label}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Icon container */}
            <motion.div
                className="w-full h-full rounded-[22%] cursor-pointer flex items-center justify-center bg-white/10 backdrop-blur-sm overflow-hidden"
                style={{ width: size, height: size }}
            >
                {icon}
            </motion.div>

            {/* Active dot indicator */}
            {isActive && (
                <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[var(--text-color)]" />
            )}
        </motion.div>
    );
});

export default DockIcon;
