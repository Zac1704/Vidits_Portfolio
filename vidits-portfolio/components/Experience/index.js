"use client";

import Image from "next/image";
import { useState } from "react";
import Plus from "../../public/Images/svg/PlusSign.svg";

const experiences = [
  {
    id: 1,
    company: "FREELANCER",
    role: "GRAPHICS & UI/UX DESIGNER",
    duration: "JAN 25 – PRESENT",
    details: [
      "CREATED PROTOTYPES OF THEIR UPCOMING APP USING FIGMA.",
      "PROVIDED SUPPORT THROUGHOUT THE DEVELOPMENT PROCESS FOR ANY ISSUES RELATED TO UI AND UX DESIGN.",
      "PARTICIPATED IN BRAINSTORMING SESSIONS WITH OTHER DESIGNERS TO GENERATE IDEAS FOR THE NEW APP.",
      "COLLABORATED WITH DEVELOPERS TO ENSURE COMPATIBILITY BETWEEN DESIGN AND TECHNICAL IMPLEMENTATION.",
    ],
  },
  {
    id: 2,
    company: "VISTAAR WEBX",
    role: "GRAPHICS DESIGNER INTERN",
    duration: "OCT 24 – JAN 25",
    details: [
      "DESIGNED SOCIAL MEDIA GRAPHICS AND MARKETING MATERIALS.",
      "COLLABORATED WITH THE MARKETING TEAM TO CREATE ENGAGING VISUAL CONTENT.",
      "LEARNED AND APPLIED BRAND GUIDELINES ACROSS VARIOUS DESIGN PROJECTS.",
      "ASSISTED IN CREATING MOCKUPS AND PRESENTATIONS FOR CLIENT PITCHES.",
    ],
  },
  {
    id: 3,
    company: "RUDRA AI TECHNOLOGIES",
    role: "UI/UX DESIGNER",
    duration: "JAN 24 – SEPT 24",
    details: [
      "DESIGNED USER INTERFACES FOR AI-POWERED APPLICATIONS.",
      "CONDUCTED USER RESEARCH AND USABILITY TESTING.",
      "CREATED WIREFRAMES, PROTOTYPES, AND HIGH-FIDELITY DESIGNS.",
      "WORKED CLOSELY WITH DEVELOPERS TO IMPLEMENT DESIGN SYSTEMS.",
    ],
  },
  {
    id: 4,
    company: "TASTY SNACKS",
    role: "GRAPHICS DESIGNER FREELANCE",
    duration: "JAN 25 – PRESENT",
    details: [
      "CREATED PACKAGING DESIGNS AND BRAND MATERIALS.",
      "DEVELOPED VISUAL IDENTITY FOR PRODUCT LAUNCHES.",
      "DESIGNED MENU BOARDS AND PROMOTIONAL MATERIALS.",
      "COLLABORATED WITH THE MARKETING TEAM ON CAMPAIGN VISUALS.",
    ],
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <h1 className="text-(--text-color) text-5xl font-bold text-center mb-10 uppercase tracking-tight">
        Experience
      </h1>

      {experiences.map((exp, index) => {
        const isExpanded = expandedId === exp.id;
        const textColor = isExpanded
          ? "text-(--text-color)"
          : "text-(--gray-text-color)";
        const bgColor = isExpanded
          ? "bg-(--text-color)"
          : "bg-(--gray-text-color)";
        const hasBorder = index !== experiences.length - 1;

        return (
          <div
            key={exp.id}
            className={hasBorder ? "border-b-4 border-(--gray-text-color)" : ""}
          >
            {/* Header */}
            <div
              onClick={() => toggleExpand(exp.id)}
              className={`flex items-center gap-4 md:gap-6 py-6 cursor-pointer px-2 sm:px-4 
              transition-all duration-500 ease-in-out 
              ${isExpanded ? "bg-(--bg-active)" : "bg-transparent"}
              hover:bg-(--hover-bg)`} // optional subtle hover
            >
              {/* Indicator Box */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] rounded-lg flex-shrink-0 
                transition-all duration-500 ease-in-out
                ${isExpanded ? "bg-(--text-color)" : "bg-(--gray-text-color)"}`}
              />

              {/* Company */}
              <h2
                className={`flex-1 text-xl md:text-2xl font-bold uppercase truncate 
                transition-all duration-500 ease-in-out
                ${
                  isExpanded
                    ? "text-(--text-color)"
                    : "text-(--gray-text-color)"
                }`}
              >
                {exp.company}
              </h2>

              {/* Role (hidden on mobile) */}
              <p
                className={`hidden md:block flex-1 text-xl font-bold uppercase text-center truncate
                transition-all duration-500 ease-in-out
                ${
                  isExpanded
                    ? "text-(--text-color)"
                    : "text-(--gray-text-color)"
                }`}
              >
                {exp.role}
              </p>

              {/* Duration (hidden on small mobile) */}
              <p
                className={`hidden sm:block text-xl font-bold uppercase whitespace-nowrap
                transition-all duration-500 ease-in-out
                ${
                  isExpanded
                    ? "text-(--text-color)"
                    : "text-(--gray-text-color)"
                }`}
              >
                {exp.duration}
              </p>

              {/* Toggle Button */}
              <button
                className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center 
               transition-transform duration-500 ease-in-out"
                style={{
                  transform: isExpanded
                    ? "rotate(45deg) scale(1.1)"
                    : "rotate(0deg) scale(1)",
                }}
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                <Image src={Plus} alt="Toggle" width={30} height={30} />
              </button>
            </div>

            {/* Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-2 sm:px-4 pb-8">
                {/* Mobile Role + Duration */}
                <div className="md:hidden mb-4 ml-14 sm:ml-16">
                  <p className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1">
                    {exp.role}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase">
                    {exp.duration}
                  </p>
                </div>

                {/* Details */}
                <ul className="space-y-3 sm:space-y-4">
                  {exp.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-base sm:text-lg md:text-xl font-bold text-(--text-color) uppercase leading-relaxed"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
