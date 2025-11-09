"use client";

import { useRouter, usePathname } from "next/navigation";

export default function AboutPageButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/about") {
      router.push("/");
      console.log("Navigating to Home Page");
    } else {
      router.push("/about");
      console.log("Navigating to About Page");
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle About/Home Page"
      className="
        fixed top-3 right-3 sm:top-5 sm:right-5 z-[999] cursor-pointer 
        rounded-full shadow-lg backdrop-blur-md 
        bg-white/30 border border-white/20 
        hover:bg-white/40 active:scale-95 
        transition-all duration-300 
        flex items-center justify-center
        p-2 pl-[10px] pt-[10px] sm:p-3 md:p-4
      "
    >
      <svg fill="none" viewBox="0 0 37 40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10">
        <path
          d="M0.00117493 14.7233H36.582V22.6799C36.582 33.9355 29.4987 40 18.4372 40C1.55368 40 0.00117493 29.3751 0.00117493 23.3591V14.7233ZM27.4611 24.6205H8.83104C8.87955 29.1325 14.5074 29.9087 17.952 29.9087C21.9303 29.9087 27.4611 29.1325 27.4611 24.6205Z"
          fill="#363636"
        />
        <path
          d="M31.6383 9.88982C28.9156 9.88982 26.7084 7.68262 26.7084 4.95991C26.7084 2.2372 28.9156 0.0300066 31.6383 0.0300066C34.361 0.0300066 36.5682 2.2372 36.5682 4.95991C36.5682 7.68262 34.361 9.88982 31.6383 9.88982Z"
          fill="#363636"
        />
        <path
          d="M22.7369 9.65728e-05V9.89692H0.0148544V0L22.7369 9.65728e-05Z"
          fill="#363636"
        />
      </svg>
    </button>
  );
}
