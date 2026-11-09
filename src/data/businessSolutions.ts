import { BusinessSolution } from "@/types";

export const businessSolutionsData: BusinessSolution[] = [
  {
    id: "sol-01",
    slug: "hr-employee-management",
    title: "HR & Employee Management",
    category: "Human Capital",
    summary:
      "Modernize staff administration, automate payroll calculations, and empower team members with transparent self-service portals.",
    businessChallenges: [
      "Manual time-tracking and attendance reconciliation consumes dozens of HR hours each month.",
      "Payroll inaccuracies damage employee trust and incur compliance fines.",
      "Opaque leave approval chains cause operational bottlenecks during peak quarters.",
    ],
    proposedSolution:
      "A centralized HRMS platform unifying digital profiles, multi-tier leave approval automation, tax-compliant payroll generation, and executive headcount analytics.",
    keyFeatures: [
      "Biometric and geo-tagged clock-in/out attendance tracking",
      "One-click monthly payroll run with automated tax and deduction formulas",
      "Self-service employee portal for leave requests and digital payslips",
      "Comprehensive performance review cycles with KPI metrics",
    ],
    operationalBenefits: [
      "Cut payroll calculation time by up to 75%",
      "Eliminate manual leave tracking errors and scheduling conflicts",
      "Ensure 100% statutory labor law audit readiness",
    ],
    mockupType: "dashboard",
  },
  {
    id: "sol-02",
    slug: "inventory-warehouse-management",
    title: "Inventory & Warehouse Management",
    category: "Supply Chain",
    summary:
      "Synchronize multi-location stock, eradicate stock-outs, and automate vendor purchase orders with real-time inventory ledgering.",
    businessChallenges: [
      "Stock-outs of critical items result in lost revenue and dissatisfied customers.",
      "Deadstock and expired items tie up working capital in warehouses.",
      "Discrepancies between physical counts and system balances cause order fulfillment delays.",
    ],
    proposedSolution:
      "An automated multi-warehouse inventory management system offering SKU-level tracking, real-time stock transfer reconciliation, and intelligent reorder triggers.",
    keyFeatures: [
      "Real-time stock level visibility across all regional warehouses",
      "Automated low-stock threshold triggers and supplier purchase orders",
      "Batch, serial number, and barcode scanning support",
      "FIFO and Weighted Average inventory valuation calculations",
    ],
    operationalBenefits: [
      "Prevent stock-outs with proactive automated reordering",
      "Reduce excess carrying costs by up to 30%",
      "Achieve 99%+ inventory count accuracy across locations",
    ],
    mockupType: "inventory",
  },
  {
    id: "sol-03",
    slug: "crm-customer-management",
    title: "CRM & Customer Management",
    category: "Revenue Acceleration",
    summary:
      "Accelerate sales deal velocity, organize prospect interactions, and forecast revenue through visual pipeline management.",
    businessChallenges: [
      "Valuable inbound leads get neglected due to scattered spreadsheets and sticky notes.",
      "Sales leadership lacks visibility into deal stages and accurate revenue forecasts.",
      "Customer communications are disjointed across team members' personal inboxes.",
    ],
    proposedSolution:
      "A custom B2B CRM providing an intuitive visual Kanban deal pipeline, automated follow-up reminders, lead qualification scoring, and customer 360 histories.",
    keyFeatures: [
      "Drag-and-drop pipeline stages tailored to your exact sales process",
      "Complete interaction timelines covering emails, notes, calls, and meetings",
      "Lead scoring algorithms to prioritize high-intent opportunities",
      "Real-time sales velocity and conversion analytics",
    ],
    operationalBenefits: [
      "Boost lead conversion rates by systematically eliminating dropped follow-ups",
      "Shorten sales cycles with clear deal-stage accountability",
      "Provide management with reliable 90-day revenue forecasts",
    ],
    mockupType: "crm",
  },
  {
    id: "sol-04",
    slug: "erp-business-operations",
    title: "ERP & Business Operations",
    category: "Enterprise Infrastructure",
    summary:
      "Eliminate organizational silos by connecting procurement, inventory, finance, and human resources in a unified operational hub.",
    businessChallenges: [
      "Disjointed department tools force redundant data entry and produce contradictory reports.",
      "Procurement approvals take days to clear due to physical paperwork.",
      "Leadership struggles to assess the company's true financial and operational posture.",
    ],
    proposedSolution:
      "A modular Enterprise Resource Planning (ERP) platform featuring master data centralization, inter-departmental authorization workflows, and real-time ledger synchronization.",
    keyFeatures: [
      "Three-way matching for POs, Goods Receipt Notes, and vendor invoices",
      "Hierarchical authorization matrix for company-wide expenditures",
      "Centralized master data for customers, vendors, and product catalogs",
      "Consolidated executive control dashboard",
    ],
    operationalBenefits: [
      "Eliminate duplicated data entry across departments",
      "Reduce procurement cycle times from weeks to hours",
      "Establish a single source of truth for all enterprise operations",
    ],
    mockupType: "dashboard",
  },
  {
    id: "sol-05",
    slug: "financial-management",
    title: "Financial & Cash Flow Management",
    category: "Finance & Accounting",
    summary:
      "Take complete control of billing, expense categories, receivables, and cash flow projections with double-entry accounting precision.",
    businessChallenges: [
      "Delayed invoice dispatch leads to late customer payments and cash crunches.",
      "Uncategorized expenses make quarterly tax preparation a frantic rush.",
      "Lack of cash flow forecasting leaves founders blind to upcoming capital shortfalls.",
    ],
    proposedSolution:
      "A dedicated financial management suite providing automated professional invoicing, overdue payment alerts, receipt categorization, and 90-day cash flow projections.",
    keyFeatures: [
      "Recurring invoicing with integrated payment links and auto-reminders",
      "Expense tracking with digital receipt capture and tax classification",
      "Real-time cash flow runway visualization and burn-rate metrics",
      "One-click generation of Profit & Loss and Balance Sheet statements",
    ],
    operationalBenefits: [
      "Shorten Days Sales Outstanding (DSO) by up to 40%",
      "Eliminate year-end tax preparation stress with clean digital ledgers",
      "Gain clear foresight into future liquidity and working capital",
    ],
    mockupType: "finance",
  },
  {
    id: "sol-06",
    slug: "project-task-management",
    title: "Project & Task Management",
    category: "Team Productivity",
    summary:
      "Align distributed teams, track sprint deliverables, manage workloads, and meet project deadlines without bloated overhead.",
    businessChallenges: [
      "Project deliverables slip due to unclear ownership and missing task dependencies.",
      "Team members suffer from burnout while others are under-utilized.",
      "Clients constantly ask for status updates because progress is invisible.",
    ],
    proposedSolution:
      "A collaborative project management system offering flexible Kanban, Gantt, and tabular views, workload capacity balancers, and transparent client progress portals.",
    keyFeatures: [
      "Customizable project boards with sub-tasks, milestones, and dependencies",
      "Sprint planning tools with velocity metrics and automated burndowns",
      "Team workload capacity visualizer to balance assignments",
      "Time logging with billable hour tracking and timesheet exports",
    ],
    operationalBenefits: [
      "Deliver client projects on time and within budgeted scope",
      "Prevent developer burnout through balanced resource allocation",
      "Provide real-time milestone transparency to key stakeholders",
    ],
    mockupType: "kanban",
  },
  {
    id: "sol-07",
    slug: "business-intelligence-analytics",
    title: "Business Intelligence & Analytics",
    category: "Data & Strategy",
    summary:
      "Transform disorganized operational databases into interactive executive dashboards with live KPI tracking and predictive insights.",
    businessChallenges: [
      "Decision-makers wait days for analyst reports that become obsolete upon delivery.",
      "Raw database tables are too complex for non-technical stakeholders to interpret.",
      "Underperforming products or customer cohorts go unnoticed until revenue drops.",
    ],
    proposedSolution:
      "A high-speed Business Intelligence dashboard that pulls metrics from across your business, presents interactive trend charts, and alerts you to statistical anomalies.",
    keyFeatures: [
      "Real-time executive KPI metrics (LTV, CAC, MRR, Churn, Margin)",
      "Interactive multi-dimensional charts with instant date & segment cross-filtering",
      "Automated anomaly alerts sent to Slack or Email when metrics dip",
      "Scheduled executive digest reports delivered weekly",
    ],
    operationalBenefits: [
      "Make confident data-driven decisions in minutes instead of days",
      "Spot emerging market trends and customer churn signals proactively",
      "Empower non-technical department heads to explore their own data",
    ],
    mockupType: "analytics",
  },
  {
    id: "sol-08",
    slug: "manufacturing-management",
    title: "Manufacturing & Production Management",
    category: "Industrial Operations",
    summary:
      "Supervise shop-floor assembly, monitor machine uptime, enforce quality inspections, and track production yields.",
    businessChallenges: [
      "Unplanned machine breakdowns halt production lines and cause costly downtime.",
      "Inaccurate Bill of Materials (BOM) lead to material shortages during manufacturing runs.",
      "Paper-based quality control checks allow defective batches to reach packaging.",
    ],
    proposedSolution:
      "An industrial shop-floor execution portal tracking digital work orders, scheduled machine servicing, batch-level raw materials, and digital QA sign-offs.",
    keyFeatures: [
      "Interactive multi-level Bill of Materials (BOM) configurator",
      "Real-time machine status and Overall Equipment Effectiveness (OEE) metrics",
      "Digital QA inspection forms with pass/fail tolerances and photo capture",
      "Batch tracking ensuring FIFO material consumption on the factory floor",
    ],
    operationalBenefits: [
      "Minimize unplanned factory downtime with preventative maintenance schedules",
      "Reduce scrap and material wastage by up to 25%",
      "Maintain flawless quality control documentation for audits",
    ],
    mockupType: "manufacturing",
  },
  {
    id: "sol-09",
    slug: "custom-business-software",
    title: "Custom Business Software Development",
    category: "Tailored Architecture",
    summary:
      "Bespoke software tailored around your unique proprietary business processes when off-the-shelf SaaS fails to meet your exact workflow requirements.",
    businessChallenges: [
      "Generic SaaS platforms force your business to change its successful workflows to fit their tool.",
      "Per-seat licensing costs for enterprise software escalate rapidly as your company scales.",
      "Commercial platforms lack critical custom integrations with your proprietary hardware or legacy systems.",
    ],
    proposedSolution:
      "A custom-architected web application built specifically for your organization's business logic, granting you 100% intellectual property ownership and zero recurring per-user licensing fees.",
    keyFeatures: [
      "Software architecture designed 100% around your existing verified workflows",
      "Full source code ownership with zero recurring per-seat vendor fees",
      "Custom integrations with legacy databases, internal APIs, and hardware devices",
      "Enterprise security tailored to your company's data governance standards",
    ],
    operationalBenefits: [
      "Preserve your unique competitive advantage without software compromises",
      "Drastically cut long-term SaaS subscription overhead",
      "Scale features dynamically as your business model evolves",
    ],
    mockupType: "dashboard",
  },
  {
    id: "sol-10",
    slug: "workflow-automation",
    title: "Workflow & Business Process Automation",
    category: "Efficiency Engineering",
    summary:
      "Connect disconnected apps, automate repetitive data entry, and orchestrate complex business approvals automatically.",
    businessChallenges: [
      "Employees waste hours every day manually copying data between email, spreadsheets, and CRMs.",
      "Important client requests get delayed waiting for email-based approvals.",
      "Human data-entry mistakes trigger downstream fulfillment and billing errors.",
    ],
    proposedSolution:
      "Automated workflow pipelines and background event integrations that instantly transfer data, trigger status updates, and notify team members without manual intervention.",
    keyFeatures: [
      "Automated event listeners and webhooks across your business toolchain",
      "Multi-step automated notification workflows via WhatsApp, Email, or Slack",
      "Intelligent document parsing and data ingestion using modern AI APIs",
      "Error detection and retry mechanisms ensuring zero dropped tasks",
    ],
    operationalBenefits: [
      "Reclaim hundreds of employee hours every month from repetitive tasks",
      "Accelerate response turnaround times from hours to seconds",
      "Eliminate human copy-paste errors across core business records",
    ],
    mockupType: "workflow",
  },
];
