import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  companyName: z
    .string()
    .min(2, "Company or business name is required")
    .max(100, "Company name is too long"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .min(5, "Email is too short")
    .max(100, "Email is too long"),
  phone: z
    .string()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  projectCategory: z.string().min(1, "Please select a project category"),
  budget: z.string().min(1, "Please select an estimated budget range"),
  timeline: z.string().min(1, "Please select an expected timeline"),
  description: z
    .string()
    .min(10, "Please provide at least a brief description of your project requirements")
    .max(3000, "Description cannot exceed 3000 characters"),
  // Spam honeypot field (should remain empty)
  botCheck: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
