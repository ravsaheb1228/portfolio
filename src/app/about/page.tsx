import type { Metadata } from "next";
import { personalData } from "@/data/personal";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  Download,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Ravsaheb Khairnar's background, education at Patkar Varde College, UI/UX design philosophy, and full-stack software development approach.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionHeading
        badge="About Ravsaheb Khairnar"
        title="Designing Intuitive Interfaces. Engineering Resilient Software Systems."
        subtitle="A multidisciplinary software developer and UI/UX designer focused on building robust, high-performance web applications that solve real-world operational challenges."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Portrait & Highlights */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)]">
            <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-[14px] bg-[var(--bg-surface)] flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-[var(--text-primary)]">
                  {personalData.initials}
                </span>
                <span className="text-[10px] font-mono text-[var(--accent)] font-bold mt-1">
                  FULL-STACK
                </span>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                {personalData.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                {personalData.title}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                {personalData.location}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {personalData.availability.status}
                </div>
                <div className="text-[11px] text-[var(--text-secondary)]">
                  {personalData.availability.type}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[var(--border)] text-xs text-[var(--text-secondary)]">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--text-primary)] block">
                    Master of Science in Computer Science
                  </strong>
                  <span>Patkar Varde College, Mumbai</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--text-primary)] block">
                    Bachelor of Science in Computer Science
                  </strong>
                  <span>Patkar Varde College, University of Mumbai</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--text-primary)] block">
                    Web Development Certification
                  </strong>
                  <span>Udemy • August 2024</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <Button
                href={personalData.resume.viewUrl}
                external
                variant="outline"
                size="md"
                className="w-full gap-2"
              >
                <Download className="w-4 h-4 text-[var(--accent)]" />
                <span>Download Resume (PDF)</span>
              </Button>
              <Button href="/contact" variant="primary" size="md" className="w-full">
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column: Detailed Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span>Professional Summary & Mindset</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {personalData.professionalSummary}
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              My engineering journey began with formal training in Computer Science, where I
              immersed myself in data structures, relational database architecture, distributed
              systems, and object-oriented design. During this academic tenure, I realized that
              many powerful software applications fail not because of poor backend code, but
              because of convoluted user experiences that leave end-users frustrated.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              This drove me to master UI/UX design—learning user psychology, information hierarchy,
              wireframing in Figma, and design systems. Today, I seamlessly span both worlds:
              crafting interfaces that non-technical users love, and architecting full-stack
              systems that engineers respect.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-500" />
              <span>Business-Oriented Problem Solving</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              I view every software project through an executive lens:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] space-y-1">
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  1. Does this automate tedious human labor?
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Whether it&apos;s automatic attendance synchronization or one-click payroll tax
                  generation, the goal is reclaiming valuable work hours for business owners.
                </p>
              </div>
              <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] space-y-1">
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  2. Does this eliminate operational errors and data silos?
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Replacing messy spreadsheets with relational schemas, transactional audit logs,
                  and role-based permissions ensures strict corporate accountability.
                </p>
              </div>
              <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] space-y-1">
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  3. Is the architecture maintainable for the next 5 years?
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Clean Next.js App Router code, strict TypeScript types, and comprehensive
                  Zod validation prevent technical debt and allow smooth team onboarding.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
