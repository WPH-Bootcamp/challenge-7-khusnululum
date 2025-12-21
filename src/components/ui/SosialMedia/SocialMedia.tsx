type SocialMediaProps = {
  src: string;
  alt: string;
  href?: string;
};

export function SocialMedia({ src, alt, href }: SocialMediaProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center hover:bg-[#FF623E] transition group"
    >
      <img
        src={src}
        alt={alt}
        className="w-5 h-5 object-contain group-hover:invert dark:invert"
      />
    </Wrapper>
  );
}
