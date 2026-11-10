"use client";

import React from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-fit inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-(--text-primary) leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 text-sm sm:text-base text-(--text-secondary) leading-relaxed font-normal max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
