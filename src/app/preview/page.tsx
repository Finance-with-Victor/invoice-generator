"use client";
import InvoicePreview from "@/components/InvoicePreview";
import { invoices } from "@/lib/data";
import DashboardWrapper from "@/components/dashboard-wrapper";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SimpleLoadingPage } from "@/components/ui/loading-spinner";

export default function Invoice() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return <SimpleLoadingPage />;
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 p-8">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Invoice Preview
        </h1>
        <div>
          <InvoicePreview
            invoice={
              user.email === "gichuivictor@gmail.com"
                ? invoices[0]
                : invoices[3]
            }
          />
        </div>
      </div>
    </DashboardWrapper>
  );
}
