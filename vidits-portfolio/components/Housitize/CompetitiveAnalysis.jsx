import React from "react";
import { CheckCircle2, XCircle, User } from "lucide-react";

const defaultCompetitors = [
  {
    name: "Competitor A",
    strengths: ["Large inventory", "Strong brand recall"],
    weaknesses: [
      "Cluttered UI",
      "Overloaded filters",
      "Poor visual consistency",
    ],
  },
  {
    name: "Competitor B",
    strengths: ["Clean layout", "Fast performance"],
    weaknesses: [
      "Limited contextual information",
      "Weak storytelling around properties",
    ],
  },
];

const defaultReviews = [
  {
    name: "Anonymous User",
    quote:
      "There's too much information everywhere. I don't know where to start.",
    sentiment: "negative",
  },
  {
    name: "Anonymous User",
    quote: "Listings look the same. It's hard to differentiate.",
    sentiment: "neutral",
  },
  {
    name: "Anonymous User",
    quote: "Good properties, but the site feels confusing.",
    sentiment: "negative",
  },
];

export function CompetitiveAnalysis({
  competitors = defaultCompetitors,
  insights = "There is a clear gap for a platform that balances data richness with visual clarity, without overwhelming users.",
  reviews = defaultReviews,
}) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Competitive Analysis</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Competitors */}
        <div className="flex flex-col gap-6">
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-800 border border-neutral-700 rounded-2xl flex flex-col"
            >
              {/* Competitor Image Placeholder */}
              <div className="w-full h-48 bg-neutral-700/50 rounded-xl mb-6 border border-neutral-600/50 flex items-center justify-center">
                <p className="text-neutral-500 text-sm">Screenshot / Logo</p>
              </div>

              <h5 className="mb-6">{competitor.name}</h5>

              <div className="flex flex-col gap-4">
                {/* Strengths */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-400" />
                    <h6 className="text-sm text-accent-400">Strengths</h6>
                  </div>
                  <ul className="flex flex-col gap-2 ml-6">
                    {competitor.strengths.map((strength, idx) => (
                      <li key={idx} className="text-sm text-neutral-400">
                        • {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-4 h-4 text-red-400" />
                    <h6 className="text-sm text-red-400">Weaknesses</h6>
                  </div>
                  <ul className="flex flex-col gap-2 ml-6">
                    {competitor.weaknesses.map((weakness, idx) => (
                      <li key={idx} className="text-sm text-neutral-400">
                        • {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insights & Reviews */}
        <div className="flex flex-col">
          <div className="p-6 bg-accent-400/10 border border-accent-400/20 rounded-2xl mb-6 flex flex-col">
            <h5 className="mb-3 text-accent-400">Key Insights</h5>
            <p className="text-neutral-400">{insights}</p>
          </div>

          <h5 className="mb-4">User Review Signals</h5>
          <div className="flex flex-col gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-5 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-neutral-400" />
                  </div>
                  <h6 className="text-sm text-white">{review.name}</h6>
                </div>
                <p className="text-sm text-neutral-400 italic">
                  “{review.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
