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
    default: "Bhavana Nare | Software Engineer & MLOps Architect",
  },
  description: "Software Engineer specializing in MLOps, Cloud Security, AI/ML pipelines, and full-stack development. MS Computer Science from University of Georgia.",
  keywords: [
    "Bhavana Nare",
    "Software Engineer",
    "MLOps",
    "Cloud Security",
    "AI/ML",
    "Python",
    "AWS",
    "Azure",
    "Cybersecurity"
  ],
  authors: [{ name: "Bhavana Nare" }],
  creator: "Bhavana Nare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavana-nare.vercel.app",
    title: "Bhavana Nare | Software Engineer & MLOps Architect",
    description: "Building secure, scalable AI/ML systems. From automotive safety to cybersecurity AI.",
    siteName: "Bhavana Nare Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavana Nare | Software Engineer & MLOps Architect",
    description: "Building secure, scalable AI/ML systems. From automotive safety to cybersecurity AI.",
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

