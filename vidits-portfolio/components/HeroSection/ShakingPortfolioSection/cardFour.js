"use client";
import MomentumHoverCards from "./MomentumCard";

export default function CardFour() {
  return (
    <MomentumHoverCards
      cards={[{ id: "4", src: "/Images/heroSection/post4.webp" }]}
      rotate="-rotate-4"
      height="-12"
    />
  );
}
