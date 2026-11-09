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
  Layers,
  Code2,
} from "lucide-react";
import { Github, Linkedin, WhatsApp } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-36 bg-grid-pattern">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Availability & Profile Quick Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 shrink-0 shadow-md">
                <Image
                  src={personalData.avatar}
                  alt={personalData.name}
                  width={48}
                  height={48}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-(--bg-base)" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalData.availability.status}</span>
                <span className="text-(--text-muted)">•</span>
                <span className="text-xs font-normal text-(--text-secondary)">
                  {personalData.availability.type}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-(--accent) font-bold">
                {personalData.name} — {personalData.title}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-(--text-primary) leading-[1.12]">
                Designing Digital Experiences.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
                  Engineering Powerful Business Solutions.
                </span>
              </h1>
            </div>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed max-w-2xl font-normal">
              {personalData.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button href="/projects" variant="primary" size="lg" className="shadow-lg shadow-blue-500/20">
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
                className="gap-2"
              >
                <Download className="w-4 h-4 text-(--accent)" />
                <span>Resume</span>
              </Button>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-4 border-t border-(--border) flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-(--text-muted) font-mono">Connect:</span>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-emerald-500 hover:border-emerald-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsApp className="w-4 h-4 text-emerald-500" />
                </a>
                <a
                  href={personalData.socials.email}
                  className="p-2 rounded-lg border border-(--border) bg-(--bg-surface) text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
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

          {/* Right Column: Hero Visual Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Layered Decorative Elements */}
            <div className="relative">
              {/* Floating Badge 1: UI/UX Precision */}
              <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border border-(--border-strong) bg-(--bg-surface)/95 shadow-lg backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-(--text-muted)">Design System</div>
                  <div className="text-xs font-bold text-(--text-primary)">Figma to Code</div>
                </div>
              </div>

              {/* Central Mockup Console */}
              <DashboardMockup
                type="dashboard"
                title="Enterprise Operational Console"
                badge="Production Ready"
                className="shadow-2xl shadow-blue-900/10"
              />

              {/* Floating Badge 2: Full-Stack Reliability */}
              <div className="absolute -bottom-5 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border border-(--border-strong) bg-(--bg-surface)/95 shadow-lg backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-(--text-muted)">Engineering</div>
                  <div className="text-xs font-bold text-(--text-primary)">Next.js & TypeScript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
