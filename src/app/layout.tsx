import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "IT Блог",
  description: "Блог о программировании, технологиях и IT-индустрии",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#1a1a1a",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "IT Блог",
    description: "Блог о программировании, технологиях и IT-индустрии",
    type: "website",
    locale: "ru_RU",
    siteName: "IT Блог",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Блог",
    description: "Блог о программировании, технологиях и IT-индустрии",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
