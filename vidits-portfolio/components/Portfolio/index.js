import DottedBackground from "./DottedBackground";
import StackedCards from "./StackedCards";

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto h-[49vh] px-1 sm:px-0 sm:h-[660px] hide-scrollbar flex justify-center items-center">
      <DottedBackground>
        <StackedCards />
      </DottedBackground>
    </div>
  );
};

export default Portfolio;
