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
                className="relative flex flex-col w-full max-w-[1100px] h-[500px] sm:h-[580px] md:h-[600px] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 md:p-12 text-white shadow-[0_4px_30px_rgba(0,0,0,0.15)] origin-center"
            >
                <div className="flex flex-col justify-center h-full gap-2 sm:gap-3 overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-[54px] font-bold tracking-tight leading-tight mt-auto sm:mt-0">
                        {title}
                    </h2>

                    {/* Period (experience layout) */}
                    {period && (
                        <p className="text-[11px] sm:text-sm md:text-base font-semibold uppercase tracking-widest opacity-60">
                            {period}
                        </p>
                    )}

                    {/* Subtitle (non-experience cards) */}
                    {subtitle && (
                        <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl font-medium leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    {/* Location & Date (non-experience cards) */}
                    {locationAndDate && (
                        <p className="text-sm sm:text-base opacity-70 font-medium">{locationAndDate}</p>
                    )}

                    {/* Description paragraphs (experience layout) */}
                    {description?.length > 0 && (
                        <div className="flex flex-col gap-2 sm:gap-3 max-w-2xl">
                            {description.map((para, i) => (
                                <p
                                    key={i}
                                    className="text-xs sm:text-sm md:text-base opacity-85 font-medium leading-relaxed"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* Feature list */}
                    {features?.length > 0 && (
                        <div className="max-w-lg mb-auto sm:mb-0 mt-2 sm:mt-0">
                            <ul className="space-y-1.5 sm:space-y-2 list-disc pl-4 sm:pl-5">
                                {features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="text-xs sm:text-sm md:text-[17px] font-medium leading-tight opacity-90"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Education entries */}
                    {education?.length > 0 && (
                        <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl mb-auto sm:mb-0 mt-2 sm:mt-0">
                            {education.map((entry, i) => (
                                <div key={i} className="flex gap-3 sm:gap-4 items-start">
                                    <span className="text-white/40 font-semibold text-xs sm:text-sm mt-0.5 sm:mt-1">●</span>
                                    <div>
                                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-50 mb-0.5">{entry.year}</p>
                                        <p className="text-sm sm:text-base md:text-lg font-bold leading-tight">{entry.degree}</p>
                                        <p className="text-xs sm:text-sm opacity-70 font-medium">{entry.institution}</p>
                                        <p className="text-xs sm:text-sm opacity-50 font-medium mt-0.5">{entry.grade}</p>
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
