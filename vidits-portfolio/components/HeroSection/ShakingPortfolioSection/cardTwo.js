"use client";
import MomentumHoverCards from "./MomentumCard";

export default function CardTwo() {
  return (
    <MomentumHoverCards
      cards={[{ id: "2", src: "/Images/heroSection/post2.webp" }]}
      rotate="-rotate-4"
      height="-12"
      wrapperClassName="hidden sm:block"
    />
  );
}
