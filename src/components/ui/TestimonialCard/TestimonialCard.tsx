type Props = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

function TestimonialCard({ quote, name, role, avatar, rating }: Props) {
  return (
    <div
      className="
       relative dark:bg-neutral-950 dark:border-neutral-800 bg-[#FAFAFA] border-[#DEDCDC] border rounded-2xl w-[361px] md:w-[494px] px-6 pt-5 pb-15 mx-2 mt-10 mb-10"
    >
      {/* Quote icon */}
      <div className="absolute -top-3 left-4">
        <img src="DoubleQuote.svg" alt="Double Quote" />
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>
            <img src="/star.svg" alt="Yellow Star" />
          </span>
        ))}
      </div>

      <p className="text-neutral-400 text-sm leading-relaxed mb-6">{quote}</p>

      <div className="flex flex-col items-center gap-2">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-[#FF623E]">{role}</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="absolute w-[60px] left-1/2 -bottom-20 -translate-x-1/2 -trasnlate-y-1/2"
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
