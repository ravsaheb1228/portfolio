import type { Metadata } from "next";
import { achievementsData } from "@/data/achievements";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GraduationCap, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements & Certifications",
  description:
    "Explore academic credentials, degrees from Patkar Varde College, University of Mumbai, and industry certifications achieved by Ravsaheb Khairnar.",
};

export default function AchievementsPage() {
  const educationItems = achievementsData.filter((a) => a.category === "Education");
  const certificationItems = achievementsData.filter(
    (a) => a.category === "Certification" || a.category === "Milestone"
  );

  return (
    <PageContainer>
      <SectionHeading
        badge="Education"
        title="Education & Credentials"
        subtitle="Academic degrees, certified technical courses, and milestones."
      />

      <div className="space-y-12">
        {/* Education Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-(--border)">
            <GraduationCap className="w-5 h-5 text-blue-500" />
            <h3 className="text-xl font-bold text-(--text-primary)">
              Formal Education
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationItems.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </div>
        </div>

        {/* Certifications & Milestones */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-(--border)">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold text-(--text-primary)">
              Industry Certifications & Milestones
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationItems.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </div>
        </div>

        {/* Callout */}
        <Card className="p-8 border-(--border-strong) bg-(--bg-elevated) flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-(--text-primary)">
              Looking for a verified developer with formal Computer Science rigor?
            </h4>
            <p className="text-xs sm:text-sm text-(--text-secondary)">
              Let&apos;s talk about how my academic background and hands-on skills can serve your next project.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="md" className="shrink-0">
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Card>
      </div>
    </PageContainer>
  );
}
