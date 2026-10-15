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
            Fill in the details, preview the receipt, then print it or save it
            as a PDF.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <Card className="mb-8">
              <CardContent className="p-6">
                <img
                  src="/logo.png"
                  alt="The Rocky Forest Royal Resort logo"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={400}
                  height={300}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How it works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Edit the business details, till number, date and customer.
                  </li>
                  <li>
                    Add line items with a quantity and a unit price in Ksh.
                  </li>
                  <li>
                    Press Calculate Total, then type the amount in words.
                  </li>
                  <li>
                    Open Preview Receipt and press Print or save as PDF.
                  </li>
                  <li>
                    Nothing is saved. Reloading the page resets the form.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
          <Wrapper />
        </div>
      </div>
    </main>
  );
}
