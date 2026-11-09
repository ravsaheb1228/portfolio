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
          {/* Brand Logo with direct link to Home */}
          <Link
            href="/"
            className="group flex items-center focus-visible:outline-2 focus-visible:outline-(--accent) rounded-xl transition-transform hover:scale-105 active:scale-95 duration-200 py-1"
            aria-label={`${personalData.name} - Homepage`}
          >
            <div className="relative h-10 sm:h-12 w-22 sm:w-28">
              <Image
                src="/images/rk-logo.png"
                alt="RK Logo"
                fill
                sizes="(max-width: 640px) 88px, 112px"
                className="object-contain filter drop-shadow-sm transition-all duration-300 group-hover:brightness-110"
                priority
              />
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
