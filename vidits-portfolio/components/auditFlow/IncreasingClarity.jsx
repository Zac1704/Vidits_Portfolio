import Image from "next/image";
import CarouselAuditflow from "./CarouselAuditflow";
import Link from "next/link";

const IncreasingClaritySection = () => {
  return (
    <>
      <div
        id="increasing-clarity-and-coordination"
        className="bg-blue-600 py-24 px-6 overflow-hidden relative scroll-my-20"
      >
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Increasing clarity and coordination with AuditFlow
          </h3>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col ">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-1 h-10 bg-blue-600" />
          <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
            How does the AuditFlow app address user needs?
          </h2>
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="p-10 bg-blue-50 rounded-[3rem] border border-blue-100">
            <h5 className="text-lg font-black uppercase text-blue-600 mb-6 tracking-widest">
              The problem:
            </h5>
            <p className="text-xl font-bold text-blue-900 leading-relaxed">
              Auditors were concerned that{" "}
              <span className="underline decoration-blue-200 underline-offset-4 decoration-4">
                missing context and scattered information
              </span>{" "}
              would impact audit quality and compliance outcomes.
            </p>
          </div>

          <div className="p-10 bg-green-50 rounded-[3rem] border border-green-100">
            <h5 className="text-lg font-black uppercase text-green-600 mb-6 tracking-widest">
              The solution:
            </h5>
            <p className="text-xl font-bold text-green-900 leading-relaxed">
              A{" "}
              <span className="underline decoration-green-200 underline-offset-4 decoration-4">
                centralized audit management platform
              </span>{" "}
              that helps teams manage audits with greater clarity by unifying
              tasks, evidence, and status tracking in one system.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <CarouselAuditflow
          images={[
            "/Images/assets/92be70cd9b78da0c1357c1a3ebf376f2e7b0b7ee.png",
            "/Images/assets/92be70cd9b78da0c1357c1a3ebf376f2e7b0b7ee.png",
            "/Images/assets/92be70cd9b78da0c1357c1a3ebf376f2e7b0b7ee.png",
            "/Images/assets/92be70cd9b78da0c1357c1a3ebf376f2e7b0b7ee.png",
            "/Images/assets/92be70cd9b78da0c1357c1a3ebf376f2e7b0b7ee.png",
            "/Images/assets/92be70cd9b78da0c1357c1a3ebf376f2e7b0b7ee.png",
          ]}
          caption="Comparison of the mid-fi and hi-fi status views. Annotations describe the tracking of evidence logs and process milestones."
        />

        {/* Hi-fi Prototype Section */}
        <div className="mt-32 flex flex-col items-center">
          <h4 className="text-4xl font-bold mb-12">Hi-fi prototype</h4>

          <div className="w-full max-w-2xl">
            <Image
              src="/Images/assets/cc6380b9f23a1da411c84d7185fcc1244b8aa07c.png"
              alt="Final Prototype"
              width={800}
              height={1200}
              className="w-full h-auto rounded-[0px]"
            />
          </div>

          <p className="text-center text-sm text-gray-400 mt-10 font-bold uppercase tracking-widest">
            Prototype walk-through of the audit status tracking feature.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <Link
              href="https://mauve-app-67550399.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-blue-600 text-white font-black text-[10px] md:text-base rounded-full tracking-widest uppercase hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center justify-center text-center"
            >
              View the hi-fi prototype
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncreasingClaritySection;
