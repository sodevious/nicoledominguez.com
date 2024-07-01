import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albert_sans = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicole Domingez",
  description: "UX/UI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albert_sans.className}>{children}</body>
    </html>
  );
}
