import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MyHypothesisSection = () => {
  return (
    <>
      <div className="bg-blue-600 py-18 px-6 overflow-hidden relative scroll-mt-20">
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            How do experienced auditors manage audits using existing tools?
          </h3>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto px-6 py-18 space-y-20"
        id="how-do-experienced-auditors-manage-audits"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex-1">
            {/* Title */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1 h-12 bg-blue-600 rounded-full" />
              <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                My Hypothesis
              </h2>
            </div>

            {/* Text */}
            <div className="font-inter font-medium space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                I initially believed that experienced auditors already had
                well-established systems and structured processes to manage
                audits efficiently. I assumed most of their challenges stemmed
                from tool limitations rather than workflow or communication
                gaps.
              </p>

              <p>
                My assumption was that with access to spreadsheets, shared
                drives, and email, auditors could effectively track tasks,
                evidence, and overall audit progress without significant
                friction.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-md w-full">
            <Image
              src="/Images/assets/271519a0eb86ff10d34da8ace80680fb57b298ac.png"
              alt="Experienced auditor reviewing documents at desk"
              width={500}
              height={500}
              className="w-full h-auto lg:h-100  object-contain"
              priority
            />
          </div>
        </div>

        <div>
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-blue-600" />
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
              Getting to know auditors through user interviews
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
            I interviewed 5 internal auditors across different roles and
            experience levels
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Expected Outcomes */}
            <div>
              <h4 className="text-base md:text-lg font-black uppercase tracking-widest text-blue-600 mb-8">
                Expected outcomes
              </h4>

              <ul className="font-inter space-y-8 text-gray-700 font-bold">
                <li className="flex gap-4 text-base md:text-lg lg:text-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  Understand how auditors manage audits on a day-to-day basis
                </li>

                <li className="flex gap-4 text-base md:text-lg lg:text-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  Identify the main challenges that slow down audit execution
                </li>

                <li className="flex gap-4 text-base md:text-lg lg:text-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  Learn how a centralized system could better support audit
                  workflows
                </li>
              </ul>
            </div>

            {/* Research Image */}
            <div className="flex items-center justify-center">
              <Image
                src="/Images/assets/0621a543e6985d9c1ec93e04ff8af1e2c5a25a96.png"
                alt="Research participant"
                width={400}
                height={400}
                className="w-full h-auto max-w-sm"
              />
            </div>
          </div>

          {/* Affinity Map */}
          <figure className="my-8">
            <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                className="w-full h-full"
                src="https://embed.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=0-2200&embed-host=share"
                allowFullScreen
              />
            </div>

            <figcaption className="text-center mt-4">
              <p className="text-sm text-gray-500 italic font-medium">
                Affinity map of notes from the user interviews.
              </p>

              <a
                href="https://www.figma.com/board/lmIcebfOrVNPauUrGRijSc/AuditFlow-UX?node-id=0-2200&t=XBr4xu4lI18Y5BdC-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-blue-600 text-white text-[10px] md:text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-sm w-fit mx-auto"
              >
                View the affinity map via FigJam.
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </figcaption>
          </figure>

          {/* DO vs WANT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            <div className="bg-gray-50 p-6 md:p-10 rounded-[3rem] border border-gray-100">
              <h4 className="text-base md:text-lg font-black uppercase tracking-widest text-blue-600 mb-8">
                The Behavioral Audit Loop
              </h4>

              <ul className="font-inter space-y-6 text-base md:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
                <li className="flex gap-4 items-start">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  5/5 auditors manage audits using spreadsheets, emails, and
                  shared drives.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  4/5 auditors manually track task status and evidence progress
                  outside their primary tools.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  4/5 auditors rely on follow-ups and check-ins to understand
                  what is pending or completed.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 md:p-10 rounded-[3rem] border border-gray-100">
              <h4 className="text-base md:text-lg font-black uppercase tracking-widest text-blue-600 mb-8">
                Unmet User Expectation
              </h4>

              <ul className="font-inter space-y-6 text-base md:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
                <li className="flex gap-4 items-start">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  5/5 auditors want a clear, real-time view of audit status.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  4/5 auditors want better visibility into evidence states.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  3/5 auditors want clearer ownership across tasks.
                </li>
              </ul>
            </div>
          </div>

          {/* Insight Block */}
          <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-blue-50 p-6 md:p-12 rounded-[4rem]">
            <div className="md:w-1/4">
              <Image
                src="/Images/assets/bebc0d5536984c907bd4396278d70a188ef56b42.png"
                alt="Auditor"
                width={400}
                height={400}
                className="w-full h-auto lg:h-80 object-contain"
              />
            </div>

            <div className="font-inter flex-1 space-y-8">
              <h4 className="font-bold leading-tight text-[18px] md:text-[20px]">
                Is there a disconnect between how auditors want to manage audits
                and how they actually do?
              </h4>

              <p className="font-bold text-blue-800 italic text-[20px] md:text-[24px]">
                According to user interviews… tools are not the core issue.
              </p>

              <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Auditors use spreadsheets, shared drives, emails, and tracking
                  sheets — but these tools don’t connect. As a result, status
                  visibility is limited, ownership becomes unclear, and progress
                  tracking requires constant manual effort.
                </p>

                <p className="text-gray-900 font-bold text-[20px]">
                  The challenge isn’t doing the work. <br />
                  It’s managing it coherently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHypothesisSection;
