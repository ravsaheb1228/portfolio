import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Review Ravsaheb Khairnar's UI/UX design and full-stack software development experience across enterprise business solutions.",
};

export default function ExperiencePage() {
  return (
    <div className="py-6">
      <PageContainer>
        <SectionHeading
          badge="Experience"
          title="Work Experience"
          subtitle="Hands-on full-stack development, UI/UX architecture, and modern web applications."
        />
      </PageContainer>
      <ExperienceSection />
    </div>
  );
}
