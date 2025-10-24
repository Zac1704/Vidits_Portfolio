"use client";
import { useState, useEffect, useRef } from "react";

export default function HoverRevealText() {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Draw text to get its shape
    ctx.fillStyle = "#000000";
    ctx.font = "bold 70px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lines = [
      { text: "THANKS FOR DROPPING BY!", size: 70, y: 80 },
      {
        text: "IF SOMETHING HERE CAUGHT YOUR EYE, SPARKED A THOUGHT,",
        size: 50,
        y: 180,
      },
      {
        text: "OR JUST FELT RIGHT, FEEL FREE TO REACH OUT. LET'S CREATE",
        size: 50,
        y: 240,
      },
      {
        text: "WHAT DOESN'T EXIST YET OR MAKE WHAT DOES FEEL SIMPLER.",
        size: 50,
        y: 300,
      },
      { text: "~ VIDIT", size: 50, y: 380 },
    ];

    lines.forEach((line) => {
      ctx.font = `bold ${line.size}px Arial, sans-serif`;
      ctx.fillText(line.text, width / 2, line.y);
    });

    // Get the text pixels
    const textData = ctx.getImageData(0, 0, width, height);
    const textPixels = textData.data;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Create VERY dense particle effect - Layer 1 (Base layer - super dense)
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        const alpha = textPixels[index + 3];

        if (alpha > 10) {
          // Reduced density
          const numParticles = Math.random() < 0.4 ? 1 : 0;

          for (let i = 0; i < numParticles; i++) {
            // Smaller particles
            const size = Math.random() * 1.2 + 0.4;
            const opacity = Math.random() * 0.25 + 0.15;

            // Scatter around the text shape
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;

            // Much lighter gray particles
            const gray = Math.floor(Math.random() * 70 + 160);
            ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, ${opacity})`;

            // Draw particle
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, size / 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // Add extra scattered particles for more density - Layer 2
    for (let i = 0; i < 40000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const index = (Math.floor(y) * width + Math.floor(x)) * 4;

      if (textPixels[index + 3] > 10) {
        const size = Math.random() * 2 + 0.6;
        const opacity = Math.random() * 0.5 + 0.3;
        const offsetX = (Math.random() - 0.5) * 35;
        const offsetY = (Math.random() - 0.5) * 35;
        const gray = Math.floor(Math.random() * 90 + 130);

        ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Layer 3 - Even more scattered particles for extra density
    for (let i = 0; i < 70000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const index = (Math.floor(y) * width + Math.floor(x)) * 4;

      if (textPixels[index + 3] > 5) {
        const size = Math.random() * 2.5 + 0.7;
        const opacity = Math.random() * 0.45 + 0.25;
        const offsetX = (Math.random() - 0.5) * 45;
        const offsetY = (Math.random() - 0.5) * 45;
        const gray = Math.floor(Math.random() * 100 + 120);

        ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Layer 4 - Super dense coverage to completely obscure text
    for (let i = 0; i < 60000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const index = (Math.floor(y) * width + Math.floor(x)) * 4;

      if (textPixels[index + 3] > 1) {
        const size = Math.random() * 3 + 0.8;
        const opacity = Math.random() * 0.5 + 0.3;
        const offsetX = (Math.random() - 0.5) * 50;
        const offsetY = (Math.random() - 0.5) * 50;
        const gray = Math.floor(Math.random() * 110 + 110);

        ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Apply stronger blur to the entire canvas for complete obscurity
    ctx.filter = "blur(2.5px)";
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = "none";
  }, []);

  return (
    <section className="bg-white flex items-center justify-center px-4">
      <div
        className="max-w-6xl w-full text-center relative cursor-pointer py-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Particle texture overlay - ONLY on text area */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <canvas
            ref={canvasRef}
            width={1400}
            height={450}
            className={`w-full h-auto transition-opacity duration-1000 ease-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Clear text that appears on hover */}
        <div
          className={`relative z-10 text-[#363636] transition-opacity duration-1000 ease-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            THANKS FOR DROPPING BY!
          </h2>
          <p className="text-3xl md:text-4xl font-black leading-tight mb-6">
            IF SOMETHING HERE CAUGHT YOUR EYE, SPARKED A THOUGHT,
            <br className="hidden md:block" />
            OR JUST FELT RIGHT, FEEL FREE TO REACH OUT. LET&apos;S CREATE
            <br className="hidden md:block" />
            WHAT DOESN&apos;T EXIST YET OR MAKE WHAT DOES FEEL SIMPLER.
          </p>
          <p className="text-3xl md:text-4xl font-black">
            <span className="inline-block">~</span> VIDIT
          </p>
        </div>

        {/* Mobile Tap Hint */}
        <div
          className={`md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-50"
          }`}
        >
          <p className="text-sm text-gray-500">Tap to reveal</p>
        </div>
      </div>
    </section>
  );
}
