import React from "react";
import { MousePointer, LogIn, Zap, LogOut } from "lucide-react";

const defaultStages = [
  {
    name: "Discover",
    icon: <MousePointer className="w-6 h-6" />,
    actions: [
      "Explores homepage sections",
      "Views featured properties",
      "Scans categories",
    ],
    emotions: "neutral",
    opportunities: [
      "Clear categorization",
      "Strong visual hierarchy",
      "Trust signals",
    ],
  },
  {
    name: "Explore",
    icon: <LogIn className="w-6 h-6" />,
    actions: ["Browses collections", "Filters by locality", "Views top picks"],
    emotions: "positive",
    opportunities: [
      "Guided exploration",
      "Intuitive filters",
      "Progressive disclosure",
    ],
  },
  {
    name: "Evaluate",
    icon: <Zap className="w-6 h-6" />,
    actions: [
      "Compares properties",
      "Reviews developer info",
      "Assesses location",
    ],
    emotions: "neutral",
    opportunities: [
      "Consistent layouts",
      "Scannable data",
      "Clear differentiation",
    ],
  },
  {
    name: "Decide",
    icon: <LogOut className="w-6 h-6" />,
    actions: ["Considers inquiry", "Saves property", "Shares with family"],
    emotions: "positive",
    opportunities: ["Trust signals", "Clear CTAs", "Easy sharing options"],
  },
];

export function UserJourney({ stages = defaultStages }) {
  const getEmotionColor = (emotion) => {
    switch (emotion) {
      case "positive":
        return "bg-green-500/10 border-green-500/30 text-green-400";
      case "negative":
        return "bg-red-500/10 border-red-500/30 text-red-400";
      default:
        return "bg-neutral-800 border-neutral-700 text-neutral-400";
    }
  };

  const getEmotionLabel = (emotion) => {
    switch (emotion) {
      case "positive":
        return "😊 Positive";
      case "negative":
        return "😟 Frustrated";
      default:
        return "😐 Neutral";
    }
  };

  return (
    <section id="journey" className="flex flex-col">
      <h2 className="mb-5">User Journey Mapping</h2>

      <div className="flex flex-col gap-6">
        {stages.map((stage, index) => (
          <div key={index} className="relative">
            {/* Connector Line */}
            {index < stages.length - 1 && (
              <div className="absolute left-8 top-20 w-0.5 h-full bg-accent-400/20 -z-10" />
            )}

            <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Stage Header */}
                <div className="md:col-span-3 flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent-400/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent-400/20">
                      <div className="text-accent-400">{stage.icon}</div>
                    </div>
                    <div className="flex flex-col">
                      <h4>{stage.name}</h4>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs mt-2 border whitespace-nowrap ${getEmotionColor(
                          stage.emotions
                        )}`}
                      >
                        {getEmotionLabel(stage.emotions)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="md:col-span-4 flex flex-col">
                  <h6 className="mb-3 text-neutral-500">User Actions</h6>
                  <ul className="flex flex-col gap-2">
                    {stage.actions.map((action, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-neutral-400 flex items-start gap-2"
                      >
                        <span className="text-accent-400 mt-0.5">▸</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Opportunities */}
                <div className="md:col-span-5 flex flex-col">
                  <h6 className="mb-3 text-accent-400">UX Opportunities</h6>
                  <ul className="flex flex-col gap-2">
                    {stage.opportunities.map((opportunity, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-neutral-400 flex items-start gap-2"
                      >
                        <span className="text-accent-400 mt-0.5">✦</span>
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
