import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    template: "%s | Bhavana Nare",
    default: "Bhavana Nare | AI Platform & Infrastructure Engineer",
  },
  description: "AI Platform & Infrastructure Engineer and AI Senior Advance Tech Developer specializing in autonomous AI agents, enterprise upgrade automation (ADP Assist), LLM reliability, and cloud platform infrastructure.",
  keywords: [
    "Bhavana Nare",
    "AI Platform Engineer",
    "AI Infrastructure",
    "ADP Assist",
    "Autonomous Agents",
    "MLOps",
    "Cloud Infrastructure",
    "AWS Bedrock",
    "Python",
    "Enterprise Automation",
    "Software Engineer"
  ],
  authors: [{ name: "Bhavana Nare" }],
  creator: "Bhavana Nare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavana-nare.vercel.app",
    title: "Bhavana Nare | AI Platform & Infrastructure Engineer",
    description: "AI Platform & Infrastructure Engineer | AI Senior Advance Tech Developer building autonomous agents & upgrade automation for ADP Assist.",
    siteName: "Bhavana Nare Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavana Nare | AI Platform & Infrastructure Engineer",
    description: "AI Platform & Infrastructure Engineer | AI Senior Advance Tech Developer building autonomous agents & upgrade automation for ADP Assist.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}

