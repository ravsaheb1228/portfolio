"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin, WhatsApp } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center gap-2">
      <ThemeToggle />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-lg border border-(--border) bg-(--bg-surface) text-(--text-primary) hover:border-(--accent) hover:text-(--accent) transition-colors focus-visible:outline-2 focus-visible:outline-(--accent)"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop & Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-(--bg-base)/95 backdrop-blur-xl animate-in fade-in duration-200">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-(--border) bg-(--bg-surface)">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 font-bold tracking-tight text-lg text-(--text-primary)"
            >
              <div className="w-8 h-8 rounded-lg bg-(--accent) text-white flex items-center justify-center font-bold text-sm shadow-md">
                {personalData.initials}
              </div>
              <span>{personalData.name}</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg border border-(--border) text-(--text-secondary) hover:text-(--text-primary)"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-(--text-muted) mb-3">
              Navigation
            </div>
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    isActive
                      ? "bg-(--accent-subtle) text-(--accent) font-semibold"
                      : "text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-elevated)"
                  )}
                >
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}

            {/* Availability Indicator */}
            <div className="pt-6 pb-2">
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {personalData.availability.status}
                  </div>
                  <div className="text-[11px] text-(--text-secondary)">
                    {personalData.availability.type}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions inside Drawer */}
          <div className="p-6 border-t border-(--border) bg-(--bg-surface) space-y-3">
            <Button
              href={personalData.contact.whatsapp}
              external
              variant="primary"
              size="lg"
              className="w-full shadow-lg bg-emerald-600 hover:bg-emerald-500 gap-2"
              onClick={() => setIsOpen(false)}
            >
              <WhatsApp className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 85912 81388)</span>
            </Button>

            <Button
              href="/contact"
              variant="secondary"
              size="md"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Discuss Your Project
            </Button>

            <div className="flex items-center justify-center gap-4 pt-2 text-(--text-secondary)">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-(--text-primary) hover:bg-(--bg-elevated)"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-(--text-primary) hover:bg-(--bg-elevated)"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-emerald-500 hover:bg-(--bg-elevated)"
                aria-label="WhatsApp Chat"
              >
                <WhatsApp className="w-5 h-5 text-emerald-500" />
              </a>
              <a
                href={personalData.socials.email}
                className="p-2 rounded-lg hover:text-(--text-primary) hover:bg-(--bg-elevated)"
                aria-label="Send direct email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
