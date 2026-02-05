import type { Metadata } from "next";
import { Inter } from 'next/font/google'; // Using Inter as a reliable Google font
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Using Inter font from Google Fonts as a reliable Google font
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
      >
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
