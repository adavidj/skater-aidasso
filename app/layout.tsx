import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/shared/layout/themeProvider";

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
  title: "Granger Health",
  description:
    "Granger Health is a new species of sportainment, combining the excitement of sports with the thrill of entertainment. Our mission is to provide a unique and engaging experience for fans, athletes, and partners alike. Join us on this journey as we redefine the world of sports and entertainment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh overflow-x-clip">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}