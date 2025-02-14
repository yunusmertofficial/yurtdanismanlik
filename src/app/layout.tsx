import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yurt Danışmanlık | Oturma, Çalışma ve Vatandaşlık Danışmanlığı",
  description:
    "Yurt Danışmanlık, Türkiye'de oturma izni, çalışma izni, vatandaşlık, deport kaldırma, yurt dışı vize işlemleri, insani ikamet izni ve evlilik işlemleri için uzman danışmanlık hizmeti sunar. Hemen iletişime geçin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
