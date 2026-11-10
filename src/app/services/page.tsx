import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Globe,
  Palette,
  Layers,
  Cloud,
  LayoutDashboard,
  Network,
  Database,
  Cpu,
  Workflow,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore full-stack software development, UI/UX design, SaaS architecture, database design, and AI integrations offered by Ravsaheb Khairnar.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-blue-500" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-indigo-500" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-cyan-500" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-sky-500" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-6 h-6 text-blue-600" />;
      case "Network":
        return <Network className="w-6 h-6 text-violet-500" />;
      case "Database":
        return <Database className="w-6 h-6 text-emerald-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-amber-500" />;
      case "Workflow":
        return <Workflow className="w-6 h-6 text-purple-500" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <PageContainer>
      <SectionHeading
        badge="Services"
        title="Services & Capabilities"
        subtitle="UI/UX design, full-stack web development, and cloud software engineering."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, idx) => (
          <Card
            key={service.id}
            id={service.id}
            hoverEffect
            className="scroll-mt-24 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl border border-(--border) bg-(--bg-elevated)">
                  {getIcon(service.iconName)}
                </div>
                <span className="font-mono text-xs font-bold text-(--accent)">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-(--text-primary)">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-(--text-secondary) leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Capabilities */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-(--text-muted) font-semibold">
                  Technical Capabilities
                </div>
                <ul className="space-y-1.5">
                  {service.capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-(--text-secondary)"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-(--accent) shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Benefits */}
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-mono uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Business Impact</span>
                </div>
                <ul className="space-y-1 text-xs text-(--text-secondary)">
                  {service.businessBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-(--border) flex items-center justify-between">
              <Button href="/contact" variant="primary" size="sm" className="w-full">
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
