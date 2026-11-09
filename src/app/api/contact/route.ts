import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

// Simple in-memory rate limiter for serverless instance
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequests.get(ip);

  if (!record || now > record.expiresAt) {
    ipRequests.set(ip, { count: 1, expiresAt: now + 60 * 1000 }); // 1 minute window
    return false;
  }

  if (record.count >= 5) {
    return true; // Exceeded 5 submissions per minute
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "anonymous";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries sent. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.botCheck && body.botCheck.length > 0) {
      return NextResponse.json(
        { error: "Submission rejected as spam." },
        { status: 400 }
      );
    }

    const validatedData = contactFormSchema.parse(body);

    // Optional email dispatch via Resend or SMTP when environment variables exist
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        // Dynamic import / fetch to Resend API without hard dependency on unconfigured services
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Inquiry <onboarding@resend.dev>",
            to: process.env.NOTIFICATION_EMAIL || "ravsahebkhairnar@gmail.com",
            subject: `[New Inquiry] ${validatedData.projectCategory} from ${validatedData.fullName} (${validatedData.companyName})`,
            html: `
              <h2>New Project Inquiry</h2>
              <p><strong>Name:</strong> ${validatedData.fullName}</p>
              <p><strong>Company:</strong> ${validatedData.companyName}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
              <p><strong>Category:</strong> ${validatedData.projectCategory}</p>
              <p><strong>Budget:</strong> ${validatedData.budget}</p>
              <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
              <p><strong>Description:</strong></p>
              <p style="white-space: pre-wrap;">${validatedData.description}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.warn("Failed to dispatch email notification via Resend:", emailError);
      }
    } else {
      console.log("Inquiry received (Email not configured yet):", {
        name: validatedData.fullName,
        company: validatedData.companyName,
        email: validatedData.email,
        category: validatedData.projectCategory,
        budget: validatedData.budget,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! Your project inquiry has been received. Ravsaheb will review your requirements and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    if (err && typeof err === "object" && "name" in err && err.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: err },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry." },
      { status: 500 }
    );
  }
}
