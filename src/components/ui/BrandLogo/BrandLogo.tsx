type BrandLogoProps = {
  src: string;
  alt: string;
};

function BrandLogo({ src, alt }: BrandLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-10 grayscale hover:grayscale-0 transition"
    />
  );
}

export default BrandLogo;
