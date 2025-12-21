type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
};

function Input({ label, placeholder, type = "text" }: InputProps) {
  return (
    <div>
      <label className="block font-bold mb-4">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full border border-neutral-400 p-3 rounded-2xl mb-6"
      />
    </div>
  );
}

export default Input;
