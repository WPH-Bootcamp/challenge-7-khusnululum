import MenuList from "../../ui/MenuList";
import SocialMedia from "../../ui/SosialMedia";

function FooterSection() {
  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Service", href: "#service" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="px-6 md:px-20 py-10 max-w-6xl mx-auto dark:bg-black">
      <div className="px-6 py-6 dark:bg-neutral-950 dark:border-neutral-800 dark:text-white bg-[#FAFAFA] border-[#DEDCDC] border rounded-2xl">
        <div className="md:flex md:flex-row-reverse md:justify-between border-b border-neutral-800 pb-2 md:pb-8 mb-6">
          <div className="flex items-center md:self-start gap-2 mb-4">
            <img src="./logo-symbol.svg" alt="Logo" />
            <span className="font-semibold text-lg">Your Logo</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 md:max-w-3/4">
              LET'S DISCUSS YOUR IDEAS
            </h2>
          </div>
        </div>
        <div className="md:flex md:justify-between md:items-center md:mt-8">
          <MenuList items={menuItems} variant="footer" />
          <div className="flex gap-4 mt-6 md:mt-0">
            <SocialMedia
              src="/facebook.svg"
              alt="Facebook"
              href="#facebook.com"
            />
            <SocialMedia
              src="/instagram.svg"
              alt="Instagram"
              href="#instagram.com"
            />
            <SocialMedia
              src="/linkedin.svg"
              alt="LinkedIn"
              href="#linkedin.com"
            />
            <SocialMedia src="/tiktok.svg" alt="Tiktok" href="#tiktok.com" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
