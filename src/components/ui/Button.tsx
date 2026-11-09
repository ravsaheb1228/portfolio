import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-2 focus-visible:outline-(--accent) disabled:opacity-50 disabled:pointer-events-none select-none";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5 rounded-lg",
      md: "text-sm px-5 py-2.5 gap-2 rounded-xl font-medium",
      lg: "text-base px-6 py-3.5 gap-2.5 rounded-2xl font-semibold",
    };

    const variantStyles = {
      primary:
        "bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.98]",
      gradient:
        "bg-linear-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.98]",
      secondary:
        "bg-(--bg-elevated) text-(--text-primary) hover:bg-(--border) border border-(--border) hover:border-(--border-strong) active:scale-[0.99]",
      outline:
        "bg-(--bg-surface) text-(--text-primary) border border-(--border-strong) hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-(--accent-subtle) active:scale-[0.99] shadow-xs",
      ghost:
        "bg-transparent text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--accent-subtle)",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
