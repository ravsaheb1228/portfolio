"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        const isResume = item.title === "Resume";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 inline-flex items-center gap-1.5",
              isActive
                ? "text-(--accent) bg-(--accent-subtle) font-semibold"
                : isResume
                ? "text-(--text-primary) border border-indigo-500/30 bg-indigo-500/5 hover:border-indigo-500/60 hover:bg-indigo-500/10 font-semibold"
                : "text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-elevated)"
            )}
          >
            {isResume && <FileText className="w-3.5 h-3.5 text-(--accent)" />}
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
