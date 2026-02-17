"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CarouselAuditflow = ({ images, caption }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  return (
    <div className="my-12">
      <div className="bg-gray-50 p-4 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-inner relative overflow-hidden">
        {/* Image */}
        <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              disabled={index === 0}
              onClick={prevSlide}
              className="p-3 bg-white rounded-full border border-gray-100 shadow-sm disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              disabled={index === images.length - 1}
              onClick={nextSlide}
              className="p-3 bg-white rounded-full border border-gray-100 shadow-sm disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <p className="text-center text-sm text-gray-400 mt-6 italic font-medium max-w-2xl mx-auto leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  );
};

export default CarouselAuditflow;
