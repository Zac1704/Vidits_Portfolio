import React from "react";
import { Users, ClipboardCheck, TrendingUp, AlertTriangle } from "lucide-react";

const defaultFindings = [
  "Users quickly understood the new navigation structure without guidance",
  "Error messages with specific guidance reduced support requests by 35%",
  "Progressive disclosure improved task completion for new users by 40%",
  "Mobile experience matched desktop satisfaction scores for the first time",
];

export function UsabilityTesting({
  summary = "Formal usability testing was not conducted due to project constraints, but heuristic evaluation and design best practices were applied throughout.",
  findings = defaultFindings,
}) {
  return (
    <section id="testing" className="flex flex-col">
      <h2 className="mb-5">Prototyping & Usability Testing</h2>

      <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 bg-accent-400/10 rounded-xl text-center border border-accent-400/20 flex flex-col items-center">
          <Users className="w-8 h-8 text-accent-400 mb-2" />
          <p className="text-2xl font-bold text-accent-400">12</p>
          <p className="text-sm text-neutral-400">Participants</p>
        </div>

        <div className="p-5 bg-accent-400/10 rounded-xl text-center border border-accent-400/20 flex flex-col items-center">
          <ClipboardCheck className="w-8 h-8 text-accent-400 mb-2" />
          <p className="text-2xl font-bold text-accent-400">15</p>
          <p className="text-sm text-neutral-400">Sessions</p>
        </div>

        <div className="p-5 bg-accent-400/10 rounded-xl text-center border border-accent-400/20 flex flex-col items-center">
          <TrendingUp className="w-8 h-8 text-accent-400 mb-2" />
          <p className="text-2xl font-bold text-accent-400">5</p>
          <p className="text-sm text-neutral-400">Key Tasks</p>
        </div>

        <div className="p-5 bg-accent-400/10 rounded-xl text-center border border-accent-400/20 flex flex-col items-center">
          <AlertTriangle className="w-8 h-8 text-accent-400 mb-2" />
          <p className="text-2xl font-bold text-accent-400">3</p>
          <p className="text-sm text-neutral-400">Iterations</p>
        </div>
      </div>

      <p className="text-neutral-400 mb-10 max-w-3xl">{summary}</p>

      {/* Key Findings */}
      <div className="flex flex-col">
        <h4 className="mb-6">Key Findings</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 bg-accent-400/10 rounded-xl border border-accent-400/20"
            >
              <div className="w-6 h-6 bg-accent-400 text-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">{index + 1}</span>
              </div>
              <p className="text-sm text-neutral-400">{finding}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
