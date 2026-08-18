import type { Metadata } from "next";

import { ThemeProvider } from "@/components/shared/layout/themeProvider";
import { Montserrat } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Granger Health",
  description:
    "Granger Health is a new species of sportainment, combining the excitement of sports with the thrill of entertainment. Our mission is to provide a unique and engaging experience for fans, athletes, and partners alike. Join us on this journey as we redefine the world of sports and entertainment.",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} antialiased`}
    >
      <head>
        {/* <link
          href="https://fonts.cdnfonts.com/css/pp-neue-montreal"
          rel="stylesheet"
        /> */}
      </head>

      <body className="min-h-dvh w-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}