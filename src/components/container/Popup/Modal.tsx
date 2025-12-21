import Button from "../../ui/Button";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Modal box */}
      <div className="relative z-10 bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default Modal;
