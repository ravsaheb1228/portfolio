"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left pointer-events-none bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 dark:shadow-[0_0_14px_rgba(99,102,241,0.85)]"
    />
  );
}
