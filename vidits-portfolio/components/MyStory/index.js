"use client";

import StoryContent from "./StoryContent";
import ParallaxImage from "./ParallaxImage";

export default function MyStory() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] lg:min-h-[700px]">
                    {/* Left Column: Text Content */}
                    <div className="order-2 lg:order-1 flex-1">
                        <StoryContent />
                    </div>

                    {/* Right Column: Image */}
                    <div className="order-1 lg:order-2 p-3 md:p-6 lg:pl-0 h-[400px] sm:h-[500px] lg:h-auto">
                        <ParallaxImage />
                    </div>
                </div>
            </div>
        </section>
    );
}
