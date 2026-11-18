import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://thukkugudavillas.com"),
  title: "Thukkuguda Villas | Premium Gated Villa Community | Tukkuguda, Hyderabad",
  description:
    "Thukkuguda Villas — 202 luxury villas spread across 24 acres in Tukkuguda (Mankhal), South Hyderabad. Plots from 267–400 Sq. Yds with 40-ft roads, grand clubhouse, and landscaped avenues.",
  keywords: [
    "Thukkuguda Villas",
    "Tukkuguda villas",
    "premium villas Hyderabad",
    "gated community Hyderabad",
    "Mankhal villas",
    "South Hyderabad villas",
    "villas near RGIA Airport",
    "villas near ORR Hyderabad",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/nexhouz-logo.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thukkugudavillas.com",
    siteName: "Thukkuguda Villas",
    title: "Thukkuguda Villas | Premium Gated Villa Community | Tukkuguda, Hyderabad",
    description:
      "202 premium villas across 24 acres in Tukkuguda, South Hyderabad. Plots from 267–400 Sq. Yds with 40-ft roads and grand clubhouse.",
    images: [
      {
        url: "/images/hero/hero-bg.svg",
        width: 1200,
        height: 630,
        alt: "Thukkuguda Villas — Premium Gated Community, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thukkuguda Villas | Premium Gated Villa Community | Tukkuguda, Hyderabad",
    description:
      "202 premium villas across 24 acres in Tukkuguda, South Hyderabad.",
    images: ["/images/hero/hero-bg.svg"],
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-offwhite text-charcoal font-body flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />

        {/* NexHouz Watermark – fixed bottom-left, visible on every page */}
        <a
          href="https://nexhouz.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 left-4 z-40 opacity-30 hover:opacity-80 transition-opacity duration-300 pointer-events-auto"
          title="Marketed by NexHouz"
          aria-label="NexHouz – Premium Real Estate Marketing"
        >
          <Image
            src="/images/nexhouz-logo.png"
            alt="NexHouz"
            width={100}
            height={32}
            className="object-contain"
          />
        </a>
      </body>
    </html>
  );
}
