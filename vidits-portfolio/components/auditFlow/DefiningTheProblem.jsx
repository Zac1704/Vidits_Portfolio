import { ArrowRight, Book, Globe, Target } from "lucide-react";
import Image from "next/image";

const DefiningTheProblemSection = () => {
  return (
    <>
      <div className="bg-blue-600 py-18 px-6 overflow-hidden relative scroll-mt-20">
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            My hypothesis was somewhat wrong!
          </h3>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto px-6 py-18"
        id="my-hypothesis-was-wrong"
      >
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 bg-blue-600" />
          <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
            Defining the problem
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* left Text Content */}
          
          <div className="flex-1 text-xl text-gray-600 leading-relaxed font-medium space-y-8">
            <p className="font-inter text-gray-900">
              Internal auditors are managing audits alongside multiple tools and
              stakeholders. While audits follow a structured process, auditors
              are constantly concerned that missing context, unclear ownership,
              and scattered information will impact audit quality, timelines,
              and compliance outcomes.
            </p>

            <div className="pt-10">
              <h4 className="uppercase text-2xl font-bold text-gray-900 mb-6">
                Rerouting the research
              </h4>

              <p className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-widest">
                New research focus: Audit coordination and visibility for
                internal audit teams
              </p>

              <p className="font-inter font-medium text-gray-900">
                Now that the problem space was more defined, there was more
                research to be done. I approached my second round of research
                with the following questions in mind:
              </p>

              <ul className="font-inter font-medium space-y-6 mt-6 text-xl  text-gray-900">
                <li className="flex gap-4 items-start">
                  <span className="text-blue-600 shrink-0 mt-1">•</span>
                  How do auditors currently track what is pending, completed,
                  and reviewed?
                </li>

                <li className="flex gap-4 items-start">
                  <span className="text-blue-600 shrink-0 mt-1">•</span>
                  Where does communication break down during an audit?
                </li>

                <li className="flex gap-4 items-start">
                  <span className="text-blue-600 shrink-0 mt-1">•</span>
                  How is ownership assigned and maintained across tasks and
                  evidence?
                </li>

                <li className="flex gap-4 items-start">
                  <span className="text-blue-600 shrink-0 mt-1">•</span>
                  How do existing tools support—or hinder—visibility into audit
                  progress?
                </li>
              </ul>
            </div>
          </div>

          {/* Right Quote Card */}
          <div className="md:w-1/2 relative">
            <div className="bg-pink-100 p-10 rounded-[2rem] shadow-sm transform -rotate-1 relative z-10">
              <p className="text-xl font-handwriting italic text-pink-900 leading-relaxed mb-10">
                "My legs are turning into tofu. I'm worried how it will affect
                me when I get older." - 64 year old retired adult
              </p>

              <div className="absolute -bottom-8 -left-8 w-32">
                <Image
                  src="/Images/assets/c97f8ff5eb6e970355ccf5bdcd6c04934ac4dba9.png" // replace with your image name
                  alt="Sad auditor"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          {/* Research Content Card */}
          <div className="p-5 md:p-12 bg-white rounded-[3rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] hover:shadow-[0_32px_64px_-16px_rgba(59,130,246,0.1)] transition-all duration-500 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Book className="w-6 h-6 text-blue-600" />
            </div>

            <h4 className="uppercase text-2xl font-black mb-6 text-gray-900 tracking-tight">
              Research for the Content
            </h4>

            <p className="font-inter font-medium text-lg text-gray-900 leading-relaxed mb-8">
              I needed{" "}
              <span className="text-gray-900 font-bold">
                reliable references
              </span>{" "}
              to understand best practices for managing internal audits so that
              the system I designed would align with real audit standards and
              workflows. I referred to commonly followed internal audit
              frameworks and professional guidance.
            </p>

            <div className="space-y-6">
              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                Core Principles
              </p>

              <ul className="space-y-5">
                {[
                  "Processes are clearly defined and followed",
                  "Traceability and ownership are critical",
                  "Visibility into progress avoids last-minute gaps",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span className="font-inter font-medium text-xl text-gray-900 leading-tight">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 pt-8 border-t-4 border-gray-100 text-base text-gray-500 italic leading-relaxed">
              These principles informed how AuditFlow structures audits from
              start to finish.
            </p>
          </div>

          {/* Competitive Research Card */}
          <div className="p-5 md:p-12 bg-white rounded-[3rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] hover:shadow-[0_32px_64px_-16px_rgba(59,130,246,0.1)] transition-all duration-500 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-blue-600" />
            </div>

            <h4 className="uppercase text-2xl font-black mb-6 text-gray-900 tracking-tight">
              Competitive Research
            </h4>

            <p className="font-inter font-medium text-lg text-gray-900 leading-relaxed mb-8">
              I reviewed{" "}
              <span className="text-gray-900 font-bold">
                3 industry-standard audit tools
              </span>{" "}
              to understand how they support workflows. The goal was to identify
              where task tracking and evidence management currently fail
              auditors.
            </p>

            <div className="space-y-6">
              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                Key Observations
              </p>

              <ul className="space-y-5">
                {[
                  "Heavy reliance on manual coordination",
                  "Status and ownership are not surfaced",
                  "Fragmented visibility across modules",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span className="font-inter font-medium text-xl text-gray-900 leading-tight">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t-4 border-gray-100 flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center justify-between px-8 py-5 bg-blue-50 text-blue-600 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-blue-600 hover:text-white transition-all group/btn shadow-sm hover:shadow-md"
              >
                View full analysis
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center justify-between px-8 py-5 bg-gray-50 text-gray-500 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-100 hover:text-gray-900 transition-all shadow-sm"
              >
                Browse screenshots
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefiningTheProblemSection;
