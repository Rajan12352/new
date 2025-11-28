import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AIChatbot } from "@/components/chatbot/ai-chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "AutoGrow - Complete Automation for Every Business",
  description: "CRM, Marketing, Sales, Funnels, Chatbots, Workflows, and AI-driven automation—all in one platform. Transform your business with intelligent automation that works 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
