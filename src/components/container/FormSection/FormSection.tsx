import { useState } from "react";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import SuccessModal from "../Popup/feedback/SuccessModal";
import ErrorModal from "../Popup/feedback/ErrorModal";

function FormSection() {
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
    <section
      id="form"
      className="max-w-6xl mx-auto px-6 md:px-20 py-20 dark:bg-black dark:text-white"
    >
      <div className="md:max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start? Let's Talk.
          </h2>
          <p className="text-sm text-neutral-400 mb-4">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form>
          <Input label="Name" placeholder="Enter your name" />
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Textarea label="Message" placeholder="Enter your message" />
        </form>

        {/* Services */}
        <p className="font-bold mb-4">Services</p>
        <div className="flex flex-col md:flex-row md:space-x-10 gap-3">
          <div className="flex flex-col gap-3">
            <Checkbox label="Web Development" />
            <Checkbox label="Mobile App Development" />
            <Checkbox label="UI/UX Design" />
          </div>
          <div className="flex flex-col gap-3">
            <Checkbox label="Cloud Solutions" />
            <Checkbox label="Software Development" />
            <Checkbox label="Other" />
          </div>
        </div>
        <Button onClick={handleSubmit} className="w-full mt-7">
          Send
        </Button>
        <SuccessModal
          open={successOpen}
          onClose={() => setSuccessOpen(false)}
        />
        <ErrorModal open={errorOpen} onClose={() => setErrorOpen(false)} />
      </div>
    </section>
  );
}

export default FormSection;
