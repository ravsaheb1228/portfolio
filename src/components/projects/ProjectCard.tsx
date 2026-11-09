import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DashboardMockup } from "./DashboardMockup";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const statusVariant =
    project.status === "Completed"
      ? "success"
      : project.status === "In Progress"
      ? "accent"
      : "warning";

  return (
    <Card
      hoverEffect
      className={`group flex flex-col justify-between overflow-hidden border border-(--border) bg-(--bg-surface) hover:border-(--accent)/50 transition-all ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Conceptual Visual Preview / Mockup */}
        <div className="relative p-3 sm:p-4 bg-(--bg-elevated) border-b border-(--border) overflow-hidden">
          <DashboardMockup
            type={project.mockupType}
            title={project.title}
            badge={project.status}
            className="transform group-hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Card Content Header */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="outline" className="text-[11px] font-mono">
              {project.category}
            </Badge>
            <Badge variant={statusVariant} size="sm" className="font-semibold">
              {project.status}
            </Badge>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-(--text-primary) group-hover:text-(--accent) transition-colors">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="mt-2 text-sm text-(--text-secondary) line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Key Feature Bullets */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted) font-semibold">
              Core Capabilities
            </div>
            <ul className="space-y-1">
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-(--text-secondary)"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-(--accent) shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] bg-(--bg-elevated) text-(--text-secondary) border border-(--border)"
              >
                {tech.name}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[11px] bg-(--bg-elevated) text-(--text-muted) border border-(--border)">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="px-5 sm:px-6 py-4 border-t border-(--border) bg-(--bg-base)/50 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:underline"
        >
          <span>Architecture & Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-(--text-muted) font-mono">
          Case Study
        </span>
      </div>
    </Card>
  );
}
