/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Receipt Generator
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Create and preview professional receipts in minutes
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <Card className="mb-8">
              <CardContent className="p-6">
                <img
                  src="/logo.png"
                  alt="Receipt illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={400}
                  height={300}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tips for Creating Receipts</CardTitle>
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
          <Wrapper />
        </div>
      </div>
    </main>
  );
}
