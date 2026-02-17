"use client";

import { useRef } from "react";
import DottedBackground from "./DottedBackground";
import StackedCards from "./StackedCards";

const Portfolio = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative">
      <DottedBackground>
        <StackedCards containerRef={containerRef} />
      </DottedBackground>
    </div>
  );
};

export default Portfolio;
