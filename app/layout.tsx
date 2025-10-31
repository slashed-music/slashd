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
  title: "SlashD",
  description: "my music is slashed",
  icons: {
    icon: "/fabicon.png",
    shortcut: "/fabicon.png",
    apple: "/apple-touch-icon.png",
  },
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
