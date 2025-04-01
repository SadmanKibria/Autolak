import type React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autolak | The Yellow Garage - Expert Auto Electrician in Ilford",
  description:
    "Specialised auto electrical repairs in Ilford. We offer top-notch repairs for starters, alternators and all electrical systems at competitive prices.",
  icons: "/favicon.png",
  keywords:
    "auto electrician, car electrical repairs, starter motor repairs, alternator repairs, Ilford garage, Yellow Garage, Autolak, car repairs Ilford, auto electrical specialist",
  authors: [{ name: "Sadman Kibria", url: "https://www.sadmankibria.com" }],
  openGraph: {
    title: "Autolak | The Yellow Garage - Expert Auto Electrician in Ilford",
    description:
      "Specialised auto electrical repairs in Ilford. We offer top-notch repairs for starters, alternators and all electrical systems at competitive prices.",
    url: "https://autolakyellowgarage.co.uk",
    siteName: "Autolak - The Yellow Garage",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
