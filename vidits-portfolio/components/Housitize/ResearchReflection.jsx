import React from "react";
import { Lightbulb } from "lucide-react";

export default function ResearchReflection({
  imageUrl,
  reflection = "Users were not looking for more listings—they were looking for better organization. Confusion stemmed from presentation, not lack of data. This insight shifted the design focus toward information architecture, layout clarity, and progressive exploration.",
}) {
  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Reflection Image */}
        <div className="md:col-span-4 h-64 m-[0px] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-700 border border-neutral-700 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Research reflection"
              className="w-full h-full object-cover"
              style={{ transform: "rotate(1deg) scale(1.05)" }}
            />
          ) : (
            <Lightbulb className="w-24 h-24 text-accent-400/40" />
          )}
        </div>

        {/* Reflection Text */}
        <div className="md:col-span-8 flex flex-col w-full">
          <div className="inline-block px-4 py-2 bg-accent-400/10 text-accent-400 rounded-full mb-4 border border-accent-400/20 self-start">
            Research Reflection
          </div>
          <h4 className="mb-4">What the Data Revealed</h4>
          <p className="text-neutral-400 leading-relaxed text-lg">
            {reflection}
          </p>
        </div>
      </div>
    </section>
  );
}
