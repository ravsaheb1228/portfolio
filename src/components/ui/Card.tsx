import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-(--border) bg-(--bg-surface) text-(--text-primary) transition-all duration-300",
        hoverEffect &&
          "hover:border-(--border-strong) hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
