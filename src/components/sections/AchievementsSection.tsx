import React from "react";
import { achievementsData } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollSection } from "@/components/ui/ScrollSection";
import {
  AnimatedReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedReveal";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function AchievementsSection() {
  return (
    <ScrollSection surface="base" prevSurface="surface" accent="cyan">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeading
          badge="Education"
          title="Education & Certifications"
          subtitle="Academic qualifications, certified technical courses, and achievements."
          className="mb-0 md:mb-0"
        />

        <AnimatedReveal direction="left" delay={0.1}>
          <Button
            href="/achievements"
            variant="outline"
            size="md"
            className="shrink-0 self-start md:self-auto gap-2"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedReveal>
      </div>

      <StaggerContainer
        staggerDelay={0.08}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {achievementsData.map((item) => (
          <StaggerItem key={item.id} className="flex">
            <AchievementCard achievement={item} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ScrollSection>
  );
}
