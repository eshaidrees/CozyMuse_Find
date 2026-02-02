import type { Metadata } from "next";
import { Inter } from 'next/font/google'; // Using Inter as a reliable Google font
import "./globals.css";
import Header from "@/components/header";

// Using Inter font from Google Fonts as a replacement for missing Geist fonts
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// For monospace, we'll use system monospace font
const geistMono = { variable: '--font-geist-mono' };

export const metadata: Metadata = {
  title: "CozyMuse Finds - Amazon Affiliate Store",
  description: "Discover cute fashion and aesthetic home products curated from Amazon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Header />
        {children}
      </body>
    </html>
  );
}
