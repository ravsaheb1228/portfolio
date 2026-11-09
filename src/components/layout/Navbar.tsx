import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-(--border) bg-(--bg-base)/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-(--accent) rounded-lg"
            aria-label={`${personalData.name} - Homepage`}
          >
            <div className="relative h-9 sm:h-10 w-20 sm:w-22 rounded-xl overflow-hidden border border-(--border-strong) bg-[#040816] flex items-center justify-center shadow-md shadow-blue-950/20 group-hover:scale-105 group-hover:border-(--accent) transition-all">
              <Image
                src={personalData.logo}
                alt="RK Logo"
                width={88}
                height={40}
                className="h-full w-full object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-(--text-primary) group-hover:text-(--accent) transition-colors">
                {personalData.name}
              </span>
              <span className="text-[11px] font-medium text-(--text-secondary) hidden sm:inline-block leading-tight">
                UI/UX & Software Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="font-medium shadow-sm hover:shadow-blue-500/25"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Navigation Trigger & Drawer */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
