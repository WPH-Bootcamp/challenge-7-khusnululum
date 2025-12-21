import PortofolioCard from "../../ui/PortofolioCard";
import { portofolios } from "../../data/portofolios";

function PortofolioSection() {
  return (
    <section
      id="projects"
      className="px-6 py-10 md:py-20 max-w-6xl mx-auto dark:bg-black dark:text-white"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          From Vision to Launch! Project We're Proud Of
        </h2>
        <p className="text-sm text text-neutral-400">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>

      {/* Portofolio List */}
      <div className="flex flex-col gap-10 md:flex-row md:gap-8 md:overflow-x-auto md:no-scrollbar items-center">
        {portofolios.map((portofolio) => (
          <PortofolioCard
            key={portofolio.id}
            category={portofolio.category}
            title={portofolio.title}
            image={portofolio.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PortofolioSection;
