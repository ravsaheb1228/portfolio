import React from "react";
import {
  Users,
  Clock,
  Activity,
  Search,
  FileText,
  SlidersHorizontal,
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
      className={`rounded-xl border border-(--border-strong) bg-(--bg-surface) shadow-2xl overflow-hidden font-sans text-xs select-none ${className}`}
    >
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-(--border) bg-(--bg-elevated)">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono font-medium text-(--text-secondary) pl-2 border-l border-(--border)">
            app.enterprise.internal/{type}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {badge}
          </span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Workspace Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-(--text-muted)">
              Console Overview
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-(--text-primary)">
              {title}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-(--border) bg-(--bg-base) text-(--text-secondary) text-[11px]">
              <Search className="w-3 h-3" />
              <span>Search...</span>
            </div>
            <div className="p-1.5 rounded-md border border-(--border) bg-(--bg-base) text-(--text-secondary)">
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
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Total SKUs</div>
              <div className="text-sm sm:text-base font-bold text-(--text-primary) mt-0.5">
                14,820
              </div>
              <span className="text-[10px] text-emerald-500 font-medium">99.4% in-stock</span>
            </div>
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Warehouses</div>
              <div className="text-sm sm:text-base font-bold text-(--text-primary) mt-0.5">
                8 Active
              </div>
              <span className="text-[10px] text-blue-500 font-medium">Hubs synced</span>
            </div>
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Low Stock Alerts</div>
              <div className="text-sm sm:text-base font-bold text-amber-500 mt-0.5">
                12 Items
              </div>
              <span className="text-[10px] text-amber-500 font-medium">Auto-PO drafted</span>
            </div>
          </div>

          <div className="rounded-lg border border-(--border) overflow-hidden">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead className="bg-(--bg-elevated) text-(--text-secondary)">
                <tr>
                  <th className="py-1.5 px-3">Item / SKU</th>
                  <th className="py-1.5 px-3">Warehouse</th>
                  <th className="py-1.5 px-3">Units</th>
                  <th className="py-1.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--border) text-(--text-primary)">
                <tr>
                  <td className="py-2 px-3 font-mono">SKU-9921 Industrial Controller</td>
                  <td className="py-2 px-3">Mumbai Hub 1</td>
                  <td className="py-2 px-3 font-semibold">1,240</td>
                  <td className="py-2 px-3">
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-500">
                      Normal
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-mono">SKU-4402 Sensor Transceiver</td>
                  <td className="py-2 px-3">Bengaluru Facility</td>
                  <td className="py-2 px-3 font-semibold">48</td>
                  <td className="py-2 px-3">
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-500">
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
          <div className="p-2 rounded-lg border border-(--border) bg-(--bg-base) space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-(--text-secondary)">
              <span>Leads (4)</span>
              <span className="font-mono text-[10px]">₹4.2L</span>
            </div>
            <div className="p-2 rounded border border-(--border) bg-(--bg-surface) space-y-1">
              <div className="font-medium text-(--text-primary)">Apex Logistics Ltd</div>
              <div className="text-[10px] text-(--text-secondary)">Fleet ERP Integration</div>
              <div className="flex justify-between items-center text-[10px] pt-1 border-t border-(--border)">
                <span className="text-blue-500 font-semibold">₹1,80,000</span>
                <span className="text-(--text-muted)">Hot</span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg border border-(--border) bg-(--bg-base) space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-(--text-secondary)">
              <span>Proposal (2)</span>
              <span className="font-mono text-[10px]">₹7.5L</span>
            </div>
            <div className="p-2 rounded border border-(--border) bg-(--bg-surface) space-y-1">
              <div className="font-medium text-(--text-primary)">Metro Healthcare</div>
              <div className="text-[10px] text-(--text-secondary)">Clinic Portal & EMR</div>
              <div className="flex justify-between items-center text-[10px] pt-1 border-t border-(--border)">
                <span className="text-emerald-500 font-semibold">₹4,50,000</span>
                <span className="text-emerald-600 font-medium">Reviewing</span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg border border-(--border) bg-(--bg-base) space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-(--text-secondary)">
              <span>Won Deals</span>
              <span className="font-mono text-[10px]">₹12.8L</span>
            </div>
            <div className="p-2 rounded border border-emerald-500/20 bg-emerald-500/5 space-y-1">
              <div className="font-medium text-(--text-primary)">Omni Retail Group</div>
              <div className="text-[10px] text-(--text-secondary)">Multi-Store Inventory</div>
              <div className="flex justify-between items-center text-[10px] pt-1 border-t border-(--border)">
                <span className="text-emerald-600 font-bold">₹5,20,000</span>
                <span className="text-emerald-500">Signed</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "analytics":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="p-2 rounded border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Monthly Run Rate</div>
              <div className="text-sm font-bold text-(--text-primary)">₹8,45,000</div>
              <div className="text-[9px] text-emerald-500 font-medium">+18.4% vs last mo</div>
            </div>
            <div className="p-2 rounded border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Net Retention</div>
              <div className="text-sm font-bold text-(--text-primary)">118%</div>
              <div className="text-[9px] text-emerald-500 font-medium">Top decile</div>
            </div>
            <div className="p-2 rounded border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">CAC Payback</div>
              <div className="text-sm font-bold text-(--text-primary)">3.2 mos</div>
              <div className="text-[9px] text-blue-500 font-medium">Efficient</div>
            </div>
            <div className="p-2 rounded border border-(--border) bg-(--bg-base)">
              <div className="text-[10px] text-(--text-secondary)">Active Workflows</div>
              <div className="text-sm font-bold text-(--text-primary)">94,200</div>
              <div className="text-[9px] text-emerald-500 font-medium">99.98% uptime</div>
            </div>
          </div>

          <div className="p-3 rounded-lg border border-(--border) bg-(--bg-base)">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-semibold text-(--text-primary)">
                Revenue Growth & Capacity Curve
              </span>
              <span className="text-[10px] text-(--text-secondary)">Last 6 Months</span>
            </div>
            <div className="h-16 flex items-end gap-1.5 pt-2">
              {[35, 48, 42, 65, 78, 92].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t bg-linear-to-t from-blue-600 to-blue-400 opacity-90 transition-all hover:opacity-100"
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
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded border border-(--border) bg-(--bg-base) space-y-1.5">
            <div className="text-[10px] font-bold text-(--text-secondary)">
              Sprint Backlog (3)
            </div>
            <div className="p-1.5 rounded border border-(--border) bg-(--bg-surface) text-[10px]">
              <div className="font-semibold text-(--text-primary)">
                Payroll Tax Engine v2
              </div>
              <div className="text-[9px] text-(--text-muted) mt-1">High Priority • 8 pts</div>
            </div>
          </div>
          <div className="p-2 rounded border border-(--border) bg-(--bg-base) space-y-1.5">
            <div className="text-[10px] font-bold text-blue-500">In Development (2)</div>
            <div className="p-1.5 rounded border border-blue-500/20 bg-blue-500/5 text-[10px]">
              <div className="font-semibold text-(--text-primary)">
                Bio-metric Sync Webhook
              </div>
              <div className="text-[9px] text-blue-500 mt-1">Ravsaheb K. • 5 pts</div>
            </div>
          </div>
          <div className="p-2 rounded border border-(--border) bg-(--bg-base) space-y-1.5">
            <div className="text-[10px] font-bold text-emerald-500">Verified QA (6)</div>
            <div className="p-1.5 rounded border border-emerald-500/20 bg-emerald-500/5 text-[10px]">
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
            <div className="p-2 rounded border border-(--border) bg-(--bg-base)">
              <span className="text-[10px] text-(--text-secondary)">Net Receivables</span>
              <div className="text-sm font-bold text-(--text-primary)">₹12,40,000</div>
              <span className="text-[9px] text-emerald-500">₹9.8L paid this week</span>
            </div>
            <div className="p-2 rounded border border-(--border) bg-(--bg-base)">
              <span className="text-[10px] text-(--text-secondary)">Operating Runway</span>
              <div className="text-sm font-bold text-(--text-primary)">14.2 Months</div>
              <span className="text-[9px] text-blue-500">Healthy buffer</span>
            </div>
            <div className="p-2 rounded border border-(--border) bg-(--bg-base)">
              <span className="text-[10px] text-(--text-secondary)">Tax Invoices</span>
              <div className="text-sm font-bold text-(--text-primary)">42 Cleared</div>
              <span className="text-[9px] text-emerald-500">GST matched</span>
            </div>
          </div>
          <div className="p-2 rounded border border-(--border) bg-(--bg-base) flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span>INV-2026-088 • Apex Global Solutions</span>
            </div>
            <span className="font-mono font-bold text-emerald-500">₹2,84,000 (Settled)</span>
          </div>
        </div>
      );

    case "dashboard":
    default:
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-base)">
              <div className="flex items-center justify-between text-[10px] text-(--text-secondary)">
                <span>Active Users</span>
                <Users className="w-3.5 h-3.5 text-blue-500" />
              </div>
              <div className="text-sm sm:text-base font-bold text-(--text-primary) mt-1">
                2,480
              </div>
              <div className="text-[10px] text-emerald-500 font-medium">98.2% attendance</div>
            </div>
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-base)">
              <div className="flex items-center justify-between text-[10px] text-(--text-secondary)">
                <span>Approvals</span>
                <Clock className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <div className="text-sm sm:text-base font-bold text-(--text-primary) mt-1">
                18 Pending
              </div>
              <div className="text-[10px] text-amber-500 font-medium">Avg clearance 4h</div>
            </div>
            <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-base)">
              <div className="flex items-center justify-between text-[10px] text-(--text-secondary)">
                <span>System Health</span>
                <Activity className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-500 mt-1">
                100% Online
              </div>
              <div className="text-[10px] text-emerald-600 font-medium">Latency 28ms</div>
            </div>
          </div>

          <div className="p-3 rounded-lg border border-(--border) bg-(--bg-base)">
            <div className="flex items-center justify-between text-[11px] font-semibold text-(--text-primary) mb-2">
              <span>Department Headcount & Allocation</span>
              <span className="text-[10px] font-mono text-(--text-muted)">Q1 FY26</span>
            </div>
            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between text-[10px] text-(--text-secondary) mb-0.5">
                  <span>Engineering & Design</span>
                  <span>45% (120 team members)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-(--border) overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[45%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-(--text-secondary) mb-0.5">
                  <span>Operations & Supply Chain</span>
                  <span>30% (80 team members)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-(--border) overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[30%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
