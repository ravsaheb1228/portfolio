import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin, WhatsApp } from "@/components/ui/Icons";
import { personalData } from "@/data/personal";

export function ContactMethodCard() {
  const contactChannels = [
    {
      title: "Direct Email",
      value: personalData.contact.email,
      href: personalData.socials.email,
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      subtext: "Best for RFPs & formal project briefs",
    },
    {
      title: "WhatsApp Chat",
      value: personalData.contact.phone,
      href: personalData.socials.whatsapp,
      icon: <WhatsApp className="w-5 h-5 text-emerald-500" />,
      subtext: "Fastest response for urgent queries & scoping",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/ravsaheb-khairnar",
      href: personalData.socials.linkedin,
      icon: <Linkedin className="w-5 h-5 text-sky-500" />,
      subtext: "Connect professionally & review background",
    },
    {
      title: "GitHub Repository",
      value: "github.com/ravsaheb1228",
      href: personalData.socials.github,
      icon: <Github className="w-5 h-5 text-(--text-primary)" />,
      subtext: "Inspect open-source code & repositories",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="p-5 rounded-2xl border border-(--border) bg-(--bg-surface) shadow-(--card-shadow)">
        <h4 className="text-sm font-bold uppercase tracking-wider text-(--text-primary) mb-1 font-mono">
          Direct Channels
        </h4>
        <p className="text-xs text-(--text-secondary) mb-4">
          Prefer reaching out directly? Choose your preferred medium:
        </p>

        <div className="space-y-2.5">
          {contactChannels.map((channel, i) => (
            <a
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl border border-(--border) bg-(--bg-elevated) hover:border-(--accent) hover:bg-(--accent-subtle) transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-(--bg-surface) border border-(--border)">
                  {channel.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-(--text-primary) group-hover:text-(--accent) transition-colors flex items-center gap-1">
                    <span>{channel.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-[11px] text-(--accent) font-mono">
                    {channel.value}
                  </div>
                  <div className="text-[10px] text-(--text-secondary)">
                    {channel.subtext}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Availability Status Card */}
      <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
            {personalData.availability.status}
          </span>
        </div>
        <p className="text-xs text-(--text-secondary) leading-relaxed">
          Currently taking on select custom software development projects, design systems, and enterprise web solutions.
        </p>
      </div>
    </div>
  );
}
