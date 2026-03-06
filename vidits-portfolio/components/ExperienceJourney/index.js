"use client";

import { Card } from "./card";
import { cardsData } from "./index.constant";

export default function ExperienceJourney() {
  return (
    <div className="relative z-20 bg-transparent w-full">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black px-4 sm:px-0">
          Experience
          <br />& Journey
        </h2>
      </div>

      <div className="relative pt-16 sm:w-[90%] lg:w-full mx-auto">
        {cardsData.map((card, i) => (
          <Card key={i} index={i} {...card} />
        ))}
      </div>
    </div>
  );
}
