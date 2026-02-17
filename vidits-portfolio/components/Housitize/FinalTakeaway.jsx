import React from "react";
import { Award, Briefcase } from "lucide-react";

const skillsDemonstrated = [
  "Information Architecture",
  "UI Design & Visual Systems",
  "Interaction Design",
  "Real-Estate Domain Understanding",
  "Business-oriented UX Thinking",
];

const projectValue =
  "This project showcases end-to-end UX strategy, visual design excellence, and the ability to translate complex business requirements into user-friendly interfaces. It demonstrates proficiency in designing for high-stakes domains where clarity and trust are paramount.";

export default function FinalTakeaway({
  conclusion = "Housitize Estate demonstrates my ability to design structured, business-driven UI/UX solutions in complex domains like real estate. By prioritizing clarity, hierarchy, and user intent, the platform lays a strong foundation for scalable growth and future enhancements.",
  cta = "View Next Case Study",
  ctaUrl = "#",
}) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Final Takeaway</h2>

      {/* Conclusion */}
      <div className="mb-10 p-8 bg-neutral-800 border-l-4 border-accent-400 rounded-xl">
        <p className="text-lg text-neutral-400 leading-relaxed">{conclusion}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skills Demonstrated */}
        <div className="p-8 bg-neutral-800 rounded-2xl border border-neutral-700 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent-400/10 rounded-xl flex items-center justify-center border border-accent-400/20">
              <Award className="w-6 h-6 text-accent-400" />
            </div>
            <h4>Skills Demonstrated</h4>
          </div>

          <div className="flex flex-wrap gap-4">
            {skillsDemonstrated.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent-400/10 text-accent-400 rounded-full border border-accent-400/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Value */}
        <div className="p-8 bg-neutral-800 rounded-2xl border border-neutral-700 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-accent-400/10 rounded-xl flex items-center justify-center border border-accent-400/20">
              <Briefcase className="w-6 h-6 text-accent-400" />
            </div>
            <h4>Professional Approach</h4>
          </div>

          <p className="text-neutral-400">{projectValue}</p>
        </div>
      </div>
    </section>
  );
}
