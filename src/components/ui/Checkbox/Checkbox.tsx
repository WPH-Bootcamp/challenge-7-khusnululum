type CheckboxProps = {
  label: string;
};

function Checkbox({ label }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="rounded-md w-5 h-5 cursor-pointer border border-neutral-400 appearance-none
      checked:bg-[#FF623E]
      checked:border-[#FF623E]
      relative
      checked:after:content-['✓']
      checked:after:absolute
      checked:after:inset-0
      checked:after:flex
      checked:after:items-center
      checked:after:justify-center
      checked:after:text-white
      checked:after:text-sm"
      />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
