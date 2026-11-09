"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { WhatsApp } from "@/components/ui/Icons";

export function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={personalData.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ravsaheb Khairnar on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-emerald-400"
      >
        <span className="relative flex items-center justify-center">
          <WhatsApp className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
        </span>
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
