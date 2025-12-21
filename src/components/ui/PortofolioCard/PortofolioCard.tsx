type Props = {
  category: string;
  title: string;
  image: string;
};

function PortofolioCard({ category, title, image }: Props) {
  return (
    <div>
      <img src={image} alt={title} className="rounded-2xl mb-4" />

      <span className="text-sm text-[#FF623E]">{category}</span>

      <h3 className="font-bold">{title}</h3>
    </div>
  );
}

export default PortofolioCard;
