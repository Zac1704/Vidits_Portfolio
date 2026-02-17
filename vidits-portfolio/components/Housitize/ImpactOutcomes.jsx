import React from "react";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

const defaultMetrics = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "Improved",
    label: "Browsing Confidence",
    change: "Clearer UX for property discovery",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "Easier",
    label: "Property Comparison",
    change: "Consistent layouts and structure",
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "Stronger",
    label: "Brand Credibility",
    change: "Professional and premium perception",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "Reduced",
    label: "Visual Clutter",
    change: "Clean and scannable sections",
  },
];

const defaultWins = [
  {
    quote:
      "The interface now feels organized and professional, making property browsing less stressful.",
    source: "Internal Stakeholder Feedback",
  },
  {
    quote:
      "Users can now differentiate between properties easily, which was a major pain point before.",
    source: "Design Review",
  },
];

export default function ImpactOutcomes({
  metrics = defaultMetrics,
  qualitativeWins = defaultWins,
  businessImpact = "The redesigned experience improves browsing confidence, makes property comparison easier, and creates a professional, credible perception of the brand—positioning Housitize as a premium yet approachable real-estate platform.",
}) {
  return (
    <section id="impact" className="flex flex-col">
      <h2 className="mb-5">Impact & Outcomes</h2>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 bg-accent-400/10 border border-accent-400/20 rounded-2xl flex flex-col"
          >
            <div className="mb-4 text-accent-400">{metric.icon}</div>

            <div className="mb-2">
              <p className="text-3xl font-bold text-accent-400">
                {metric.value}
              </p>
            </div>

            <h6 className="mb-2 text-white">{metric.label}</h6>
            <p className="text-sm text-neutral-400">{metric.change}</p>
          </div>
        ))}
      </div>

      {/* Business Impact */}
      <div className="mb-12 p-8 bg-neutral-800 border border-accent-400/30 rounded-2xl flex flex-col">
        <h4 className="mb-4 text-accent-400">Business Impact</h4>
        <p className="text-neutral-400 text-lg">{businessImpact}</p>
      </div>

      {/* Qualitative Wins */}
      <div className="flex flex-col">
        <h4 className="mb-6">Qualitative Wins</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualitativeWins.map((win, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 flex flex-col h-full justify-between"
            >
              <p className="text-neutral-400 italic mb-4">"{win.quote}"</p>
              <p className="text-sm text-neutral-500">— {win.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
