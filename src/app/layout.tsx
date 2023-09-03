import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Logo from "./../../public/xpensis.svg";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpensis",
  description:
    "Xpensis Is a Progressive Web Application that allows users to track their expenses",
  manifest: "/manifest.json",
  icons: Logo,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
