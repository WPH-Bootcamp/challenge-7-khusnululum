import { industries } from "../../data/industries";
import { useState } from "react";

function InsdustrySection() {
  const [activeId, setActiveId] = useState("fintech");

  const activeIndustry = industries.find((item) => item.id === activeId);

  return (
    <section className="px-6 py-10 md:py-20 max-w-6xl mx-auto dark:bg-black dark:text-white">
      <div className="text-left py-4">
        <h2 className="text-2xl font-bold mb-4">Built for Your Industry</h2>
        <p className="text-sm text-neutral-400 mb-10">
          We've helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT MENU */}
        <div className="space-y-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveId(industry.id)}
              className={`flex items-center gap-3 text-left w-full ${
                activeId === industry.id
                  ? "text-black dark:text-white font-semibold"
                  : "text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              <span
                className={`h-6 w-1 rounded ${
                  activeId === industry.id ? "bg-[#FF623E]" : "bg-gray-300"
                }`}
              />
              {industry.label}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        {activeIndustry && (
          <div>
            <p className="text-neutral-400 mb-6">
              {activeIndustry.description}
            </p>

            <img
              src={activeIndustry.image}
              alt={activeIndustry.label}
              className="rounded-2xl w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default InsdustrySection;
