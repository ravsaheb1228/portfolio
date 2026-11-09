import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Download,
  ExternalLink,
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Code2,
  Cpu,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Resume | Ravsaheb Khairnar - UI/UX Designer & Software Developer",
  description:
    "Official resume of Ravsaheb Khairnar. Computer Science graduate specializing in MERN, Next.js, Python, full-stack architecture, and AI integrations.",
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-(--bg-base)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-(--text-secondary) hover:text-(--accent) transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download="Ravsaheb_Khairnar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-semibold shadow-md hover:shadow-indigo-500/25 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-(--border) bg-(--bg-surface) text-xs font-semibold text-(--text-primary) hover:border-(--accent) hover:text-(--accent) transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-semibold text-indigo-500">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Curriculum Vitae</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-(--text-primary) tracking-tight">
            Ravsaheb Khairnar
          </h1>

          <p className="text-base sm:text-lg text-(--text-secondary) max-w-3xl leading-relaxed">
            {personalData.professionalSummary}
          </p>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-(--text-secondary)">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-(--border) bg-(--bg-surface)">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>Goregaon, Mumbai</span>
            </span>

            <a
              href="tel:8591281388"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-(--border) bg-(--bg-surface) hover:text-(--accent)"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>+91 85912 81388</span>
            </a>

            <a
              href="mailto:ravsahebkhairnar1228@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-(--border) bg-(--bg-surface) hover:text-(--accent)"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>ravsahebkhairnar1228@gmail.com</span>
            </a>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-(--border) bg-(--bg-surface) hover:text-blue-500"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-(--border) bg-(--bg-surface) hover:text-(--text-primary)"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Main Content: Two Columns on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive PDF Viewer */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-(--text-muted) font-semibold">
                PDF Document Preview
              </span>
              <span className="text-xs text-(--text-muted)">1 Page • Verified</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-(--border-strong) bg-(--bg-surface) shadow-xl min-h-[650px] sm:min-h-[850px] flex flex-col">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                title="Ravsaheb Khairnar Resume"
                className="w-full flex-1 min-h-[650px] sm:min-h-[850px] border-0"
              />
              <div className="p-3 bg-(--bg-elevated) border-t border-(--border) flex items-center justify-between text-xs text-(--text-secondary)">
                <span>Trouble viewing PDF?</span>
                <a
                  href="/resume.pdf"
                  download="Ravsaheb_Khairnar_Resume.pdf"
                  className="text-(--accent) font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download direct PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Resume Sections */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-(--text-primary) font-bold text-base border-b border-(--border) pb-3">
                <GraduationCap className="w-5 h-5 text-indigo-500" />
                <span>Education</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="border-l-2 border-indigo-500 pl-3 space-y-1">
                  <div className="font-bold text-(--text-primary) text-sm">
                    Master&apos;s in Computer Science
                  </div>
                  <div className="text-(--text-secondary)">
                    Patkar Varde College, Mumbai
                  </div>
                  <div className="text-[11px] font-mono text-(--accent)">
                    2025 – Present
                  </div>
                </div>

                <div className="border-l-2 border-blue-500 pl-3 space-y-1">
                  <div className="font-bold text-(--text-primary) text-sm">
                    Bachelor&apos;s in Computer Science
                  </div>
                  <div className="text-(--text-secondary)">
                    Patkar Varde College, Mumbai
                  </div>
                  <div className="text-[11px] font-mono text-(--accent)">
                    2022 – 2025
                  </div>
                </div>

                <div className="border-l-2 border-(--border-strong) pl-3 space-y-1">
                  <div className="font-bold text-(--text-primary) text-sm">
                    Higher Secondary Certificate (HSC)
                  </div>
                  <div className="text-(--text-secondary)">
                    Dadasaheb Digambar Shankar Rao Patil College, Jalgaon
                  </div>
                  <div className="text-[11px] font-mono text-(--text-muted)">
                    2021 – 2022
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-(--text-primary) font-bold text-base border-b border-(--border) pb-3">
                <Award className="w-5 h-5 text-emerald-500" />
                <span>Certifications</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-(--text-primary)">
                      Web Development Certification
                    </span>
                    <Badge variant="accent" size="sm">
                      Aug 2024
                    </Badge>
                  </div>
                  <div className="text-[11px] text-(--accent) font-medium">Udemy</div>
                  <p className="text-(--text-secondary) leading-relaxed">
                    Learned HTML, CSS, JavaScript, React, Node.js, Express, Angular, and
                    Bootstrap. Gained hands-on experience in building responsive web
                    applications and full-stack development.
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-(--border)">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-(--text-primary)">
                      JavaScript Training Certificate
                    </span>
                    <Badge variant="default" size="sm">
                      Nov 2023
                    </Badge>
                  </div>
                  <div className="text-[11px] text-emerald-500 font-medium">
                    Spoken Tutorial Project, IIT Bombay (Score: 75%)
                  </div>
                  <p className="text-(--text-secondary) leading-relaxed">
                    Completed a certified JavaScript course under the Spoken Tutorial Project,
                    IIT Bombay, with a score of 75%.
                  </p>
                </div>
              </div>
            </Card>

            {/* Core Resume Projects */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-(--text-primary) font-bold text-base border-b border-(--border) pb-3">
                <Code2 className="w-5 h-5 text-purple-500" />
                <span>Featured Resume Projects</span>
              </div>

              <div className="space-y-4 text-xs">
                {/* Project 1 */}
                <div className="space-y-2">
                  <div className="font-bold text-(--text-primary) text-sm">
                    AI-Powered Application Platform
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {["Next.js", "React", "TypeScript", "Python", "Tailwind", "MongoDB"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-full text-[10px] bg-(--bg-elevated) text-(--text-secondary) border border-(--border)"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <ul className="space-y-1 text-(--text-secondary)">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>Full-stack AI platform integrating chat, code generation, text-to-image/video/audio.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>Chat with PDF, Resume Builder, and YouTube Video Summarizer.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>Python API backend with MongoDB storage, deployed on Vercel.</span>
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="space-y-2 pt-3 border-t border-(--border)">
                  <div className="font-bold text-(--text-primary) text-sm">
                    Web3 Blockchain Crowdfunding Platform
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Tailwind CSS", "Web3.js", "Solidity"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-(--bg-elevated) text-(--text-secondary) border border-(--border)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1 text-(--text-secondary)">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>Decentralized crowdfunding platform with Solidity smart contracts on Ethereum.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>Real-time campaign updates and secure Web3 wallet interactions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Extracurricular Activities */}
            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-(--text-primary) font-bold text-base border-b border-(--border) pb-3">
                <Cpu className="w-5 h-5 text-cyan-500" />
                <span>Extracurricular Activities</span>
              </div>

              <ul className="space-y-2 text-xs text-(--text-secondary)">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="font-semibold text-(--text-primary)">Jigyasa</span>
                  <span>– College Technical & Innovation Event</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="font-semibold text-(--text-primary)">DLLE</span>
                  <span>– Department of Lifelong Learning and Extension</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}