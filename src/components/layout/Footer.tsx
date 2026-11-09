import Link from "next/link";
import { personalData } from "@/data/personal";
import { navItems, projectInquiryCategories } from "@/data/navigation";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";
import {
  Mail,
    ArrowRight,
  MapPin,
} from "lucide-react";
import { Github, Linkedin, WhatsApp } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-(--border) bg-(--bg-surface) text-(--text-primary) transition-colors duration-200">
      {/* Pre-footer Call to Action Banner */}
      <div className="border-b border-(--border) bg-linear-to-b from-(--bg-base) to-(--bg-surface) py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Open for New Projects & Collaborations
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--text-primary) max-w-3xl mx-auto leading-tight">
            Let&apos;s create something meaningful together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--text-secondary) max-w-2xl mx-auto">
            Whether you need a complete enterprise software system, custom SaaS platform,
            or high-fidelity UI/UX design, I am ready to bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="shadow-lg shadow-blue-500/20">
              <span>Start a Project Discussion</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              href={personalData.resume.viewUrl}
              external
              variant="outline"
              size="lg"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Links Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white font-bold flex items-center justify-center shadow-md">
                {personalData.initials}
              </div>
              <span className="font-bold text-lg text-(--text-primary)">
                {personalData.name}
              </span>
            </Link>
            <p className="text-xs uppercase font-mono tracking-wider text-(--accent) font-semibold">
              {personalData.title}
            </p>
            <p className="text-sm text-(--text-secondary) leading-relaxed max-w-sm">
              {personalData.subheadline}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-(--text-secondary)">
              <MapPin className="w-3.5 h-3.5 text-(--accent)" />
              <span>{personalData.location}</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-(--border) bg-(--bg-elevated) flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-(--border) bg-(--bg-elevated) flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-(--border) bg-(--bg-elevated) flex items-center justify-center text-(--text-secondary) hover:text-emerald-500 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp conversation"
              >
                <WhatsApp className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.email}
                className="w-9 h-9 rounded-lg border border-(--border) bg-(--bg-elevated) flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
                aria-label="Email directly"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-(--text-primary) font-bold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-(--text-primary) font-bold">
              Capabilities
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-(--text-secondary) hover:text-(--accent) transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Project Domains */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-(--text-primary) font-bold">
              Enterprise Suites
            </h3>
            <ul className="space-y-2 text-sm">
              {projectInquiryCategories.slice(2, 8).map((cat) => (
                <li key={cat}>
                  <Link
                    href="/projects"
                    className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-(--border) flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--text-secondary)">
          <div>
            © {currentYear} {personalData.name}. All rights reserved. Built with Next.js, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-(--accent) transition-colors">
              About
            </Link>
            <Link href="/experience" className="hover:text-(--accent) transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-(--accent) transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
