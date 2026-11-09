import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description:
      "Core programming languages used for algorithmic problem solving, full-stack systems, and AI workflows.",
    skills: [
      { name: "JavaScript", tag: "Language" },
      { name: "TypeScript", tag: "Type-Safe" },
      { name: "Python", tag: "Backend & AI" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Crafting performant, accessible, and responsive user interfaces with modern React ecosystems and typography.",
    skills: [
      { name: "Next.js (App Router)", tag: "Framework" },
      { name: "React.js", tag: "Core" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "Redux", tag: "State Management" },
      { name: "HTML5 / CSS3", tag: "Web Standards" },
      { name: "Framer Motion", tag: "Animation" },
      { name: "Bootstrap", tag: "Styling" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Architecting reliable server-side services, RESTful APIs, and secure microservices.",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Framework" },
      { name: "Flask", tag: "Python Backend" },
      { name: "REST APIs", tag: "Architecture" },
      { name: "JWT Authentication", tag: "Security" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description:
      "Designing structured relational and document databases with data integrity and schemas.",
    skills: [
      { name: "MongoDB", tag: "NoSQL" },
      { name: "Mongoose", tag: "ODM" },
      { name: "MySQL", tag: "Relational" },
      { name: "PostgreSQL", tag: "Relational" },
    ],
  },
  {
    id: "cloud-tools",
    title: "Cloud, Deployment & DevOps",
    description:
      "Modern tooling and continuous deployment practices to ship production-ready applications.",
    skills: [
      { name: "AWS", tag: "Cloud" },
      { name: "Vercel", tag: "Deployment" },
      { name: "Docker", tag: "Containers" },
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "CI/CD & Repo" },
      { name: "Postman", tag: "API Testing" },
    ],
  },
  {
    id: "ai-tools",
    title: "Generative AI Tools & Solutions",
    description:
      "Leveraging modern generative AI models and automation workflows for multimedia and code generation.",
    skills: [
      { name: "Google Gemini", tag: "LLM & Vision" },
      { name: "Midjourney (MJ)", tag: "Image Gen" },
      { name: "Kling AI", tag: "Video Gen" },
      { name: "Gemini Banana", tag: "AI Workflow" },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design & Soft Skills",
    description:
      "Translating client business requirements into intuitive wireframes, clickable prototypes, and collaboration.",
    skills: [
      { name: "Figma", tag: "UI/UX Design" },
      { name: "Wireframing & Prototyping", tag: "UX" },
      { name: "Problem Solving", tag: "Soft Skill" },
      { name: "Team Collaboration", tag: "Soft Skill" },
      { name: "Adaptability", tag: "Soft Skill" },
    ],
  },
];
