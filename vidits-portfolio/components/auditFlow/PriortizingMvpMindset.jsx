import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const PriortizingMvpMindsetSection = () => {
  return (
    <>
      <div
        id="prioritizing-with-an-mvp-mindset"
        className="bg-blue-600 py-24 px-6 overflow-hidden relative scroll-mt-20"
      >
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Prioritizing with an MVP mindset
          </h3>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-18 space-y-20">
        <div>
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-1 h-10 bg-blue-600" />
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
              Where and how will the user achieve the product goals?
            </h2>
          </div>

          <div className="mb-16 space-y-8 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
            <h4 className="text-base md:text-lg font-black uppercase tracking-widest text-blue-600">
              Which branches of the sitemap will we need for usability testing?
            </h4>

            <p className="font-inter font-medium text-gray-900">
              I mapped the sitemap using the product goals and patterns observed
              in existing audit tools. To keep testing focused, I prioritized
              the core areas that directly support audit coordination, evidence
              tracking, and progress visibility, and deferred secondary modules
              until core workflows were validated.
            </p>
          </div>

          {/* Sitemap Embed */}
          <figure className="my-8">
            <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <iframe
                className="w-full h-full"
                src="https://embed.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=2-6993&embed-host=share"
                allowFullScreen
              />
            </div>

            <figcaption className="text-center mt-4">
              <p className="text-sm text-gray-500 italic font-medium">
                Sitemap showing greyed out sections that will likely not be
                needed for usability testing.
              </p>

              <a
                href="https://www.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=2-6993&t=XBr4xu4lI18Y5BdC-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-blue-600 text-white text-[10px] md:text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm w-fit mx-auto"
              >
                View the sitemap via FigJam.
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </figcaption>
          </figure>

          <div className="mt-16 space-y-12">
            <div className="max-w-3xl">
              <h4 className="uppercase text-2xl font-bold mb-6">
                Accounting for users’ existing routines
              </h4>

              <p className="font-inter font-medium text-xl text-gray-900 leading-relaxed mb-6">
                User interviews showed that auditors already follow structured
                audit routines, but manage them across multiple tools. Instead
                of changing how auditors work, I designed AuditFlow to fit into
                existing workflows by allowing manual updates, evidence uploads,
                and status tracking—mirroring how audits are handled today.
              </p>

              <p className="font-inter font-medium text-xl text-gray-900 leading-relaxed italic">
                These flows were prioritized first, as they directly impact
                clarity, ownership, and audit progress.
              </p>
            </div>

            {/* User Flow Embed */}
            <figure className="my-8">
              <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                <iframe
                  className="w-full h-full"
                  src="https://embed.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=0-3450&embed-host=share"
                  allowFullScreen
                />
              </div>

              <figcaption className="text-center mt-4">
                <p className="text-sm text-gray-500 italic font-medium">
                  User flow for manually inputting data for a 1 hour walk.
                </p>

                <a
                  href="https://www.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=0-3450&t=XBr4xu4lI18Y5BdC-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-blue-600 text-white text-[10px] md:text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm w-fit mx-auto"
                >
                  View the user flows via FigJam.
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </figcaption>
            </figure>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-16 items-center p-12 bg-gray-50 rounded-[4rem] border border-gray-100">
            <div className="md:w-1/4">
              <Image
                src="/Images/assets/2066313c778aef6edde4ec33ea8aada7f73acbc3.png" 
                alt="Auditor standing"
                width={300}
                height={400}
                className="w-full h-auto mx-auto md:mx-0"
              />
            </div>

            <div className="flex-1">
              <h4 className="uppercase text-3xl font-bold text-gray-900 mb-8">
                Flows for Usability Testing
              </h4>

              <p className="text-lg text-gray-600 mb-8 font-medium">
                The following were defined as the primary flows required to test
                whether AuditFlow meets its product goals of clarity,
                coordination, and visibility across audits:
              </p>

              <ul className="space-y-6 text-xl font-bold text-blue-600 leading-relaxed">
                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Create and set up an audit to establish scope, structure, and
                  ownership
                </li>

                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Assign audit tasks and ownership to ensure accountability and
                  reduce follow-ups
                </li>

                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Submit and review audit evidence to validate evidence states
                  and review loops
                </li>

                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Track audit progress and generate reports to assess audit
                  health and completion
                </li>
              </ul>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm"
                >
                  View feature roadmap
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriortizingMvpMindsetSection;
