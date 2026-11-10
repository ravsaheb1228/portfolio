import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";
import { ContactMethodCard } from "@/components/contact/ContactMethodCard";

export function ContactSection() {
  return (
    <ScrollSection id="contact" surface="base" prevSurface="base" accent="indigo">
      <SectionHeading
        badge="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind? Reach out and let's discuss your requirements."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Comprehensive Inquiry Form */}
        <AnimatedReveal direction="right" className="lg:col-span-7">
          <ProjectInquiryForm />
        </AnimatedReveal>

        {/* Right Column: Direct Contact Channels & Availability */}
        <AnimatedReveal direction="left" delay={0.1} className="lg:col-span-5">
          <ContactMethodCard />
        </AnimatedReveal>
      </div>
    </ScrollSection>
  );
}
