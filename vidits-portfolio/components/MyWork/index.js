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
      className="relative 
        w-full max-w-[360px] sm:max-w-[400px]
        aspect-[3/4] sm:aspect-[4/5]
        rounded-[28px] cursor-pointer 
        transition-transform duration-300 bg-transparent"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        if (isPressed) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transition = "transform 0.1s ease-out";
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        setIsPressed(false);
      }}
      onMouseDown={(e) => {
        setIsPressed(true);
        const card = e.currentTarget;
        card.style.transition = "transform 0.1s ease-out";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.97)";
      }}
      onMouseUp={(e) => {
        const card = e.currentTarget;
        card.style.transition = "transform 0.2s ease-out";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        setIsPressed(false);
      }}
      onClick={() => onClick(img, title)}
    >
      {/* Inner Layer (preserves tilt) */}
      <div
        className="inner group relative h-full w-full overflow-hidden rounded-[32px] bg-zinc-900"
        style={{
          transform: "rotateX(0deg) rotateY(0deg)",
          willChange: "transform, box-shadow",
          boxShadow: isPressed ? shadow.replace("11px", "6px") : shadow,
        }}
      >
        {/* Background Image */}
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="absolute inset-0 h-full w-full object-cover object-left transition-transform duration-700 ease-out group-hover:scale-110"
          draggable={false}
        />

        {/* Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content Layer */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col p-5">
          <span className="mb-1 text-sm font-medium text-white/70">
            {subtitle}
          </span>

          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>

          <p className="max-w-[90%] text-sm leading-snug text-white/80 sm:text-base">
            {description}
          </p>

          {/* THE BUTTON: Styled like image_3d8f00.png */}
          <div className="mt-6">
            <button className="font-inter inline-flex items-center justify-center rounded-full bg-[#D9D9D9] px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-white hover:scale-105 active:scale-95 cursor-pointer">
              Our Approach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Component
export default function MyWork({ onImageSelect }) {
  return (
    <div className="uppercase">
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
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 xl:gap-16 place-items-center max-w-[1400px] w-full">
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
