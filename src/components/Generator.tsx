"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";
import { InvoiceData, InvoiceItem } from "@types";
import { Textarea } from "./ui/textarea";

interface Props {
  setInvoice: Dispatch<SetStateAction<InvoiceData>>;
  invoice: InvoiceData;
}

const Generator = ({ invoice, setInvoice }: Props) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInvoice((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const updatedItems = [...invoice.items];
    if (field === "quantity" || field === "unitPrice") {
      updatedItems[index][field] = Number(value);
    } else {
      updatedItems[index][field] = String(value);
    }
    setInvoice((prev) => ({ ...prev, items: updatedItems }));
  };

  const addItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [...prev.items, { quantity: 0, description: "", unitPrice: 0 }],
    }));
  };

  const calculateTotal = () => {
    const total = invoice.items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0
    );
    setInvoice((prev) => ({ ...prev, total }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Edit Receipt</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                value={invoice.companyName}
                onChange={handleInputChange}
                className="font-bold"
              />
            </div>
            <div>
              <Label htmlFor="companyAddress">Company Address</Label>
              <Input
                id="companyAddress"
                name="companyAddress"
                value={invoice.companyAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Label htmlFor="companyPhone">Company Phone</Label>
                <Input
                  id="companyPhone"
                  name="companyPhone"
                  value={invoice.companyPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="tillNo">Till No</Label>
                <Input
                  id="tillNo"
                  name="tillNo"
                  value={invoice.tillNo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                value={invoice.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="customerName">Customer Name</Label>
              <Input
                id="customerName"
                name="customerName"
                value={invoice.customerName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>Items</Label>
              <table className="w-full mt-2">
                <thead>
                  <tr>
                    <th className="text-left text-sm">Description</th>
                    <th className="text-left text-sm">Qty</th>
                    <th className="text-left text-sm">@ Ksh</th>
                    <th className="text-left text-sm">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item, index) => (
                    <tr key={index} className="my-4">
                      <td>
                        <Input
                          placeholder="Description"
                          value={item.description}
                          onChange={(e) =>
                            handleItemChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          className="w-full"
                        />
                      </td>
                      <td>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleItemChange(index, "quantity", e.target.value)
                          }
                          className="w-20"
                        />
                      </td>
                      <td>
                        <Input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) =>
                            handleItemChange(index, "unitPrice", e.target.value)
                          }
                          className="w-24"
                        />
                      </td>
                      <td>{item.quantity * item.unitPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button onClick={addItem} className="mt-2">
                Add Item
              </Button>
            </div>
            <div className="flex justify-end">
              <div className="w-1/3">
                <Label htmlFor="total">TOTAL</Label>
                <Input
                  id="total"
                  name="total"
                  value={invoice.total}
                  onChange={handleInputChange}
                  className="font-bold"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="amountInWords">Amount in words</Label>
              <Input
                id="amountInWords"
                name="amountInWords"
                value={invoice.amountInWords}
                onChange={handleInputChange}
              />
            </div>
            <Button onClick={calculateTotal}>Calculate Total</Button>
            <div className="my-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Add a customer note..."
                name="notes"
                value={invoice.notes}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
export default Generator;
