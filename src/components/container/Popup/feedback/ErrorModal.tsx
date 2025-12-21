import Modal from "../Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

function ErrorModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-center space-y-4">
        <img
          src="./Error Message.svg"
          alt="nvelope with red cross"
          className="w-[228px] mx-auto"
        />
        <h2 className="text-xl font-semibold">Oops! Something went wrong.</h2>
        <p className="text-gray-600">
          We couldn't send your message. Please try again or check your
          connection.
        </p>
        <button
          onClick={onClose}
          className="w-1/2 h-10 bg-[#FF623E] text-white rounded-full shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.5)]"
        >
          Try Again
        </button>
      </div>
    </Modal>
  );
}

export default ErrorModal;
