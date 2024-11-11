"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvoicePreview from "./InvoicePreview";
import Generator from "./Generator";
import { InvoiceData } from "@types";

const Wrapper = () => {
  const [invoice, setInvoice] = useState<InvoiceData>({
    companyName: "FOREST GARDEN RESORT",
    companyAddress: "Muguga-Thika (Garissa road)",
    companyPhone: "+254721784629",
    tillNo: "5323643",
    date: "30/10/2024",
    customerName: "St Dominic's Tech Training Institute",
    items: [
      {
        quantity: 18,
        description:
          "Ground for team building and nature walk.\n10.00 am tea and snacks.\nLunch (Beef, chips, chicken, ugali, greens, fruits, water & soda.\n4pm tea & snacks.",
        unitPrice: 1300,
      },
    ],
    total: 23400,
    amountInWords: "Twenty-Three thousand and four hundred only",
  });

  return (
    <>
      <div className="lg:w-2/3">
        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit Receipt</TabsTrigger>
            <TabsTrigger value="preview">Preview Receipt</TabsTrigger>
          </TabsList>
          <TabsContent value="edit">
            <Generator invoice={invoice} setInvoice={setInvoice} />
          </TabsContent>
          <TabsContent value="preview">
            <InvoicePreview invoice={invoice} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Wrapper;
