import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const base =
    "items-center justify-center font-medium rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#FF623E] text-white hover:bg-[#e85f2f] focus:ring-[#FF6C37] shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.5)]",
    secondary:
      "bg-black text-white dark:bg-white dark:text-black dark:hover:bg-neutral-400 hover:bg-neutral-800 focus:ring-gray-900",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
