import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Analytics } from "@/app/components/Analytics";
import { Toaster } from "@/app/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leapnorth.com'), // Update with actual domain
  title: {
    default: "Leap North | True North. True Growth.",
    template: "%s | Leap North"
  },
  description: "Your True North for growth. Transform your business through integrated marketing strategies and intelligent automation, delivering measurable growth and operational efficiency.",
  keywords: [
    "marketing agency",
    "business automation",
    "SEO optimization",
    "paid advertising",
    "workflow automation",
    "CRM implementation",
    "AI integration",
    "social media marketing",
    "email marketing",
    "conversion rate optimization",
    "content marketing",
    "digital transformation"
  ],
  authors: [{ name: "Leap North" }],
  creator: "Leap North",
  publisher: "Leap North",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leapnorth.com",
    title: "Leap North | True North. True Growth.",
    description: "Your True North for growth. Transform your business through integrated marketing and intelligent automation",
    siteName: "Leap North",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leap North | True North. True Growth.",
    description: "Your True North for growth. Transform your business through integrated marketing and intelligent automation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${archivoBlack.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
