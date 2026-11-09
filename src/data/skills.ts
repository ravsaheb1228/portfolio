import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Crafting performant, accessible, and responsive user interfaces with modern React ecosystems and typography.",
    skills: [
      { name: "React.js", tag: "Core" },
      { name: "Next.js (App Router)", tag: "Framework" },
      { name: "TypeScript", tag: "Language" },
      { name: "JavaScript (ES6+)", tag: "Language" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "HTML5 & CSS3", tag: "Web Standards" },
      { name: "Redux / Zustand", tag: "State Management" },
      { name: "Bootstrap", tag: "Styling" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Architecting reliable server-side services, RESTful APIs, and secure access management protocols.",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Framework" },
      { name: "REST APIs", tag: "Architecture" },
      { name: "JWT Authentication", tag: "Security" },
      { name: "Role-Based Access Control (RBAC)", tag: "Governance" },
    ],
  },
  {
    id: "databases",
    title: "Databases & ORM",
    description:
      "Designing structured relational and document databases with data integrity, indexing, and type-safe schemas.",
    skills: [
      { name: "PostgreSQL", tag: "Relational" },
      { name: "MongoDB", tag: "NoSQL" },
      { name: "MySQL", tag: "Relational" },
      { name: "Prisma ORM", tag: "Type-Safe ORM" },
      { name: "Mongoose", tag: "ODM" },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Translating complex business requirements into intuitive wireframes, component design systems, and prototypes.",
    skills: [
      { name: "Figma", tag: "Design Tool" },
      { name: "Wireframing & User Flows", tag: "Methodology" },
      { name: "Interactive Prototyping", tag: "Prototyping" },
      { name: "Design Systems & Tokens", tag: "Architecture" },
      { name: "Responsive & Adaptive Design", tag: "Layout" },
      { name: "User Experience (UX) Research", tag: "Strategy" },
      { name: "High-Fidelity Interface Design", tag: "Visual" },
    ],
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Leveraging frontier foundation models and APIs to embed intelligent automation into business applications.",
    skills: [
      { name: "Google Gemini API", tag: "LLM Integration" },
      { name: "Replicate", tag: "Model Hosting" },
      { name: "Hugging Face", tag: "Open Models" },
      { name: "ElevenLabs", tag: "Voice & Speech" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description:
      "Modern tooling and continuous deployment practices to ship maintainable, production-ready software.",
    skills: [
      { name: "Git", tag: "Version Control" },
      { name: "GitHub & Actions", tag: "CI/CD & Repo" },
      { name: "Postman", tag: "API Testing" },
      { name: "Vercel", tag: "Cloud Platform" },
      { name: "Netlify", tag: "Cloud Platform" },
      { name: "Docker Basics", tag: "Containers" },
    ],
  },
];
