import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { AuthProvider } from '@/context/AuthContext';
import { LoadingPage } from '@/components/ui/loading-spinner';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Invoice Generator - Professional Invoice Management",
  description: "Create and manage professional invoices with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
