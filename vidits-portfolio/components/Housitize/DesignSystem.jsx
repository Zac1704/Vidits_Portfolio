import React from "react";
import { Palette, Type, Grid } from "lucide-react";

const defaultColors = [
  {
    name: "Accent",
    colors: [
      { hex: "#E7C873", label: "Accent 400" },
      { hex: "#d4a942", label: "Accent 500" },
      { hex: "#fef9e7", label: "Accent 50" },
    ],
  },
  {
    name: "Neutral",
    colors: [
      { hex: "#ffffff", label: "White" },
      { hex: "#a3a3a3", label: "Neutral 400" },
      { hex: "#1a1a1a", label: "Neutral 900" },
    ],
  },
];

export function DesignSystem({
  colors = defaultColors,
  typography = "Clear hierarchy using modern sans-serif type for readability and professionalism. Typography establishes a strong visual structure for property information.",
  spacing = "80px section spacing ensures visual rhythm and breathing room. Consistent spacing creates professional perception and reduces visual fatigue.",
}) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Design System & Style Guide</h2>

      <div className="flex flex-col gap-10">
        {/* Colors */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20">
              <Palette className="w-5 h-5 text-accent-400" />
            </div>
            <h4>Color Palette</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colors.map((group, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl flex flex-col"
              >
                <h6 className="mb-4 text-white">{group.name}</h6>

                <div className="flex flex-col gap-3">
                  {group.colors.map((color, colorIdx) => (
                    <div key={colorIdx} className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg border border-neutral-700"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-white">
                          {color.label}
                        </p>
                        <p className="text-xs text-neutral-500">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20">
              <Type className="w-5 h-5 text-accent-400" />
            </div>
            <h4>Typography</h4>
          </div>

          <div className="p-6 bg-neutral-800 rounded-xl mb-6 border border-neutral-700">
            <p className="text-neutral-400">{typography}</p>
          </div>

          <div className="flex flex-col gap-4 p-6 bg-neutral-800 border border-neutral-700 rounded-xl">
            <div className="border-b border-neutral-700 pb-3">
              <h1 className="mb-1 text-white">Heading 1</h1>
              <p className="text-xs text-neutral-500">
                48px / Extra Bold / -0.02em
              </p>
            </div>
            <div className="border-b border-neutral-700 pb-3">
              <h2 className="mb-1">Heading 2</h2>
              <p className="text-xs text-neutral-500">
                36px / Extra Bold / -0.01em
              </p>
            </div>
            <div className="border-b border-neutral-700 pb-3">
              <h3 className="mb-1">Heading 3</h3>
              <p className="text-xs text-neutral-500">24px / Bold</p>
            </div>
            <div>
              <p className="mb-1">Body Text</p>
              <p className="text-xs text-neutral-500">
                16px / Regular / 1.7 line-height
              </p>
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20">
              <Grid className="w-5 h-5 text-accent-400" />
            </div>
            <h4>Spacing System</h4>
          </div>

          <div className="p-6 bg-neutral-800 rounded-xl mb-6 border border-neutral-700">
            <p className="text-neutral-400">{spacing}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { size: "16px", label: "XS" },
              { size: "24px", label: "Small" },
              { size: "32px", label: "Medium" },
              { size: "48px", label: "Large" },
              { size: "80px", label: "Section" },
            ].map((space, idx) => (
              <div
                key={idx}
                className="p-4 bg-neutral-800 border border-neutral-700 rounded-xl text-center flex flex-col items-center justify-center"
              >
                <div
                  className="bg-accent-400 mx-auto rounded mb-2"
                  style={{
                    width: space.size === "80px" ? "48px" : space.size,
                    height: space.size === "80px" ? "48px" : space.size,
                  }}
                />
                <p className="text-sm font-semibold text-white">
                  {space.label}
                </p>
                <p className="text-xs text-neutral-500">{space.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
