import { useState } from "react";

type Props = {
  step: {
    id: number;
    title: string;
    description: string;
  };
  align: "left" | "right";
};

function ProcessTimelineItem({ step, align }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex w-full md:grid md:grid-cols-[1fr_80px_1fr] items-center">
      {/* CENTER NUMBER */}
      <div className="flex md:absolute md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#FF623E] text-white items-center justify-center font-bold z-10">
        {step.id}
      </div>

      {/* Spacer */}
      <div className="w-10 md:hidden" />

      {/* LEFT CONTENT */}
      <div
        className={`px-6 bg-[#FAFAFA] border-[#DEDCDC] dark:bg-neutral-950 dark:border-neutral-900 border p-5 rounded-2xl flex-1 ${
          align === "left"
            ? "md:col-start-1 md:text-right"
            : "md:col-start-3 md:hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{step.title}</h3>

          <button
            onClick={() => setOpen(!open)}
            className="shrink-0 rounded-full p-1 hover:bg-gray-200 dark:hover:bg-neutral-800 transition"
          >
            <img
              src="./Arrow Icon.svg"
              alt="Arrow Icon"
              className={`transition-transform duration-300 dark:invert ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* DESCRIPTION (EXPANDABLE) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
            {step.description}
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className={`hidden md:block px-6 bg-[#FAFAFA] border-[#DEDCDC] dark:bg-neutral-950 dark:border-neutral-900 border p-5 rounded-2xl flex-1 ${
          align === "right"
            ? "md:col-start-3 md:text-left"
            : "md:col-start-1 md:hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{step.title}</h3>

          <button
            onClick={() => setOpen(!open)}
            className="shrink-0 rounded-full p-1 hover:bg-gray-200 dark:hover:bg-neutral-800 transition"
          >
            <img
              src="./Arrow Icon.svg"
              alt="Arrow Icon"
              className={`transition-transform duration-300 dark:invert ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* DESCRIPTION (EXPANDABLE) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProcessTimelineItem;
