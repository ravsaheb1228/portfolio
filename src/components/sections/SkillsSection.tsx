import React from "react";
import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  Code,
  Server,
  Database,
  Palette,
  Cpu,
  Wrench,
} from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code className="w-5 h-5 text-blue-500" />;
      case "backend":
        return <Server className="w-5 h-5 text-indigo-500" />;
      case "databases":
        return <Database className="w-5 h-5 text-emerald-500" />;
      case "uiux":
        return <Palette className="w-5 h-5 text-violet-500" />;
      case "ai":
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case "tools":
      default:
        return <Wrench className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 border-t border-(--border) bg-(--bg-base)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="Technical Skills"
          subtitle="Modern frontend, backend, database, and AI technologies used in production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category) => (
            <Card
              key={category.id}
              hoverEffect
              className="p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-elevated)">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-(--text-primary)">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-(--text-secondary) leading-relaxed">
                  {category.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group/pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-(--border) bg-(--bg-elevated) text-(--text-primary) hover:border-(--accent) hover:bg-(--accent-subtle) transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] text-(--text-muted) font-mono">
                          • {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
