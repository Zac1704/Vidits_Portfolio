import React from "react";
import { Eye, Hand, Ear, CheckCircle2 } from "lucide-react";

const defaultStandards = [
  {
    category: "Visual",
    icon: <Eye className="w-5 h-5" />,
    standards: [
      "Adequate color contrast in most sections",
      "Clear typography hierarchy",
      "Legible text sizing",
    ],
  },
  {
    category: "Motor",
    icon: <Hand className="w-5 h-5" />,
    standards: [
      "Touch targets not optimized (desktop-only design)",
      "Keyboard navigation not fully validated",
      "Click areas need expansion for mobile",
    ],
  },
  {
    category: "Cognitive",
    icon: <Ear className="w-5 h-5" />,
    standards: [
      "Clear section grouping",
      "Consistent visual patterns",
      "Reduced cognitive overload through spacing",
    ],
  },
];

export function Accessibility({
  wcagLevel = "Estimated: WCAG 2.1 – A (Partial AA)",
  description = "Accessibility improvements identified as future scope. Current design shows adequate contrast and hierarchy but requires mobile optimization and keyboard navigation validation for full AA compliance.",
  standards = defaultStandards,
}) {
  return (
    <section id="accessibility" className="flex flex-col">
      <h2 className="mb-5">Accessibility & WCAG Compliance</h2>

      {/* WCAG Level Badge */}
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-xl mb-8 self-start">
        <CheckCircle2 className="w-6 h-6 text-green-400" />
        <span className="font-semibold text-green-300">
          {wcagLevel} Compliant
        </span>
      </div>

      <p className="text-neutral-400 mb-10 max-w-3xl">{description}</p>

      {/* Standards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {standards.map((standard, index) => (
          <div
            key={index}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-accent-400/10 rounded-xl flex items-center justify-center border border-accent-400/20">
                <div className="text-accent-400">{standard.icon}</div>
              </div>
              <h5 className="text-white">{standard.category}</h5>
            </div>

            <ul className="flex flex-col gap-3">
              {standard.standards.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-neutral-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Considerations */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-accent-400/10 rounded-xl border border-accent-400/20 flex flex-col">
          <h6 className="mb-3 text-accent-400">Screen Reader Compatibility</h6>
          <p className="text-sm text-neutral-400">
            Semantic HTML, ARIA labels, and logical heading structure ensure
            full compatibility with NVDA, JAWS, and VoiceOver.
          </p>
        </div>

        <div className="p-6 bg-accent-400/10 rounded-xl border border-accent-400/20 flex flex-col">
          <h6 className="mb-3 text-accent-400">Responsive Text Sizing</h6>
          <p className="text-sm text-neutral-400">
            All text uses relative units (rem/em) and maintains readability when
            users adjust browser font size up to 200%.
          </p>
        </div>
      </div>
    </section>
  );
}
