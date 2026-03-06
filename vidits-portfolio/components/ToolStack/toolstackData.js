import { SiOpenai } from "react-icons/si";

const getConfig = (deviceType, mobile, tablet, desktop) => {
    if (deviceType === "mobile") return mobile;
    if (deviceType === "tablet") return tablet;
    return desktop;
};

/**
 * Returns the icons data array for the ToolStack based on viewport size.
 * @param {string} deviceType "mobile", "tablet", or "desktop"
 */
export function getIconsData(deviceType) {
    return [
        // Top Left: FigJam
        {
            id: "figjam",
            label: "FigJam",
            iconSrc: "/Images/svg/toolstack/appIcons/figjam-icon.svg",
            color: "#A259FF",
            delay: 0.4,
            top: getConfig(deviceType, "25%", "25%", "35%"),
            left: getConfig(deviceType, "25%", "25%", "20%"),
            size: getConfig(deviceType, 65, 85, 110),
        },
        // Top Center: Figma
        {
            id: "figma",
            label: "Figma",
            iconSrc: "/Images/svg/toolstack/appIcons/figma-svgrepo-com.svg",
            color: "#F24E1E",
            delay: 0,
            top: getConfig(deviceType, "15%", "15%", "18%"),
            left: getConfig(deviceType, "50%", "50%", "39%"),
            size: getConfig(deviceType, 65, 85, 110),
        },
        // Top Right: Adobe Illustrator
        {
            id: "illustrator",
            label: "Adobe Illustrator",
            iconSrc: "/Images/svg/toolstack/appIcons/adobe-illustrator-svgrepo-com.svg",
            color: "#FF9A00",
            delay: 0.2,
            top: getConfig(deviceType, "25%", "25%", "18%"),
            left: getConfig(deviceType, "75%", "75%", "62%"),
            size: getConfig(deviceType, 65, 85, 110),
        },
        // Mid Right: Adobe Photoshop
        {
            id: "photoshop",
            label: "Adobe Photoshop",
            iconSrc: "/Images/svg/toolstack/appIcons/adobe-photoshop-svgrepo-com.svg",
            color: "#31A8FF",
            delay: 0.6,
            top: getConfig(deviceType, "50%", "50%", "35%"),
            left: getConfig(deviceType, "85%", "85%", "78%"),
            size: getConfig(deviceType, 65, 85, 110),
        },
        // Bottom Right: Framer
        {
            id: "framer",
            label: "Framer",
            iconSrc: "/Images/svg/toolstack/appIcons/framer-black-icon.svg",
            color: "#0055FF",
            delay: 0.8,
            top: getConfig(deviceType, "75%", "75%", "65%"),
            left: getConfig(deviceType, "75%", "75%", "78%"),
            size: getConfig(deviceType, 65, 85, 110),
            iconScale: 0.6,
        },
        // Bottom Center-Right: Canva
        {
            id: "canva",
            label: "Canva",
            iconSrc: "/Images/svg/toolstack/appIcons/canva-icon.svg",
            color: "#00C4CC",
            delay: 1.0,
            top: getConfig(deviceType, "85%", "85%", "82%"),
            left: getConfig(deviceType, "50%", "50%", "62%"),
            size: getConfig(deviceType, 65, 85, 110),
        },
        // Bottom Center-Left: Notion
        {
            id: "notion",
            label: "Notion",
            iconSrc: "/Images/svg/toolstack/appIcons/notion-svgrepo-com.svg",
            color: "#333333",
            delay: 1.2,
            top: getConfig(deviceType, "75%", "75%", "82%"),
            left: getConfig(deviceType, "25%", "25%", "39%"),
            size: getConfig(deviceType, 65, 85, 110),
        },
        // Bottom Left: ChatGPT
        {
            id: "chatgpt",
            label: "ChatGPT",
            icon: SiOpenai,
            color: "black",
            delay: 1.4,
            top: getConfig(deviceType, "50%", "50%", "65%"),
            left: getConfig(deviceType, "15%", "15%", "20%"),
            size: getConfig(deviceType, 65, 85, 110),
        },
    ];
}
