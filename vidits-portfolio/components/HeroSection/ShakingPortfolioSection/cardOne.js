import MomentumHoverCardsBase from "./MomentumCard";

export default function CardOne() {
  return (
    <MomentumHoverCardsBase
      cards={[{ id: "1", src: "/Images/heroSection/post1.webp" }]}
      rotate="rotate-4"
    />
  );
}
