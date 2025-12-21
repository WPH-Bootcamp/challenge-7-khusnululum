import Modal from "../Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

function SuccessModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="justify-center text-center space-y-4">
        <img
          src="./Success Message.svg"
          alt="anvelope with green check"
          className="w-[228px] mx-auto"
        />
        <h2 className="text-xl font-semibold">Message Received!</h2>
        <p className="text-gray-600">
          Thanks for reaching out — we'll get back to you as soon as possible.
        </p>
        <button
          onClick={onClose}
          className="w-1/2 h-10 bg-[#FF623E] text-white rounded-full shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.5)]"
        >
          Back to Home
        </button>
      </div>
    </Modal>
  );
}

export default SuccessModal;
