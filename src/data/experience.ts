import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  // UI/UX Design Experience
  {
    id: "exp-uiux-01",
    title: "UI/UX Design & Product Interface Architecture",
    role: "Product Designer & UI Specialist",
    category: "UI/UX Design",
    organization: "Independent & Client Engagements",
    period: "Ongoing Practice",
    description:
      "Transforming complex business logic and user challenges into structured, elegant digital workflows. Conducting user journey analysis, creating low-to-high fidelity wireframes in Figma, building reusable design systems, and conducting usability evaluations.",
    focusAreas: [
      "User research and persona journey mapping",
      "Wireframing and clickable interactive prototyping in Figma",
      "Design systems with reusable tokens, typography scales, and atomic components",
      "High-density enterprise dashboard layouts and SaaS interface patterns",
      "Accessibility (WCAG 2.1 AA) and multi-breakpoint responsive adaptation",
      "Seamless design-to-development handoffs with precise CSS token specifications",
    ],
    technologies: [
      "Figma",
      "Design Systems",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Accessibility",
    ],
  },
  {
    id: "exp-uiux-02",
    title: "Enterprise SaaS Interface Design & Information Architecture",
    role: "UI/UX Consultant",
    category: "UI/UX Design",
    organization: "Software Solutions Practice",
    period: "Continuous Practice",
    description:
      "Specializing in simplifying data-dense business environments such as CRM pipelines, ERP multi-tier approvals, and inventory ledgers. Focusing on cognitive load reduction, intuitive navigation schemas, and rapid task completion for enterprise users.",
    focusAreas: [
      "Complex form design with contextual validation and error recovery",
      "Data visualization, tabular filters, and drill-down analytics views",
      "Dual theme (Dark Mode / Light Mode) color harmonization and contrast ratios",
      "Micro-interactions and subtle feedback animations that guide user intent",
    ],
    technologies: [
      "Figma",
      "Information Architecture",
      "Design Tokens",
      "Interactive Components",
      "Responsive UI",
    ],
  },

  // Software Development Experience
  {
    id: "exp-dev-01",
    title: "Full-Stack Web Application Engineering (MERN & Python)",
    role: "Full-Stack Software Developer",
    category: "Software Development",
    organization: "Independent & Technical Projects",
    period: "Ongoing Practice",
    description:
      "Architecting and shipping end-to-end full-stack web applications utilizing Next.js, React, TypeScript, Python, Node.js, and MongoDB/relational databases. Building AI tool suites, Web3 smart contract dApps, and secure RESTful backend APIs.",
    focusAreas: [
      "Next.js App Router applications with Server Components and dynamic route handlers",
      "Full-stack AI platforms with Python APIs, Chat with PDF, and media generation",
      "Web3 decentralized applications with Solidity smart contracts and Web3.js",
      "RESTful API design with Express.js, Flask, and Next.js route handlers",
      "Secure authentication using JSON Web Tokens (JWT) and Role-Based Access Control (RBAC)",
      "Database schema modeling with MongoDB, Mongoose, MySQL, and PostgreSQL",
      "Frontier AI integrations including Google Gemini, Midjourney, and Kling AI",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Node.js",
      "Flask",
      "MongoDB",
      "Solidity",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    id: "exp-dev-02",
    title: "Modern Frontend Engineering & Design System Implementation",
    role: "Frontend Developer",
    category: "Software Development",
    organization: "Client & Software Solutions",
    period: "Continuous Practice",
    description:
      "Developing high-performance, responsive frontends with component-driven architectures. Converting Figma design specifications into pixel-perfect, accessible React components with smooth Framer Motion transitions and fluid theme switching.",
    focusAreas: [
      "Component library creation using modern Tailwind CSS and CSS variables",
      "State management using Redux and React context hooks for complex data grids",
      "Performance optimization, asset compression, and layout shift prevention",
      "Version control workflows with Git, GitHub, Postman, and automated Vercel CI/CD",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
      "Git & GitHub",
      "Postman",
    ],
  },
];
