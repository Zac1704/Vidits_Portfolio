"use client";

import Image from "next/image";

// ✅ Reusable Portfolio Card Component
const PortfolioCard = ({ img, title, category }) => (
  <div className="rounded-b-3xl overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer transition duration-300 hover:scale-[1.02]">
    <div className="w-[600px] h-[400px] flex items-center justify-center bg-white">
      <Image
        src={img}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="uppercase text-black p-4 flex justify-between items-center bg-gray-50">
      <h3 className="text-lg md:text-2xl font-black truncate">{title}</h3>
      <span className="text-sm md:text-2xl font-bold  whitespace-nowrap">
        {category}
      </span>
    </div>
  </div>
);

// ✅ Main Component
export default function MyWork() {
  const navItems = [
    "ALL",
    "BANNER",
    "INSTAGRAM POSTS",
    "ILLUSTRATIONS",
    "POSTERS",
    "PROJECTS",
    "WEDDING CARD",
    "UI/UX",
  ];

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
        <h1 className="text-5xl font-black text-(--text-color) mb-4">MY WORK</h1>
        <p className="text-[#D6D6D6] text-sm md:text-lg">
          Don&apos;t be shy, check my work all you want
        </p>
      </header>

      {/* Navigation */}
      <nav className="border-b-4 border-[#D6D6D6] mb-12">
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
      </nav>

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
