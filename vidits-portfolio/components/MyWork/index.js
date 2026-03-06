import { Portfolio } from "./index.constant";
import { PortfolioCard } from "./PortfolioCard";

// ✅ Main Component
export default function MyWork() {
  return (
    <div className="">
      {/* Header */}
      <header className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight sm:leading-tight">
          Some of my
          <br /> Recent works
        </h2>
      </header>

      {/* Portfolio Grid */}
      <section className="pt-6 sm:pt-10 flex justify-center w-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-8 md:py-10 flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:place-items-center w-full">
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
