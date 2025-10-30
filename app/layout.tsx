import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 import your ThemeToggle component
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SLASHD",
  description: "Ask Joowon — interactive AI Q&A platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 👇 Tailwind 'dark' mode works when this class is toggled on <html> */}
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-slashd-cream 
          text-slashd-textDark 
          dark:bg-slashd-black 
          dark:text-slashd-textLight 
          transition-colors duration-500
        `}
      >
        {children}
        {/* 👇 add the toggle button (bottom-right corner) */}
        <ThemeToggle />
      </body>
    </html>
  );
}
