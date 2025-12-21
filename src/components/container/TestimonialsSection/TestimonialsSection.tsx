import { useEffect, useRef, useState } from "react";
import TestimonialCard from "../../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";

function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = testimonials.length;

  // Initial position → card pertama (bukan clone)
  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const cardWidth = container.offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);

    // clone-first (paling kanan)
    if (index === cardCount + 1) {
      container.scrollLeft = cardWidth;
      setActiveIndex(0);
      return;
    }

    // clone-last (paling kiri)
    if (index === 0) {
      container.scrollLeft = cardWidth * cardCount;
      setActiveIndex(cardCount - 1);
      return;
    }

    setActiveIndex(index - 1);
  };

  return (
    <section
      id="testimonials"
      className="py-10 px-6 dark:bg-black dark:text-white max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          What Partners Say About Working With Us
        </h2>
        <p className="text-neutral-400">
          Trusted voices. Real experiences. Proven results.
        </p>
        
        {/* Side Gradient */}
        <div className="relative w-full bg-transparent">
          <div className="hidden md:block absolute right-0 top-5 h-full w-32 bg-linear-to-l from-white to-transparent dark:from-black z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute left-0 top-5 h-full w-32 bg-linear-to-r from-white to-transparent dark:from-black z-10 pointer-events-none"></div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
            flex
            overflow-x-scroll
            snap-x snap-mandatory
            no-scrollbar"
          >
            {/* clone last */}
            <div className="min-w-full snap-center">
              <TestimonialCard {...testimonials[cardCount - 1]} />
            </div>

            {/* real items */}
            {testimonials.map((item) => (
              <div key={item.id} className="snap-center">
                <TestimonialCard {...item} />
              </div>
            ))}

            {/* clone first */}
            <div className="min-w-full snap-center">
              <TestimonialCard {...testimonials[0]} />
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                activeIndex === i ? "bg-[#FF623E]" : "bg-neutral-900"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
