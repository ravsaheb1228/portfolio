"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { projectInquiryCategories, budgetRanges, timelineOptions } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send, Loader2, Sparkles } from "lucide-react";

export function ProjectInquiryForm() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      projectCategory: projectInquiryCategories[0],
      budget: budgetRanges[1],
      timeline: timelineOptions[1],
      description: "",
      botCheck: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry");
      }

      setSubmissionStatus("success");
      reset();
    } catch (err: unknown) {
      setSubmissionStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again or reach out via email.");
      }
    }
  };

  if (submissionStatus === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary)">
          Inquiry Successfully Received!
        </h3>
        <p className="text-sm sm:text-base text-(--text-secondary) max-w-md mx-auto leading-relaxed">
          Thank you for sharing your project vision. Ravsaheb will personally review your
          requirements and get in touch within 24 hours.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="md"
            onClick={() => setSubmissionStatus("idle")}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-2xl border border-(--border) bg-(--bg-surface) shadow-(--card-shadow) space-y-5"
      noValidate
    >
      <div className="flex items-center justify-between pb-2 border-b border-(--border)">
        <div>
          <h3 className="text-lg font-bold text-(--text-primary)">
            Project Inquiry Form
          </h3>
          <p className="text-xs text-(--text-secondary)">
            Tell me about your business goals and technical specifications.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-(--accent) font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Prompt Response</span>
        </div>
      </div>

      {/* Honeypot anti-spam field */}
      <input
        type="text"
        {...register("botCheck")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Row 1: Name and Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("fullName")}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-(--bg-base) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) ${
              errors.fullName ? "border-rose-500" : "border-(--border)"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
            Company / Business Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Acme Enterprises"
            {...register("companyName")}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-(--bg-base) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) ${
              errors.companyName ? "border-rose-500" : "border-(--border)"
            }`}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.companyName.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            {...register("email")}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-(--bg-base) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) ${
              errors.email ? "border-rose-500" : "border-(--border)"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
            Phone / WhatsApp <span className="text-(--text-muted) font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className="w-full px-3.5 py-2.5 rounded-lg border border-(--border) text-sm bg-(--bg-base) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent)"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Project Category, Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
            Project Category <span className="text-rose-500">*</span>
          </label>
          <select
            {...register("projectCategory")}
            className="w-full px-3.5 py-2.5 rounded-lg border border-(--border) text-sm bg-(--bg-base) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent)"
          >
            {projectInquiryCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
            Budget Range <span className="text-rose-500">*</span>
          </label>
          <select
            {...register("budget")}
            className="w-full px-3.5 py-2.5 rounded-lg border border-(--border) text-sm bg-(--bg-base) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent)"
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
            Expected Timeline <span className="text-rose-500">*</span>
          </label>
          <select
            {...register("timeline")}
            className="w-full px-3.5 py-2.5 rounded-lg border border-(--border) text-sm bg-(--bg-base) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent)"
          >
            {timelineOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs font-semibold text-(--text-primary) mb-1.5">
          Project Description & Requirements <span className="text-rose-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Describe what you want to build, existing business challenges, desired integrations, or specific deadlines..."
          {...register("description")}
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-(--bg-base) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) resize-y ${
            errors.description ? "border-rose-500" : "border-(--border)"
          }`}
        />
        {errors.description && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Error Feedback Message if Submission Failed */}
      {submissionStatus === "error" && (
        <div className="p-3.5 rounded-lg border border-rose-500/20 bg-rose-500/10 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submissionStatus === "submitting"}
          className="w-full shadow-lg shadow-blue-500/20"
        >
          {submissionStatus === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              <span>Submitting Your Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>

      <p className="text-center text-[11px] text-(--text-muted)">
        Your information is kept strictly confidential. No spam or unsolicited marketing.
      </p>
    </form>
  );
}
