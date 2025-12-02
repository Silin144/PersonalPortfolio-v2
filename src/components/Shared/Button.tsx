"use client";

import { ButtonProps } from "@/types";
import { cn } from "@/utils/cn";

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
}) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  const variantStyles = {
    primary: cn(
      "bg-terracotta text-warm-bg",
      "hover:bg-gold hover:shadow-md",
      "active:scale-[0.98]"
    ),
    secondary: cn(
      "bg-warm-bg-alt text-deep-brown border border-brown-light/20",
      "hover:border-terracotta/40 hover:text-terracotta",
      "active:scale-[0.98]"
    ),
    ghost: cn(
      "text-brown-muted",
      "hover:text-terracotta hover:bg-terracotta/5",
      "active:scale-[0.98]"
    ),
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-md gap-1.5",
    md: "px-6 py-3 text-base rounded-lg gap-2",
    lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
  };

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

