import Carousel from "@/components/Carousel";
import ExperienceSection from "@/components/Experience";
import HoverRevealText from "@/components/HoverRevealText";
import PortfolioPage from "@/components/PortfolioSection";

const Aboutpage = () => {
  return (
    <div className="">
      <div className="text-(--text-color) text-[32px] md:text-[40px] lg:text-5xl my-8 text-center uppercase">
        <h1>About</h1>
      </div>

      <div className="space-y-8 text-[24px] md:text-[30px] tracking-[-0.32px] sm:tracking-[-1.28px] leading-[32px] sm:leading-[40px] px-13 md:px-19 lg:leading-[52px] xl:leading-[60px] lg:text-4xl max-w-[970px]  uppercase mx-auto text-center text-(--gray-text-color)">
        <p className="transition-colors duration-500 ease-out hover:text-black">
          I&apos;m a self-taught GRAPHICS & UI/UX Designer with ALMOST 2 years
          of experience HERE AND THERE. I blend aesthetic appeal with intuitive
          usability, making the digital world more engaging. I&apos;M VERY
          Passionate TO LEARN NEW THINGS & NEW DESIGN STYLES.
        </p>

        <p className="transition-colors duration-500 ease-out hover:text-black">
          I love saying yes to new adventures, whether it&apos;s a spontaneous
          trip, an unfamiliar challenge, or a wild idea at work. Curiosity keeps
          me moving, and I believe the best stories start with &quot;why
          not?&quot;
        </p>
      </div>

      <ExperienceSection />

      <PortfolioPage />

      <Carousel title="Project Archive" />

      <HoverRevealText />
    </div>
  );
};

export default Aboutpage;
