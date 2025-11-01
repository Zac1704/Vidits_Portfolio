"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ParallaxPortfolioSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [idle, setIdle] = useState(false);
  const containerRef = useRef(null);
  let idleTimer = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setMousePos({ x, y });
      setIdle(false);

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setIdle(true);
      }, 3000);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(idleTimer.current);
    };
  }, []);

  const getCardStyle = (index, depth = 1) => {
    // depth = larger number → slower movement (further in depth)
    const intensity = 20 / depth;
    const moveX = mousePos.x * intensity * (index % 2 === 0 ? 1 : -1);
    const moveY = mousePos.y * intensity * (index % 2 === 0 ? -1 : 1);
    const idleFloatY = idle
      ? Math.sin(Date.now() / (1500 + index * 200)) * (2 + index)
      : 0;
    const rotateY = mousePos.x * (5 / depth);
    const rotateX = mousePos.y * (5 / depth);

    return {
      transform: `
        perspective(700px)
        translate3d(${moveX}px, ${moveY + idleFloatY}px, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `,
      transition: "transform 0.3s ease-out",
      willChange: "transform",
    };
  };

  const cards = [
    {
      id: 1,
      src: "/Images/heroSection/post1.webp",
      color: "from-amber-900 to-amber-700",
      depth: 1,
    },
    {
      id: 2,
      src: "/Images/heroSection/post2.webp",
      color: "from-orange-500 to-orange-400",
      depth: 1.2,
    },
    {
      id: 3,
      src: "/Images/heroSection/post3.webp",
      color: "from-black to-gray-900",
      depth: 1.4,
    },
    {
      id: 4,
      src: "/Images/heroSection/post4.webp",
      color: "from-blue-900 to-blue-700",
      depth: 1.6,
    },
  ];

  return (
    <div className="w-full py-6" ref={containerRef}>
      <div className="flex justify-center items-center -space-x-20">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`transform ${
              i % 2 === 0 ? "rotate-4" : "-rotate-4"
            } hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-300`}
            style={getCardStyle(i, card.depth)}
          >
            <div
              className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br ${card.color} rounded-xl shadow-2xl overflow-hidden`}
            >
              <Image
                width={200}
                height={200}
                src={card.src}
                alt={`Portfolio ${card.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
