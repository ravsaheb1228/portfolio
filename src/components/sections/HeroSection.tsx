"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const auraY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const auraScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-dot-pattern"
    >
      {/* Background concentric radial aura rings with scroll-linked parallax */}
      <motion.div
        style={{ y: auraY, scale: auraScale, opacity: auraOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1100px] sm:h-[1100px] pointer-events-none -z-10 will-change-transform"
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-blue-500/10 dark:border-blue-400/5 animate-[spin_120s_linear_infinite]" />
        {/* Middle ring */}
        <div className="absolute inset-24 sm:inset-32 rounded-full border border-indigo-500/15 dark:border-indigo-400/10 animate-[spin_90s_linear_infinite_reverse]" />
        {/* Inner ring */}
        <div className="absolute inset-48 sm:inset-64 rounded-full border border-purple-500/20 dark:border-purple-400/10" />
        {/* Soft radial glow centers */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-linear-to-tr from-blue-600/25 via-indigo-600/20 to-purple-600/15 blur-[140px] rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Mini Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-start mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-950/40 backdrop-blur-md text-xs font-medium text-indigo-700 dark:text-indigo-300 shadow-sm transition-transform hover:scale-105 duration-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{personalData.availability.status}</span>
            <span className="text-(--border-strong)">|</span>
            <span className="text-(--text-secondary)">{personalData.availability.type}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <div className="inline-block text-xs sm:text-sm font-mono uppercase tracking-widest text-(--accent) font-bold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {personalData.name} — {personalData.title}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-(--text-primary) leading-[1.12]">
                Designing Digital Experiences.{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500">
                  Engineering Powerful Business Solutions.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-(--text-secondary) leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {personalData.subheadline}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                className="glow-btn shadow-lg transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href={personalData.contact.whatsapp}
                external
                variant="secondary"
                size="lg"
                className="gap-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <WhatsApp className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </Button>

              <Button
                href="/resume"
                variant="outline"
                size="lg"
                className="gap-2 hover:border-(--accent) hover:text-(--accent) transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <Download className="w-4 h-4 text-(--accent)" />
                <span>Resume</span>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Dashboard Mockup with subtle scroll parallax */}
          <motion.div
            style={{ y: mockupY }}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative mt-6 lg:mt-0 will-change-transform"
          >
            {/* Ambient Backlight under mockup */}
            <div className="absolute -inset-4 bg-linear-to-tr from-blue-600/20 via-indigo-500/15 to-purple-500/20 rounded-3xl blur-2xl -z-10 animate-pulse duration-1000" />

            {/* Central Layered Container */}
            <div className="relative">
              {/* Floating Pill Top Left: Clerio-style Metric */}
              <div className="absolute -top-5 -left-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-indigo-500/20 bg-(--bg-surface)/95 shadow-lg shadow-indigo-950/10 dark:shadow-black/50 backdrop-blur-md animate-float-1">
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
              <div className="absolute -top-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl border border-purple-500/20 bg-(--bg-surface)/95 shadow-lg shadow-indigo-950/10 dark:shadow-black/50 backdrop-blur-md animate-float-2">
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
                className="shadow-xl shadow-indigo-950/12 dark:shadow-black/60"
              />

              {/* Floating Card Bottom Left: Ravsaheb Portrait & Status */}
              <div className="absolute -bottom-5 -left-4 z-20 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-(--border-strong) bg-(--bg-surface)/95 shadow-lg shadow-indigo-950/10 dark:shadow-black/50 backdrop-blur-md animate-float-3">
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
              <div className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl border border-blue-500/20 bg-(--bg-surface)/95 shadow-lg shadow-indigo-950/10 dark:shadow-black/50 backdrop-blur-md animate-float-4">
                <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase text-(--text-muted)">Security & Scalability</div>
                  <div className="text-[11px] font-bold text-(--text-primary)">Enterprise Grade</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Tactile Social Contact Buttons Centered Horizontally on Page */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 flex items-center justify-center gap-4 sm:gap-6"
        >
          {/* GitHub 3D Button */}
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="btn-3d animate-float-1 w-12 h-12 sm:w-14 sm:h-14 text-slate-800 dark:text-white group cursor-pointer hover:border-slate-400 dark:hover:border-slate-500"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-115" />
          </a>

          {/* LinkedIn 3D Button */}
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-3d animate-float-2 w-12 h-12 sm:w-14 sm:h-14 text-[#0A66C2] dark:text-[#38BDF8] group cursor-pointer hover:border-[#0A66C2]/60"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-115" />
          </a>

          {/* WhatsApp 3D Button */}
          <a
            href={personalData.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-3d animate-float-3 w-12 h-12 sm:w-14 sm:h-14 text-[#25D366] group cursor-pointer hover:border-[#25D366]/60"
            aria-label="WhatsApp Direct Chat"
            title="WhatsApp Direct Chat"
          >
            <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-115" />
          </a>

          {/* Email 3D Button */}
          <a
            href={personalData.socials.email}
            className="btn-3d animate-float-4 w-12 h-12 sm:w-14 sm:h-14 text-[#6366F1] dark:text-[#818CF8] group cursor-pointer hover:border-[#6366F1]/60"
            aria-label="Send Direct Email"
            title="Send Direct Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-115" />
          </a>
        </motion.div>

        {/* Tech Ecosystem Orbit Bar with soft gradient aura instead of hard line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 pt-10 relative"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-linear-to-r from-transparent via-indigo-500/12 to-transparent blur-xl"
          />
          <div className="text-center mb-5">
            <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted)">
              Core Technical Ecosystem & Specializations
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {TECH_ECOSYSTEM.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -2, scale: 1.04 }}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-(--border) bg-(--bg-surface) hover:border-(--accent) hover:bg-(--bg-elevated) transition-colors text-xs font-medium text-(--text-secondary) hover:text-(--text-primary) shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-(--accent)/60 group-hover:bg-(--accent)" />
                <span>{tech.name}</span>
                <span className="text-[10px] text-(--text-muted) hidden sm:inline font-mono">
                  ({tech.category})
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
