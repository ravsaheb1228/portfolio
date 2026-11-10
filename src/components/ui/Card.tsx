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
        "rounded-2xl border border-(--border) bg-(--bg-surface) text-(--text-primary) shadow-(--card-shadow) transition-all duration-300",
        hoverEffect &&
          "hover:border-indigo-500/40 hover:shadow-(--card-shadow-hover) hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
