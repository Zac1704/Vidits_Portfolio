import HeroSection from "@/components/HeroSection";
import HoverRevealText from "@/components/HoverRevealText";
import MyWork from "@/components/MyWork";

export default function Home() {
  return (
    <div className="max-w-7xl space-y-10 mx-auto hide-scrollbar">
      <HeroSection />
      <MyWork />
      <HoverRevealText />
    </div>
  );
}
