export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Business Solutions", href: "/business-solutions" },
  { title: "Services", href: "/services" },
  { title: "Achievements", href: "/achievements" },
  { title: "Contact", href: "/contact" },
];

export const projectInquiryCategories = [
  "Website Development",
  "UI/UX Design",
  "HR Management System",
  "Inventory Management",
  "CRM / ERP",
  "SaaS Application",
  "Admin Dashboard",
  "API Development",
  "AI Integration",
  "Business Automation",
  "Custom Software Development",
  "Other",
] as const;

export const budgetRanges = [
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000 - ₹5,00,000",
  "₹5,00,000+",
  "To be discussed",
] as const;

export const timelineOptions = [
  "Less than 2 weeks",
  "2 - 4 weeks",
  "1 - 2 months",
  "2 - 4 months",
  "Flexible / Long-term",
] as const;
