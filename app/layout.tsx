import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Evy Networks – שירותי רשתות תקשורת',
  description: 'פתרונות מקצועיים לתקשורת, כבלים ורשתות לבתים ולבניינים.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-[sans-serif]">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
