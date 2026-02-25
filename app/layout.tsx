import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crystaldeodorantprotection.com"),
  title: {
    default: "Crystal Technology: Natural Odor Control | Crystal Deodorant Protection",
    template: "%s | Crystal Deodorant Protection",
  },
  description:
    "Discover natural odor control solutions from crystal deodorants to activated carbon technology. Learn how mineral-based and carbon solutions eliminate odors naturally.",
  keywords: [
    "crystal deodorant",
    "crystal cat litter",
    "natural odor control",
    "activated carbon",
    "potassium alum",
    "silica gel litter",
    "natural cat litter additive",
  ],
  authors: [{ name: "Crystal Deodorant Protection" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://crystaldeodorantprotection.com",
    siteName: "Crystal Deodorant Protection",
    title: "Crystal Technology: Natural Odor Control for Body & Home",
    description:
      "From crystal deodorants to activated carbon cat litter solutions. Explore the science of natural odor elimination.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crystal Deodorant Protection - Natural Odor Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Technology: Natural Odor Control",
    description:
      "Discover natural odor control from crystal deodorants to activated carbon solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
