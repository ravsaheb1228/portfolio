"use client";

import React from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DashboardMockup } from "@/components/projects/DashboardMockup";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { Github, Linkedin, WhatsApp } from "@/components/ui/Icons";

const TECH_ECOSYSTEM = [
  { name: "Next.js 16", category: "Framework" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Backend & AI" },
  { name: "Tailwind CSS v4", category: "Design" },
  { name: "Node.js & Express", category: "Backend" },
  { name: "MongoDB & Mongoose", category: "Database" },
  { name: "Figma Systems", category: "UI/UX" },
  { name: "Google Gemini AI", category: "Generative AI" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-dot-pattern">
      {/* Background concentric radial aura rings (Inspired by Reference 3 & 4) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1100px] sm:h-[1100px] pointer-events-none -z-10">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-blue-500/10 dark:border-blue-400/5 animate-[spin_120s_linear_infinite]" />
        {/* Middle ring */}
        <div className="absolute inset-24 sm:inset-32 rounded-full border border-indigo-500/15 dark:border-indigo-400/10 animate-[spin_90s_linear_infinite_reverse]" />
        {/* Inner ring */}
        <div className="absolute inset-48 sm:inset-64 rounded-full border border-purple-500/20 dark:border-purple-400/10" />
        {/* Soft radial glow centers */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-linear-to-tr from-blue-600/25 via-indigo-600/20 to-purple-600/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Mini Pill Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-950/40 backdrop-blur-md text-xs font-medium text-indigo-700 dark:text-indigo-300 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{personalData.availability.status}</span>
            <span className="text-(--border-strong)">|</span>
            <span className="text-(--text-secondary)">{personalData.availability.type}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-3">
              <div className="inline-block text-xs sm:text-sm font-mono uppercase tracking-widest text-(--accent) font-bold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {personalData.name} — {personalData.title}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-(--text-primary) leading-[1.12]">
                Designing Digital Experiences.{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500">
                  Engineering Powerful Business Solutions.
                </span>
              </h1>
            </div>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalData.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                className="glow-btn shadow-lg"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href={personalData.contact.whatsapp}
                external
                variant="secondary"
                size="lg"
                className="gap-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50"
              >
                <WhatsApp className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </Button>

              <Button
                href={personalData.resume.viewUrl}
                external
                variant="outline"
                size="lg"
                className="gap-2 hover:border-(--accent) hover:text-(--accent)"
              >
                <Download className="w-4 h-4 text-(--accent)" />
                <span>Resume</span>
              </Button>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-4 border-t border-(--border) flex flex-wrap items-center justify-center lg:justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-(--text-muted) font-mono">Connect:</span>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-all hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-all hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-emerald-500 hover:border-emerald-500 transition-all hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <WhatsApp className="w-4 h-4 text-emerald-500" />
                </a>
                <a
                  href={personalData.socials.email}
                  className="p-2 rounded-xl border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-all hover:scale-105"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Roles Badges */}
              <div className="flex items-center gap-2">
                <Badge variant="accent" size="sm">
                  Full-Stack Architecture
                </Badge>
                <Badge variant="default" size="sm">
                  Design Systems
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Dashboard Mockup (Clerio & Quso inspired) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Ambient Backlight under mockup */}
            <div className="absolute -inset-4 bg-linear-to-tr from-blue-600/20 via-indigo-500/15 to-purple-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Central Layered Container */}
            <div className="relative">
              {/* Floating Pill Top Left: Clerio-style Metric */}
              <div className="absolute -top-5 -left-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-indigo-500/20 bg-(--bg-surface)/95 shadow-xl backdrop-blur-md">
                <div className="w-7 h-7 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-(--text-muted)">Auto-Reconciled</div>
                  <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                    <span>72.52%</span>
                    <span className="text-[10px] font-normal text-(--text-secondary)">• Real-time</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Top Right: AI Co-Pilot Widget */}
              <div className="absolute -top-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl border border-purple-500/20 bg-(--bg-surface)/95 shadow-xl backdrop-blur-md">
                <div className="w-6 h-6 rounded-lg bg-linear-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-purple-400 font-semibold">Gemini AI</div>
                  <div className="text-[11px] font-medium text-(--text-primary)">Co-Pilot Active</div>
                </div>
              </div>

              {/* Central Mockup Console */}
              <DashboardMockup
                type="dashboard"
                title="Enterprise Operational Console"
                badge="Production Ready"
                className="shadow-2xl shadow-indigo-950/20"
              />

              {/* Floating Card Bottom Left: Ravsaheb Portrait & Status */}
              <div className="absolute -bottom-5 -left-4 z-20 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-(--border-strong) bg-(--bg-surface)/95 shadow-xl backdrop-blur-md">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-blue-500/40 shrink-0">
                  <Image
                    src={personalData.avatar}
                    alt={personalData.name}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-(--bg-surface)" />
                </div>
                <div>
                  <div className="text-xs font-bold text-(--text-primary)">Ravsaheb Khairnar</div>
                  <div className="text-[10px] text-emerald-500 font-medium">Available for New Projects</div>
                </div>
              </div>

              {/* Floating Pill Bottom Right: Architecture Quality */}
              <div className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl border border-blue-500/20 bg-(--bg-surface)/95 shadow-xl backdrop-blur-md">
                <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase text-(--text-muted)">Security & Scalability</div>
                  <div className="text-[11px] font-bold text-(--text-primary)">Enterprise Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Ecosystem Orbit Bar (Inspired by Reference 3: "The Tech Partner For Growing Companies") */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-(--border)">
          <div className="text-center mb-5">
            <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted)">
              Core Technical Ecosystem & Specializations
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {TECH_ECOSYSTEM.map((tech) => (
              <div
                key={tech.name}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-(--border) bg-(--bg-surface) hover:border-(--accent) hover:bg-(--bg-elevated) transition-all text-xs font-medium text-(--text-secondary) hover:text-(--text-primary) shadow-xs hover:scale-105"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-(--accent)/60 group-hover:bg-(--accent)" />
                <span>{tech.name}</span>
                <span className="text-[10px] text-(--text-muted) hidden sm:inline font-mono">
                  ({tech.category})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}