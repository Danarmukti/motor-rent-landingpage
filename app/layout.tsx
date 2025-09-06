import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MotoHub - Premium Motorcycle Sales & Rental",
  description:
    "Premium motorcycles for sale and rent. Experience the thrill of the open road with our carefully curated collection.",
  keywords:
    "motorcycle, bike, sales, rental, premium, harley davidson, kawasaki, bmw, honda, yamaha",
  openGraph: {
    title: "MotoHub - Premium Motorcycle Sales & Rental",
    description:
      "Premium motorcycles for sale and rent. Experience the thrill of the open road.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
