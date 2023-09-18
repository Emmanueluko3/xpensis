import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpensis",
  description:
    "Xpensis Is a Progressive Web Application that allows users to track their expenses",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div id="modal" className="z-[2147483647]"></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
