import Image from "next/image";
import Buttons from "../Buttons";

export default function HeroSection() {
  return (
    <div className="sm:min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-8 overflow-x-hidden">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-widest text-gray-800 mb-2">
          INDORE, INDIA
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide">
          VIDITSHAH2019@GMAIL.COM
        </p>
      </div>

      {/* Name Section */}
      <div className="relative mb-5 sm:mb-10 px-4">
        {/* Red Dot */}
        <div className="absolute top-0.5 sm:top-1.5 md:top-1.7 lg:top-1.5 xl:top-1.5 left-[5%] sm:left-[2%] md:left-[2.2%] lg:left-[2%] xl:left-[2%] h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-red-600 z-30"></div>

        {/* Yellow Note */}
        <div className="absolute z-10 top-1 sm:top-2.5 md:top-2 lg:top-2 -left-[3.5%] sm:-left-[5%] md:-left-[5.5%] lg:-left-[5%] xl:-left-[5%] bg-yellow-400 text-black text-[5px] sm:text-[9px] md:text-[10px] lg:text-[9px] font-bold px-1.5 py-1 sm:py-2 rounded-md rotate-25 shadow-lg">
          <div className="note text-center leading-tight">
            <div>A note</div>
            <div>for hiring</div>
            <div>Manager</div>
          </div>
        </div>

        {/* Main Name */}
        <h1 className="relative z-50 text-center text-5xl sm:text-8xl font-black text-gray-900 tracking-tight leading-none">
          ViDIT SHäH
        </h1>
      </div>

      {/* Portfolio Items Section - Responsive with Absolute Positioning */}
      <div className="relative w-full max-w-7xl">
        <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 flex justify-center items-center">
          {/* Book/Magazine 1 - Left most */}
          <div className="absolute left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] xl:left-[23%] top-1/2 -translate-y-1/2 transform rotate-2 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={192}
                height={192}
                src="/Images/heroSection/post1.webp"
                alt="Atulyn K Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book/Magazine 4 - Second from left */}
          <div className="absolute left-[25%] sm:left-[28%] md:left-[32%] lg:left-[35%] xl:left-[37%] top-[40%] -translate-y-1/2 transform -rotate-3 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={192}
                height={192}
                src="/Images/heroSection/post2.webp"
                alt="Rollin & Purrin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book/Magazine 2 - Second from right */}
          <div className="absolute right-[25%] sm:right-[28%] md:right-[32%] lg:right-[35%] xl:right-[37%] top-1/2 -translate-y-1/2 transform rotate-6 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-black rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={192}
                height={192}
                src="/Images/heroSection/post3.webp"
                alt="The Eyes Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book/Magazine 3 - Right most */}
          <div className="absolute right-[5%] sm:right-[10%] md:right-[15%] lg:right-[20%] xl:right-[23%] top-[40%] -translate-y-1/2 transform -rotate-2 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-30">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={192}
                height={192}
                src="/Images/heroSection/post4.webp"
                alt="Modern Typography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center relative px-4 w-full mt-7">
        <h2 className="text-4xl sm:text-8xl font-black text-gray-200 tracking-tight leading-tight">
          GRAPHICS & UI/UX
        </h2>
        <div className="flex items-center justify-center flex-wrap">
          <h2 className="text-3xl sm:text-8xl font-black text-gray-200 tracking-tight">
            DESIGNE₹
          </h2>
        </div>
      </div>
      <div className="py-8">
        <Buttons ButtonName="resume" />
      </div>
    </div>
  );
}
