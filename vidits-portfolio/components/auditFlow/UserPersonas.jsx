import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserPersonasSection = () => {
  return (
    <>
      <div className="bg-blue-600 py-18 px-6 overflow-hidden relative scroll-mt-20">
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Who AuditFlow is designed for
          </h3>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 bg-blue-600" />
          <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
            User Personas
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <p className="font-inter font-medium text-lg md:text-xl text-gray-900 mb-10 max-w-3xl leading-relaxed">
              To design AuditFlow with clarity and intent, I defined two primary
              user roles based on research and usability testing insights. These
              personas represent the core behavioral patterns, motivations, and
              decision-making styles observed across interviews.
              <br />
              <br />
              Each persona is supported by an empathy map and journey mapping
              exercise to understand not just what users do, but how they think
              and feel throughout the audit lifecycle.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {/* Persona 1 */}
          <div className="w-full">
            <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <iframe
                className="w-full h-full"
                src="https://embed.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=80-3523&embed-host=share"
                allowFullScreen
              />
            </div>

            <figcaption className="mt-8 text-center">
              <p className="text-base md:text-lg text-gray-700 font-bold max-w-2xl mx-auto mb-2">
                Ananya & Rajesh : The primary personas guiding AuditFlow
              </p>
            </figcaption>
          </div>
          <div className="w-full">
            <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
                className="w-full h-full"
                src="https://embed.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=94-2868&embed-host=share"
                allowFullScreen
              />
            </div>

            <figcaption className="mt-8 text-center">
              <p className="text-base md:text-lg text-gray-700 font-bold max-w-2xl mx-auto mb-2">
                Empathy maps of Ananya & Rajesh that informed AuditFlow’s UX
                decisions
              </p>
            </figcaption>
          </div>

          {/* Persona 2 */}
          <div className="w-full overflow-hidden border-t border-gray-100">
            <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <iframe
                className="w-full h-full"
                src="https://embed.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=345-2490&embed-host=share"
                allowFullScreen
              />
            </div>

            <figcaption className="mt-8 text-center">
              <p className="text-base md:text-lg text-gray-700 font-bold max-w-2xl mx-auto mb-2">
                User Journey Maps that guided AuditFlow’s experience design
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="https://www.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=0-2283&t=bONteTeEdb3q6o2E-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm whitespace-nowrap"
                >
                  View Persona RESEARCH via FigJam
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPersonasSection;
