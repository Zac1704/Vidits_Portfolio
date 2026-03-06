import { ArrowUpRight } from "lucide-react";
import CarouselAuditflow from "./CarouselAuditflow";
import Image from "next/image";

const UsabilityTestResultsSection = () => {
  return (
    <>
      <div
        id="iterating-based-on-usability-testing"
        className="bg-blue-600 py-18 px-6 overflow-hidden relative scroll-mt-20"
      >
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Iterating based on usability test results
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-18 space-y-20">
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
            <iframe
              loading="lazy"
              className="w-full h-full"
              src="https://embed.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=45-2226&embed-host=share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=45-2226&t=XBr4xu4lI18Y5BdC-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 px-6 py-3 md:px-10 md:py-5 bg-blue-600 text-white text-xs md:text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm w-full md:w-auto text-center"
          >
            View usability test results, affinity map, and analysis via FigJam
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div>
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-blue-600" />
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
              Red flag: Too much above the fold
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8 text-base md:text-lg  text-gray-600 leading-relaxed">
              <p className="font-inter font-medium text-gray-900">
                In the initial AuditFlow dashboard, I placed multiple
                high-priority actions above the fold, assuming auditors needed
                immediate access to everything important:
              </p>

              <ul className="space-y-6 text-base md:text-lg lg:text-xl font-bold text-blue-600 leading-relaxed">
                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Review active audits
                </li>

                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Act on priority tasks
                </li>

                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Upload or validate evidence
                </li>

                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1">•</span>
                  Monitor risks and deadlines
                </li>
              </ul>

              <p className="font-inter font-medium text-gray-900">
                During usability testing, users’ first instinct was to scroll,
                not act. The dense top section felt overwhelming and made it
                difficult to identify what required attention first. Based on
                this feedback, I simplified the above-the-fold content and
                introduced clearer prioritization.
              </p>
            </div>

            {/* <div className="md:w-1/3">
              
            </div> */}
          </div>
        </div>

        <div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="flex-1">
                {/* Section Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-10 bg-blue-600 rounded-full" />
                  <h2 className="uppercase tracking-wide text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    Iterating Based on Usability Test Results
                  </h2>
                </div>

                {/* Text Content */}
                <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  <p className="font-inter font-bold text-gray-900">
                    Usability testing surfaced several improvement opportunities
                    and uncovered new questions that led to additional solution
                    ideas.
                  </p>

                  <p className="font-inter font-medium text-gray-900">
                    I prioritized issues based on their impact on product goals,
                    frequency during testing, and estimated implementation
                    effort. Although most participants completed their tasks
                    successfully, I focused on reducing friction and improving
                    clarity to increase user confidence throughout the audit
                    workflow.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 max-w-sm w-full">
                <Image
                  src="/Images/assets/83cb1c22ea629e47455f0258c53efb7f1c648418.png"
                  alt="User experiencing confusion during usability testing"
                  width={400}
                  height={400}
                  className="w-full h-auto lg:h-90 object-contain "
                />
              </div>
            </div>
          </div>

          {/* Carousel */}
          <CarouselAuditflow
            images={[
              "/Images/assets/5c83d341cf613007f0c67612ff5067761699e0c5.png",
              "/Images/assets/25948b8360ce335614e14f8c2d51535dae8239de.png",
              "/Images/assets/89a436a7c107ff84ee638af548efca8fddde4662.png",
              "/Images/assets/2ac01c3e53bfb5ff8c0a734dd201702af689b023.png",
              "/Images/assets/88b42ac47b237855754f7f4fc14f2cd02512ab91.png",
              "/Images/assets/0a82d053cf9f556430d8ce6f1f1363fbe87a9160.png",
            ]}
            caption="Comparison of the mid-fi and hi-fi mobile reminder settings. Annotations describe the changes made to the subhead to focus on how the reminders would work and changes made to the words/meanings."
          />
        </div>
      </div>
    </>
  );
};

export default UsabilityTestResultsSection;
