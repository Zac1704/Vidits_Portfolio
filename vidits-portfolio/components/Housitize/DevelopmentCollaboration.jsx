import React from "react";
import { Code, FileText, MessageSquare, GitBranch } from "lucide-react";

const defaultMethods = [
  {
    phase: "Handoff",
    icon: <FileText className="w-5 h-5" />,
    description:
      "Comprehensive design documentation with specifications, assets, and interactive prototypes",
    deliverables: [
      "Figma developer handoff files",
      "Component specifications",
      "Design tokens (JSON)",
      "Interactive prototypes",
    ],
  },
  {
    phase: "Execution",
    icon: <Code className="w-5 h-5" />,
    description:
      "Close collaboration during development with weekly sync meetings and Slack support",
    deliverables: [
      "Design QA sessions",
      "Component library reviews",
      "Responsive breakpoint guidance",
      "Animation specifications",
    ],
  },
  {
    phase: "Quality Assurance",
    icon: <MessageSquare className="w-5 h-5" />,
    description:
      "Systematic UI audits across browsers and devices with detailed feedback documentation",
    deliverables: [
      "Cross-browser testing",
      "Accessibility audit",
      "Visual regression testing",
      "Bug prioritization",
    ],
  },
  {
    phase: "Iteration",
    icon: <GitBranch className="w-5 h-5" />,
    description:
      "Continuous refinement based on developer feedback and technical constraints",
    deliverables: [
      "Design adjustments",
      "Performance optimizations",
      "Edge case solutions",
      "Documentation updates",
    ],
  },
];

const defaultOutcomes = [
  {
    phase: "Design Consistency",
    icon: <FileText className="w-5 h-5" />,
    description:
      "Ensured all components and layouts were consistent and followed the design system",
    deliverables: [
      "Component library",
      "Design tokens",
      "Consistent layout logic",
    ],
  },
  {
    phase: "Development Readiness",
    icon: <Code className="w-5 h-5" />,
    description:
      "Provided high-fidelity designs that were ready for development with minimal changes",
    deliverables: [
      "Figma files",
      "Interactive prototypes",
      "Clear specifications",
    ],
  },
  {
    phase: "User Experience",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "Focused on creating a seamless and intuitive user experience",
    deliverables: [
      "User testing feedback",
      "Accessibility considerations",
      "Responsive design",
    ],
  },
  {
    phase: "Technical Adaptability",
    icon: <GitBranch className="w-5 h-5" />,
    description:
      "Adapted designs to meet technical constraints and provided solutions for edge cases",
    deliverables: [
      "Design adjustments",
      "Performance optimizations",
      "Edge case solutions",
    ],
  },
];

export function DevelopmentCollaboration({
  introduction = "This was a design-only freelance engagement. Deliverables focused on high-fidelity Figma designs, component consistency, and clear layout logic for future development.",
  methods = defaultMethods,
  outcomes = defaultOutcomes,
}) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Development Collaboration</h2>

      <p className="text-neutral-400 mb-10 max-w-3xl">{introduction}</p>

      {/* Methods */}
      <div className="flex flex-col gap-6">
        {methods.map((step, index) => (
          <div
            key={index}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8">
              {/* Phase */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-accent-400/10 rounded-xl flex items-center justify-center border border-accent-400/20">
                    <div className="text-accent-400">{step.icon}</div>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">
                      Phase {index + 1}
                    </p>
                    <h5 className="text-white">{step.phase}</h5>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <h6 className="mb-2 text-neutral-500">Approach</h6>
                <p className="text-sm text-neutral-400">{step.description}</p>
              </div>

              {/* Deliverables */}
              <div className="md:col-span-5">
                <h6 className="mb-2 text-neutral-500">Deliverables</h6>
                <ul className="flex flex-col gap-1">
                  {step.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-neutral-400 flex items-start gap-2"
                    >
                      <span className="text-accent-400 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Outcomes */}
      <div className="flex flex-col gap-6 mt-10">
        {outcomes.map((step, index) => (
          <div
            key={index}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-accent-400/10 rounded-xl flex items-center justify-center border border-accent-400/20">
                    <div className="text-accent-400">{step.icon}</div>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">
                      Outcome {index + 1}
                    </p>
                    <h5 className="text-white">{step.phase}</h5>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4">
                <h6 className="mb-2 text-neutral-500">Impact</h6>
                <p className="text-sm text-neutral-400">{step.description}</p>
              </div>

              <div className="md:col-span-5">
                <h6 className="mb-2 text-neutral-500">Deliverables</h6>
                <ul className="flex flex-col gap-1">
                  {step.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-neutral-400 flex items-start gap-2"
                    >
                      <span className="text-accent-400 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-neutral-800 rounded-xl border border-neutral-700">
          <h6 className="mb-2 text-white">Design Tools</h6>
          <p className="text-sm text-neutral-400">Figma, Storybook, Zeplin</p>
        </div>
        <div className="p-5 bg-neutral-800 rounded-xl border border-neutral-700">
          <h6 className="mb-2 text-white">Communication</h6>
          <p className="text-sm text-neutral-400">Slack, Weekly syncs, JIRA</p>
        </div>
        <div className="p-5 bg-neutral-800 rounded-xl border border-neutral-700">
          <h6 className="mb-2 text-white">Version Control</h6>
          <p className="text-sm text-neutral-400">GitHub, Design versioning</p>
        </div>
      </div>
    </section>
  );
}
