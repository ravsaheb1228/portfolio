"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type SurfaceType = "base" | "surface";
type AccentGlow = "indigo" | "blue" | "violet" | "emerald" | "cyan";

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  surface?: SurfaceType;
  prevSurface?: SurfaceType;
  accent?: AccentGlow;
  className?: string;
  innerClassName?: string;
}

const ACCENT_AURA_CLASSES: Record<AccentGlow, string> = {
  indigo:
    "from-indigo-500/20 via-blue-500/12 to-purple-500/15 dark:from-indigo-500/25 dark:via-blue-500/15 dark:to-violet-500/20",
  blue:
    "from-blue-500/20 via-cyan-500/12 to-indigo-500/15 dark:from-blue-500/25 dark:via-cyan-500/15 dark:to-indigo-500/20",
  violet:
    "from-violet-500/20 via-indigo-500/12 to-fuchsia-500/15 dark:from-violet-500/25 dark:via-indigo-500/15 dark:to-purple-500/20",
  emerald:
    "from-emerald-500/18 via-teal-500/12 to-indigo-500/15 dark:from-emerald-500/22 dark:via-cyan-500/15 dark:to-indigo-500/18",
  cyan:
    "from-cyan-500/20 via-blue-500/12 to-indigo-500/15 dark:from-cyan-500/24 dark:via-blue-500/15 dark:to-indigo-500/20",
};

const SURFACE_BG: Record<SurfaceType, string> = {
  base: "bg-(--bg-base)",
  surface: "bg-(--bg-surface)",
};

export function ScrollSection({
  children,
  id,
  surface = "base",
  prevSurface = "base",
  accent = "indigo",
  className,
  innerClassName,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Entry choreography: section glides upward, scales smoothly into focus, and unfurls rounded top corners
  const { scrollYProgress: entryProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.98", "start 0.35"],
  });

  const smoothEntry = useSpring(entryProgress, {
    stiffness: 110,
    damping: 22,
    mass: 0.45,
  });

  const sheetY = useTransform(smoothEntry, [0, 1], [44, 0]);
  const sheetScale = useTransform(smoothEntry, [0, 1], [0.975, 1]);
  const sheetRadius = useTransform(smoothEntry, [0, 1], [36, 0]);
  const auraOpacity = useTransform(smoothEntry, [0, 0.55, 1], [0.1, 0.95, 0.35]);
  const auraScaleX = useTransform(smoothEntry, [0, 0.7, 1], [0.3, 1.05, 0.92]);

  // Continuous ambient parallax across the full section scroll span
  const { scrollYProgress: spanProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(spanProgress, [0, 1], [-60, 80]);
  const orbRotate = useTransform(spanProgress, [0, 1], [-8, 12]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative overflow-x-clip", SURFACE_BG[prevSurface], className)}
    >
      <motion.div
        style={{
          y: sheetY,
          scale: sheetScale,
          borderTopLeftRadius: sheetRadius,
          borderTopRightRadius: sheetRadius,
        }}
        className={cn(
          "relative w-full py-20 sm:py-28 origin-top will-change-transform shadow-[0_-18px_50px_-15px_rgba(15,23,42,0.05)] dark:shadow-[0_-24px_70px_-15px_rgba(99,102,241,0.12)]",
          SURFACE_BG[surface],
          innerClassName
        )}
      >
        {/* Soft atmospheric scroll-linked transition aura (replaces harsh static divider lines) */}
        <motion.div
          aria-hidden="true"
          style={{
            opacity: auraOpacity,
            scaleX: auraScaleX,
          }}
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[min(92vw,900px)] h-28 sm:h-36 overflow-visible"
        >
          <div
            className={cn(
              "w-full h-full rounded-full bg-linear-to-r blur-3xl -translate-y-1/2",
              ACCENT_AURA_CLASSES[accent]
            )}
          />
        </motion.div>

        {/* Secondary parallax ambient glow orb drifting gently as user scrolls */}
        <motion.div
          aria-hidden="true"
          style={{
            y: orbY,
            rotate: orbRotate,
          }}
          className="pointer-events-none absolute top-16 right-[8%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-linear-to-br from-indigo-500/8 via-blue-500/5 to-purple-500/8 dark:from-indigo-500/10 dark:via-blue-500/6 dark:to-violet-500/10 blur-[100px] -z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
