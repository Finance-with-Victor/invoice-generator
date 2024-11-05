import InvoicePreview from "@/components/InvoicePreview";
import { invoices } from "@/lib/data";
import React from "react";

export default function Invoice() {
  return (
    <>
      <InvoicePreview invoice={invoices[0]} />
    </>
  );
}
