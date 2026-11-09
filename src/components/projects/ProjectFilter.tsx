"use client";

import React from "react";
import { Filter } from "lucide-react";

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
}

export function ProjectFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  selectedStatus,
  onSelectStatus,
}: ProjectFilterProps) {
  const statuses = ["All", "In Progress", "Planned"];

  return (
    <div className="space-y-4 mb-8">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono shrink-0 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </div>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isSelected
                  ? "bg-[var(--accent)] text-white shadow-sm"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-[var(--text-muted)] font-mono mr-1">Status:</span>
        {statuses.map((status) => {
          const isSelected = selectedStatus === status;
          return (
            <button
              key={status}
              type="button"
              onClick={() => onSelectStatus(status)}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                isSelected
                  ? "bg-[var(--bg-elevated)] text-[var(--accent)] font-semibold border border-[var(--accent)]/40"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {status}
            </button>
          );
        })}
      </div>
    </div>
  );
}
