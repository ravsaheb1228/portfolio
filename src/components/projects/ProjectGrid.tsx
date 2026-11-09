"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";

interface ProjectGridProps {
  projects: Project[];
  enableFiltering?: boolean;
}

export function ProjectGrid({
  projects,
  enableFiltering = true,
}: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCat =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchStatus =
        selectedStatus === "All" || project.status === selectedStatus;
      return matchCat && matchStatus;
    });
  }, [projects, selectedCategory, selectedStatus]);

  return (
    <div>
      {enableFiltering && (
        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedStatus={selectedStatus}
          onSelectStatus={setSelectedStatus}
        />
      )}

      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--bg-surface)] p-8">
          <p className="text-base text-[var(--text-secondary)]">
            No projects found matching the selected filter criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSelectedStatus("All");
            }}
            className="mt-3 text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
