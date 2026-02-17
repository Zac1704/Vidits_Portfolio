import { Lightbulb, Target, Zap } from "lucide-react";
import Image from "next/image";

const WhatILearnedSection = () => {
  return (
    <>
      <div
        id="where-do-we-go-from-here"
        className="bg-blue-600 py-24 px-6 overflow-hidden relative scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Where do we go from here
          </h3>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-1 h-10 bg-blue-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What I learned
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* Image */}
          <div className="md:w-1/4">
            <Image
              src="/Images/assets/12d3ad6f4e070c34ca7b1c7901671ea1bac0b439.png"
              alt="Jane smiling"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Learnings */}
          <div className="flex-1 space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  <span className="font-bold text-gray-900">
                    Assumptions feel logical until users challenge them.
                  </span>{" "}
                  I started with strong ideas about how audits should be
                  structured in a digital tool, but real conversations shifted
                  my focus from features to clarity. Listening early changed the
                  trajectory of the product.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  <span className="font-bold text-gray-900">
                    A system is more powerful than a screen.
                  </span>{" "}
                  Once I stopped designing isolated pages and started defining
                  patterns, states, and relationships, the interface became more
                  cohesive and easier to evolve. Thinking in systems made
                  iteration faster and more intentional.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  When you don’t know where to start in searching for branding
                  inspiration,{" "}
                  <span className="font-bold text-gray-900">
                    starting with what you don’t want
                  </span>{" "}
                  can help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatILearnedSection;
