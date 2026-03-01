"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function Odometer({ value, label }) {
    const [isInView, setIsInView] = useState(false);

    // Parse the value carefully to get the number and the suffix
    const numMatch = value.match(/[\d.]+/);
    const suffixMatch = value.match(/[A-Za-z+]+/);
    const targetNumber = numMatch ? parseFloat(numMatch[0]) : 0;
    const suffix = suffixMatch ? suffixMatch[0] : "";

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        mass: 1,
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(targetNumber);
        }
    }, [isInView, targetNumber, springValue]);

    // Format the animated number back to a string with 1 decimal place if needed
    const displayValue = useTransform(springValue, (current) => {
        // If the original number had a decimal, keep 1 decimal place
        if (targetNumber % 1 !== 0) {
            return current.toFixed(1);
        }
        return Math.floor(current).toString();
    });

    return (
        <div
            className="flex items-center gap-2"
            onMouseEnter={() => setIsInView(true)} // Fallback trigger
        >
            {/* We'll use Framer Motion's whileInView to trigger it */}
            <motion.div
                whileInView={() => {
                    setIsInView(true);
                    return {};
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-baseline font-bold text-xl md:text-2xl tracking-tight"
            >
                <div className="w-6 h-6 mr-2 flex-shrink-0 flex items-center justify-center">
                    {/* Render different icons based on the label, or just the logo if passed differently. 
                        For simplicity, we assume the icon is passed as children or handle it in the parent. 
                        Let's adjust to receive icon as a prop or handle it completely in the parent and just do the number here.
                    */}
                </div>
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </motion.div>
        </div>
    );
}
