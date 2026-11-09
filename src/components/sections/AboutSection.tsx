import React from "react";
import Image from "next/image";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Download,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { WhatsApp } from "@/components/ui/Icons";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-[var(--border)] bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="Bridging Intuitive User Experience & Scalable Software Engineering."
          subtitle="A disciplined Computer Science background paired with practical product design and modern full-stack development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Credentials Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-surface)] p-6 sm:p-8 overflow-hidden shadow-xl">
              {/* Profile Photo Visual */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 shadow-2xl">
                <Image
                  src={personalData.avatar}
                  alt={personalData.name}
                  width={176}
                  height={176}
                  className="w-full h-full rounded-full object-cover border-2 border-[var(--bg-surface)]"
                  priority
                />
                <span className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[var(--bg-surface)] shadow-md" />
              </div>

              {/* Bio summary in card */}
              <div className="text-center mt-6 space-y-2">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {personalData.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-medium">
                  {personalData.title}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {personalData.location}
                </p>
              </div>

              {/* Quick credential facts */}
              <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-3">
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>M.Sc. Computer Science • Patkar Varde College</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>B.Sc. Computer Science • Patkar Varde College</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Udemy Web Development Certified (Aug 2024)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  href={personalData.contact.whatsapp}
                  external
                  variant="primary"
                  size="sm"
                  className="w-full gap-2 bg-emerald-600 hover:bg-emerald-500"
                >
                  <WhatsApp className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </Button>
                <Button
                  href={personalData.resume.viewUrl}
                  external
                  variant="outline"
                  size="sm"
                  className="w-full gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Resume</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                About Ravsaheb Khairnar
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {personalData.professionalSummary}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Having earned both my Bachelor&apos;s and Master&apos;s degrees in Computer
                Science from Patkar Varde College (University of Mumbai), I treat software
                development as an engineering discipline rooted in system reliability, clean
                architecture, and tangible business value.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Rather than treating UI design and backend coding as disconnected silos, I
                unify both worlds—designing user journeys that eliminate friction, and writing
                type-safe, scalable code that makes those designs performant in production.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {personalData.aboutPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-1.5"
                >
                  <div className="text-xs font-bold text-[var(--text-primary)]">
                    {pt.title}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                <span>Read Full Biography & Engineering Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
