"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <div className="py-16 text-center rounded-xl border border-dashed border-(--border) bg-(--bg-surface) p-8">
          <p className="text-base text-(--text-secondary)">
            No projects found matching the selected filter criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSelectedStatus("All");
            }}
            className="mt-3 text-sm font-semibold text-(--accent) hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(idx * 0.05, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
