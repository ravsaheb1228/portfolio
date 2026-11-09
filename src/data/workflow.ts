import { WorkflowStep } from "@/types";

export const workflowData: WorkflowStep[] = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description:
      "Deep dive into your business model, core operational pain points, stakeholder expectations, and success criteria to define precise project scope.",
    deliverables: [
      "Requirements gathering document",
      "User persona definitions",
      "Scope and milestone roadmap",
    ],
  },
  {
    step: "02",
    title: "Research & Technical Planning",
    description:
      "Analyze domain requirements, evaluate tech stack feasibility, design data schemas, and formulate an architectural blueprint before writing code.",
    deliverables: [
      "Entity Relationship Diagrams (ERD)",
      "API contract specifications",
      "Technology & infrastructure selection",
    ],
  },
  {
    step: "03",
    title: "UI/UX & Prototype Design",
    description:
      "Craft intuitive user flows, information hierarchies, wireframes, and high-fidelity Figma prototypes with accessible design tokens.",
    deliverables: [
      "Clickable Figma interactive prototype",
      "Design system & component library",
      "Responsive breakpoint layouts",
    ],
  },
  {
    step: "04",
    title: "Architecture & Development",
    description:
      "Build modular, clean, and type-safe software across frontend and backend layers with Next.js, TypeScript, and modern database backends.",
    deliverables: [
      "Clean TypeScript code repository",
      "Secure REST APIs & route handlers",
      "Role-based authentication & data guards",
    ],
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    description:
      "Rigorously test for cross-browser responsiveness, validation edge cases, accessibility standards, and query performance under load.",
    deliverables: [
      "Cross-device QA validation",
      "Security & vulnerability check",
      "Core Web Vitals & performance audit",
    ],
  },
  {
    step: "06",
    title: "Production Deployment",
    description:
      "Configure CI/CD pipelines, SSL certificates, environment security, and production hosting on Vercel or cloud infrastructure.",
    deliverables: [
      "Live production deployment",
      "Continuous deployment setup",
      "Monitoring & error tracking integration",
    ],
  },
  {
    step: "07",
    title: "Maintenance & Iterative Growth",
    description:
      "Provide ongoing technical support, user feedback analysis, database maintenance, and feature enhancements as your business expands.",
    deliverables: [
      "Knowledge transfer & documentation",
      "Scheduled backups & dependency upgrades",
      "Feature iteration roadmap",
    ],
  },
];
