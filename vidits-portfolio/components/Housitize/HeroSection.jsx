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

export default function HeroSection({
  projectTitle = "Housitize Estate",
  projectSubtitle = "A modern real-estate discovery platform designed to simplify property exploration, comparison, and decision-making for Indian homebuyers and investors.",
  heroImageUrl,
  tags = defaultTags,
}) {
  return (
    <section className="flex flex-col">
      {/* Hero UI Mockup */}
      <div className="w-full aspect-[16/9] bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700 rounded-2xl overflow-hidden mb-8 relative border border-neutral-700 flex items-center justify-center">
        {heroImageUrl ? (
          <img
            src={heroImageUrl}
            alt={projectTitle}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" />
        )}
      </div>

      {/* Title Block */}
      <div className="flex flex-col gap-4 max-w-4xl">
        <h1>{projectTitle}</h1>
        <p className="text-lg text-neutral-400">{projectSubtitle}</p>
      </div>

      {/* Case Study Tags */}
      <div className="flex flex-col mt-8">
        <h6 className="mb-4 text-neutral-500">Case Study Sections</h6>
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
      </div>
    </section>
  );
}
