type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="relative dark:bg-neutral-950 dark:border-neutral-900 bg-[#FAFAFA] border-[#DEDCDC] border rounded-2xl px-6 mb-10 py-4 mx-5">
      <img src={icon} alt="{title}" className="absolute -top-6 left-4" />
      <h3 className="text-xl font-semibold mb-2 mt-6">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}

export default ServiceCard;
