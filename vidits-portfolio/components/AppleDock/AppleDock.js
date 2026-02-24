// "use client";

// import { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { motion, useMotionValue, AnimatePresence } from "framer-motion";
// import DockIcon from "./DockIcon";

// // ─── SVG Icons ────────────────────────────────────────────
// function HomeIcon() {
//     return (
//         <svg viewBox="0 0 24 24" fill="none" className="w-[55%] h-[55%]">
//             <path
//                 d="M3 12.5L12 4L21 12.5"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//             <path
//                 d="M5 11V19C5 19.5523 5.44772 20 6 20H9.5V15C9.5 14.4477 9.94772 14 10.5 14H13.5C14.0523 14 14.5 14.4477 14.5 15V20H18C18.5523 20 19 19.5523 19 19V11"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     );
// }

// function AboutIcon() {
//     return (
//         <svg viewBox="0 0 24 24" fill="none" className="w-[55%] h-[55%]">
//             <circle
//                 cx="12"
//                 cy="8"
//                 r="4"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//             />
//             <path
//                 d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//             />
//         </svg>
//     );
// }

// function AuditFlowIcon() {
//     return (
//         <svg viewBox="0 0 24 24" fill="none" className="w-[55%] h-[55%]">
//             <rect
//                 x="3"
//                 y="3"
//                 width="7"
//                 height="7"
//                 rx="1.5"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//             />
//             <rect
//                 x="14"
//                 y="3"
//                 width="7"
//                 height="7"
//                 rx="1.5"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//             />
//             <rect
//                 x="3"
//                 y="14"
//                 width="7"
//                 height="7"
//                 rx="1.5"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//             />
//             <rect
//                 x="14"
//                 y="14"
//                 width="7"
//                 height="7"
//                 rx="1.5"
//                 stroke="var(--text-color)"
//                 strokeWidth="2"
//             />
//         </svg>
//     );
// }

// function ThemePaletteIcon() {
//     return (
//         <svg viewBox="0 0 40 40" fill="none" className="w-[60%] h-[60%]">
//             <path
//                 d="M37.76 27.86l-.01-.01a4.47 4.47 0 0 0-3.02-1.22c-.85-.14-.98-.23-1.37-.58-.23-.2-.5-.53-.5-.93s.27-.73.5-.93l2.84-2.52c2.43-2.15 3.77-5.03 3.77-8.12s-1.34-5.97-3.77-8.12C32.78 2.47 28.18.84 23.18.84c-5.78 0-11.57 2.19-15.88 6.01C3.18 10.48.92 15.35.92 20.56s2.26 10.08 6.37 13.71c2.04 1.8 4.45 3.2 7.17 4.16 2.62.92 5.37 1.4 8.15 1.41h.17c5.72 0 11.16-1.93 14.94-5.29a4.46 4.46 0 0 0 1.44-3.24c.02-1.33-.5-2.62-1.4-3.45zM6.92 15.84a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3.75 12.66a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.75-18.66a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm6 25.41a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm6.75-22.41a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
//                 fill="var(--text-color)"
//             />
//         </svg>
//     );
// }

// // ─── Color Picker Popover ─────────────────────────────────
// function ColorPicker({ open, onSelect }) {
//     const colors = [
//         { color: "#E74C3C", label: "Red" },
//         { color: "#5FA7D9", label: "Light Blue" },
//         { color: "#2E6A91", label: "Dark Blue" },
//         { color: "#2F2F2F", label: "Black" },
//     ];

//     return (
//         <AnimatePresence>
//             {open && (
//                 <motion.div
//                     initial={{ opacity: 0, y: 10, scale: 0.9 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: 10, scale: 0.9 }}
//                     transition={{ duration: 0.2, ease: "easeOut" }}
//                     className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50"
//                 >
//                     <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
//                         {colors.map((item) => (
//                             <button
//                                 key={item.color}
//                                 onClick={() => onSelect(item.color)}
//                                 aria-label={`Select ${item.label} theme`}
//                                 className="w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer transition-transform duration-150 hover:scale-125 active:scale-95 ring-2 ring-white/20 hover:ring-white/50"
//                                 style={{ backgroundColor: item.color }}
//                             />
//                         ))}
//                     </div>
//                     {/* Arrow */}
//                     <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-black/60 backdrop-blur-xl border-r border-b border-white/10" />
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// // ─── Separator ────────────────────────────────────────────
// function DockSeparator() {
//     return (
//         <div className="flex items-center justify-center px-0.5 sm:px-1">
//             <div className="w-px h-8 sm:h-10 bg-[var(--text-color)]/20 rounded-full" />
//         </div>
//     );
// }

// // ─── Main Dock ────────────────────────────────────────────
// export default function AppleDock() {
//     const router = useRouter();
//     const pathname = usePathname();
//     const mouseX = useMotionValue(Infinity);
//     const [themeOpen, setThemeOpen] = useState(false);

//     // Navigation items
//     const navItems = [
//         { id: "home", label: "Home", path: "/", icon: <HomeIcon /> },
//         { id: "about", label: "About", path: "/about", icon: <AboutIcon /> },
//         {
//             id: "auditflow",
//             label: "AuditFlow",
//             path: "/auditflow",
//             icon: <AuditFlowIcon />,
//         },
//     ];

//     const handleNav = (path) => {
//         setThemeOpen(false);
//         router.push(path);
//     };

//     const handleThemeSelect = (color) => {
//         console.log(`Theme color selected: ${color}`);
//         setThemeOpen(false);
//     };

//     // Dock config
//     const baseSize = 48;
//     const magnification = 1.7;
//     const distance = 140;

//     return (
//         <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[999]">
//             <motion.nav
//                 aria-label="Application Dock"
//                 onMouseMove={(e) => mouseX.set(e.pageX)}
//                 onMouseLeave={() => mouseX.set(Infinity)}
//                 className="flex items-end px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl sm:rounded-[20px]
//                    bg-white/20 backdrop-blur-2xl
//                    border border-white/30
//                    shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]"
//             >
//                 {/* Navigation icons */}
//                 <div className="flex items-end gap-2 sm:gap-3">
//                     {navItems.map((item) => (
//                         <DockIcon
//                             key={item.id}
//                             mouseX={mouseX}
//                             icon={item.icon}
//                             label={item.label}
//                             isActive={
//                                 item.path === "/"
//                                     ? pathname === "/"
//                                     : pathname?.startsWith(item.path)
//                             }
//                             baseSize={baseSize}
//                             magnification={magnification}
//                             distance={distance}
//                             onClick={() => handleNav(item.path)}
//                         />
//                     ))}
//                 </div>

//                 {/* Separator */}
//                 <DockSeparator />

//                 {/* Theme picker */}
//                 <div className="relative flex items-end">
//                     <ColorPicker open={themeOpen} onSelect={handleThemeSelect} />
//                     <DockIcon
//                         mouseX={mouseX}
//                         icon={<ThemePaletteIcon />}
//                         label="Theme"
//                         isActive={false}
//                         baseSize={baseSize}
//                         magnification={magnification}
//                         distance={distance}
//                         onClick={() => setThemeOpen((prev) => !prev)}
//                     />
//                 </div>
//             </motion.nav>
//         </div>
//     );
// }

"use client";

import { useState, useRef, useMemo, memo, useEffect } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";

// ------------------------------------------
// Default Items
// ------------------------------------------
const DEFAULT_ITEMS = [
  {
    title: "Affinity",
    image:
      "https://framerusercontent.com/assets/V5BKLcbfzRlTkbAdA5GRKt0qf0.svg",
    link: "https://affinity.serif.com/",
  },
  {
    title: "Figma",
    image:
      "https://framerusercontent.com/assets/hpC9jcWNkUqJrxvk42hUicZhblc.svg",
    link: "https://www.figma.com/",
  },
  {
    title: "Spotify",
    image:
      "https://framerusercontent.com/assets/npxAXuymNHQUSYbSpzQbQnVzlI.svg",
    link: "https://open.spotify.com/",
  },
];

// ------------------------------------------
// Responsive Settings
// ------------------------------------------
const responsiveConfig = (width) => {
  if (width < 480)
    return {
      baseSize: 55,
      magnification: 1,
      gap: 8,
      distance: 120,
      paddingX: 10,
      paddingY: 8,
    };

  if (width < 768)
    return {
      baseSize: 65,
      magnification: 1.2,
      gap: 10,
      distance: 170,
      paddingX: 14,
      paddingY: 10,
    };

  if (width < 1280)
    return {
      baseSize: 85,
      magnification: 1.45,
      gap: 14,
      distance: 230,
      paddingX: 16,
      paddingY: 12,
    };

  return {
    baseSize: 95,
    magnification: 1.6,
    gap: 18,
    distance: 260,
    paddingX: 20,
    paddingY: 14,
  };
};

// ------------------------------------------
// AppleDock Component
// ------------------------------------------
const AppleDock = ({ items = DEFAULT_ITEMS, borderRadius = 20, hoverText }) => {
  const mouseX = useMotionValue(Infinity);
  const finalItems = useMemo(() => items ?? DEFAULT_ITEMS, [items]);

  // -------------------------
  // ✅ Make width reactive
  // -------------------------
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1600,
  );

  // update width on resize (mobile rotations, responsive changes)
  useEffect(() => {
    const updateSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // -------------------------
  // Responsive values update dynamically
  // -------------------------
  const { baseSize, magnification, gap, distance, paddingX, paddingY } =
    responsiveConfig(screenWidth);

  const isMobile = screenWidth < 480;

  return (
    <div className="flex justify-center fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[999] w-full">
      <motion.nav
        className="rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        style={{
          padding: `${paddingY}px ${paddingX}px`,
          minHeight: baseSize + 20,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap,
            margin: 0,
            padding: 0,
            alignItems: "flex-end",
          }}
        >
          {finalItems.map((item, i) => (
            <DockIcon
              key={i}
              item={item}
              mouseX={mouseX}
              baseSize={baseSize}
              magnification={magnification}
              distance={distance}
              borderRadius={borderRadius}
              isMobile={isMobile}
              hoverText={
                hoverText || {
                  bgColor: "rgba(0,0,0,0.75)",
                  textColor: "#fff",
                  size: 14,
                  padding: 6,
                }
              }
            />
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

// ------------------------------------------
// Dock Icon Component
// ------------------------------------------
const DockIcon = memo(function DockIcon({
  item,
  mouseX,
  baseSize,
  magnification,
  distance,
  borderRadius,
  hoverText,
  isMobile,
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseSize, baseSize * magnification, baseSize],
  );

  const width = useSpring(widthSync, {
    mass: 0.15,
    stiffness: 150,
    damping: 14,
  });

  const finalWidth = shouldReduceMotion || isMobile ? baseSize : width;

  const [hovered, setHovered] = useState(false);

  return (
    <li style={{ display: "flex", alignItems: "flex-end" }}>
      <motion.div
        ref={ref}
        style={{
          width: finalWidth,
          height: finalWidth,
          borderRadius,
          position: "relative",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.88 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open(item.link, "_blank")}
      >
        {/* Tooltip (Desktop Only) */}
        {!isMobile && (
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 0, x: "-50%" }}
                animate={{ opacity: 1, y: -14, x: "-50%" }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  top: -hoverText.size - hoverText.padding * 2 - 6,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: hoverText.bgColor,
                  color: hoverText.textColor,
                  padding: hoverText.padding,
                  borderRadius: 6,
                  fontSize: hoverText.size,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                {item.title}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <Image
          src={item.image}
          alt={item.title}
          height={300}
          width={300}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </motion.div>
    </li>
  );
});

export default AppleDock;
