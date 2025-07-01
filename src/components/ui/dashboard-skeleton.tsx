import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DashboardSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <Skeleton className="h-10 w-96 mb-4" />
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-gradient-to-tr from-blue-200 to-blue-400">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-12 w-16" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-tr from-green-200 to-green-400">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-12 w-16" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-tr from-red-200 to-red-400">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-12 w-16" />
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 rounded-xl bg-white/80 p-8 mt-6 shadow">
        <Skeleton className="h-6 w-32 mb-2" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-purple-50 to-blue-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-10 w-80" />
        <Skeleton className="h-10 w-24" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="col-span-1 bg-gradient-to-tr from-blue-200 to-blue-400">
          <CardHeader className="flex flex-col items-center">
            <Skeleton className="w-20 h-20 rounded-full mb-4" />
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2 bg-gradient-to-tr from-green-200 to-green-400">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 