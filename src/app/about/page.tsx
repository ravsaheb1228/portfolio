import type { Metadata } from "next";
import Image from "next/image";
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
import { WhatsApp } from "@/components/ui/Icons";

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
          <Card className="p-6 sm:p-8 space-y-6 bg-(--bg-surface)">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1 bg-linear-to-tr from-blue-600 via-indigo-600 to-cyan-400 shadow-2xl">
              <Image
                src={personalData.avatar}
                alt={personalData.name}
                width={176}
                height={176}
                className="w-full h-full rounded-full object-cover border-2 border-(--bg-surface)"
                priority
              />
              <span className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-(--bg-surface) shadow-md" />
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold text-(--text-primary)">
                {personalData.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-wider text-(--accent) font-semibold">
                {personalData.title}
              </p>
              <p className="text-xs text-(--text-secondary)">
                {personalData.location}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {personalData.availability.status}
                </div>
                <div className="text-[11px] text-(--text-secondary)">
                  {personalData.availability.type}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-(--border) text-xs text-(--text-secondary)">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-(--text-primary) block">
                    Master of Science in Computer Science
                  </strong>
                  <span>Patkar Varde College, Mumbai</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-(--text-primary) block">
                    Bachelor of Science in Computer Science
                  </strong>
                  <span>Patkar Varde College, University of Mumbai</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-(--text-primary) block">
                    Higher Secondary Certificate (HSC)
                  </strong>
                  <span>Dadasaheb Digambar Shankar Rao Patil College, Jalgaon (2021 – 2022)</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-(--text-primary) block">
                    Web Development Certification
                  </strong>
                  <span>Udemy • August 2024</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-(--text-primary) block">
                    JavaScript Training Certificate (Score: 75%)
                  </strong>
                  <span>Spoken Tutorial Project, IIT Bombay • November 2023</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <Button
                href={personalData.contact.whatsapp}
                external
                variant="primary"
                size="md"
                className="w-full gap-2 bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                <WhatsApp className="w-4 h-4" />
                <span>Quick WhatsApp Chat (+91 85912 81388)</span>
              </Button>
              <Button
                href={personalData.resume.viewUrl}
                external
                variant="outline"
                size="md"
                className="w-full gap-2"
              >
                <Download className="w-4 h-4 text-(--accent)" />
                <span>Download Resume (PDF)</span>
              </Button>
              <Button href="/contact" variant="secondary" size="md" className="w-full">
                <span>Submit Project Inquiry</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column: Detailed Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-(--text-primary) flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-(--accent)" />
              <span>Professional Summary & Mindset</span>
            </h3>
            <p className="text-sm text-(--text-secondary) leading-relaxed">
              {personalData.professionalSummary}
            </p>
            <p className="text-sm text-(--text-secondary) leading-relaxed">
              My engineering journey began with formal training in Computer Science, where I
              immersed myself in data structures, relational database architecture, distributed
              systems, and object-oriented design. During this academic tenure, I realized that
              many powerful software applications fail not because of poor backend code, but
              because of convoluted user experiences that leave end-users frustrated.
            </p>
            <p className="text-sm text-(--text-secondary) leading-relaxed">
              This drove me to master UI/UX design—learning user psychology, information hierarchy,
              wireframing in Figma, and design systems. Today, I seamlessly span both worlds:
              crafting interfaces that non-technical users love, and architecting full-stack
              systems that engineers respect.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-(--text-primary) flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-500" />
              <span>Business-Oriented Problem Solving</span>
            </h3>
            <p className="text-sm text-(--text-secondary) leading-relaxed">
              I view every software project through an executive lens:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-lg border border-(--border) bg-(--bg-elevated) space-y-1">
                <div className="text-xs font-bold text-(--text-primary)">
                  1. Does this automate tedious human labor?
                </div>
                <p className="text-xs text-(--text-secondary)">
                  Whether it&apos;s automatic attendance synchronization or one-click payroll tax
                  generation, the goal is reclaiming valuable work hours for business owners.
                </p>
              </div>
              <div className="p-3.5 rounded-lg border border-(--border) bg-(--bg-elevated) space-y-1">
                <div className="text-xs font-bold text-(--text-primary)">
                  2. Does this eliminate operational errors and data silos?
                </div>
                <p className="text-xs text-(--text-secondary)">
                  Replacing messy spreadsheets with relational schemas, transactional audit logs,
                  and role-based permissions ensures strict corporate accountability.
                </p>
              </div>
              <div className="p-3.5 rounded-lg border border-(--border) bg-(--bg-elevated) space-y-1">
                <div className="text-xs font-bold text-(--text-primary)">
                  3. Is the architecture maintainable for the next 5 years?
                </div>
                <p className="text-xs text-(--text-secondary)">
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
