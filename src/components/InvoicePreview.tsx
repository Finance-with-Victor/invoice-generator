import React, { useRef } from "react";
   // @ts-ignore
import { useReactToPrint } from "react-to-print";

import { Card, CardContent } from "@/components/ui/card";
import { InvoiceData, InvoiceItem } from "@types";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

type InvoicePreviewProps = {
  invoice: InvoiceData;
};
const InvoicePreview: React.FC<InvoicePreviewProps> = ({
  invoice,
}: InvoicePreviewProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  return (
    <ScrollArea className="h-[600px]">
      <Card className="w-full bg-white text-black">
        <CardContent className="space-y-6">
          <div ref={contentRef} className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-primary">RECEIPT</h1>
                <p className="text-sm text-gray-500">
                  Receipt Date: {invoice.date}
                </p>
              </div>
              <div className="text-right">
                <h2 className="text-xl font-bold">{invoice.companyName}</h2>
                <p>{invoice.companyAddress}</p>
                <p>TEL: {invoice.companyPhone}</p>
              </div>
            </div>

            <div className="my-4">
              <h2 className="text-md font-semibold mb-2">Till No:</h2>
              <p>{invoice.tillNo}</p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Bill To:</h2>
              <p>
                <span className="font-semibold"></span>
                {invoice.customerName}
              </p>
            </div>

            <table className="w-full mt-8">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-2">#</th>
                  <th className="text-left py-2">Description</th>
                  <th className="text-left py-2">QTY</th>
                  <th className="text-right py-2">@ Ksh</th>
                  <th className="text-right py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice?.items.map((item: InvoiceItem, index: number) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2 whitespace-pre-line">
                      {item.description}
                    </td>
                    <td className="py-2 text-right">{item.quantity}</td>
                    <td className="py-2 text-right">
                      {item.unitPrice?.toFixed(2)}
                    </td>
                    <td className="py-2 text-right">
                      {(item.quantity * item.unitPrice).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end">
              <div className="w-1/3 space-y-2">
                <div className="flex justify-between font-bold">
                  <span>TOTAL</span>
                  <span>KES {invoice.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <p>
                <span className="font-semibold">Amount in words:</span>{" "}
                {invoice.amountInWords}
              </p>
            </div>

            {invoice?.notes ? (
              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Notes</h3>
                  <p className="text-sm">{invoice?.notes}</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <Button onClick={reactToPrintFn}>Generate PDF</Button>
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default InvoicePreview;
