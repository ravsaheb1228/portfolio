import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";
import { ContactMethodCard } from "@/components/contact/ContactMethodCard";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-(--border) bg-(--bg-base)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Start a Project Discussion"
          title="Have a Project in Mind? Let's Build Something Great."
          subtitle="Whether you need a custom business application, a modern website, an enterprise dashboard or a complete software solution, let's discuss your requirements and turn your idea into reality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Comprehensive Inquiry Form */}
          <div className="lg:col-span-7">
            <ProjectInquiryForm />
          </div>

          {/* Right Column: Direct Contact Channels & Availability */}
          <div className="lg:col-span-5">
            <ContactMethodCard />
          </div>
        </div>
      </div>
    </section>
  );
}
