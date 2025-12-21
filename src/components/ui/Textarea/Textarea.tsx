type TextareaProps = {
  label: string;
  placeholder?: string;
};

function Textarea({ label, placeholder }: TextareaProps) {
  return (
    <div>
      <label className="block font-bold mb-4">{label}</label>
      <textarea
        placeholder={placeholder}
        className="block border border-neutral-400 w-full h-40 p-3 rounded-2xl mb-6"
      ></textarea>
    </div>
  );
}

export default Textarea;
