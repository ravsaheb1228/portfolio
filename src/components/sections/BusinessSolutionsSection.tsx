"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { businessSolutionsData } from "@/data/businessSolutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollSection } from "@/components/ui/ScrollSection";
import {
  AnimatedReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/projects/DashboardMockup";
import {
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function BusinessSolutionsSection() {
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const activeSolution = businessSolutionsData[activeSolutionIndex];

  return (
    <ScrollSection surface="base" prevSurface="surface" accent="emerald">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeading
          badge="Solutions"
          title="Business Solutions"
          subtitle="Tailored software systems engineered to streamline operations and automate workflows."
          className="mb-0 md:mb-0"
        />

        <AnimatedReveal direction="left" delay={0.1}>
          <Button
            href="/business-solutions"
            variant="outline"
            size="md"
            className="shrink-0 self-start md:self-auto gap-2"
          >
            <span>Explore All 10 Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedReveal>
      </div>

      {/* Interactive Solution Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Solution Selector Sidebar */}
        <StaggerContainer
          staggerDelay={0.06}
          className="lg:col-span-5 space-y-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-(--text-muted) font-semibold mb-3 px-1">
            Select Business Domain
          </div>
          {businessSolutionsData.slice(0, 5).map((solution, idx) => {
            const isSelected = activeSolutionIndex === idx;
            return (
              <StaggerItem key={solution.id} direction="right">
                <button
                  type="button"
                  onClick={() => setActiveSolutionIndex(idx)}
                  className={`relative w-full text-left p-4 rounded-xl border transition-colors ${
                    isSelected
                      ? "border-(--accent) bg-(--bg-surface) shadow-md"
                      : "border-(--border) bg-(--bg-elevated) hover:border-(--border-strong) hover:bg-(--bg-surface)"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="solution-active-bar"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-(--accent)"
                    />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-(--accent) font-semibold">
                      0{idx + 1} • {solution.category}
                    </span>
                    {isSelected && (
                      <motion.span
                        layoutId="solution-active-dot"
                        className="w-2 h-2 rounded-full bg-(--accent)"
                      />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-(--text-primary) mt-1">
                    {solution.title}
                  </h4>
                  <p className="text-xs text-(--text-secondary) mt-1 line-clamp-1">
                    {solution.summary}
                  </p>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Active Solution Deep Dive Panel */}
        <AnimatedReveal direction="left" delay={0.1} className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.99 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-6 sm:p-8 space-y-6 border-(--border-strong) bg-(--bg-surface)">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-(--border)">
                  <div>
                    <Badge variant="accent" size="sm" className="mb-1">
                      {activeSolution.category}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary)">
                      {activeSolution.title}
                    </h3>
                  </div>
                  <Button href="/contact" variant="primary" size="sm">
                    Discuss Requirements
                  </Button>
                </div>

                {/* Mockup Preview */}
                <div className="rounded-xl border border-(--border) bg-(--bg-elevated) p-3 sm:p-4">
                  <DashboardMockup
                    type={activeSolution.mockupType}
                    title={`${activeSolution.title} Console`}
                    badge="Architectural Blueprint"
                  />
                </div>

                {/* Challenges vs Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2">
                    <div className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Business Challenges</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-(--text-secondary)">
                      {activeSolution.businessChallenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Operational Benefits</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-(--text-secondary)">
                      {activeSolution.operationalBenefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Proposed Solution Narrative */}
                <div className="pt-2 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                  <strong className="text-(--text-primary)">The Architectural Approach: </strong>
                  {activeSolution.proposedSolution}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </AnimatedReveal>
      </div>
    </ScrollSection>
  );
}
