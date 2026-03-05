"use client";

import { Portfolio } from "./index.constant";
import { PortfolioCard } from "./PortfolioCard";

// ✅ Main Component
export default function MyWork({ onImageSelect }) {
  return (
    <div className="">
      {/* Header */}
      <header className="text-center px-4">
        <h2 className="text-[32px] md:text-[40px] lg:text-[72px] font-semibold text-black leading-[72px]">
          Some of my
          <br /> Recent works
        </h2>

      </header>

      {/* Portfolio Grid */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-20 pt-6 sm:pt-10 flex justify-center">
        <div className="py-12 -my-12 flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:place-items-center w-full">
          {Portfolio.map((work, index) => (
            <PortfolioCard
              key={index}
              img={work.img}
              title={work.title}
              shadow={work.shadow}
              onClick={() => onImageSelect(Portfolio, index)}
              subtitle={work.subtitle}
              description={work.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
