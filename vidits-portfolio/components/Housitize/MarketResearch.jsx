import React from "react";
import { TrendingUp } from "lucide-react";

const defaultDataPoints = [
  { year: "2020", value: 32, label: "32%" },
  { year: "2021", value: 45, label: "45%" },
  { year: "2022", value: 59, label: "59%" },
  { year: "2023", value: 72, label: "72%" },
  { year: "2024", value: 84, label: "84%" },
];

export default function MarketResearch({
  context = "The Indian real-estate market has seen rapid digital adoption, with users increasingly relying on online platforms for discovery before site visits. As adoption grows, users expect consumer-grade UX from real-estate platforms—not just listings.",
  dataPoints = defaultDataPoints,
}) {
  const maxValue = Math.max(...dataPoints.map((d) => d.value));

  return (
    <section id="research" className="flex flex-col">
      <h2 className="mb-5">Market & Research Overview</h2>

      <div className="mb-8">
        <p className="text-neutral-400 leading-relaxed max-w-3xl">{context}</p>
      </div>

      {/* Market Growth Chart */}
      <div className="bg-neutral-800 rounded-2xl p-4 sm:p-6 md:p-8 border border-neutral-700 flex flex-col">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20">
            <TrendingUp className="w-5 h-5 text-accent-400" />
          </div>
          <h5>Market Adoption Growth</h5>
        </div>

        <div className="relative h-64 flex items-end justify-between gap-1 sm:gap-2 md:gap-4">
          {/* Y-axis helper lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[100, 75, 50, 25, 0].map((val) => (
              <div
                key={val}
                className="w-full border-t border-dashed border-neutral-700"
              />
            ))}
          </div>

          {/* Bars */}
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative z-10 h-full justify-end min-w-0"
            >
              {/* Tooltip */}
              <div className="mb-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-accent-400 text-neutral-900 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap">
                {point.label}
              </div>

              {/* Bar */}
              <div
                className="w-[80%] bg-gradient-to-t from-accent-400 to-accent-300 rounded-t-lg transition-all duration-500"
                style={{ height: `${point.value}%` }}
              />

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-neutral-500">
                {point.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
