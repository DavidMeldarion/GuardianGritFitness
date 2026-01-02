import type { Metadata } from "next";
import { Cinzel, IBM_Plex_Mono, Inter } from "next/font/google";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://guardiangrit.fit";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Guardian Grit Fitness",
    template: "%s | Guardian Grit Fitness",
  },
  description:
    "Mission-driven coaching for husbands and fathers. Build strength, discipline, and brotherhood with focused training and accountability.",
  openGraph: {
    title: "Guardian Grit Fitness",
    description:
      "Mission-driven coaching for husbands and fathers. Build strength, discipline, and brotherhood with focused training and accountability.",
    url: siteUrl,
    siteName: "Guardian Grit Fitness",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian Grit Fitness",
    description:
      "Mission-driven coaching for husbands and fathers. Build strength, discipline, and brotherhood with focused training and accountability.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${plexMono.variable}`}>
      <body className="font-body bg-bone text-slate">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-10 sm:py-14">
            <div className="container-page space-y-10">{children}</div>
          </main>
          <Footer />
        </div>
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
      </body>
    </html>
  );
}
