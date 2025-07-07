"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvoicePreview from "./InvoicePreview";
import Generator from "./Generator";
import { InvoiceData } from "@types";
import { User } from "firebase/auth";

type Props = {
  user: User;
};
const forestData = {
  companyName: "FOREST GARDEN RESORT",
  companyAddress: "Muguga-Thika (Garissa road)",
  companyPhone: "+254721784629",
  tillNo: "5323643",
  user: "gichuivictor@gmail.com",
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
};

const randomData = {
  companyName: "HOTEL X",
  companyAddress: "Nairobi, Kenya",
  companyPhone: "-",
  tillNo: "-",
  date: "-",
  customerName: "Tech Innovators Kenya Meetup",
  items: [
    {
      quantity: 80,
      description: "Conference Hall and Projector Rental",
      unitPrice: 200,
    },
  ],
  total: 41200,
  amountInWords: "Forty One Thousand Two Hundred Only",
};
const Wrapper = ({ user }: Props) => {
  console.log(user, "user");
  const [invoice, setInvoice] = useState<InvoiceData>(randomData);

  useEffect(() => {
    if (user.email === forestData.user) {
      setInvoice(() => forestData);
    }
  }, [user]);
  return (
    <>
      <div>
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
