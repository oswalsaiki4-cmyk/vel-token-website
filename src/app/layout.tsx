import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEL TOKEN | AI-Powered Intelligent Digital Asset",
  description: "VEL Token - Compliance-first intelligent digital asset powered by advanced AI algorithms and quantitative trading models. SEC Reg D & FinCEN MSB Compliant. Sustainable growth and transparent value creation.",
  keywords: "VEL TOKEN, AI trading, quantitative finance, digital asset, cryptocurrency, SEC compliant, FinCEN MSB, AI-powered investment, blockchain, DeFi",
  authors: [{ name: "Velar Capital Group" }],
  creator: "Velar Capital Group LLC",
  publisher: "Velar Capital Group",
  openGraph: {
    title: "VEL TOKEN | AI × Quant × Wealth Management",
    description: "Let Intelligence Drive Wealth. Compliance-first intelligent digital asset with AI-powered quantitative trading.",
    type: "website",
    locale: "en_US",
    siteName: "VEL TOKEN",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEL TOKEN | AI-Powered Digital Asset",
    description: "Compliance-first intelligent digital asset powered by advanced AI algorithms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
