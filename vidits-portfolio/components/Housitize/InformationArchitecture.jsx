import React from "react";
import { Layers, ChevronRight } from "lucide-react";

const defaultStructure = [
  {
    title: "Hero & Value Proposition",
    subsections: ["Main headline", "Search filters", "CTA"],
  },
  {
    title: "Property Filters",
    subsections: ["By type", "By location", "By price"],
  },
  {
    title: "Housitize Top Picks",
    subsections: ["Curated properties"],
  },
  {
    title: "Curated Collections",
    subsections: ["Themed sets"],
  },
  {
    title: "Top Localities",
    subsections: ["Location cards"],
  },
  {
    title: "Top Developers",
    subsections: ["Developer profiles"],
  },
  {
    title: "News & Articles",
    subsections: ["Blog content"],
  },
  {
    title: "Testimonials",
    subsections: ["User reviews"],
  },
];

export default function InformationArchitecture({
  rationale = "The IA is designed around exploration-first behavior, allowing users to browse by intent rather than forcing linear flows. Core sections include task-based grouping, shallow navigation depth, and future scalability.",
  structure = defaultStructure,
}) {
  return (
    <section id="ia" className="flex flex-col">
      <h2 className="mb-5">Information Architecture</h2>

      {/* Rationale */}
      <div className="mb-10 p-6 bg-neutral-800 border-l-4 border-accent-400 rounded-xl flex flex-col">
        <h5 className="mb-3">Structural Rationale</h5>
        <p className="text-neutral-400">{rationale}</p>
      </div>

      {/* Structure Visualization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {structure.map((section, index) => (
          <div
            key={index}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 hover:border-accent-400/50 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-700">
              <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20 flex-shrink-0">
                <Layers className="w-5 h-5 text-accent-400" />
              </div>
              <h5 className="text-white">{section.title}</h5>
            </div>

            <ul className="flex flex-col gap-2">
              {section.subsections.map((subsection, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-accent-400 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                  {subsection}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Navigation Principles */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-accent-400/10 rounded-xl border border-accent-400/20 flex flex-col">
          <h6 className="mb-2 text-accent-400">Primary Navigation</h6>
          <p className="text-sm text-neutral-400">
            Task-based structure aligned with user goals
          </p>
        </div>

        <div className="p-5 bg-accent-400/10 rounded-xl border border-accent-400/20 flex flex-col">
          <h6 className="mb-2 text-accent-400">Secondary Access</h6>
          <p className="text-sm text-neutral-400">
            Contextual links and quick actions
          </p>
        </div>

        <div className="p-5 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <h6 className="mb-2 text-white">Scalability</h6>
          <p className="text-sm text-neutral-400">
            Flexible structure for future features
          </p>
        </div>
      </div>
    </section>
  );
}
