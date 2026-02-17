import React from "react";
import { GitBranch, CheckCircle2, XCircle } from "lucide-react";

const defaultDecisions = [
  {
    topic: "Navigation",
    chosen: "Section-based homepage",
    rejected: "Heavy multi-level menus",
    rationale:
      "Exploration felt more natural and less restrictive with a scroll-based section approach.",
  },
  {
    topic: "Layout Density",
    chosen: "Spacious card-based layout",
    rejected: "Compact grid",
    rationale:
      "Improved scannability and reduced fatigue. Users can better differentiate properties with more breathing room.",
  },
  {
    topic: "Property Cards",
    chosen: "Generous spacing with clear CTAs",
    rejected: "Dense information blocks",
    rationale:
      "Testing showed users prefer clarity over information density when making high-value decisions like property selection.",
  },
];

export function DesignDecisions({ decisions = defaultDecisions }) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Design Decisions & Trade-offs</h2>

      <p className="text-neutral-400 mb-10 max-w-3xl">
        Every design decision involved careful consideration of user needs,
        business constraints, and technical feasibility. Below are key decisions
        where we evaluated multiple approaches before committing to a direction.
      </p>

      <div className="flex flex-col gap-8">
        {decisions.map((decision, index) => (
          <div
            key={index}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent-400/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent-400/20">
                <GitBranch className="w-6 h-6 text-accent-400" />
              </div>
              <h4 className="text-white">{decision.topic}</h4>
            </div>

            {/* Chosen vs Rejected */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Chosen */}
              <div className="p-5 bg-green-500/10 border border-green-500/20 rounded-xl flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h6 className="text-green-300">Chosen Approach</h6>
                </div>
                <p className="text-sm text-neutral-400">{decision.chosen}</p>
              </div>

              {/* Rejected */}
              <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-xl flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <h6 className="text-red-300">Rejected Alternative</h6>
                </div>
                <p className="text-sm text-neutral-400">{decision.rejected}</p>
              </div>
            </div>

            {/* Rationale */}
            <div className="p-5 bg-neutral-700 rounded-xl border border-neutral-600 flex flex-col">
              <h6 className="mb-2 text-white">Rationale</h6>
              <p className="text-sm text-neutral-400">{decision.rationale}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
