import React from "react";
import { workflowData } from "@/data/workflow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export function WorkflowSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-[var(--border)] bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Execution Methodology"
          title="A Structured, Transparent Development Workflow"
          subtitle="From initial discovery to continuous maintenance, every project follows a battle-tested roadmap designed to eliminate scope ambiguity and deliver on schedule."
          align="center"
        />

        {/* 7-Step Sequential Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowData.map((stage, idx) => (
            <Card
              key={stage.step}
              hoverEffect
              className={`p-6 flex flex-col justify-between ${
                idx === 6 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                    {stage.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border)]">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {stage.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {stage.description}
                </p>

                <div className="pt-3 border-t border-[var(--border)] space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-[var(--text-muted)] font-semibold">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1">
                    {stage.deliverables.map((deliv, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-[11px] text-[var(--text-secondary)]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
