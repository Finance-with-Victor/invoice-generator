import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Receipt Generator",
  description:
    "Fill in business, customer and line-item details, preview the receipt with totals in KES, then print it or save it as a PDF from your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>{children}</body>
    </html>
  );
}
