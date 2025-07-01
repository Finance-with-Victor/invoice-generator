"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import DashboardWrapper from "@/components/dashboard-wrapper";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SimpleLoadingPage } from "@/components/ui/loading-spinner";

export default function GenerateInvoicePage() {
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
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
              Invoice Generator
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-700 sm:mt-4">
              Create and preview professional invoices in minutes
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <Card className="mb-8 bg-gradient-to-tr from-blue-200 to-blue-400 text-blue-900 shadow-lg">
                <CardContent className="p-6">
                  <img
                    src="/logo.png"
                    alt="Invoice illustration"
                    className="w-full h-auto rounded-lg shadow-lg"
                    width={400}
                    height={300}
                  />
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-tr from-green-200 to-green-400 text-green-900 shadow-lg">
                <CardHeader>
                  <CardTitle>Tips for Creating Invoices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Include all necessary business information</li>
                    <li>Clearly itemize all products or services</li>
                    <li>Double-check all calculations</li>
                    <li>Include payment terms and methods</li>
                    <li>Keep a copy for your records</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <Wrapper />
            </div>
          </div>
        </div>
      </main>
    </DashboardWrapper>
  );
}
