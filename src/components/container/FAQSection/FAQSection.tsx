import { useState } from "react";
import { faqs } from "../../data/faqs";
import Button from "../../ui/Button";

function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="max-w-6xl mx-auto px-6 py-10 dark:bg-black dark:text-white"
    >
      <div className="flex flex-col md:flex-row border-b-1 border-b-neutral-800 md:justify-between md:pb-10 md:mb-8">
        <div>
          <h2 className="text-2xl font-bold md:max-w-3/4 mb-2">
            Need Help? Start Here.
          </h2>
        </div>
        <div className="md:flex md:flex-col mb-4">
          <p className="text-sm font-medium text-neutral-400 md:max-w-1/2 md:self-end">
            Everything you need to know — all in one place.
          </p>
        </div>
      </div>

      {/* CONTAINER FAQ */}
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:w-2/3 mb-4">
          {faqs.map((item) => (
            <div key={item.id} className="py-4 border-b-1 border-b-neutral-800">
              {/* QUESTION */}
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center text-left font-medium"
              >
                <span>{item.question}</span>
                <span className="text-xl">
                  {openId === item.id ? "-" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {openId === item.id && (
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="bg-[#CC4E32] rounded-2xl px-6 py-6 md:max-w-1/4 mt-2">
          <h3 className="text-white text-2xl font-bold mb-2">
            Let's talk it through
          </h3>
          <p className="text-white text-sm font-semibold mb-4">
            book a free consultation with our team.
          </p>
          <div className="flex justify-center">
            <img
              src="Consultation Image.svg"
              alt="4 People in a meeting room"
              className="mb-4"
            />
          </div>
          <Button
            variant="secondary"
            className="w-full h-auto font-bold"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
