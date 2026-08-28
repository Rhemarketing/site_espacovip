import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  clean?: boolean; // Se true, remove padding padrão para customização
}

export function Container({
  as: Component = "div",
  className,
  children,
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-7xl mx-auto",
        !clean && "px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
