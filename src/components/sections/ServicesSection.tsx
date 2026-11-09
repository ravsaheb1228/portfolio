import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-blue-500" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-indigo-500" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-cyan-500" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-5 h-5 text-blue-600" />;
      case "Network":
        return <Network className="w-5 h-5 text-violet-500" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-500" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-purple-500" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 border-t border-(--border) bg-(--bg-surface)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            badge="Engineering Services"
            title="Full-Lifecycle Design & Development Services"
            subtitle="From early wireframing to full-stack code, API integrations, and cloud deployments—engineered for business growth."
            className="mb-0 md:mb-0"
          />

          <Button
            href="/services"
            variant="outline"
            size="md"
            className="shrink-0 self-start md:self-auto gap-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.slice(0, 6).map((service) => (
            <Card
              key={service.id}
              hoverEffect
              className="p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl border border-(--border) bg-(--bg-elevated)">
                  {getIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-(--text-primary)">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted) font-semibold">
                    Core Deliverables
                  </div>
                  <ul className="space-y-1">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
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
              </div>

              <div className="pt-6 mt-4 border-t border-(--border) flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:underline"
                >
                  <span>Inquire for this service</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
