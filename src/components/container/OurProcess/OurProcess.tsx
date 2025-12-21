import { processSteps } from "../../data/process";
import ProcessTimelineItem from "../../ui/ProcessTimelineItem";

const OurProcess = () => {
  return (
    <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto dark:bg-black dark:text-white">
      <div className="text-center mb-6">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">Our Process</h2>
        <p>Clear steps. Smart execution. Results you can count on.</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="md:hidden absolute left-5 top-7 bottom-9 w-px bg-gray-200"></div>
        <div className="hidden md:block absolute left-1/2 top-0 md:top-11 md:bottom-11 w-px bg-gray-200 -translate-x-1/2" />

        <div className="space-y-10">
          {processSteps.map((step, index) => (
            <ProcessTimelineItem
              key={step.id}
              step={step}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
