import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { DashboardMockup } from "@/components/projects/DashboardMockup";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const statusVariant =
    project.status === "Completed"
      ? "success"
      : project.status === "In Progress"
      ? "accent"
      : "warning";

  return (
    <PageContainer>
      {/* Back button and breadcrumb */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-(--text-secondary) hover:text-(--accent) transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs font-mono">
            {project.category}
          </Badge>
          <Badge variant={statusVariant} size="sm">
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--text-primary)">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed max-w-4xl">
          {project.overview}
        </p>
      </div>

      {/* Main Interactive Visual Mockup */}
      <div className="mb-12 rounded-2xl border border-(--border) bg-(--bg-elevated) p-4 sm:p-6 shadow-(--card-shadow)">
        <DashboardMockup
          type={project.mockupType}
          title={`${project.title} System Console`}
          badge={project.status}
          className="w-full"
        />
        <div className="mt-3.5 text-center text-[11px] font-mono text-(--text-muted)">
          Conceptual High-Density Interface Blueprint & Architecture Preview
        </div>
      </div>

      {/* Project Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (8 cols): Business Problem, Solution, Features, Architecture */}
        <div className="lg:col-span-8 space-y-10">
          {/* Problem & Solution Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 border-rose-500/20 bg-rose-500/5 space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>The Business Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                {project.businessProblem}
              </p>
            </Card>

            <Card className="p-6 border-emerald-500/20 bg-emerald-500/5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                {project.proposedSolution}
              </p>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-(--text-primary) flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-(--accent)" />
              <span>Key System Features</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-(--text-secondary)"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent) shrink-0 mt-2" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* System Architecture Overview */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-(--text-primary) flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span>Architecture & Data Flow</span>
            </h3>
            <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
              {project.architectureOverview}
            </p>
          </Card>

          {/* Technical Challenges & Solutions */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-(--text-primary) flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-500" />
              <span>Engineering Challenges Solved</span>
            </h3>
            <div className="space-y-3 pt-2">
              {project.developmentChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-(--border) bg-(--bg-elevated) text-xs sm:text-sm text-(--text-secondary) leading-relaxed"
                >
                  <strong className="text-(--text-primary) block mb-1">
                    Challenge 0{idx + 1}:
                  </strong>
                  {challenge}
                </div>
              ))}
            </div>
          </Card>

          {/* My Role & Contribution */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-(--text-primary)">
              My Role & Contribution
            </h3>
            <ul className="space-y-2 pt-2">
              {project.myContribution.map((contrib, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-(--text-secondary)"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right Column (4 cols): Tech Stack, Inquire CTA, Status */}
        <div className="lg:col-span-4 space-y-6">
          {/* Tech Stack Details */}
          <Card className="p-6 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-(--text-primary) font-mono">
              Technology Stack
            </h4>
            <div className="space-y-3">
              {project.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-(--border) bg-(--bg-elevated) space-y-1"
                >
                  <div className="text-xs font-bold text-(--text-primary)">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-(--text-secondary)">
                    {tech.role}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Project Status & Demo Callout */}
          <Card className="p-6 space-y-4 border-(--border-strong)">
            <h4 className="text-sm font-bold uppercase tracking-wider text-(--text-primary) font-mono">
              Status & Deployment
            </h4>
            <div className="p-3.5 rounded-lg bg-(--bg-elevated) border border-(--border) space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-(--text-secondary)">Phase</span>
                <Badge variant={statusVariant} size="sm">
                  {project.status}
                </Badge>
              </div>
              <p className="text-[11px] text-(--text-muted)">
                {project.status === "Completed"
                  ? "Production deployment active."
                  : project.status === "In Progress"
                  ? "Core architecture implemented; sprint development underway."
                  : "Architectural blueprint and data schemas drafted."}
              </p>
            </div>

            {project.liveUrl && (
              <Button href={project.liveUrl} external variant="primary" size="md" className="w-full">
                <span>View Live Application</span>
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </Button>
            )}

            {project.githubUrl && (
              <Button href={project.githubUrl} external variant="outline" size="md" className="w-full">
                <Github className="w-4 h-4 mr-1.5" />
                <span>Inspect Repository</span>
              </Button>
            )}

            <Button href="/contact" variant="primary" size="md" className="w-full">
              <span>Discuss Building This For Your Company</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
