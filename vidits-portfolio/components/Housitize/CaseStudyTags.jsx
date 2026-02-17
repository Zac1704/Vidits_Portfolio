import React from "react";

const defaultTags = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "Problem Framing", href: "#problem" },
  { label: "Research & Insights", href: "#research" },
  { label: "User Personas", href: "#persona" },
  { label: "User Journey", href: "#journey" },
  { label: "Information Architecture", href: "#ia" },
  { label: "User Flows", href: "#flows" },
  { label: "High-Fidelity UI", href: "#hifi" },
  { label: "Usability Testing", href: "#testing" },
  { label: "Accessibility & WCAG", href: "#accessibility" },
  { label: "Impact & Outcomes", href: "#impact" },
];

export function CaseStudyTags({ tags = defaultTags }) {
  return (
    <section className="flex flex-col">
      <h6 className="mb-6 text-neutral-500">Case Study Sections</h6>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <a
            key={index}
            href={tag.href || "#"}
            className="px-4 py-2 bg-neutral-800 text-accent-400 rounded-full border border-neutral-700 hover:bg-neutral-700 hover:border-accent-400 transition-all duration-200"
          >
            {tag.label}
          </a>
        ))}
      </div>
    </section>
  );
}
