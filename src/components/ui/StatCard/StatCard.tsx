type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="dark:bg-neutral-950 dark:border-neutral-900 bg-[#FAFAFA] border-[#DEDCDC] border rounded-full w-43 h-43 md:w-53 md:h-53 flex flex-col items-center justify-center mx-auto">
      <h3 className="text-4xl font-bold text-[#FF623E] mb-2">{value}</h3>
      <p className="text-sm font-semibold max-w-3/4">{label}</p>
    </div>
  );
}

export default StatCard;
