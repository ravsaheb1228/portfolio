import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects & Enterprise Software Portfolio",
  description:
    "Explore 10 enterprise business applications architected by Ravsaheb Khairnar: HRMS, Inventory Control, CRM, ERP, BI Dashboards, and more.",
};

export default function ProjectsPage() {
  return (
    <PageContainer>
      <SectionHeading
        badge="Complete Portfolio"
        title="Enterprise Software Suites & Applications"
        subtitle="Explore all 10 mission-critical enterprise systems designed and engineered with modern web technologies, type safety, and business-focused architectures."
      />

      <ProjectGrid projects={projectsData} enableFiltering={true} />
    </PageContainer>
  );
}
