import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ravsaheb Khairnar | UI/UX Designer & Software Developer",
    template: "%s | Ravsaheb Khairnar",
  },
  description:
    "Designing digital experiences and engineering powerful business software solutions. Full-stack development, UI/UX architecture, enterprise dashboards, and custom business applications.",
  keywords: [
    "Ravsaheb Khairnar",
    "UI/UX Designer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Enterprise Software Solutions",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Software Consultant Mumbai",
  ],
  authors: [{ name: "Ravsaheb Khairnar" }],
  creator: "Ravsaheb Khairnar",
  metadataBase: new URL("https://ravsahebkhairnar.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravsahebkhairnar.dev",
    title: "Ravsaheb Khairnar | UI/UX Designer & Software Developer",
    description:
      "Designing digital experiences and engineering powerful business software solutions.",
    siteName: "Ravsaheb Khairnar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravsaheb Khairnar | UI/UX Designer & Software Developer",
    description:
      "Designing digital experiences and engineering powerful business software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans antialiased bg-(--bg-base) text-(--text-primary)`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <MotionProvider>
            <ScrollProgressBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
