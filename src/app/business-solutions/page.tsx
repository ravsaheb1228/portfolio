import type { Metadata } from "next";
import { businessSolutionsData } from "@/data/businessSolutions";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardMockup } from "@/components/projects/DashboardMockup";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Solutions & Enterprise Systems",
  description:
    "Explore 10 business software solution categories engineered by Ravsaheb Khairnar: HRMS, Inventory, CRM, ERP, Finance, BI, and Workflow Automation.",
};

export default function BusinessSolutionsPage() {
  return (
    <PageContainer>
      <SectionHeading
        badge="Enterprise Solutions"
        title="Turning Business Challenges Into Powerful Digital Solutions."
        subtitle="I build software designed around real business models—eliminating manual bottlenecks, standardizing multi-department data, and empowering executive decision makers."
      />

      <div className="space-y-16">
        {businessSolutionsData.map((solution, index) => (
          <div
            key={solution.id}
            id={solution.slug}
            className="scroll-mt-24 p-6 sm:p-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-lg space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[var(--border)]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    0{index + 1}
                  </span>
                  <Badge variant="accent" size="sm">
                    {solution.category}
                  </Badge>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  {solution.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  {solution.summary}
                </p>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="shrink-0 self-start sm:self-auto gap-2"
              >
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mockup Showcase */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-3 sm:p-4">
              <DashboardMockup
                type={solution.mockupType}
                title={`${solution.title} Workspace`}
                badge="System Architecture Preview"
              />
            </div>

            {/* Challenges vs Solution vs Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenges */}
              <div className="p-5 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-3">
                <div className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 uppercase font-mono tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {solution.businessChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Features */}
              <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-3">
                <div className="text-xs font-bold text-[var(--accent)] flex items-center gap-1.5 uppercase font-mono tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>Key Features</span>
                </div>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {solution.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operational Benefits */}
              <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 uppercase font-mono tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  <span>Business Impact</span>
                </div>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {solution.operationalBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture Statement */}
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-base)] text-xs text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)]">Solution Engineering: </strong>
              {solution.proposedSolution}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
