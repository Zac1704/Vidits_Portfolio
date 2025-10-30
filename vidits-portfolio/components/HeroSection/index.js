import Image from "next/image";
import Buttons from "../Buttons";

export default function HeroSection() {
  return (
    <div className="sm:min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-6 overflow-x-hidden">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-[20px] font-bold text-gray-800 mb-2">
          INDORE, INDIA
        </h3>
        <p className="text-(--gray-text-color) text-xs sm:text-sm md:text-base lg:text-[20px] font-bold ">
          VIDITSHAH2019@GMAIL.COM
        </p>
      </div>

      {/* Name Section */}
      <div className="relative mb-5 sm:mb-10 px-4 z-[100]">
        {/* Yellow Note */}
        <div className="absolute z-10 top-1 sm:top-2.5 md:top-2 lg:top-1 -left-[3.5%] sm:-left-[5%] md:-left-[5.5%] lg:-left-[5%] xl:-left-[5%] transition-all duration-500 ease-in-out">
          <div
            className="relative w-[70px] sm:w-[65px] md:w-[65px] transition-transform duration-500 ease-[cubic-bezier(0.25,1.25,0.5,1)] origin-top hover:rotate-[10deg] hover:scale-[1.4]"
            style={{ transformOrigin: "top center" }} 
          >
            {/* Background SVG */}
            <Image
              src="/Images/svg/smallNote.svg"
              alt="Note Background"
              width={70}
              height={70}
              className="w-full h-auto cursor-pointer" 
            />
          </div>
        </div>

        {/* Main Name */}
        <h1 className="relative z-50 text-center text-5xl sm:text-8xl font-black text-gray-900 tracking-[-0.025em] leading-none">
          ViDIT SHäH
        </h1>
      </div>

      {/* Portfolio Items Section - Responsive with Absolute Positioning */}
      <div className=" w-full py-2">
        <div className=" flex justify-center items-center -space-x-20">
          {/* Book/Magazine 1 - Left most */}
          <div className="transform rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg shadow-2xl overflow-hidden">
              <Image
                width={200}
                height={200 }
                src="/Images/heroSection/post1.webp"
                alt="Atulyn K Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book/Magazine 4 - Second from left */}
          <div className="transform -rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-10 -mt-10">
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
          <div className=" transform rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-20">
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
          <div className="transform -rotate-4 hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 z-30 -mt-10">
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
