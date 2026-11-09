export type ProjectStatus = "Planned" | "In Progress" | "Completed";

export type ProjectCategory =
  | "Human Resources"
  | "Retail / Manufacturing"
  | "Sales / Marketing"
  | "Enterprise Operations"
  | "Productivity"
  | "Finance"
  | "E-Commerce"
  | "Healthcare"
  | "Business Intelligence"
  | "Manufacturing";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortDescription: string;
  overview: string;
  businessProblem: string;
  proposedSolution: string;
  keyFeatures: string[];
  techStack: {
    name: string;
    role: string;
  }[];
  architectureOverview: string;
  developmentChallenges: string[];
  myContribution: string[];
  liveUrl?: string;
  githubUrl?: string;
  mockupType: "dashboard" | "analytics" | "kanban" | "inventory" | "workflow" | "crm" | "health" | "finance" | "ecommerce" | "manufacturing";
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  category: "UI/UX Design" | "Software Development";
  organization: string;
  period: string;
  description: string;
  focusAreas: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    tag?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  category: "Education" | "Certification" | "Milestone";
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  badge?: string;
}

export interface BusinessSolution {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  businessChallenges: string[];
  proposedSolution: string;
  keyFeatures: string[];
  operationalBenefits: string[];
  mockupType: "dashboard" | "analytics" | "kanban" | "inventory" | "workflow" | "crm" | "health" | "finance" | "ecommerce" | "manufacturing";
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  capabilities: string[];
  businessBenefits: string[];
  iconName: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}
