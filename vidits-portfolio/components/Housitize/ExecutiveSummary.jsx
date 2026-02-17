import React from "react";

export default function ExecutiveSummary({
  problem = "Users browsing real-estate platforms often feel overwhelmed by cluttered layouts, inconsistent property information, and unclear next steps. Existing solutions prioritize listings over usability, leading to drop-offs during exploration and comparison.",
  audience = "Primary users include Indian homebuyers, investors, and renters aged 24–45, actively searching for residential properties across cities and localities, often comparing multiple platforms before making decisions.",
  solution = "Housitize Estate delivers a structured, visually clean, and intuitive property discovery experience that emphasizes clarity, hierarchy, and trust. The interface focuses on guided exploration, well-defined sections, and reduced cognitive load.",
  outcome = "The redesigned experience improves browsing confidence, makes property comparison easier, and creates a professional, credible perception of the brand—positioning Housitize as a premium yet approachable real-estate platform.",
}) {
  return (
    <section id="executive-summary" className="flex flex-col">
      <h2 className="mb-5">Executive Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <h5 className="mb-3 text-accent-400">The Problem</h5>
          <p className="text-neutral-400">{problem}</p>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <h5 className="mb-3 text-accent-400">The Audience</h5>
          <p className="text-neutral-400">{audience}</p>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <h5 className="mb-3 text-accent-400">The Solution</h5>
          <p className="text-neutral-400">{solution}</p>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <h5 className="mb-3 text-accent-400">The Outcome</h5>
          <p className="text-neutral-400">{outcome}</p>
        </div>
      </div>
    </section>
  );
}
