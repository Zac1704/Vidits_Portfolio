import DottedBackground from "./DottedBackground";
import StackedCards from "./StackedCards";

const Portfolio = () => {
  return (
    <div className="h-[49vh]  sm:h-[660px] hide-scrollbar flex justify-center items-center overflow-x-hidden ">
      <DottedBackground>
        <StackedCards />
      </DottedBackground>
    </div>
  );
};

export default Portfolio;
