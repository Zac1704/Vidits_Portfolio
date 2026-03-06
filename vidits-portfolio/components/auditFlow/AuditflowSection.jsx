"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AuditFlowSection() {
  const slugMap = {
    "Why auditors?": "why-auditors",

    "How do experienced auditors manage audits using existing tools?":
      "how-do-experienced-auditors-manage-audits",

    "My hypothesis was wrong": "my-hypothesis-was-wrong",

    "Who AuditFlow is designed for": "who-auditflow-is-designed-for",

    "How might we help internal auditors manage audits with greater clarity?":
      "how-might-we-help-internal-auditors",

    "Prioritizing with an MVP mindset": "prioritizing-with-an-mvp-mindset",

    "Finding design patterns": "finding-design-patterns",

    "Iterating based on usability testing":
      "iterating-based-on-usability-testing",

    "Increasing clarity and coordination with AuditFlow":
      "increasing-clarity-and-coordination",

    "Where do we go from here?": "where-do-we-go-from-here",
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -100; // adjust if you have sticky navbar
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="max-w-6xl mx-auto px-6 py-20">
      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
              <span className="px-3 py-1 bg-blue-50 rounded-md">
                UX Case Study
              </span>
              <span className="w-1.5 h-1.5 bg-blue-200 rounded-full" />
              <span>Internal Compliance</span>
            </div>

            <h1 className="font-futura text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-6 leading-[0.9]">
              AuditFlow
            </h1>

            <p className="text-lg md:text-xl text-[#363636] opacity-90 leading-relaxed font-medium">
              AuditFlow is a web-based audit management platform designed to
              help internal audit teams manage audits more efficiently by
              centralizing tasks, evidence, and risk tracking in one system.
            </p>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 w-full flex flex-col mt-12 lg:mt-0"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
            <Image
              src="/Images/assets/92be70cd9b78da0c1357c1a3ebf376f2e7b0b7ee.png"
              alt="AuditFlow Dashboard"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <div className="flex justify-center w-full px-4 sm:px-0">
            <Link
              href="https://www.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=0-2200&t=XBr4xu4lI18Y5BdC-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-blue-600 text-white text-[10px] md:text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm w-fit mx-auto"
            >
              View the affinity map via FigJam.
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* META SECTION */}
      <div className="md:my-16 py-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 py-8 border-y border-gray-200">
          <MetaItem title="PROJECT TYPE" value="Concept project" />
          <MetaItem title="TIMELINE" value="8 weeks" />
          <MetaItem
            title="INDUSTRY"
            value="Audit & Compliance / Enterprise Software"
          />
          <MetaItem title="TOOLS" value="Figma, FigJam" />
          <MetaItem title="ROLE" value="UI/UX Designer" />
        </div>
      </div>

      {/* ROADMAP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            id: "DISCOVER",
            items: [
              "Why auditors?",
              "How do experienced auditors manage audits using existing tools?",
            ],
          },
          {
            id: "DEFINE",
            items: [
              "My hypothesis was wrong",
              "Who AuditFlow is designed for",
              "How might we help internal auditors manage audits with greater clarity?",
            ],
          },
          {
            id: "DEVELOP",
            items: [
              "Prioritizing with an MVP mindset",
              "Finding design patterns",
              "Iterating based on usability testing",
            ],
          },
          {
            id: "DELIVER",
            items: [
              "Increasing clarity and coordination with AuditFlow",
              "Where do we go from here?",
            ],
          },
        ].map((phase, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <h3 className="text-blue-600 font-extrabold tracking-widest text-sm mb-8">
              {phase.id}
            </h3>

            <ul className="space-y-6">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-blue-400 mt-2 text-lg leading-none">
                    •
                  </span>

                  <button
                    onClick={() => handleScroll(slugMap[item])}
                    className="font-inter text-left text-gray-700 text-base leading-relaxed font-medium underline decoration-blue-200 underline-offset-4 hover:text-blue-600 hover:decoration-blue-500 transition-all"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}

function MetaItem({ title, value }) {
  return (
    <div>
      <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
        {title}
      </p>
      <p className="font-bold leading-tight text-gray-900 text-[16px]">
        {value}
      </p>
    </div>
  );
}
