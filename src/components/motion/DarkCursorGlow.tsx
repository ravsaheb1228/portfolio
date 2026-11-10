"use client";

import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useTheme } from "next-themes";

export function DarkCursorGlow() {
  const { resolvedTheme } = useTheme();

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const rawOpacity = useMotionValue(0);

  // Outer ambient aura follows with lush, liquid spring lag
  const outerX = useSpring(mouseX, { stiffness: 130, damping: 24, mass: 0.6 });
  const outerY = useSpring(mouseY, { stiffness: 130, damping: 24, mass: 0.6 });

  // Inner core spotlight tracks more closely for layered depth
  const innerX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.25 });
  const innerY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.25 });

  const smoothOpacity = useSpring(rawOpacity, { stiffness: 200, damping: 26 });

  const outerGlow = useMotionTemplate`radial-gradient(640px circle at ${outerX}px ${outerY}px, rgba(99, 102, 241, 0.14), rgba(59, 130, 246, 0.08) 38%, rgba(139, 92, 246, 0.03) 62%, transparent 78%)`;
  const innerGlow = useMotionTemplate`radial-gradient(240px circle at ${innerX}px ${innerY}px, rgba(129, 140, 248, 0.18), rgba(168, 85, 247, 0.07) 48%, transparent 76%)`;
  const coreSpark = useMotionTemplate`radial-gradient(96px circle at ${innerX}px ${innerY}px, rgba(199, 210, 254, 0.12), transparent 72%)`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (resolvedTheme !== "dark" || !mediaQuery.matches) {
      rawOpacity.set(0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      rawOpacity.set(1);
    };

    const handleMouseLeave = () => {
      rawOpacity.set(0);
    };

    const handlePointerChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        rawOpacity.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    mediaQuery.addEventListener("change", handlePointerChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      mediaQuery.removeEventListener("change", handlePointerChange);
    };
  }, [resolvedTheme, mouseX, mouseY, rawOpacity]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity: smoothOpacity }}
      className="pointer-events-none fixed inset-0 z-30 hidden dark:block overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: outerGlow }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: innerGlow }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: coreSpark }}
      />
    </motion.div>
  );
}
