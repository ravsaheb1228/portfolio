import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";
import { ContactMethodCard } from "@/components/contact/ContactMethodCard";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-(--border) bg-(--bg-base)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? Reach out and let's discuss your requirements."
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
