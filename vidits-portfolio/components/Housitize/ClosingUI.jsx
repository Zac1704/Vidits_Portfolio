import React from "react";

export function ClosingUI({ imageUrl }) {
  return (
    <section className="flex flex-col">
      {/* Closing UI Mockup - Reinforces credibility */}
      <div className="w-full aspect-[16/9] bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700 rounded-2xl overflow-hidden relative border border-neutral-700 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Project showcase"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-12">
            <div className="text-center flex flex-col items-center gap-6 max-w-4xl">
              <div className="grid grid-cols-3 gap-6">
                <div className="aspect-[3/4] bg-neutral-700/60 backdrop-blur-sm rounded-xl border border-accent-400/10" />
                <div className="aspect-[3/4] bg-accent-400/10 backdrop-blur-sm rounded-xl border border-accent-400/20 scale-105" />
                <div className="aspect-[3/4] bg-neutral-700/60 backdrop-blur-sm rounded-xl border border-accent-400/10" />
              </div>
              <p className="text-neutral-500 text-lg">Final UI Showcase</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
