import CardOne from "./cardOne";
import CardTwo from "./cardTwo";
import CardThree from "./cardThree";
import CardFour from "./cardFour";

export default function PortfolioRow() {
  return (
    <div
      className="mt-5 sm:mt-2 flex justify-center -space-x-10 sm:-space-x-16 md:-space-x-18 lg:-space-x-15"
    >
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>
  );
}
