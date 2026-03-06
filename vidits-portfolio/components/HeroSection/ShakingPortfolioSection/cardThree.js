"use client";
import MomentumHoverCards from "./MomentumCard";

export default function CardThree() {
  return (
    <MomentumHoverCards
      cards={[{ id: "3", src: "/Images/heroSection/post3.webp" }]}
      rotate="rotate-4"
      mobileWidth={150}
      mobileHeight={150}
    />
  );
}
