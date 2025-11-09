"use client";

import Image from "next/image";
import { useState } from "react";
import PlusIcon from "../SVG/PlusIcon";

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

      <div className="w-full flex flex-col divide-y-4 divide-(--gray-text-color)">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="w-full">
              {/* Header Row */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto_0.4fr_auto] gap-4 items-center py-6 px-2 sm:px-4 cursor-pointer 
                transition-all duration-500 ease-in-out 
                ${
                  isExpanded
                    ? "bg-(--bg-active)"
                    : "bg-transparent hover:bg-(--hover-bg)"
                }`}
              >
                {/* Indicator Box */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] rounded-lg 
                    transition-all duration-500 ease-in-out
                    ${
                      isExpanded
                        ? "bg-(--text-color)"
                        : "bg-(--gray-text-color)"
                    }`}
                />

                {/* Company */}
                <h2
                  className={`text-2xl font-bold uppercase truncate 
                    transition-all duration-500 ease-in-out
                    ${
                      isExpanded
                        ? "text-(--text-color)"
                        : "text-(--gray-text-color)"
                    }`}
                >
                  {exp.company}
                </h2>

                {/* Role (desktop only) */}
                <p
                  className={`hidden md:block text-xl font-bold uppercase text-right 
                    transition-all duration-500 ease-in-out
                    ${
                      isExpanded
                        ? "text-(--text-color)"
                        : "text-(--gray-text-color)"
                    }`}
                >
                  {exp.role}
                </p>

                {/* Vertical line (desktop only) */}
                <div
                  className={`hidden md:block w-[3px] h-5 bg-current mx-auto transition-all duration-500 ease-in-out
    ${isExpanded ? "text-(--text-color)" : "text-(--gray-text-color)"}`}
                  style={{
                    backgroundColor: isExpanded
                      ? "var(--text-color)"
                      : "var(--gray-text-color)",
                  }}
                ></div>

                {/* Duration (desktop only) */}
                <p
                  className={`hidden md:block text-xl font-bold uppercase text-left 
                    transition-all duration-500 ease-in-out
                    ${
                      isExpanded
                        ? "text-(--text-color)"
                        : "text-(--gray-text-color)"
                    }`}
                >
                  {exp.duration}
                </p>

                {/* Toggle Icon */}
                <button
                  className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center 
                    transition-transform duration-500 ease-in-out"
                  style={{
                    transform: isExpanded
                      ? "rotate(45deg) scale(1.1)"
                      : "rotate(0deg) scale(1)",
                  }}
                  aria-label={
                    isExpanded ? "Collapse details" : "Expand details"
                  }
                >
                  <PlusIcon
                    alt="Toggle"
                    className={`transition-transform duration-500 ease-in-out ${
                      isExpanded
                        ? "text-(--text-color)"
                        : "text-(--gray-text-color)"
                    }`}
                    color="currentColor"
                  />
                </button>
              </div>

              {/* Expanded Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out 
                ${
                  isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-2 sm:px-4 pb-8">
                  {/* Mobile Role + Duration */}
                  <div className="md:hidden mb-4 ml-14 sm:ml-16">
                    <p className="text-base font-bold text-(--text-color) uppercase mb-1">
                      {exp.role}
                    </p>
                    <p className="text-base font-bold text-(--text-color) uppercase">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Details */}
                  <ul className="space-y-3 sm:space-y-4 ml-0 md:ml-[60px]">
                    {exp.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-base ml-4 sm:-ml-4 sm:text-lg md:text-xl font-bold text-(--text-color) uppercase leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-(--text-color) mt-2 flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
