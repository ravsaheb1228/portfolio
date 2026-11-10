import React from "react";
import { whyWorkWithMeData } from "@/data/whyWorkWithMe";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import {
  Compass,
  TrendingUp,
  Code,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export function WhyWorkWithMeSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-5 h-5 text-indigo-500" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case "Code":
        return <Code className="w-5 h-5 text-blue-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-cyan-500" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-violet-500" />;
      case "CheckCircle2":
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <ScrollSection surface="surface" prevSurface="base" accent="violet">
      <SectionHeading
        badge="Why Me"
        title="Why Work With Me"
        subtitle="Clean code, modern UI/UX design, and transparent communication."
        align="center"
      />

      <StaggerContainer
        staggerDelay={0.07}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {whyWorkWithMeData.map((item) => (
          <StaggerItem key={item.number}>
            <Card
              hoverEffect
              className="p-6 sm:p-7 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-elevated)">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-(--accent)">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-(--text-primary)">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ScrollSection>
  );
}
