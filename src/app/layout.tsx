import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oryva-ai.com"),
  title: {
    default: "ORYVA-AI — Building at the Edge of AI",
    template: "%s — ORYVA-AI",
  },
  description:
    "ORYVA-AI builds AI platforms and technical product systems end-to-end, and runs ORYVA FORGE — workshops, mentorship, hackathons, and fellowships for builders.",
  openGraph: {
    title: "ORYVA-AI — Building at the Edge of AI",
    description:
      "AI platforms, technical product systems, and ORYVA FORGE — our program for builders.",
    siteName: "ORYVA-AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORYVA-AI — Building at the Edge of AI",
    description:
      "AI platforms, technical product systems, and ORYVA FORGE — our program for builders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
