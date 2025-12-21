import { brands } from "../../data/brands.ts";
import { stats } from "../../data/stat.ts";
import BrandLogo from "../../ui/BrandLogo";
import StatCard from "../../ui/StatCard";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py:16 text-center md:max-w-6xl mx-auto dark:bg-black dark:text-white"
    >
      <p className="text-sm font-bold md:text-xl tracking-widest mb-6">
        Trusted by Global innovators & Leading Brands
      </p>

      {/* side gradient */}
      <div className="relative w-full py-8 bg-transparent">
        <div className="absolute right-0 top-13 h-full w-32 bg-linear-to-l from-white to-transparent dark:from-black z-10 pointer-events-none"></div>
        <div className="absolute left-0 top-13 h-full w-32 bg-linear-to-r from-white to-transparent dark:from-black z-10 pointer-events-none"></div>
      </div>

      {/* scroll brands */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-10">
          {brands.map((brand) => (
            <BrandLogo key={brand.alt} src={brand.src} alt={brand.alt} />
          ))}
        </div>
      </div>

      {/* end to end */}
      <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-20">
        End-to-End IT Solution That Drive Results
      </h2>
      <p className="text-gray-400 text-sm mb-12">
        From strategy to execute, we deliver solutions that grow your business
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mx-auto max-w-6xl">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default About;
