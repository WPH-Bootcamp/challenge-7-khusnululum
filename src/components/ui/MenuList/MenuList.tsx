type menuItem = {
  label: string;
  href: string;
};

type MenuListProps = {
  items: menuItem[];
  variant?: "navbar" | "footer";
};

const variants = {
  navbar: {
    container: "hidden md:flex gap-6",
    link: "font-bold text-black dark:text-white hover:text-[#FF623E]",
  },
  footer: {
    container: "flex flex-col md:flex-row gap-4",
    link: "text-sm text-black dark:text-white hover:text-[#FF623E]",
  },
};

function MenuList({ items, variant = "navbar" }: MenuListProps) {
  const styles = variants[variant];

  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href} className={styles.link}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
