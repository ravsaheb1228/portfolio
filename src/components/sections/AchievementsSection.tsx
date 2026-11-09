import React from "react";
import { achievementsData } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function AchievementsSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-(--border) bg-(--bg-base)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            badge="Verified Credentials"
            title="Education, Certifications & Milestones"
            subtitle="Academic qualifications and certified proficiencies validating a deep technical foundation in Computer Science."
            className="mb-0 md:mb-0"
          />

          <Button
            href="/achievements"
            variant="outline"
            size="md"
            className="shrink-0 self-start md:self-auto gap-2"
          >
            <span>View All Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementsData.map((item) => (
            <AchievementCard key={item.id} achievement={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
