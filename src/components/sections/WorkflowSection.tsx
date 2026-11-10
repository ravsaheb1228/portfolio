import React from "react";
import { workflowData } from "@/data/workflow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export function WorkflowSection() {
  return (
    <ScrollSection surface="base" prevSurface="surface" accent="indigo">
      <SectionHeading
        badge="Process"
        title="Workflow"
        subtitle="A structured, transparent roadmap from concept to deployment."
        align="center"
      />

      {/* 7-Step Sequential Process Cards */}
      <StaggerContainer
        staggerDelay={0.07}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
      >
        {workflowData.map((stage, idx) => (
          <StaggerItem
            key={stage.step}
            className={idx === 6 ? "lg:col-span-2" : ""}
          >
            <Card
              hoverEffect
              className="p-6 flex flex-col justify-between h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-500">
                    {stage.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-(--bg-elevated) text-(--text-muted) border border-(--border)">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-(--text-primary)">
                  {stage.title}
                </h3>

                <p className="text-xs text-(--text-secondary) leading-relaxed">
                  {stage.description}
                </p>

                <div className="pt-3 border-t border-(--border) space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-(--text-muted) font-semibold">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1">
                    {stage.deliverables.map((deliv, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-[11px] text-(--text-secondary)"
                      >
                        <CheckCircle2 className="w-3 h-3 text-(--accent) shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ScrollSection>
  );
}
