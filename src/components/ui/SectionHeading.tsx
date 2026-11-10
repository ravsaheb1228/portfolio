import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-8 md:mb-12",
        align === "center"
          ? "items-center text-center max-w-2xl mx-auto"
          : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className="w-fit inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-(--text-primary) leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-(--text-secondary) leading-relaxed font-normal max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
