"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
  blur?: boolean;
  scale?: number;
  className?: string;
}

export function AnimatedReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  distance = 28,
  blur = true,
  scale = 0.98,
  className = "",
}: AnimatedRevealProps) {
  const getInitialPosition = () => {
    const base = {
      opacity: 0,
      scale,
      filter: blur ? "blur(6px)" : "blur(0px)",
    };
    switch (direction) {
      case "up":
        return { ...base, y: distance };
      case "down":
        return { ...base, y: -distance };
      case "left":
        return { ...base, x: distance };
      case "right":
        return { ...base, x: -distance };
      case "none":
      default:
        return base;
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; delayChildren: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayChildren,
    },
  }),
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0.05,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      custom={{ staggerDelay, delayChildren }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  const hiddenState =
    direction === "left"
      ? { opacity: 0, x: 24, scale: 0.97, filter: "blur(4px)" }
      : direction === "right"
      ? { opacity: 0, x: -24, scale: 0.97, filter: "blur(4px)" }
      : direction === "down"
      ? { opacity: 0, y: -24, scale: 0.97, filter: "blur(4px)" }
      : direction === "scale"
      ? { opacity: 0, scale: 0.92, filter: "blur(5px)" }
      : { opacity: 0, y: 24, scale: 0.97, filter: "blur(4px)" };

  const itemVariants: Variants = {
    hidden: hiddenState,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={cn("h-full", className)}>
      {children}
    </motion.div>
  );
}
