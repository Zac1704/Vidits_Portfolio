// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { Portfolio } from "./index.constant";

// const PortfolioCard = ({ img, title, shadow, onClick }) => {
//   const [isPressed, setIsPressed] = useState(false);

//   return (
//     <div
//       className="relative w-[150px] h-[120px] sm:w-[200px] sm:h-[160px] md:w-[230px] md:h-[190px] lg:w-[280px] lg:h-[230px] xl:w-[320px] xl:h-[260px] 2xl:w-[360px] 2xl:h-[280px] rounded-[24px] flex items-center justify-center bg-transparent transition-transform duration-300 cursor-pointer"
//       style={{
//         perspective: "1000px",
//         transformStyle: "preserve-3d",
//       }}
//       onMouseMove={(e) => {
//         if (isPressed) return;

//         const card = e.currentTarget;
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;

//         const rotateX = ((y - centerY) / centerY) * -12;
//         const rotateY = ((x - centerX) / centerX) * 12;

//         card.style.transition = "transform 0.1s ease-out";
//         card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
//       }}
//       onMouseLeave={(e) => {
//         const card = e.currentTarget;
//         card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
//         card.style.transform =
//           "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
//         setIsPressed(false);
//       }}
//       onMouseDown={(e) => {
//         setIsPressed(true);
//         const card = e.currentTarget;
//         card.style.transition = "transform 0.1s ease-out";
//         card.style.transform =
//           "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.97)";
//       }}
//       onMouseUp={(e) => {
//         const card = e.currentTarget;
//         card.style.transition = "transform 0.2s ease-out";
//         card.style.transform =
//           "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
//         setIsPressed(false);
//         console.log(`Clicked on ${title}`);
//       }}
//       onClick={() => onClick(img, title)}
//     >
//       <div
//         className={`inner rounded-[24px] w-full h-full overflow-hidden border-[3px] sm:border-[4px] border-white flex items-center justify-center bg-white transition-all duration-300 hover:brightness-105 ${
//           isPressed ? "brightness-95" : ""
//         }`}
//         style={{
//           transform: "rotateX(0deg) rotateY(0deg)",
//           willChange: "transform, box-shadow",
//           boxShadow: isPressed ? `${shadow.replace("11px", "6px")}` : shadow,
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.boxShadow = shadow.replace("22px", "12px");
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.boxShadow = shadow;
//         }}
//       >
//         <Image
//           src={img}
//           alt={title}
//           width={380}
//           height={300}
//           draggable={false}
//           className="w-full h-full object-cover rounded-[20px] select-none pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// };

// // ✅ Main Component
// export default function MyWork({ onImageSelect }) {
//   return (
//     <div className="uppercase">
//       {/* Header */}
//       <header className="text-center px-4 sm:space-y-3">
//         <h1 className="text-[32px] md:text-[40px] lg:text-5xl font-black text-(--text-color)">
//           MY WORK
//         </h1>
//         <p className="text-(--gray-text-color) text-sm sm:text-base md:text-lg">
//           Don&apos;t be shy, check my work all you want
//         </p>
//       </header>

//       {/* Portfolio Grid */}
//       <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 flex justify-center">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-14 place-items-center max-w-[1400px] w-full">
//           {Portfolio.map((work, index) => (
//             <PortfolioCard
//               key={index}
//               img={work.img}
//               title={work.title}
//               shadow={work.shadow}
//               onClick={onImageSelect}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { Portfolio } from "./index.constant";

export const PortfolioCard = ({
  img,
  title,
  shadow,
  subtitle,
  description,
  onClick,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className="
  relative
  min-w-[82%] sm:min-w-[85%] md:w-full
  h-auto
  aspect-[3/4] sm:aspect-[4/5]
  rounded-[28px] cursor-pointer
  bg-transparent
  select-none
  will-change-transform
  snap-center shrink-0
"
      style={{ perspective: "1000px" }}
      onMouseMove={(e) => {
        if (isPressed) return;

        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        const rect = wrapper.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      }}
      onMouseLeave={(e) => {
        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        wrapper.style.transition = "transform 0.4s ease-out";
        wrapper.style.transform = "rotateX(0) rotateY(0) scale(1)";
        setIsPressed(false);
      }}
      onMouseDown={(e) => {
        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        setIsPressed(true);
        wrapper.style.transition = "transform 0.1s ease-out";
        wrapper.style.transform = "rotateX(0) rotateY(0) scale(0.97)";
      }}
      onMouseUp={(e) => {
        const wrapper = e.currentTarget.querySelector(".tilt-wrapper");
        wrapper.style.transition = "transform 0.15s ease-out";
        wrapper.style.transform = "rotateX(0) rotateY(0) scale(1)";
        setIsPressed(false);
      }}
      onClick={() => onClick(img, title)}
    >
      {/* Inner wrapper (gets animated, outer stays fixed) */}
      <div
        className="tilt-wrapper h-full w-full rounded-[32px] overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
          boxShadow: shadow,
        }}
      >
        {/* Card Content */}
        <div className="relative h-full w-full border-4 border-white bg-zinc-900 rounded-[32px] overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-left transition-transform duration-700 group-hover:scale-110"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col p-5">
            <span className="font-inter mb-1 text-base font-medium text-white/70">
              {subtitle}
            </span>

            <h2 className="mb-2 text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white">
              {title}
            </h2>

            <p className="font-inter max-w-[90%] text-lg leading-snug text-white/80">
              {description}
            </p>

            <div className="mt-6">
              <button
                className="
    font-inter 
    inline-flex items-center justify-center
    rounded-full 
    bg-[#D9D9D9] 
    text-zinc-900 
    font-semibold 
    transition-all
    hover:bg-white hover:scale-105 active:scale-95 
    cursor-pointer

    /* Responsive sizes */
    px-4 py-2 text-xs        /* mobile */
    sm:px-5 sm:py-2.5 sm:text-sm   /* tablets */
    md:px-6 md:py-3 md:text-base   /* desktops */
  "
              >
                Our Approach
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Component
export default function MyWork({ onImageSelect }) {
  return (
    <div className=" uppercase">
      {/* Header */}
      <header className="text-center px-4 sm:space-y-3">
        <h1 className="text-[32px] md:text-[40px] lg:text-5xl font-black text-(--text-color)">
          MY WORK
        </h1>
        <p className="text-(--gray-text-color) text-sm sm:text-base md:text-lg">
          Don&apos;t be shy, check my work all you want
        </p>
      </header>

      {/* Portfolio Grid */}
      <section className="px-4 sm:px-6 md:px-10 py-6 sm:py-10 flex justify-center">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:place-items-center w-full">
          {Portfolio.map((work, index) => (
            <PortfolioCard
              key={index}
              img={work.img}
              title={work.title}
              shadow={work.shadow}
              onClick={onImageSelect}
              subtitle={work.subtitle}
              description={work.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
