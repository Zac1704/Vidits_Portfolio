// index.constants.js

export const primaryCards = [
  {
    title: "MY SUPERPOWER? CURIOSITY",
    content:
      "I live for understanding users and drawing insights into ideas. It's not just design—it's creating experiences that truly matter.",
    color: "bg-[#9B1B25]",
    height: "310px",
    rotate: "rotate-5",
    position: "left-10 top-8",
  },
  {
    title: "I'M POROUS - I ABSORB PERSPECTIVES LIKE A SPONGE",
    content:
      "I listen, learn, and adapt. Whether it's feedback or new ideas, I'm all about growing and evolving.",
    color: "bg-[#FFB629]",
    height: "275px",
    rotate: "-rotate-[1.72deg]",
    position: "top-[120px] left-5",
  },
  {
    title: "I'LL LEARN IT, NO MATTER WHAT.",
    content:
      "If I don't know something, I own it and give it my all to learn. Consider this a friendly warning—I’ll do whatever it takes to get the job done.",
    color: "bg-[#276A96]",
    height: "320px",
    rotate: "rotate-[2.18deg]",
    position: "top-[30px]",
  },
  {
    title: "I'M A COCONUT—TOUGH OUTSIDE, SOFT INSIDE.",
    content:
      "I balance strength and sensitivity, logic and creativity. Multitasking? It's just another day in the life.",
    color: "bg-[#0E7F01]",
    height: "275px",
    rotate: "-rotate-[2.57deg]",
    position: "top-[116px]",
  },
];

export const keychains = [
  {
    id: "ps",
    name: "Photoshop",
    bg: "#001E36",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <text
          x="12"
          y="17"
          fontSize="14"
          fontWeight="bold"
          fill="#31A8FF"
          textAnchor="middle"
          fontFamily="system-ui"
        >
          Ps
        </text>
      </svg>
    ),
  },
  {
    id: "ai",
    name: "Illustrator",
    bg: "#330000",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <text
          x="12"
          y="17"
          fontSize="14"
          fontWeight="bold"
          fill="#FF9A00"
          textAnchor="middle"
          fontFamily="system-ui"
        >
          Ai
        </text>
      </svg>
    ),
  },
  {
    id: "figma",
    name: "Figma",
    bg: "#000000",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path
          d="M8 6a2 2 0 0 0 0 4 2 2 0 0 0 0 4 2 2 0 1 0 2 2V6H8z"
          fill="#F24E1E"
        />
        <circle cx="12" cy="8" r="2" fill="#FF7262" />
        <circle cx="12" cy="12" r="2" fill="#1ABCFE" />
        <path
          d="M10 14a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2h-2z"
          fill="#0ACF83"
        />
        <path d="M8 6a2 2 0 0 1 2 2v2H8a2 2 0 0 1 0-4z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: "canva",
    name: "Canva",
    bg: "#00C4CC",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <text
          x="12"
          y="17"
          fontSize="11"
          fontWeight="600"
          fill="white"
          textAnchor="middle"
          fontFamily="system-ui"
        >
          Canva
        </text>
      </svg>
    ),
  },
  {
    id: "framer",
    name: "Framer",
    bg: "#000000",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M7 5h10v6H7zm0 6h10l-5 6zm0 0v6l5-6z" fill="white" />
      </svg>
    ),
  },
  {
    id: "topaz",
    name: "Topaz",
    bg: "#000000",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="12" cy="12" r="2.5" fill="white" />
        <circle cx="12" cy="7" r="1" fill="white" />
        <circle cx="12" cy="17" r="1" fill="white" />
        <circle cx="7" cy="12" r="1" fill="white" />
        <circle cx="17" cy="12" r="1" fill="white" />
      </svg>
    ),
  },
  {
    id: "luminar",
    name: "Luminar",
    bg: "linear-gradient(135deg, #FF6B9D 0%, #C239B3 100%)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path
          d="M12 6l2.5 5.5h5.5l-4.5 3.5 1.5 5.5L12 17l-5 3.5 1.5-5.5-4.5-3.5h5.5z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "kapwing",
    name: "Kapwing",
    bg: "#00BAB3",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <text
          x="12"
          y="17"
          fontSize="14"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          fontFamily="system-ui"
        >
          K
        </text>
      </svg>
    ),
  },
];

export const variants = {
  initial: (direction) => ({
    x: direction === "next" ? 100 : -100,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction === "next" ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.45, ease: "easeIn" },
  }),
};
