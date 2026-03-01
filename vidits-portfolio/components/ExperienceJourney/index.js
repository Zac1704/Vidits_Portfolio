"use client";

import { motion } from "framer-motion";

const Card = ({ title, subtitle, features, color, index, rotation }) => {
    return (
        <div className="h-screen flex px-4 justify-center sticky top-[10vh] md:top-[12vh]">
            <motion.div
                style={{ backgroundColor: color, rotate: rotation }}
                className="relative flex flex-col w-full max-w-[1100px] h-[580px] md:h-[600px] rounded-[30px] p-8 md:p-12 text-white shadow-[0_4px_30px_rgba(0,0,0,0.15)] origin-center"
            >
                <div className="flex justify-between items-start w-full">
                    <div className="bg-white/90 p-3 md:p-4 rounded-xl shadow-sm">
                        {/* Custom Key Icon matching the screenshot */}
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 8.5C14.1193 8.5 13 9.61929 13 11C13 11.4589 13.1235 11.8888 13.3361 12.2574L6.29289 19.3006C6.10536 19.4881 5.851 19.5935 5.58579 19.5935H4C3.44772 19.5935 3 19.1458 3 18.5935V17C3 16.7348 3.10536 16.4805 3.29289 16.2929L4 15.5858L3.29289 14.8787C3.10536 14.6911 3 14.4368 3 14.1716V13C3 12.4477 3.44772 12 4 12H5V11C5 10.4477 5.44772 10 6 10H8.08579C8.351 10 8.60536 10.1054 8.79289 10.2929L9.5 11L11.7426 8.75736C11.374 8.54476 10.9441 8.42127 10.4853 8.42127C10.4853 8.42127 12 6.5 12 6.5C12 6.5 12.5 7.5 13.5 7C14.0772 6.71138 14.7642 6.5 15.5 6.5C18.5376 6.5 21 8.96243 21 12C21 15.0376 18.5376 17.5 15.5 17.5C12.4624 17.5 10 15.0376 10 12C10 11.969 10.0003 11.9381 10.0008 11.9073L12.907 9.0011C13.5854 9.618 14.4947 10 15.5 10C17.1569 10 18.5 8.65685 18.5 7C18.5 6.73685 18.464 6.48197 18.3972 6.24108C17.6539 7.5857 16.2163 8.5 15.5 8.5Z" fill="#2B7BFF" />
                        </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-mono opacity-80 mt-2">0{index + 1}</span>
                </div>

                <div className="mt-8 md:mt-12 flex flex-col justify-center h-full">
                    <h2 className="text-4xl md:text-[54px] font-bold mb-3 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl font-medium leading-relaxed">
                        {subtitle}
                    </p>

                    <div>
                        <h3 className="text-sm uppercase tracking-widest font-bold opacity-80 mb-4">What you&apos;ll learn</h3>
                        <div className="space-y-2 max-w-lg">
                            {features.map((feature, i) => (
                                <div key={i} className="flex gap-3 text-sm md:text-[17px] font-medium leading-tight">
                                    <span className="opacity-90 min-w-[1rem]">{i + 1}.</span>
                                    <span className="opacity-90">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ExperienceJourney() {
    const cardsData = [
        {
            title: "Authority",
            subtitle: "Become the undisputed expert in your selected industry or niche.",
            color: "#9D00FF", // Purple
            rotation: -3,
            features: [
                "High-leverage thought leadership",
                "Getting featured in publications",
                "Networking with creators",
                "Creating proprietary frameworks",
                "Speaking engagements"
            ]
        },
        {
            title: "Conversion",
            subtitle: "Turn casual followers into engaged clients and active community members.",
            color: "#FF8C00", // Orange
            rotation: 2,
            features: [
                "CTAs that actually work",
                "Building trust at scale",
                "The funnel architecture",
                "Leveraging DMs properly",
                "Pricing your expertise"
            ]
        },
        {
            title: "Clarity",
            subtitle: "Find your authentic voice and speak directly to your target audience.",
            color: "#FF3366", // Red
            rotation: -1.5,
            features: [
                "Defining your exact niche",
                "Audience persona breakdown",
                "Visual identity shortcuts",
                "Creating a hook library",
                "The art of storytelling"
            ]
        },
        {
            title: "Momentum",
            subtitle: "Scale what works and build growth that compounds naturally over time.",
            color: "#2772f0", // Blue
            rotation: 0,
            features: [
                "How the Tokko system work",
                "What actually drives reach",
                "Clear content pillars",
                "Planning without overthinking",
                "Turning posts into a process",
                "Staying consistent with eas",
                "Building structure that scale"
            ]
        }
    ];

    return (
        <div className="relative z-20 bg-transparent w-full">
            <div className="text-center py-20 pb-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-(--text-color) mb-4 leading-tight">
                    Experience<br />& Journey
                </h2>
            </div>

            <div className="relative w-full">
                {cardsData.map((card, i) => (
                    <Card
                        key={i}
                        index={i}
                        {...card}
                    />
                ))}
            </div>
        </div>
    );
}
