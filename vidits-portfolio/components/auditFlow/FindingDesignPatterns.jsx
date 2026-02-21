import {
  ArrowUpRight,
  Eye,
  Layers,
  MousePointer2,
  Palette,
  Type,
} from "lucide-react";
import Image from "next/image";
import DesignSystemSection from "./DesignSystemSection/DesignSystemSection";
import CarouselAuditflow from "./CarouselAuditflow";

const FindingDesignPatternsSection = () => {
  return (
    <>
      <div
        id="finding-design-patterns"
        className="bg-blue-600 py-18 px-6 overflow-hidden relative scroll-mt-20"
      >
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Finding design patterns for every element
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-10">
        {/* FINDING DESIGN PATTERNS */}
        <div
          id="finding-design-patterns"
          // className="max-w-6xl mx-auto px-6 mb-24 flex flex-col scroll-mt-20"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-blue-600" />
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
              Interface patterns to best support users + product development
            </h2>
          </div>

          <div className="font-inter font-medium max-w-3xl text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed space-y-8">
            <p>
              While designing the core user flows, I focused on creating
              consistent and repeatable interface patterns across audits, tasks,
              evidence, and reports. Instead of introducing unique components
              for each module, I adopted shared UI patterns aligned with how
              auditors already work in enterprise tools. This ensured
              predictable interactions and reduced cognitive load as users move
              between sections.
            </p>

            <ul className="space-y-8 text-base md:text-lg lg:text-xl font-bold text-gray-900 italic leading-relaxed">
              <li className="flex gap-4 items-start">
                <span className="text-blue-600 shrink-0 mt-1">•</span>
                Status indicators follow the same visual language across the
                platform
              </li>

              <li className="flex gap-4 items-start">
                <span className="text-blue-600 shrink-0 mt-1">•</span>
                Ownership and responsibility are displayed consistently
              </li>

              <li className="flex gap-4 items-start">
                <span className="text-blue-600 shrink-0 mt-1">•</span>
                Tables, filters, and primary actions share a common structure
              </li>

              <li className="flex gap-4 items-start">
                <span className="text-blue-600 shrink-0 mt-1">•</span>
                Visual hierarchy prioritizes active work over completed items
              </li>
            </ul>

            <p>
              These patterns help the product feel coherent, easier to learn,
              and scalable over time.
            </p>
          </div>
        </div>

        {/* INSPIRATION TO PROTOTYPE */}
        <div className="flex flex-col scroll-mt-20">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-blue-600" />
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
              Inspiration to Prototype
            </h2>
          </div>

          {/* Main Figure */}
          <figure className="my-8">
            <div className="rounded-[0px] overflow-hidden relative">
              <Image
                src="/Images/assets/b88cebea22db923d8f15df1142a6cf790d3a8bf2.png"
                alt="Low-fi sketch wireframe"
                width={1200}
                height={700}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            <figcaption className="text-center mt-4">
              <p className="text-sm text-gray-500 italic font-medium">
                Low-fi sketch wireframe surrounded by reference screenshots of
                various apps.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-blue-600 text-white text-[10px] md:text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm w-fit mx-auto"
              >
                View low-fi wireframes via Figma.
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </figcaption>
          </figure>

          {/* Text Content */}
          <div className="font-inter font-medium max-w-3xl text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed mt-16 space-y-8">
            <p>
              I used Mobbin to find inspiration for specific pieces on every
              screen. Using existing design patterns will lessen the amount of
              new tech learning the user will have to do in order to use the
              app. More{" "}
              <span className="font-bold text-gray-900">
                predictable interactions
              </span>{" "}
              will help the user feel{" "}
              <span className="font-bold text-gray-900">more confidence</span>{" "}
              when trying the app for the first time.
            </p>

            <p>
              Investing time earlier in the development led to a faster sketch
              to mid-fi wireframe process. Also, most of the design choices from
              the sketch wireframes remained through hi-fi iterations.
            </p>
          </div>

          {/* Reusable Carousel Component */}
          <CarouselAuditflow
            images={[
              "/Images/assets/42e494ea975fa100c7f185d5945a59fafbaf4375.png",
              "/Images/assets/7cb6c3d9a55655cfdbe458d522d707507cdb0f75.png",
              "/Images/assets/abdbf213d1ebadc3cd53244703524d861a4792e7.png",
              "/Images/assets/32f1844e5345eb4cbc6a2e4f550758c2b6c59a04.png",
              "/Images/assets/f92ccd63259825079017f6a622027a316acfd467.png",
            ]}
            caption="Process from inspiration to low-fi sketch to mid-fi wireframe for the workout details screen."
          />
        </div>

        {/* DESIGN SYSTEM */}
        <div className="max-w-6xl mx-auto  mb-24 flex flex-col scroll-mt-20">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-blue-600" />
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
              Design System and Style Guide
            </h2>
          </div>

          <DesignSystemSection />
        </div>

        {/* ACCESSIBILITY CHECK */}
        <div>
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-blue-600" />
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
              Accessibility check
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <MousePointer2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="uppercase text-lg font-bold mb-2">
                    Touch targets
                  </h5>
                  <p className="font-inter font-medium text-gray-900 leading-relaxed">
                    Interactive elements were designed with adequate target
                    sizes for both desktop and responsive breakpoints,
                    supporting mouse and touch interactions. Primary actions,
                    table rows, and controls meet WCAG 2.1 Target Size (AA)
                    guidance where applicable.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="uppercase text-lg font-bold mb-2">
                    Color contrast
                  </h5>
                  <p className="font-inter font-medium text-gray-900leading-relaxed">
                    All interface color combinations were tested to meet WCAG
                    2.1 AA contrast ratios, particularly for text, tables, and
                    status indicators used in high-density audit views.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="uppercase text-lg font-bold mb-2">
                    Color-blind safe
                  </h5>
                  <p className="font-inter font-medium text-gray-900 leading-relaxed">
                    The brand color palette was checked for possible color-blind
                    conflicts.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Type className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="uppercase text-lg font-bold mb-2">
                    Font selection
                  </h5>
                  <p className="font-inter font-medium text-gray-900 leading-relaxed">
                    Quicksand was chosen as the body font based on multiple font
                    preference tests from 2 auditors.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="uppercase text-lg font-bold mb-2">
                    Text sizing
                  </h5>
                  <p className="font-inter font-medium text-gray-900  leading-relaxed">
                    Longer paragraph text sizing is set at or above 14 px and
                    label text is set at or above 12 px bold. Line spacing was
                    set to 150% for easier readability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindingDesignPatternsSection;
