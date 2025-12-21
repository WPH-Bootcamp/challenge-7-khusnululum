import { services } from "../../data/services";
import ServiceCard from "../../ui/ServiceCard";

const ServicesSection = () => {
  return (
    <section id="service" className="max-w-6xl mx-auto dark:bg-black dark:text-white">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold px-4">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="text-sm text-neutral-400">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 space-y-10 mt-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;
