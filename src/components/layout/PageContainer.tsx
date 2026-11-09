import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: "default" | "narrow" | "full";
}

export function PageContainer({
  children,
  width = "default",
  className,
  ...props
}: PageContainerProps) {
  const widthStyles = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20",
        widthStyles[width],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
