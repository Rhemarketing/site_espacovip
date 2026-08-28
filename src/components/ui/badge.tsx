import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "gold"
  | "emerald"
  | "tech"
  | "dark"
  | "outline"
  | "glass";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  pulseDot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold: "bg-[#C6A87D]/10 text-[#E9DCBF] border-[#C6A87D]/30 shadow-gold-sm",
  emerald: "bg-[#10B981]/10 text-[#34D399] border-[#10B981]/30",
  tech: "bg-[#0EA5E9]/10 text-[#38BDF8] border-[#0EA5E9]/30",
  dark: "bg-[#121A2B] text-slate-300 border-white/10",
  outline: "bg-transparent text-slate-300 border-slate-700",
  glass: "glass-panel text-[#E9DCBF] border-[#C6A87D]/30 backdrop-blur-md",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[10px] px-2.5 py-0.5 rounded-md gap-1 font-medium",
  md: "text-xs px-3.5 py-1.5 rounded-full gap-1.5 font-semibold",
  lg: "text-sm px-4 py-2 rounded-full gap-2 font-semibold",
};

export function Badge({
  className,
  variant = "gold",
  size = "md",
  icon,
  pulseDot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center tracking-wider uppercase font-montserrat border select-none transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2 mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0 items-center">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
