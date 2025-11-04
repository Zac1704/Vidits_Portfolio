import CardOne from "./cardOne";
import CardTwo from "./cardTwo";
import CardThree from "./cardThree";
import CardFour from "./cardFour";

export default function PortfolioRow() {
  return (
    <div className="flex -space-x-20 justify-center">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>
  );
}
