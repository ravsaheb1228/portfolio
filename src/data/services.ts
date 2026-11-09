import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "srv-01",
    title: "Custom Web Application Development",
    shortDescription:
      "End-to-end development of bespoke, responsive web applications engineered for speed, security, and scalability.",
    capabilities: [
      "Custom business logic implementation",
      "Next.js App Router & Server Components",
      "Responsive design across mobile, tablet, and ultra-wide screens",
      "Progressive Web App (PWA) readiness & offline optimization",
    ],
    businessBenefits: [
      "Tailored precisely to your operational workflow",
      "Fast page load times that improve visitor conversion rates",
      "Zero monthly per-seat licensing fees",
    ],
    iconName: "Globe",
  },
  {
    id: "srv-02",
    title: "UI/UX & Product Design",
    shortDescription:
      "Creating intuitive user interfaces, comprehensive design systems, and clickable Figma prototypes that delight users.",
    capabilities: [
      "User journey mapping & information architecture",
      "Low-fidelity wireframing & interactive Figma prototypes",
      "Enterprise design systems with reusable tokens & typography scales",
      "Dual-theme (Dark/Light mode) harmonization & WCAG accessibility",
    ],
    businessBenefits: [
      "Reduce user onboarding friction and support tickets",
      "Increase software adoption across non-technical team members",
      "Accelerate frontend engineering with clear design-to-code specs",
    ],
    iconName: "Palette",
  },
  {
    id: "srv-03",
    title: "Full-Stack Development",
    shortDescription:
      "Complete stack engineering connecting robust database backends, RESTful APIs, and reactive frontend experiences.",
    capabilities: [
      "Frontend & backend unification in Next.js & Node.js",
      "Type-safe data contracts from database to UI with TypeScript & Zod",
      "Authentication, session management, and RBAC authorization",
      "Optimistic UI updates with resilient error recovery",
    ],
    businessBenefits: [
      "Single point of technical accountability across the entire stack",
      "Seamless integration between user interface and backend logic",
      "Cost-effective development with modern unified JavaScript/TypeScript toolchains",
    ],
    iconName: "Layers",
  },
  {
    id: "srv-04",
    title: "SaaS Product Development",
    shortDescription:
      "Architecting multi-tenant Software-as-a-Service platforms with subscription billing, team workspaces, and analytics.",
    capabilities: [
      "Multi-tenant database schema isolation",
      "Subscription management and payment gateway integration",
      "User role hierarchies and team collaboration workspaces",
      "Usage monitoring and feature gating based on plan tiers",
    ],
    businessBenefits: [
      "Launch your SaaS MVP rapidly with scalable architectural foundations",
      "Automate recurring revenue collection and subscription upgrades",
      "Scale smoothly from initial beta users to enterprise client cohorts",
    ],
    iconName: "Cloud",
  },
  {
    id: "srv-05",
    title: "Admin Dashboard Development",
    shortDescription:
      "Building high-density, real-time command centers and control towers for data-driven operational decision making.",
    capabilities: [
      "Real-time KPI metrics, charts, and interactive drill-downs",
      "Advanced data grids with fuzzy search, multi-column sorting, and exports",
      "Audit logging and operational event tracking",
      "Configurable widget grids tailored for executive and managerial roles",
    ],
    businessBenefits: [
      "Empower executives with real-time operational visibility",
      "Cut down hours spent manually compiling internal status reports",
      "Rapidly identify bottlenecks and operational anomalies",
    ],
    iconName: "LayoutDashboard",
  },
  {
    id: "srv-06",
    title: "API Development & Integration",
    shortDescription:
      "Designing secure, documented RESTful APIs and connecting third-party services like payments, SMS, and CRMs.",
    capabilities: [
      "RESTful API design with comprehensive OpenAPI / Swagger documentation",
      "Webhook listeners with idempotent processing and retry queues",
      "Third-party integrations (Stripe, Razorpay, Twilio, SendGrid, etc.)",
      "API rate limiting, input sanitization, and DDoS protection",
    ],
    businessBenefits: [
      "Connect your internal software seamlessly with third-party ecosystems",
      "Prevent data loss during external service downtime with resilient queues",
      "Enable mobile apps and partners to consume your core services safely",
    ],
    iconName: "Network",
  },
  {
    id: "srv-07",
    title: "Database Design & Optimization",
    shortDescription:
      "Structuring relational and NoSQL database schemas with high integrity, optimized indexing, and audit logs.",
    capabilities: [
      "Relational schema modeling in PostgreSQL & MySQL",
      "Document store schema design with MongoDB & Mongoose",
      "Type-safe migrations and queries using Prisma ORM",
      "Query indexing, indexing strategies, and database transaction isolation",
    ],
    businessBenefits: [
      "Guarantee zero data corruption or balance inconsistencies",
      "Ensure instantaneous search and aggregation even as data scales",
      "Comply with enterprise audit and historical record retention needs",
    ],
    iconName: "Database",
  },
  {
    id: "srv-08",
    title: "AI-Powered Applications",
    shortDescription:
      "Integrating state-of-the-art LLMs and multimodal AI APIs to automate classification, summarization, and customer interactions.",
    capabilities: [
      "Google Gemini API integration for document understanding and reasoning",
      "Automated content summarization, classification, and drafting",
      "Conversational AI assistants grounded in internal company knowledge",
      "Prompt engineering and deterministic output parsing with Zod",
    ],
    businessBenefits: [
      "Automate hours of repetitive document analysis and customer triage",
      "Differentiate your digital product with modern intelligent features",
      "Keep operational overhead low while handling 10x customer inquiry volume",
    ],
    iconName: "Cpu",
  },
  {
    id: "srv-09",
    title: "Business Process Automation",
    shortDescription:
      "Eliminating manual data transfer, paper-based forms, and repetitive tasks with background automation workflows.",
    capabilities: [
      "Cross-platform data synchronization pipelines",
      "Automated email, SMS, and WhatsApp alerts based on business events",
      "Digital multi-stage approval workflows replacing paper trails",
      "Scheduled background jobs and batch ledger reconciliations",
    ],
    businessBenefits: [
      "Free valuable staff from tedious, repetitive manual data entry",
      "Accelerate customer turnaround times from hours to real-time",
      "Dramatically reduce costly human transcription errors",
    ],
    iconName: "Workflow",
  },
  {
    id: "srv-10",
    title: "Existing Application Modernization",
    shortDescription:
      "Auditing, refactoring, and upgrading legacy codebases to modern Next.js, TypeScript, and clean responsive UI.",
    capabilities: [
      "Frontend modernization and design system overhaul",
      "Performance optimization, Core Web Vitals fixes, and bundle shrinking",
      "Migration of legacy JavaScript codebases to strict TypeScript",
      "Security audit and API endpoint vulnerability hardening",
    ],
    businessBenefits: [
      "Extend the lifespan and ROI of existing software investments",
      "Improve user experience without having to rebuild from scratch",
      "Reduce server hosting costs through optimized performance",
    ],
    iconName: "Sparkles",
  },
];
