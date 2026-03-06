import Image from "next/image";

const WhyAuditorsSection = () => {
  return (
    <>
      <div id="why-auditors" className="bg-blue-600 py-18 px-6 overflow-hidden relative scroll-mt-20">
        <div className="uppercase max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Designing an app for auditors
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-18">
        {/* Title */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 bg-blue-600" />
          <h2 className="text-2xl md:text-3xl uppercase font-bold text-gray-900">
            Why auditors?
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-16 items-start">
          {/* Left content */}
          <div className="flex-1 space-y-10">
            <h4 className="font-inter text-lg md:text-xl font-extrabold text-gray-900 uppercase tracking-widest">
              Based on a conversation with an old friend :
            </h4>

            <ul className="font-inter space-y-8 text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed ">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-3 shrink-0" />
                <p>
                  I was talking to a friend of mine who is a Chartered
                  Accountant, and during our conversation he shared how{" "}
                  <span className="text-gray-900 font-bold">
                    managing audits requires juggling multiple tools
                  </span>
                  —emails for communication, spreadsheets for tracking, shared
                  drives for evidence, and documents for reporting.
                </p>
              </li>

              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-3 shrink-0" />
                <p>
                  There is{" "}
                  <span className="text-gray-900 font-bold">
                    no single place
                  </span>{" "}
                  to{" "}
                  <span className="text-gray-900 font-bold">
                    clearly see what is pending
                  </span>
                  , what has been submitted, what has been reviewed, or who is
                  responsible for what. Most clarity comes from{" "}
                  <span className="text-gray-900 font-bold">
                    manual follow-ups
                  </span>{" "}
                  rather than the system itself.
                </p>
              </li>

              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-3 shrink-0" />
                <p>
                  This revealed a{" "}
                  <span className="text-gray-900 font-bold">clear gap</span>:
                  audits are structured processes, but the tools used to manage
                  them are{" "}
                  <span className="text-gray-900 font-bold">fragmented</span>.
                </p>
              </li>
            </ul>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 mx-auto">
            <Image
              src="/Images/assets/3bdb9606f25fda15be111a9bf50a8f8f1e91aa40.png"
              alt="Auditors discussion"
              width={600}
              height={600}
              className="w-full h-auto lg:h-150 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyAuditorsSection;
