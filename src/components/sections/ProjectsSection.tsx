import React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers } from "lucide-react";

export function ProjectsSection() {
  // Show first 6 enterprise projects on the homepage
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            badge="Enterprise Software Showcase"
            title="Business Solutions & Mission-Critical Applications"
            subtitle="Architected to solve genuine organizational challenges: automating HRMS payroll, inventory reconciliation, CRM pipeline velocity, and ERP data silos."
            className="mb-0 md:mb-0"
          />

          <Button
            href="/projects"
            variant="outline"
            size="md"
            className="shrink-0 self-start md:self-auto gap-2"
          >
            <span>View All 10 Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Have a proprietary software requirement?
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                I design and engineer custom software applications tailored to your specific business workflows.
              </p>
            </div>
          </div>
          <Button href="/contact" variant="primary" size="sm" className="shrink-0">
            Request Architecture Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
