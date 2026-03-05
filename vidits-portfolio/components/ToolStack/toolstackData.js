import { SiOpenai } from "react-icons/si";

/**
 * Returns the icons data array for the ToolStack based on viewport size.
 * @param {boolean} isMobile
 */
export function getIconsData(isMobile) {
    return [
        // Top Left: FigJam
        {
            id: "figjam",
            label: "FigJam",
            iconSrc: "/Images/svg/toolstack/appIcons/figjam-icon.svg",
            color: "#A259FF",
            delay: 0.4,
            top: isMobile ? "45%" : "35%",
            left: isMobile ? "15%" : "20%",
            size: isMobile ? 65 : 100,
        },
        // Top Center: Figma
        {
            id: "figma",
            label: "Figma",
            iconSrc: "/Images/svg/toolstack/appIcons/figma-svgrepo-com.svg",
            color: "#F24E1E",
            delay: 0,
            top: isMobile ? "10%" : "18%",
            left: isMobile ? "45%" : "39%",
            size: isMobile ? 75 : 110,
        },
        // Top Right: Adobe Illustrator
        {
            id: "illustrator",
            label: "Adobe Illustrator",
            iconSrc: "/Images/svg/toolstack/appIcons/adobe-illustrator-svgrepo-com.svg",
            color: "#FF9A00",
            delay: 0.2,
            top: isMobile ? "22%" : "18%",
            left: isMobile ? "80%" : "62%",
            size: isMobile ? 70 : 115,
        },
        // Mid Right: Adobe Photoshop
        {
            id: "photoshop",
            label: "Adobe Photoshop",
            iconSrc: "/Images/svg/toolstack/appIcons/adobe-photoshop-svgrepo-com.svg",
            color: "#31A8FF",
            delay: 0.6,
            top: isMobile ? "45%" : "35%",
            left: isMobile ? "85%" : "78%",
            size: isMobile ? 60 : 110,
        },
        // Bottom Right: Framer
        {
            id: "framer",
            label: "Framer",
            iconSrc: "/Images/svg/toolstack/appIcons/framer-black-icon.svg",
            color: "#0055FF",
            delay: 0.8,
            top: isMobile ? "55%" : "65%",
            left: isMobile ? "85%" : "78%",
            size: isMobile ? 60 : 110,
            iconScale: 0.6,
        },
        // Bottom Center-Right: Canva
        {
            id: "canva",
            label: "Canva",
            iconSrc: "/Images/svg/toolstack/appIcons/canva-icon.svg",
            color: "#00C4CC",
            delay: 1.0,
            top: isMobile ? "78%" : "82%",
            left: isMobile ? "80%" : "62%",
            size: isMobile ? 70 : 115,
        },
        // Bottom Center-Left: Notion
        {
            id: "notion",
            label: "Notion",
            iconSrc: "/Images/svg/toolstack/appIcons/notion-svgrepo-com.svg",
            color: "#333333",
            delay: 1.2,
            top: isMobile ? "90%" : "82%",
            left: isMobile ? "45%" : "39%",
            size: isMobile ? 75 : 110,
        },
        // Bottom Left: ChatGPT
        {
            id: "chatgpt",
            label: "ChatGPT",
            icon: SiOpenai,
            color: "black",
            delay: 1.4,
            top: isMobile ? "55%" : "65%",
            left: isMobile ? "15%" : "20%",
            size: isMobile ? 65 : 100,
        },
    ];
}
