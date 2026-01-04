import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary:
      "bg-[#3038cf] text-white hover:bg-[#3038cf] focus:ring-[#3038cf]",
    secondary:
      "border-2 border-[#3038cf] text-[#3038cf] hover:bg-[#3038cf] hover:text-white focus:ring-[#3038cf]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

