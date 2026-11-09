export interface WhyChooseMeReason {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const whyWorkWithMeData: WhyChooseMeReason[] = [
  {
    number: "01",
    title: "Dual Mastery: UI/UX Design + Full-Stack Engineering",
    description:
      "Most projects suffer from miscommunication between designers and coders. I bridge both disciplines—designing high-fidelity, user-centered Figma prototypes and then directly developing them into robust, production-grade web applications.",
    iconName: "Compass",
  },
  {
    number: "02",
    title: "Business-Oriented Problem Solving",
    description:
      "I don't just write code for code's sake. Every technical decision—from database indexing to UX micro-interactions—is evaluated through its ability to save business hours, increase conversions, or cut operational costs.",
    iconName: "TrendingUp",
  },
  {
    number: "03",
    title: "Clean, Maintainable & Scalable Architecture",
    description:
      "Strict TypeScript types, modular component hierarchies, and well-structured database schemas ensure that your codebase remains easy to maintain, extend, and onboard future developers to without technical debt.",
    iconName: "Code",
  },
  {
    number: "04",
    title: "Enterprise Aesthetics & Modern Tech Stack",
    description:
      "Using cutting-edge industry standards—Next.js 16, React, TypeScript, Tailwind CSS, PostgreSQL, and Prisma—ensuring high performance, search engine visibility, fast load times, and enterprise-grade security.",
    iconName: "ShieldCheck",
  },
  {
    number: "05",
    title: "Transparent & Proactive Communication",
    description:
      "No disappearing acts or technical jargon barriers. You receive clear milestone roadmaps, live staging previews, and regular progress updates throughout the entire development lifecycle.",
    iconName: "MessageSquare",
  },
  {
    number: "06",
    title: "Uncompromising Quality & Attention to Detail",
    description:
      "From pixel-accurate spacing and harmonious Dark/Light theme switching to WCAG accessibility and rock-solid form validation, every detail is engineered to build lasting client trust.",
    iconName: "CheckCircle2",
  },
];
