"use client";

import { motion } from "framer-motion";

export const Card = ({
    title,
    subtitle,
    period,
    description,
    features,
    education,
    locationAndDate,
    color,
    index,
    rotation,
}) => {
    return (
        <div className="h-screen flex px-4 justify-center sticky top-[10vh] md:top-[12vh]">
            <motion.div
                style={{ backgroundColor: color, rotate: rotation }}
                className="relative flex flex-col w-full max-w-[1100px] h-[580px] md:h-[600px] rounded-[30px] p-8 md:p-12 text-white shadow-[0_4px_30px_rgba(0,0,0,0.15)] origin-center"
            >
                {/* Index number */}
                {/* <div className="flex justify-end w-full">
                    <span className="text-xl md:text-2xl font-mono opacity-50">
                        0{index + 1}
                    </span>
                </div> */}

                <div className="flex flex-col justify-center h-full gap-3">
                    {/* Title */}
                    <h2 className="text-4xl md:text-[54px] font-bold tracking-tight leading-tight">
                        {title}
                    </h2>

                    {/* Period (experience layout) */}
                    {period && (
                        <p className="text-sm md:text-base font-semibold uppercase tracking-widest opacity-60">
                            {period}
                        </p>
                    )}

                    {/* Subtitle (non-experience cards) */}
                    {subtitle && (
                        <p className="text-lg md:text-xl opacity-90 max-w-xl font-medium leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    {/* Location & Date (non-experience cards) */}
                    {locationAndDate && (
                        <p className="text-base opacity-70 font-medium">{locationAndDate}</p>
                    )}

                    {/* Description paragraphs (experience layout) */}
                    {description?.length > 0 && (
                        <div className="flex flex-col gap-3 max-w-2xl">
                            {description.map((para, i) => (
                                <p
                                    key={i}
                                    className="text-sm md:text-base opacity-85 font-medium leading-relaxed"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* Feature list */}
                    {features?.length > 0 && (
                        <div className="max-w-lg">
                            <ul className="space-y-2 list-disc pl-5">
                                {features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="text-sm md:text-[17px] font-medium leading-tight opacity-90"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Education entries */}
                    {education?.length > 0 && (
                        <div className="flex flex-col gap-5 max-w-2xl">
                            {education.map((entry, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <span className="text-white/40 font-semibold text-sm mt-0.5">●</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-0.5">{entry.year}</p>
                                        <p className="text-base md:text-lg font-bold leading-tight">{entry.degree}</p>
                                        <p className="text-sm opacity-70 font-medium">{entry.institution}</p>
                                        <p className="text-sm opacity-50 font-medium">{entry.grade}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
