"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Subtle scale effect as you scroll past
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    // Slight vertical parallax
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <div ref={containerRef} className="relative w-full h-full min-h-[400px] md:min-h-full overflow-hidden rounded-[24px] md:rounded-[32px]">
            <motion.div
                style={{ scale, y, willChange: "transform" }}
                className="absolute inset-[0%] w-[120%] h-[120%]"
            >
                {/* Replace src with a real image or the user's specific image path. Using a high-quality abstract placeholder for now. */}
                <Image
                    src="/Images/mystory/profile.webp"
                    alt="My Story"
                    fill
                    className="object-cover"
                />

                {/* Vintage/Grain Overlays */}
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

                {/* CSS Noise Grain implementation */}
                <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />
            </motion.div>
        </div>
    );
}
