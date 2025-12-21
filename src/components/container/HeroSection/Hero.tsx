import { useState } from "react";
import Button from "../../ui/Button";
import SuccessModal from "../Popup/feedback/SuccessModal";
import ErrorModal from "../Popup/feedback/ErrorModal";

function Hero() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      // simulasi request
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        setSuccessOpen(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setErrorOpen(true);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between md:max-w-6xl dark:bg-black dark:text-white mx-auto -mt-25 md:-mt-23">
        <div className="flex-1 w-full px-6 md:px-20 py-10 pt-40 md:py-40">
          <h1 className="text-3xl md:text-6xl font-bold">
            Your Tech Partner for <br />
            <span className="text-[#FF6C37]">Smarter Growth</span>
          </h1>
          <p className="text-sm md:text-2xl max-w-md md:max-w-fit mb-10">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <Button
            onClick={handleSubmit}
            size="md"
            className="w-full md:max-w-1/2"
          >
            Let's Talk
          </Button>
          <SuccessModal
            open={successOpen}
            onClose={() => setSuccessOpen(false)}
          />
          <ErrorModal open={errorOpen} onClose={() => setErrorOpen(false)} />
        </div>
        <div className="flex-1 flex justify-center w-full h-full md:justify-end">
          <img
            src="./Image Hero.svg"
            alt=""
            className="hidden dark:block w-full h-auto object-cover"
          />
          <img
            src="./Image Hero Light.svg"
            alt=""
            className="block dark:hidden w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
