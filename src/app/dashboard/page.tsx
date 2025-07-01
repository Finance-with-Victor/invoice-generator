"use client";
import DashboardWrapper from "@/components/dashboard-wrapper";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingPage } from "@/components/ui/loading-spinner";
import { DashboardSkeleton } from "@/components/ui/dashboard-skeleton";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <DashboardWrapper>
        <DashboardSkeleton />
      </DashboardWrapper>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <DashboardWrapper>
      <div className="flex flex-1 flex-col gap-6 p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to your Dashboard, {user.displayName || "User"}!</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-gradient-to-tr from-blue-200 to-blue-400 text-blue-900 shadow-lg">
            <CardHeader>
              <CardTitle>Total Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">--</span>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-tr from-green-200 to-green-400 text-green-900 shadow-lg">
            <CardHeader>
              <CardTitle>Paid Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">--</span>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-tr from-red-200 to-red-400 text-red-900 shadow-lg">
            <CardHeader>
              <CardTitle>Outstanding</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">--</span>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 rounded-xl bg-white/80 p-8 mt-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Quick Actions</h2>
          <ul className="flex gap-4">
            <li><a href="/generate-invoice" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Generate Invoice</a></li>
            <li><a href="/preview" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">View Invoices</a></li>
            <li><a href="/profile" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Profile</a></li>
          </ul>
        </div>
      </div>
    </DashboardWrapper>
  );
}
