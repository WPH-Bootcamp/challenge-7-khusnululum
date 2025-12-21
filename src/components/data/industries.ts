export type Industry = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

export const industries: Industry[] = [
  {
    id: "fintech",
    label: "Fintech",
    title: "Built for Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/Fintech.svg",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    title: "Built for E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "/E-commerce.svg",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Built for Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/Healthcare.svg",
  },
];
