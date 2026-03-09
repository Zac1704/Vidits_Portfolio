import { Portfolio } from "./index.constant";
import { PortfolioCard } from "./PortfolioCard";

// ✅ Main Component
export default function MyWork() {
  return (
    <div id="work" className="scroll-mt-24">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black px-4 sm:px-0">
          Some of my
          <br /> Recent Works
        </h2>
      </div>

      {/* Portfolio Grid */}
      <section className="flex justify-center w-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 pt-12 md:pt-14 lg:pt-16 flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:place-items-center w-full">
          {Portfolio.map((work, index) => (
            <PortfolioCard
              key={index}
              img={work.img}
              title={work.title}
              shadow={work.shadow}
              link={work.link}
              subtitle={work.subtitle}
              description={work.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
