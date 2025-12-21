import { useState } from "react";
import Button from "../Button";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const handleScrollToForm = () => {
    const section = document.getElementById("form");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black dark:bg-white my-1 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-6 flex items-center gap-2">
          <img src="./logo-symbol.svg" alt="Logo" />
          <span className="text-lg md:text-2xl font-bold">
            <a href="#">Your Logo</a>
          </span>
        </div>

        <nav className="flex flex-col gap-6 p-8 text-lg bg-white dark:bg-black">
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#service" onClick={() => setOpen(false)}>
            Service
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#testimonials" onClick={() => setOpen(false)}>
            Testimonials
          </a>
          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <Button onClick={handleScrollToForm}>Let's Talk</Button>
        </nav>
      </div>
    </>
  );
}

export default HamburgerMenu;
