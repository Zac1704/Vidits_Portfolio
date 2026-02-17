import React from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

const defaultScreens = [
  {
    title: "Homepage — Property Discovery",
    description:
      "Clean homepage with strong sectioning, property cards optimized for comparison, consistent spacing and alignment",
    device: "desktop",
  },
  {
    title: "Property Listings",
    description:
      "Grid layout showcasing curated collections with filtering options",
    device: "desktop",
  },
  {
    title: "Property Detail View",
    description:
      "Comprehensive property information with clear hierarchy and visual rhythm",
    device: "desktop",
  },
];

export default function HighFidelityUI({
  introduction = "The final UI reflects a modern, premium real-estate brand with emphasis on whitespace, typography, and visual rhythm. Design currently optimized for desktop view; responsiveness planned for future iteration.",
  screens = defaultScreens,
}) {
  const getDeviceIcon = (device) => {
    switch (device) {
      case "mobile":
        return <Smartphone className="w-4 h-4" />;
      case "tablet":
        return <Tablet className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <section id="hifi" className="flex flex-col">
      <h2 className="mb-5">High-Fidelity UI Design</h2>

      <p className="text-neutral-400 mb-12 max-w-3xl">{introduction}</p>

      <div className="flex flex-col gap-12">
        {screens.map((screen, index) => (
          <div key={index} className="flex flex-col">
            {/* Screen Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
                <h4 className="mb-2">{screen.title}</h4>
                <p className="text-neutral-400">{screen.description}</p>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg border border-neutral-700">
                {getDeviceIcon(screen.device)}
                <span className="text-sm text-neutral-400 capitalize">
                  {screen.device || "desktop"}
                </span>
              </div>
            </div>

            {/* Screen Mockup */}
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-2xl p-8 border border-neutral-700">
              {screen.imageUrl ? (
                <img
                  src={screen.imageUrl}
                  alt={screen.title}
                  className="w-full rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full aspect-[16/9] bg-neutral-900 rounded-lg shadow-2xl flex items-center justify-center border border-neutral-700">
                  <div className="text-center flex flex-col items-center gap-4 p-8">
                    <div className="text-accent-400">
                      {getDeviceIcon(screen.device)}
                    </div>

                    <div className="flex flex-col gap-2 max-w-md w-full">
                      <div className="h-6 bg-neutral-700 rounded" />

                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="h-24 bg-accent-400/10 rounded border border-accent-400/20" />
                        <div className="h-24 bg-accent-400/10 rounded border border-accent-400/20" />
                        <div className="h-24 bg-accent-400/10 rounded border border-accent-400/20" />
                      </div>

                      <div className="h-32 bg-neutral-700 rounded mt-4" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
