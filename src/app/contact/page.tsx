import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";
import { ContactMethodCard } from "@/components/contact/ContactMethodCard";
import { Card } from "@/components/ui/Card";
import { Clock, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry",
  description:
    "Submit a project inquiry or contact Ravsaheb Khairnar directly for custom software development, UI/UX design, or technical consulting.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <SectionHeading
        badge="Direct Project Inquiry"
        title="Have a Project in Mind? Let's Build Something Great."
        subtitle="Whether you need a custom business application, a modern website, an enterprise dashboard or a complete software solution, let's discuss your requirements and turn your idea into reality."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <ProjectInquiryForm />
        </div>

        {/* Right Column: Channels & Commitments */}
        <div className="lg:col-span-5 space-y-6">
          <ContactMethodCard />

          <Card className="p-6 space-y-3.5 bg-[var(--bg-elevated)]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              My Engagement Commitments
            </h4>
            <div className="space-y-3 text-xs text-[var(--text-secondary)]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong>24-Hour Response Time:</strong> Every inquiry receives a personal, thoughtful response within one business day.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Confidentiality:</strong> Your project ideas, internal business details, and trade secrets are kept 100% confidential.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>No Pushy Sales:</strong> Honest technical recommendations regarding feasibility, timeline estimates, and budget fit.
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
