"use client";

import Image from "next/image";

const PortfolioCard = ({ img, title }) => (
  <div
    className="w-[380px] h-[300px] p-1 rounded-[32px] shadow-lg"
    style={{
      perspective: "1000px",
      transformStyle: "preserve-3d",
    }}
    onMouseMove={(e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Perfect tilt range (12 degrees feels most natural)
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      // Smooth immediate response
      card.style.transition = "transform 0.1s ease-out";
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    }}
    onMouseLeave={(e) => {
      const card = e.currentTarget;
      // Smooth spring-like return
      card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }}
  >
    <div
      className="w-full h-full bg-white p-[3px] rounded-[28px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-full h-full rounded-[26px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={380}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
);

// ✅ Main Component
export default function MyWork() {
  // const navItems = [
  //   "ALL",
  //   "BANNER",
  //   "INSTAGRAM POSTS",
  //   "ILLUSTRATIONS",
  //   "POSTERS",
  //   "PROJECTS",
  //   "WEDDING CARD",
  //   "UI/UX",
  // ];

  // ✅ Portfolio Data List
  const Portfolio = [
    {
      title: "Jimmy The Pet Shop",
      img: "/Images/myWork/baking.png",
      category: "Logo Design",
    },
    {
      title: "Baking Gharana",
      img: "/Images/myWork/JimmyThePetShop.png",
      category: "Logo Design",
    },
    {
      title: "Relaxzone",
      img: "/Images/myWork/Relaxzone.png",
      category: "Poster Design",
    },
    {
      title: "AK Studio",
      img: "/Images/myWork/AK.png",
      category: "UI/UX",
    },
    {
      title: "Nalanda",
      img: "/Images/myWork/Nalanda.png",
      category: "Brand Identity",
    },
    {
      title: "Shudh Kesari",
      img: "/Images/myWork/ShudhKesari.png",
      category: "Product Label",
    },
    {
      title: "Vistaar Webx",
      img: "/Images/myWork/VistaarWebx.png",
      category: "Website Design",
    },
  ];

  return (
    <div className="uppercase bg-white">
      {/* Header */}
      <header className="text-center pb-5 px-4">
        <h1 className="text-5xl font-black text-(--text-color) mb-4">
          MY WORK
        </h1>
        <p className="text-[#D6D6D6] text-sm md:text-lg">
          Don&apos;t be shy, check my work all you want
        </p>
      </header>

      {/* Navigation */}
      {/* <nav className="border-b-4 border-[#D6D6D6] mb-12">
        <ul className="flex flex-wrap justify-center space-x-4 md:gap-8 p-4 text-sm md:text-2xl font-bold">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-orange-500 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Portfolio Grid */}
      <section className="px-4 pb-16 flex justify-center">
        <div className="flex flex-wrap gap-10">
          {Portfolio.map((work, index) => (
            <PortfolioCard
              key={index}
              img={work.img}
              title={work.title}
              category={work.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
