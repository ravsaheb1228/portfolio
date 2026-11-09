import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-01",
    slug: "hr-management-system",
    title: "HR Management System",
    category: "Human Resources",
    status: "In Progress",
    shortDescription:
      "Enterprise human resource suite featuring automated attendance, biometric sync, payroll engines, employee self-service, and HR analytics.",
    overview:
      "A comprehensive, role-based HRMS designed for mid-to-large enterprises to centralize workforce administration, reduce manual overhead, ensure labor compliance, and provide executive visibility through real-time headcount analytics.",
    businessProblem:
      "Growing companies struggle with fragmented employee records across disparate spreadsheets, manual payroll calculations prone to compliance errors, opaque leave tracking, and cumbersome employee onboarding workflows.",
    proposedSolution:
      "An integrated multi-tier enterprise web application delivering unified employee profiles, role-based self-service portals, automated leave approvals, calculated salary slips with tax deductions, and visual workforce analytics.",
    keyFeatures: [
      "Employee management with digital onboarding documents",
      "Attendance tracking with clock-in/clock-out & geo-fencing options",
      "Leave management system with hierarchical multi-level approval workflows",
      "Automated payroll calculation with salary slip generation and deductions",
      "Recruitment pipeline tracking from candidate screening to offer rollout",
      "Employee self-service portal for leave requests, tax declarations, and payslips",
      "Performance evaluation with 360-degree review cycles and KPI scoring",
      "HR analytics dashboard displaying attrition trends, headcount metrics, and payroll costs",
      "Strict role-based access control (Admin, HR Manager, Department Head, Employee)",
    ],
    techStack: [
      { name: "Next.js 16", role: "Full-stack framework with SSR & App Router" },
      { name: "TypeScript", role: "End-to-end type safety" },
      { name: "Tailwind CSS", role: "Design system & responsive interface" },
      { name: "Node.js & Express", role: "Payroll processing microservices" },
      { name: "PostgreSQL & Prisma", role: "Relational data modeling with audit logs" },
      { name: "Redis", role: "Session caching and rate limiting" },
    ],
    architectureOverview:
      "Clean modular architecture segregating the Next.js frontend presentation layer from dedicated business service domains (Auth, Attendance, Payroll, Leave). Employs server-side token authentication with RBAC guards, database transaction isolation for financial calculations, and asynchronous workers for monthly payslip PDF generation.",
    developmentChallenges: [
      "Designing a payroll state machine that accurately accounts for pro-rated unannounced leaves and variable shift timings.",
      "Structuring multi-level approval hierarchies that smoothly handle manager reassignments without breaking pending approvals.",
      "Ensuring responsive dashboard performance when querying historical attendance records for 5,000+ employees.",
    ],
    myContribution: [
      "Conducted domain research and wireframed user journeys in Figma for both HR admins and staff self-service.",
      "Architected relational schema in PostgreSQL with Prisma ORM for complex payroll and attendance records.",
      "Built responsive, accessible frontend views with real-time feedback and state management.",
      "Configured secure role-based API route guards ensuring strict data segregation across departments.",
    ],
    mockupType: "dashboard",
  },
  {
    id: "proj-02",
    slug: "inventory-management-system",
    title: "Inventory Management System",
    category: "Retail / Manufacturing",
    status: "In Progress",
    shortDescription:
      "Multi-warehouse inventory platform with real-time stock reconciliation, automated reorder triggers, supplier management, and purchase order lifecycles.",
    overview:
      "An industrial inventory control hub engineered for distributors and manufacturers to eliminate stock-outs, minimize dead inventory, and synchronize product movements across geographically distributed distribution centers.",
    businessProblem:
      "Retailers and manufacturers lose significant margin to inventory shrinkage, unmonitored stock expirations, manual stock audits, and delayed purchase orders caused by disjointed inventory data across branches.",
    proposedSolution:
      "A centralized inventory command center featuring barcode/SKU tracking, automated low-stock warnings, multi-warehouse stock transfer validation, supplier performance scoring, and end-to-end purchase order tracking.",
    keyFeatures: [
      "SKU and batch-level product catalog management with barcode generation",
      "Real-time stock level tracking across multiple physical and virtual warehouses",
      "Multi-warehouse stock requisition, dispatch, and transit reconciliation",
      "Supplier management directory with delivery turnaround metrics and terms",
      "Purchase order lifecycle: Request, Approval, Vendor Issuance, GRN inspection, and Stock In",
      "Low-stock threshold alerts with configurable safety buffer notifications",
      "Deadstock analysis and inventory valuation reports (FIFO / Weighted Average)",
      "Audit trail logging every inventory adjustment with reason codes",
    ],
    techStack: [
      { name: "Next.js", role: "App Router & SSR dashboard" },
      { name: "TypeScript", role: "Data contracts & inventory models" },
      { name: "Tailwind CSS", role: "High-density enterprise data tables" },
      { name: "MongoDB & Mongoose", role: "Flexible catalog schemas & audit events" },
      { name: "Zod", role: "Purchase order validation schemas" },
    ],
    architectureOverview:
      "Event-driven stock ledger design where all stock mutations (receipts, issues, adjustments, transfers) are logged as immutable ledger transactions, preventing phantom inventory counts and enabling instant audit rollbacks.",
    developmentChallenges: [
      "Handling concurrent stock deductions during peak purchase surges without race conditions.",
      "Supporting nested unit conversions (cases to packs to single items) with fractional rounding precision.",
    ],
    myContribution: [
      "Designed high-density inventory data grids with instant fuzzy filtering and batch selection in Figma.",
      "Developed custom React Hook Form validation for nested line-item purchase orders.",
      "Engineered optimistic UI updates for warehouse transfer operations.",
    ],
    mockupType: "inventory",
  },
  {
    id: "proj-03",
    slug: "customer-relationship-management",
    title: "Customer Relationship Management (CRM)",
    category: "Sales / Marketing",
    status: "In Progress",
    shortDescription:
      "Modern B2B sales acceleration suite with visual Kanban deal pipelines, lead qualification scoring, omnichannel interaction logs, and revenue forecasting.",
    overview:
      "A tailored CRM platform built to empower sales teams to track prospects through customized funnel stages, automate client follow-ups, and provide sales leadership with predictive revenue forecasting.",
    businessProblem:
      "Sales leads slip through the cracks when reps rely on disorganized notes, lack a unified communication history with prospects, and fail to prioritize high-intent leads over cold inquiries.",
    proposedSolution:
      "An intuitive visual CRM combining drag-and-drop pipeline management, automated lead scoring, centralized customer 360 profiles, scheduled task reminders, and transparent sales team leaderboards.",
    keyFeatures: [
      "Lead ingestion and qualification scoring based on engagement signals",
      "Comprehensive 360-degree customer profile with communication timeline",
      "Interactive drag-and-drop Kanban sales deal pipeline with customizable stages",
      "Task assignment, follow-up calendar, and automated reminder notifications",
      "Omnichannel interaction logs covering emails, meeting minutes, and call summaries",
      "Sales rep performance tracking, win/loss conversion ratios, and quotas",
      "Revenue forecasting models by closing probability and deal velocity",
      "Contact segmentation and exportable lists for targeted outreach",
    ],
    techStack: [
      { name: "Next.js", role: "Interactive dashboard & lead pipeline" },
      { name: "TypeScript", role: "Strict typing across CRM domain" },
      { name: "Tailwind CSS & Framer Motion", role: "Smooth drag-and-drop animations" },
      { name: "PostgreSQL", role: "Relational client and deal tracking" },
      { name: "Prisma", role: "Type-safe database ORM" },
    ],
    architectureOverview:
      "Client-side optimistic drag-and-drop pipeline with server action verification. Activity timeline built on an event stream model linking calls, emails, and notes to both accounts and individual stakeholder contacts.",
    developmentChallenges: [
      "Designing a frictionless kanban board experience that supports hundreds of deals without layout stutters.",
      "Creating a flexible custom field system permitting businesses to add arbitrary metadata to leads.",
    ],
    myContribution: [
      "Crafted sleek enterprise dark/light UI mockups prioritizing quick data entry and keyboard navigation.",
      "Implemented state synchronization for fluid drag-and-drop deal transitions.",
      "Formulated lead scoring algorithms based on company size, engagement frequency, and deal value.",
    ],
    mockupType: "crm",
  },
  {
    id: "proj-04",
    slug: "enterprise-resource-planning",
    title: "Enterprise Resource Planning (ERP)",
    category: "Enterprise Operations",
    status: "Planned",
    shortDescription:
      "Unified enterprise operational operating system integrating finance, procurement, warehousing, HR, and department-level governance into a single dashboard.",
    overview:
      "A next-generation enterprise resource planning platform engineered to dissolve corporate silos by harmonizing cross-departmental workflows, financial ledgers, and operational oversight.",
    businessProblem:
      "Siloed legacy systems create duplicate data entry, conflicting reports across finance and operations, painful vendor reconciliation, and slow executive decision-making.",
    proposedSolution:
      "A modular, extensible ERP framework with centralized master data management, synchronized ledger entries across procurement and sales, and multi-department governance workflows.",
    keyFeatures: [
      "Centralized master data management for vendors, clients, products, and chart of accounts",
      "Department-level budgeting, expense approvals, and real-time variance monitoring",
      "End-to-end procurement workflows with 3-way matching of POs, GRNs, and Invoices",
      "Inter-departmental requisition routing with hierarchical authorization matrix",
      "Integrated general ledger reflecting transactional movements in real-time",
      "Executive control tower with consolidated corporate health indicators",
      "Comprehensive audit trail satisfying statutory compliance and regulatory requirements",
    ],
    techStack: [
      { name: "Next.js 16", role: "Enterprise web client" },
      { name: "TypeScript", role: "Robust domain driven contracts" },
      { name: "Tailwind CSS", role: "Enterprise theme architecture" },
      { name: "PostgreSQL", role: "High-integrity relational backend" },
      { name: "Docker", role: "Containerized deployment architecture" },
    ],
    architectureOverview:
      "Domain-driven design (DDD) separating modules into bounded contexts (Finance, Procurement, Human Capital, Inventory) sharing a shared kernel of enterprise auth and audit logging.",
    developmentChallenges: [
      "Modeling complex multi-currency, multi-entity financial transactions with double-entry precision.",
      "Enforcing strict database constraints to ensure balance sheet zero-sum invariants.",
    ],
    myContribution: [
      "Drafted high-level system architecture and entity-relationship diagrams.",
      "Formulated clean UI components for complex tabular financial ledgers.",
      "Defined modular plugin structure allowing companies to toggle optional enterprise modules.",
    ],
    mockupType: "dashboard",
  },
  {
    id: "proj-05",
    slug: "project-task-management",
    title: "Project and Task Management",
    category: "Productivity",
    status: "In Progress",
    shortDescription:
      "Collaborative project execution workspace featuring Kanban, Gantt timelines, milestone tracking, resource capacity planning, and sprint burndown charts.",
    overview:
      "A modern project management tool designed for engineering and creative teams who require clarity over sprint milestones, task assignments, and time-tracking without the bloat of legacy enterprise tools.",
    businessProblem:
      "Teams experience scope creep, missed deadlines, and uneven workload distribution when task tracking is fragmented between chat apps and outdated spreadsheets.",
    proposedSolution:
      "A high-velocity collaboration tool providing multiple project views (Kanban board, List view, Gantt milestone chart), integrated time logging, and workload balancing.",
    keyFeatures: [
      "Multi-view project workspace: Kanban board, List table, Calendar, and Gantt roadmap",
      "Granular task breakdown with subtasks, markdown descriptions, attachments, and dependencies",
      "Sprint planning tools with story point estimation and automated burndown charts",
      "Team workload capacity visualizer preventing member burnout",
      "Time logging module with billable hours calculation and timesheet exports",
      "Activity notification feed with mention tagging and thread discussions",
      "Milestone progress trackers with automated risk indicators",
    ],
    techStack: [
      { name: "Next.js", role: "App Router client with server components" },
      { name: "TypeScript", role: "Component and state type safety" },
      { name: "Framer Motion", role: "Smooth list transitions and drag physics" },
      { name: "Tailwind CSS", role: "Clean modern SaaS aesthetics" },
      { name: "MongoDB", role: "Flexible task document structures" },
    ],
    architectureOverview:
      "Reactive client architecture leveraging optimistic UI updates for task state changes, with debounced server sync to ensure rapid responsiveness during heavy sprint planning sessions.",
    developmentChallenges: [
      "Calculating critical path dependencies on Gantt charts without browser repaint lag.",
      "Implementing efficient real-time collaborative comment threads.",
    ],
    myContribution: [
      "Designed full UI design system in Figma including interactive Kanban cards and status badges.",
      "Developed reusable UI components for modal dialogs, tag selectors, and date pickers.",
      "Built client-side task filtering by assignee, priority, sprint, and tag.",
    ],
    mockupType: "kanban",
  },
  {
    id: "proj-06",
    slug: "finance-accounting-management",
    title: "Finance and Accounting Management",
    category: "Finance",
    status: "Planned",
    shortDescription:
      "Automated financial ledger and invoicing platform offering GST/tax compliance, expense categorizations, cash flow forecasting, and payment reconciliation.",
    overview:
      "A specialized accounting and bookkeeping platform for businesses seeking total visibility into their operating cash flow, customer receivables, vendor payables, and tax filing readiness.",
    businessProblem:
      "Unreconciled invoices cause delayed receivables, cash flow blind spots, and frantic end-of-year tax filing scrambles for growing businesses.",
    proposedSolution:
      "A modern financial dashboard that automates professional PDF invoice generation, tracks recurring expenses, synchronizes bank statements, and projects 90-day cash flow trends.",
    keyFeatures: [
      "Custom branded invoice generator with automated recurring billing schedules",
      "Accounts receivable tracking with overdue reminders and payment status tags",
      "Expense management with receipt OCR upload and tax categorization",
      "Cash flow forecasting graph highlighting projected income vs. scheduled liabilities",
      "Multi-currency support with dynamic foreign exchange rate conversion",
      "Profit & Loss (P&L), Balance Sheet, and Trial Balance report generation",
      "Payment gateway webhook integration for instant invoice settlement",
    ],
    techStack: [
      { name: "Next.js", role: "Full-stack SSR web app" },
      { name: "TypeScript", role: "Financial decimal calculations & data integrity" },
      { name: "Tailwind CSS", role: "Precision tabular reporting interfaces" },
      { name: "PostgreSQL", role: "Double-entry transactional ledger" },
      { name: "Zod", role: "Strict invoice schema verification" },
    ],
    architectureOverview:
      "Double-entry bookkeeping core where every debit entry is mathematically paired with a credit entry, backed by immutable database transaction logs and cryptographic audit hashes.",
    developmentChallenges: [
      "Preventing floating-point arithmetic errors in currency calculations using integer-based cents.",
      "Generating pixel-perfect PDF invoices on the server under strict latency constraints.",
    ],
    myContribution: [
      "Designed intuitive financial dashboards emphasizing key metrics (Burn Rate, Runway, Net Margin).",
      "Engineered validation schemas for multi-tax line-item calculations.",
      "Structured clean export utilities for CSV and PDF financial statements.",
    ],
    mockupType: "finance",
  },
  {
    id: "proj-07",
    slug: "e-commerce-management-platform",
    title: "E-Commerce Management Platform",
    category: "E-Commerce",
    status: "In Progress",
    shortDescription:
      "Omnichannel e-commerce merchant backoffice managing product catalogs, payment gateways, coupon rules, shipping carrier dispatch, and sales conversions.",
    overview:
      "A high-performance merchant admin portal that consolidates online storefront sales, catalog updates, inventory reservations, customer loyalty, and order fulfillment logistics.",
    businessProblem:
      "E-commerce merchants face order delays, overselling, and lost sales due to disconnected backends between storefronts, shipping partners, and inventory levels.",
    proposedSolution:
      "A centralized commerce operating engine orchestrating instant order processing, dynamic coupon campaigns, customer lifetime value tracking, and carrier API integrations.",
    keyFeatures: [
      "Comprehensive product catalog management with variants, attributes, and image galleries",
      "Order fulfillment pipeline: New, Processing, Packed, Shipped, Delivered, Returned",
      "Real-time inventory reservation preventing double-selling during promotional flash sales",
      "Payment gateway orchestration (Razorpay, Stripe) with automated refund management",
      "Promotional discount engine supporting percentage, flat, and tiered bundle rules",
      "Shipping carrier label generation and automated tracking webhook listeners",
      "Customer analytics tracking repeat purchase rates, AOV (Average Order Value), and churn",
    ],
    techStack: [
      { name: "Next.js 16", role: "App Router storefront & admin console" },
      { name: "TypeScript", role: "Strict e-commerce domain models" },
      { name: "Tailwind CSS", role: "Modern e-commerce UI design" },
      { name: "MongoDB", role: "Flexible catalog and order records" },
      { name: "Stripe / Razorpay API", role: "Secure payment processing" },
    ],
    architectureOverview:
      "Microservice-inspired architecture using event queues for order placement and fulfillment updates, decoupling user checkout response time from downstream warehouse tasks.",
    developmentChallenges: [
      "Preventing race conditions during flash sales when remaining stock drops to single digits.",
      "Designing a coupon validation engine that handles complex cart-level constraints.",
    ],
    myContribution: [
      "Created sleek product management views with drag-and-drop image reordering in Figma.",
      "Implemented responsive order management tables with live status filters and quick actions.",
      "Built resilient API route handlers for payment verification webhooks.",
    ],
    mockupType: "ecommerce",
  },
  {
    id: "proj-08",
    slug: "hospital-clinic-management",
    title: "Hospital and Clinic Management",
    category: "Healthcare",
    status: "Planned",
    shortDescription:
      "Healthcare administration system facilitating electronic medical records (EMR), doctor schedules, patient appointments, e-prescriptions, and medical billing.",
    overview:
      "A HIPAA/data-privacy conscious clinical software suite enabling outpatient clinics and hospitals to digitize patient journeys from reception registration to doctor consultation and pharmacy dispatch.",
    businessProblem:
      "Long patient wait times, lost physical prescription files, double-booked doctor slots, and manual billing errors degrade patient trust and increase administrative burdens on medical staff.",
    proposedSolution:
      "A secure, role-restricted medical management suite with digital appointment scheduling, structured EMR notes, doctor availability calendars, and integrated pharmacy billing.",
    keyFeatures: [
      "Patient registry with medical history, allergy alerts, and emergency contacts",
      "Doctor roster and appointment scheduling with automated SMS/email reminders",
      "Doctor consultation portal with quick ICD-code diagnosis and digital prescription builder",
      "Pharmacy dispensing management linked directly to clinical prescriptions",
      "Inpatient room allocation and bed occupancy monitoring",
      "Consolidated medical billing covering consultation fees, lab tests, and procedures",
      "Strict data privacy controls ensuring only authorized clinicians access health records",
    ],
    techStack: [
      { name: "Next.js", role: "Clinical interface with role protection" },
      { name: "TypeScript", role: "Type-safe clinical record structures" },
      { name: "Tailwind CSS", role: "Clean, high-legibility healthcare UI" },
      { name: "PostgreSQL", role: "Encrypted healthcare database" },
      { name: "Zod", role: "Prescription and diagnosis payload validation" },
    ],
    architectureOverview:
      "Multi-tenant clinical platform with encrypted patient record storage at rest, fine-grained access control ensuring medical confidentiality, and audit trails for all record lookups.",
    developmentChallenges: [
      "Balancing high data security requirements with clinician UX speed during rapid consultations.",
      "Designing an intuitive prescription builder that prevents contraindication oversights.",
    ],
    myContribution: [
      "Researched clinical workflows to design high-clarity appointment cards and patient timeline views.",
      "Structured role-based authentication flows for doctors, nurses, and billing staff.",
      "Created responsive mobile views for doctors reviewing schedules on rounds.",
    ],
    mockupType: "health",
  },
  {
    id: "proj-09",
    slug: "business-intelligence-analytics",
    title: "Business Intelligence and Analytics",
    category: "Business Intelligence",
    status: "In Progress",
    shortDescription:
      "Executive decision support platform with dynamic KPI charts, interactive cross-filtering, cohort retention analysis, and automated business health reports.",
    overview:
      "An executive analytics dashboard turning raw operational metrics into actionable strategic insights through interactive data visualizations, trend forecasting, and instant metric drill-downs.",
    businessProblem:
      "Executives drown in static monthly spreadsheets that take days to prepare and provide zero capability to drill into the root cause of declining sales or operational bottlenecks.",
    proposedSolution:
      "A real-time BI portal consolidating metrics across marketing, sales, and operations into customizable dashboard widgets with anomaly alerts and exportable board-room summaries.",
    keyFeatures: [
      "Executive KPI summary board (MRR, CAC, LTV, Net Churn, Operating Margin)",
      "Interactive data visualizations: Trend lines, cohort heatmaps, breakdown charts, and geo maps",
      "Dynamic cross-filtering permitting users to slice metrics by date range, region, and product",
      "Anomaly detection alerts flagging unusual dips in conversions or surges in churn",
      "Custom query builder allowing department managers to compile bespoke reports",
      "Automated weekly email summaries delivered directly to executive stakeholders",
      "High-speed metric aggregation caching sub-second dashboard rendering",
    ],
    techStack: [
      { name: "Next.js", role: "Dashboard architecture and server rendering" },
      { name: "TypeScript", role: "Strict data visualization schemas" },
      { name: "Tailwind CSS", role: "Enterprise dark/light dashboard theme" },
      { name: "PostgreSQL & Redis", role: "Pre-aggregated metric views and caching" },
      { name: "Framer Motion", role: "Smooth chart transitions and card reveals" },
    ],
    architectureOverview:
      "Read-optimized architecture utilizing database materialized views and Redis caching layers to ensure interactive dashboard queries execute in under 100 milliseconds.",
    developmentChallenges: [
      "Optimizing complex SQL aggregation queries across millions of transactional data rows.",
      "Creating accessible, responsive data charts that scale gracefully from desktop monitors to mobile screens.",
    ],
    myContribution: [
      "Designed the entire BI dashboard suite with bespoke high-contrast data visualization palettes in Figma.",
      "Implemented modular widget grid architecture allowing drag-and-drop dashboard personalization.",
      "Created reusable chart wrapper components with dark/light mode automatic re-styling.",
    ],
    mockupType: "analytics",
  },
  {
    id: "proj-10",
    slug: "manufacturing-production-management",
    title: "Manufacturing and Production Management",
    category: "Manufacturing",
    status: "Planned",
    shortDescription:
      "Shop floor execution system managing bill of materials (BOM), work orders, machine uptime, quality assurance checks, and output yield tracking.",
    overview:
      "An industrial manufacturing execution platform (MES) connecting plant managers, line supervisors, and quality inspectors to optimize assembly throughput and minimize machine downtime.",
    businessProblem:
      "Factory floors suffer from unexpected machine breakdowns, material wastage from improper BOM batching, paper-based quality control logs, and lack of real-time production visibility.",
    proposedSolution:
      "A connected shop-floor portal that monitors machine statuses, schedules preventative maintenance, tracks work orders through assembly stages, and logs digital QA inspection checkpoints.",
    keyFeatures: [
      "Hierarchical Bill of Materials (BOM) management with unit cost estimation",
      "Digital Work Order scheduling and shop-floor routing through production stages",
      "Machine telemetry and maintenance status tracking (Running, Idle, Under Maintenance)",
      "Quality assurance inspection checklists with pass/fail tolerances and defect tagging",
      "Raw material batch allocation ensuring strict FIFO material consumption",
      "Overall Equipment Effectiveness (OEE) metrics calculation (Availability, Performance, Quality)",
      "Operator shift scheduling and line efficiency reporting",
    ],
    techStack: [
      { name: "Next.js", role: "Plant management web interface" },
      { name: "TypeScript", role: "Shop-floor domain models and validation" },
      { name: "Tailwind CSS", role: "Industrial dashboard design" },
      { name: "PostgreSQL", role: "Relational database with audit logs" },
      { name: "Docker", role: "On-premise edge or cloud containerization" },
    ],
    architectureOverview:
      "Industrial IoT-ready software architecture with resilient event ingestion pipelines capable of absorbing machine sensor telemetry and updating line supervisor boards without UI latency.",
    developmentChallenges: [
      "Structuring complex multi-level BOM trees with dynamic component substitution rules.",
      "Ensuring the web interface remains fully usable on ruggedized shop-floor touchscreen tablets.",
    ],
    myContribution: [
      "Created wireframes and user interaction flows tailored for plant floor tablet environments.",
      "Formulated mathematical models for real-time OEE (Overall Equipment Effectiveness) scoring.",
      "Constructed modular UI cards for machine status indicators and maintenance scheduling.",
    ],
    mockupType: "manufacturing",
  },
];
