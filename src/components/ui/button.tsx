import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "gold" | "outline" | "ghost" | "emerald" | "dark";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  gold: "bg-gradient-to-r from-[#DFBE82] via-[#C6A87D] to-[#9E7B45] text-[#070A10] font-semibold hover:brightness-110 shadow-gold-sm hover:shadow-gold-md active:scale-[0.98] border border-[#FAF7F2]/30",
  outline:
    "bg-[#070A10]/60 backdrop-blur-md text-[#E9DCBF] border border-[#C6A87D]/40 hover:border-[#C6A87D] hover:bg-[#C6A87D]/10 hover:text-white active:scale-[0.98] shadow-sm",
  ghost:
    "bg-transparent text-slate-300 hover:text-[#E9DCBF] hover:bg-white/5 active:scale-[0.98]",
  emerald:
    "bg-[#10B981] text-[#070A10] font-semibold hover:bg-[#059669] hover:text-white shadow-md active:scale-[0.98]",
  dark: "bg-[#121A2B] text-slate-200 border border-white/10 hover:border-[#C6A87D]/30 hover:bg-[#18233A] hover:text-white active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-2 rounded-lg gap-1.5",
  md: "text-sm px-5 py-2.5 rounded-xl gap-2",
  lg: "text-base px-7 py-3.5 rounded-xl gap-2.5 font-medium",
  icon: "p-2.5 rounded-xl justify-center items-center",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "gold",
      size = "md",
      href,
      isExternal = false,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0 items-center">{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 items-center transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("https://wa.me") || href.startsWith("tel:")) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={isExternal || href.startsWith("http") ? "_blank" : undefined}
            rel={isExternal || href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={baseClasses}
            aria-disabled={disabled}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          aria-disabled={disabled}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
