import HeroSection from "@/components/HeroSection";
import HoverRevealText from "@/components/HoverRevealText";
import MyWork from "@/components/MyWork";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <MyWork />
      <HoverRevealText />
    </div>
  );
}
