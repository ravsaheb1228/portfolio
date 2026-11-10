import React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollSection } from "@/components/ui/ScrollSection";
import {
  AnimatedReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedReveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers } from "lucide-react";

export function ProjectsSection() {
  // Show first 6 enterprise projects on the homepage
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <ScrollSection surface="surface" prevSurface="base" accent="violet">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeading
          badge="Featured Projects"
          title="Projects & Work"
          subtitle="Full-stack web applications, AI platforms, and modern software solutions."
          className="mb-0 md:mb-0"
        />

        <AnimatedReveal direction="left" delay={0.1}>
          <Button
            href="/projects"
            variant="outline"
            size="md"
            className="shrink-0 self-start md:self-auto gap-2"
          >
            <span>All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedReveal>
      </div>

      {/* 6 Grid items */}
      <StaggerContainer
        staggerDelay={0.08}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {featuredProjects.map((project) => (
          <StaggerItem key={project.id} className="flex">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedReveal direction="up" delay={0.12}>
        <div className="mt-14 p-6 rounded-2xl border border-(--border) bg-(--bg-elevated) flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-(--text-primary)">
                Have a proprietary software requirement?
              </h4>
              <p className="text-xs text-(--text-secondary)">
                I design and engineer custom software applications tailored to your specific business workflows.
              </p>
            </div>
          </div>
          <Button href="/contact" variant="primary" size="sm" className="shrink-0">
            Request Architecture Consultation
          </Button>
        </div>
      </AnimatedReveal>
    </ScrollSection>
  );
}
