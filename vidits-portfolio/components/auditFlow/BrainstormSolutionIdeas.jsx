import Image from "next/image";

const BrainstormSolutionIdeasSection = () => {
  return (
    <>
      <div
        id="how-might-we-help-internal-auditors"
        className="bg-blue-600 py-24 px-6 overflow-hidden relative scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            How might we help internal auditors manage audits with greater
            clarity and less manual coordination?
          </h3>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-1 h-10 bg-blue-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Brainstorming solution ideas
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-16">
          Using the How Might We question, I explored multiple solution ideas.
        </p>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-10">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Product goals
            </h4>

            <ul className="space-y-8 text-base md:text-lg lg:text-xl text-gray-800 font-bold italic leading-relaxed">
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 shrink-0" />
                Centralize audit tasks, evidence, and status in one system
              </li>

              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 shrink-0" />
                Make ownership and progress clear at every stage of an audit
              </li>

              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 shrink-0" />
                Reduce manual follow-ups and coordination effort
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3">
            <Image
              src="/Images/assets/b97944b2c0b2e7ba50c00e5c36a8d76ca0473678.png" 
              alt="Success"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrainstormSolutionIdeasSection;
