import React from "react";
import { Target, BarChart3 } from "lucide-react";

const defaultGoals = [
  {
    title: "Reduce Cognitive Load",
    description: "Present property data in a structured, scannable format",
  },
  {
    title: "Improve Discoverability",
    description:
      "Enable users to easily explore top picks, localities, developers, and collections",
  },
  {
    title: "Build Trust & Credibility",
    description:
      "Use clean visuals, consistent layouts, and professional UI patterns",
  },
  {
    title: "Support Decision-Making",
    description:
      "Make comparison and evaluation intuitive without overwhelming users",
  },
];

const defaultMetrics = [
  { name: "Time Spent Exploring", target: "Increased engagement on listings" },
  { name: "Homepage Bounce Rate", target: "Lower bounce from sections" },
  { name: "User Feedback Clarity", target: "Improved clarity perception" },
  { name: "Brand Professionalism", target: "Stronger brand credibility" },
];

export default function GoalsMetrics({
  goals = defaultGoals,
  metrics = defaultMetrics,
}) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Goals & Success Metrics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Design Goals */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20">
              <Target className="w-5 h-5 text-accent-400" />
            </div>
            <h4>Design Goals</h4>
          </div>

          <div className="flex flex-col gap-4">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col"
              >
                <h6 className="mb-2 text-white">{goal.title}</h6>
                <p className="text-sm text-neutral-400">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20">
              <BarChart3 className="w-5 h-5 text-accent-400" />
            </div>
            <h4>Success Metrics</h4>
          </div>

          <div className="flex flex-col gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col"
              >
                <h6 className="mb-2 text-white">{metric.name}</h6>
                <p className="text-sm text-accent-400 font-semibold">
                  {metric.target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
