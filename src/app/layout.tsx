import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Fraunces } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { SOCIALS } from "@/components/ui/social-icon";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ORYVA-AI",
  url: "https://www.oryva-ai.com",
  logo: "https://www.oryva-ai.com/opengraph-image",
  email: "contact@oryva-ai.com",
  description:
    "ORYVA-AI builds intelligent products and runs ORYVA FORGE, a builder program — for the moments when people need more clarity, more confidence, and a better way forward.",
  sameAs: SOCIALS.map((s) => s.href),
};

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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oryva-ai.com"),
  title: {
    default: "ORYVA-AI — Build what people can actually use",
    template: "%s — ORYVA-AI",
  },
  description:
    "ORYVA-AI is where thoughtful technology, practical design, and human ambition meet. We build intelligent products — and ORYVA FORGE, a builder program — for the moments when people need more clarity and a better way forward.",
  openGraph: {
    title: "ORYVA-AI — Build what people can actually use",
    description:
      "Intelligent products for the moments when people need more clarity, more confidence, and a better way forward.",
    siteName: "ORYVA-AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORYVA-AI — Build what people can actually use",
    description:
      "Intelligent products for the moments when people need more clarity, more confidence, and a better way forward.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          // Organization schema intentionally has no telephone field.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
