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
        badge="Projects"
        title="All Projects"
        subtitle="Full-stack web applications, AI platforms, and modern enterprise software solutions."
      />

      <ProjectGrid projects={projectsData} enableFiltering={true} />
    </PageContainer>
  );
}
