import Button from "../../ui/Button";
import MenuList from "../../ui/MenuList";
import HamburgerMenu from "../../ui/Humburger";

const Navbar = () => {
  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Service", href: "#service" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleScrollToForm = () => {
    const section = document.getElementById("form");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white/30 backdrop-blur-md border-b border-white dark:bg-black/30 dark:text-white dark:backdrop-blur-md dark:border-b dark:border-black md:max-w-6xl mx-auto flex items-center justify-between px-4 md:px-20 py-6">
      <div className="flex items-center gap-2">
        <img src="./logo-symbol.svg" alt="Logo" />
        <span className="text-lg md:text-2xl font-bold">
          <a href="#">Your Logo</a>
        </span>
      </div>

      {/* hamburger */}
      <HamburgerMenu />

      {/* desktop nav */}
      <MenuList items={menuItems} />

      <Button
        onClick={handleScrollToForm}
        size="md"
        className="hidden md:flex justify-center items-center font-semibold w-[197px] h-11 rounded-full"
      >
        Let's Talk
      </Button>
    </header>
  );
};

export default Navbar;
