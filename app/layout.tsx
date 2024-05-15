import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dudocutz',
  description: 'Legyen az egy friss, divatos hajvágás, egy precízen megformázott arcszőrzet vagy egy igényesen kialakított szakáll.',
  metadataBase: new URL("https://https://dudocutz.vercel.app"),
  openGraph: {
      title: "Dudocutz",
      description: 'Legyen az egy friss, divatos hajvágás, egy precízen megformázott arcszőrzet vagy egy igényesen kialakított szakáll.',
      url: "https://https://dudocutz.vercel.app",
      siteName: "Dudocutz",
      images: [
          {
              url: 'https://dudocutz.vercel.app/og.png',
              width: 1260,
              height: 800,
          }
      ],
      locale: "hu-HU"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
