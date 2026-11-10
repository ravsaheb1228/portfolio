"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollSection } from "@/components/ui/ScrollSection";
import {
  AnimatedReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Palette,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"ALL" | "UIUX" | "DEV">("ALL");

  const uiuxItems = experienceData.filter((i) => i.category === "UI/UX Design");
  const devItems = experienceData.filter(
    (i) => i.category === "Software Development"
  );

  const tabs = [
    { id: "ALL" as const, label: "All Capabilities", icon: null },
    { id: "UIUX" as const, label: "UI/UX Design Experience", icon: "palette" },
    {
      id: "DEV" as const,
      label: "Software Development Experience",
      icon: "code",
    },
  ];

  return (
    <ScrollSection surface="surface" prevSurface="base" accent="indigo">
      <SectionHeading
        badge="Experience"
        title="Professional Experience"
        subtitle="Hands-on full-stack development, UI/UX architecture, and modern web technologies."
      />

      {/* Category Selector Tabs with Framer Motion layoutId sliding pill */}
      <AnimatedReveal direction="up" delay={0.05}>
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-white"
                    : "bg-(--bg-elevated) text-(--text-secondary) border border-(--border) hover:text-(--text-primary)"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="experience-tab-pill"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-(--accent) shadow-sm -z-0"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.icon === "palette" && <Palette className="w-3.5 h-3.5" />}
                  {tab.icon === "code" && <Code2 className="w-3.5 h-3.5" />}
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </AnimatedReveal>

      {/* Dual Category Display with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section A: UI/UX Design */}
          {(activeTab === "ALL" || activeTab === "UIUX") && (
            <div className="space-y-6">
              <AnimatedReveal direction="up">
                <div className="flex items-center gap-2.5 pb-3 border-b border-(--border)">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-(--text-primary)">
                      UI/UX Design Architecture
                    </h3>
                    <p className="text-xs text-(--text-secondary)">
                      User research, journey mapping, wireframing, design tokens, and interactive Figma prototypes
                    </p>
                  </div>
                </div>
              </AnimatedReveal>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {uiuxItems.map((item) => (
                  <StaggerItem key={item.id}>
                    <Card hoverEffect className="p-6 space-y-4 h-full">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-base font-bold text-(--text-primary)">
                            {item.title}
                          </h4>
                          <div className="text-xs font-semibold text-(--accent) mt-0.5">
                            {item.role}
                          </div>
                        </div>
                        <Badge variant="accent" size="sm">
                          {item.period}
                        </Badge>
                      </div>

                      <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-mono uppercase text-(--text-muted) font-semibold">
                          Core Methodologies
                        </div>
                        <ul className="space-y-1">
                          {item.focusAreas.slice(0, 4).map((area, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-(--text-secondary)"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-(--border)">
                        {item.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-(--bg-elevated) text-(--text-secondary) border border-(--border)"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}

          {/* Section B: Software Development */}
          {(activeTab === "ALL" || activeTab === "DEV") && (
            <div className="space-y-6">
              <AnimatedReveal direction="up">
                <div className="flex items-center gap-2.5 pb-3 border-b border-(--border)">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-(--text-primary)">
                      Software Development & Systems Engineering
                    </h3>
                    <p className="text-xs text-(--text-secondary)">
                      Next.js App Router, React, TypeScript, Node.js, Express, REST APIs, RBAC, and databases
                    </p>
                  </div>
                </div>
              </AnimatedReveal>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {devItems.map((item) => (
                  <StaggerItem key={item.id}>
                    <Card hoverEffect className="p-6 space-y-4 h-full">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-base font-bold text-(--text-primary)">
                            {item.title}
                          </h4>
                          <div className="text-xs font-semibold text-(--accent) mt-0.5">
                            {item.role}
                          </div>
                        </div>
                        <Badge variant="accent" size="sm">
                          {item.period}
                        </Badge>
                      </div>

                      <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-mono uppercase text-(--text-muted) font-semibold">
                          Technical Implementations
                        </div>
                        <ul className="space-y-1">
                          {item.focusAreas.slice(0, 4).map((area, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-(--text-secondary)"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-(--border)">
                        {item.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-(--bg-elevated) text-(--text-secondary) border border-(--border)"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatedReveal direction="up" delay={0.1}>
        <div className="mt-12 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--accent) hover:underline"
          >
            <span>View Detailed Experience & Technical Timelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedReveal>
    </ScrollSection>
  );
}
