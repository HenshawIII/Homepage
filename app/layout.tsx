import type { Metadata } from "next";
import { Zen_Dots } from "next/font/google";
import "./globals.css";

const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "HIC Tech - Business Intelligence for Modern Enterprises",
  description: "HIC Tech is a business intelligence and digital enablement agency helping African businesses start strong, scale smart, and compete globally.",
  icons: {
    icon: "/Iconwhite.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zenDots.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
