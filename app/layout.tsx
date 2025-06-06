import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayScape - Find Your Perfect Place",
  description:
    "Find your favorite place here! The best prices for over 2 million properties worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
