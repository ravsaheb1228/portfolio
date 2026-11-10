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
        badge="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind? Reach out and let's discuss your requirements."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <ProjectInquiryForm />
        </div>

        {/* Right Column: Channels & Commitments */}
        <div className="lg:col-span-5 space-y-6">
          <ContactMethodCard />

          <Card className="p-6 space-y-3.5 bg-(--bg-elevated)">
            <h4 className="text-xs font-mono uppercase tracking-wider text-(--text-primary) font-bold">
              My Engagement Commitments
            </h4>
            <div className="space-y-3 text-xs text-(--text-secondary)">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Guaranteed Rapid Response:</strong> Same-day replies (typically under 4 hours) for active inquiries.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Code Ownership & Security:</strong> Complete source code handover, comprehensive documentation, and strict NDA compliance.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Design-Led Engineering:</strong> Pixel-perfect Figma implementations coupled with type-safe backend architectures.
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
