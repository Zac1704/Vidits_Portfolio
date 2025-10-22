"use client";

import Plus from "../../public/Images/svg/PlusSign.svg";
import Image from "next/image";
import { useState } from "react";

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
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <h1 className="text-(--text-color) text-5xl font-bold text-center mb-10 uppercase tracking-tight">
        EXPERIENCE
      </h1>

      <div className="space-y-0">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={
              exp.id !== 4 ? `border-b-4 border-(--gray-text-color)` : ``
            }
          >
            {/* Collapsed View */}
            <div
              onClick={() => toggleExpand(exp.id)}
              className="flex items-center gap-3 sm:gap-4 md:gap-6 py-4 sm:py-6 cursor-pointer transition-colors duration-300 px-2 sm:px-4"
            >
              {/* Logo Placeholder */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] bg-(--gray-text-color) rounded-lg flex-shrink-0"></div>

              {/* Company Name */}
              <div className="flex-1 min-w-0">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-(--gray-text-color) uppercase tracking-tight truncate">
                  {exp.company}
                </h2>
              </div>

              {/* Role - Hidden on mobile */}
              <div className="hidden md:block flex-1 min-w-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-(--gray-text-color) uppercase tracking-tight truncate text-center">
                  {exp.role}
                </p>
              </div>

              {/* Duration - Hidden on small mobile */}
              <div className="hidden sm:block flex-shrink-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-(--gray-text-color) uppercase tracking-tight whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>

              {/* Toggle Button */}
              <button
                className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center transition-transform duration-300 cursor-pointer"
                style={{
                  transform:
                    expandedId === exp.id ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <Image src={Plus} alt="Plus Sign" width={30} height={30} />
              </button>
            </div>

            {/* Expanded View */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedId === exp.id
                  ? "max-h-[800px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-2 sm:px-4 pb-6 sm:pb-8">
                {/* Mobile: Show role and duration */}
                <div className="md:hidden mb-4 ml-14 sm:ml-16">
                  <p className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1">
                    {exp.role}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase">
                    {exp.duration}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-3 sm:space-y-4">
                  {exp.details.map((detail, index) => (
                    <p
                      key={index}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-(--text-color) uppercase leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
