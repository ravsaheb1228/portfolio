import React from "react";
import {
  Search,
  FileText,
  SlidersHorizontal,
  Bot,
  Sparkles,
} from "lucide-react";

interface DashboardMockupProps {
  type?:
    | "dashboard"
    | "analytics"
    | "kanban"
    | "inventory"
    | "workflow"
    | "crm"
    | "health"
    | "finance"
    | "ecommerce"
    | "manufacturing";
  title?: string;
  badge?: string;
  className?: string;
}

export function DashboardMockup({
  type = "dashboard",
  title = "Enterprise Platform Console",
  badge = "Live System",
  className = "",
}: DashboardMockupProps) {
  return (
    <div
      className={`rounded-2xl border border-(--border-strong) bg-(--bg-surface) shadow-2xl overflow-hidden font-sans text-xs select-none ${className}`}
    >
      {/* Top Application Bar - Clean macOS styling like Image 1 */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-(--border) bg-(--bg-elevated)/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-(--bg-base) border border-(--border) text-[11px] font-mono text-(--text-secondary)">
            <span className="text-emerald-500">https://</span>
            <span>app.ravsaheb.internal/{type}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {badge}
          </span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Workspace Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-1 border-b border-(--border)/60">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-(--text-muted) font-semibold">
              Aggregated Enterprise Metrics
            </div>
            <h4 className="text-sm sm:text-base font-bold text-(--text-primary)">
              {title}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-(--border) bg-(--bg-base) text-(--text-secondary) text-[11px]">
              <Search className="w-3 h-3 text-(--text-muted)" />
              <span>Filter entities...</span>
            </div>
            <div className="p-1.5 rounded-lg border border-(--border) bg-(--bg-base) text-(--text-secondary)">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Dynamic Mockup Body by Type */}
        {renderMockupBody(type)}
      </div>
    </div>
  );
}

function renderMockupBody(type: DashboardMockupProps["type"]) {
  switch (type) {
    case "inventory":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Total SKUs</div>
              <div className="text-sm sm:text-base font-bold text-(--text-primary) mt-0.5">
                14,820
              </div>
              <span className="text-[10px] text-emerald-500 font-medium">99.4% in-stock</span>
            </div>
            <div className="p-3 rounded-xl border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Warehouses</div>
              <div className="text-sm sm:text-base font-bold text-(--text-primary) mt-0.5">
                8 Active
              </div>
              <span className="text-[10px] text-indigo-500 font-medium">Hubs synced</span>
            </div>
            <div className="p-3 rounded-xl border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Low Stock Alerts</div>
              <div className="text-sm sm:text-base font-bold text-amber-500 mt-0.5">
                12 Items
              </div>
              <span className="text-[10px] text-amber-500 font-medium">Auto-PO drafted</span>
            </div>
          </div>

          <div className="rounded-xl border border-(--border) overflow-hidden">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead className="bg-(--bg-elevated) text-(--text-secondary)">
                <tr>
                  <th className="py-2 px-3">Item / SKU</th>
                  <th className="py-2 px-3">Warehouse</th>
                  <th className="py-2 px-3">Units</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--border) text-(--text-primary)">
                <tr>
                  <td className="py-2.5 px-3 font-mono">SKU-9921 Industrial Controller</td>
                  <td className="py-2.5 px-3">Mumbai Hub 1</td>
                  <td className="py-2.5 px-3 font-semibold">1,240</td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                      Normal
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-mono">SKU-4402 Sensor Transceiver</td>
                  <td className="py-2.5 px-3">Bengaluru Facility</td>
                  <td className="py-2.5 px-3 font-semibold">48</td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-500 font-medium">
                      Reorder
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case "crm":
      return (
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base) space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-(--text-secondary)">
              <span>Qualified (4)</span>
              <span className="font-mono text-[10px]">₹4.2L</span>
            </div>
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-surface) space-y-1 shadow-xs">
              <div className="font-semibold text-(--text-primary)">Apex Logistics Ltd</div>
              <div className="text-[10px] text-(--text-secondary)">Fleet ERP Integration</div>
              <div className="flex justify-between items-center text-[10px] pt-1.5 border-t border-(--border)">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">₹1,80,000</span>
                <span className="text-amber-500 font-medium">High Intent</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base) space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-(--text-secondary)">
              <span>Proposal (2)</span>
              <span className="font-mono text-[10px]">₹7.5L</span>
            </div>
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-surface) space-y-1 shadow-xs">
              <div className="font-semibold text-(--text-primary)">Metro Healthcare</div>
              <div className="text-[10px] text-(--text-secondary)">Clinic Portal & EMR</div>
              <div className="flex justify-between items-center text-[10px] pt-1.5 border-t border-(--border)">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">₹4,50,000</span>
                <span className="text-indigo-500 font-medium">Reviewing</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Won Deals</span>
              <span className="font-mono text-[10px]">₹12.8L</span>
            </div>
            <div className="p-2.5 rounded-lg border border-emerald-500/20 bg-(--bg-surface) space-y-1 shadow-xs">
              <div className="font-semibold text-(--text-primary)">Omni Retail Group</div>
              <div className="text-[10px] text-(--text-secondary)">Multi-Store Inventory</div>
              <div className="flex justify-between items-center text-[10px] pt-1.5 border-t border-(--border)">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">₹5,20,000</span>
                <span className="text-emerald-500 font-semibold">Active</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "analytics":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Monthly Run Rate</div>
              <div className="text-sm font-bold text-(--text-primary)">₹8,45,000</div>
              <div className="text-[9px] text-emerald-500 font-medium">+18.4% vs last mo</div>
            </div>
            <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Net Retention</div>
              <div className="text-sm font-bold text-(--text-primary)">118%</div>
              <div className="text-[9px] text-emerald-500 font-medium">Top decile</div>
            </div>
            <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">CAC Payback</div>
              <div className="text-sm font-bold text-(--text-primary)">3.2 mos</div>
              <div className="text-[9px] text-indigo-500 font-medium">Efficient</div>
            </div>
            <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Active Workflows</div>
              <div className="text-sm font-bold text-(--text-primary)">94,200</div>
              <div className="text-[9px] text-emerald-500 font-medium">99.98% uptime</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-(--border) bg-(--bg-base)">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-semibold text-(--text-primary)">
                Revenue Growth & Capacity Curve
              </span>
              <span className="text-[10px] text-(--text-secondary)">Last 6 Months</span>
            </div>
            <div className="h-16 flex items-end gap-2 pt-2">
              {[35, 48, 42, 65, 78, 92].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t-md bg-linear-to-t from-indigo-600 via-blue-500 to-cyan-400 opacity-90 transition-all hover:opacity-100"
                  />
                  <span className="text-[9px] text-(--text-muted) font-mono">
                    {["M1", "M2", "M3", "M4", "M5", "M6"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "kanban":
      return (
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base) space-y-1.5">
            <div className="text-[10px] font-bold text-(--text-secondary)">
              Sprint Backlog (3)
            </div>
            <div className="p-2 rounded-lg border border-(--border) bg-(--bg-surface) text-[10px] shadow-xs">
              <div className="font-semibold text-(--text-primary)">
                Payroll Tax Engine v2
              </div>
              <div className="text-[9px] text-(--text-muted) mt-1">High Priority • 8 pts</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-1.5">
            <div className="text-[10px] font-bold text-indigo-500">In Development (2)</div>
            <div className="p-2 rounded-lg border border-indigo-500/20 bg-(--bg-surface) text-[10px] shadow-xs">
              <div className="font-semibold text-(--text-primary)">
                Bio-metric Sync Webhook
              </div>
              <div className="text-[9px] text-indigo-500 mt-1">Ravsaheb K. • 5 pts</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1.5">
            <div className="text-[10px] font-bold text-emerald-500">Verified QA (6)</div>
            <div className="p-2 rounded-lg border border-emerald-500/20 bg-(--bg-surface) text-[10px] shadow-xs">
              <div className="font-semibold text-(--text-primary)">
                JWT Auth & Session Guards
              </div>
              <div className="text-[9px] text-emerald-600 mt-1">Passed • Merged</div>
            </div>
          </div>
        </div>
      );

    case "finance":
      return (
        <div className="space-y-2.5">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base)">
              <span className="text-[10px] text-(--text-secondary)">Net Receivables</span>
              <div className="text-sm font-bold text-(--text-primary)">₹12,40,000</div>
              <span className="text-[9px] text-emerald-500">₹9.8L paid this week</span>
            </div>
            <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base)">
              <span className="text-[10px] text-(--text-secondary)">Operating Runway</span>
              <div className="text-sm font-bold text-(--text-primary)">14.2 Months</div>
              <span className="text-[9px] text-indigo-500">Healthy buffer</span>
            </div>
            <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base)">
              <span className="text-[10px] text-(--text-secondary)">Tax Invoices</span>
              <div className="text-sm font-bold text-(--text-primary)">42 Cleared</div>
              <span className="text-[9px] text-emerald-500">GST matched</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl border border-(--border) bg-(--bg-base) flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-indigo-500" />
              <span>INV-2026-088 • Apex Global Solutions</span>
            </div>
            <span className="font-mono font-bold text-emerald-500">₹2,84,000 (Settled)</span>
          </div>
        </div>
      );

    case "dashboard":
    default:
      // Inspired directly by Clerio SaaS Dashboard in Image 1
      return (
        <div className="space-y-3">
          {/* Top row: 3 Clerio-style metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Metric 1 */}
            <div className="p-3 rounded-2xl border border-(--border) bg-(--bg-base) space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-(--text-secondary)">
                <span className="font-medium">Automation Rate</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="text-lg font-extrabold text-(--text-primary)">72.52%</div>
              <div className="flex items-center gap-1">
                {[4, 8, 12, 10, 16, 14, 18, 16, 20, 22].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-1 rounded-full bg-emerald-500/70"
                  />
                ))}
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-3 rounded-2xl border border-(--border) bg-(--bg-base) space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-(--text-secondary)">
                <span className="font-medium">Reconciled Statements</span>
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>
              <div className="text-lg font-extrabold text-(--text-primary)">61.23%</div>
              <div className="flex items-center gap-1">
                {[6, 10, 14, 12, 18, 16, 20, 18, 22, 24].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-1 rounded-full bg-indigo-500/70"
                  />
                ))}
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-3 rounded-2xl border border-(--border) bg-(--bg-base) space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-(--text-secondary)">
                <span className="font-medium">On-Time Closures</span>
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <div className="text-lg font-extrabold text-(--text-primary)">77.24%</div>
              <div className="flex items-center gap-1">
                {[8, 12, 16, 14, 20, 18, 22, 20, 24, 26].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-1 rounded-full bg-blue-500/70"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: System Overview & Embedded AI Assistant (Image 1 & 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
            {/* Left 7 cols: Enterprise Progress */}
            <div className="sm:col-span-7 p-3.5 rounded-2xl border border-(--border) bg-(--bg-base) space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-(--text-primary)">
                <span>Active Production Deployments</span>
                <span className="text-[10px] font-mono text-emerald-500 font-bold">100% HEALTH</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] text-(--text-secondary) mb-1">
                    <span>Full-Stack HRMS & Attendance Sync</span>
                    <span className="font-semibold text-(--text-primary)">98.2%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-(--border) overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-600 to-indigo-600 rounded-full w-[98%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-(--text-secondary) mb-1">
                    <span>Inventory Reorder & Multi-Warehouse</span>
                    <span className="font-semibold text-(--text-primary)">94.6%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-(--border) overflow-hidden">
                    <div className="h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full w-[94%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: AI Co-Pilot chat prompt (Image 1 Clerio AI Assistant) */}
            <div className="sm:col-span-5 p-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                <span className="flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Assistant</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-mono">
                  Gemini API
                </span>
              </div>
              <div className="p-2 rounded-xl bg-(--bg-surface) border border-(--border) text-[10px] text-(--text-secondary) space-y-1">
                <div className="font-medium text-(--text-primary) flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-500" />
                  <span>Automated PDF Parsing</span>
                </div>
                <div className="text-(--text-muted) text-[9px]">
                  Extracted 42 invoices with 100% tax match.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
