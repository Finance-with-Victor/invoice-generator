import { InvoiceData } from "@types";

export const invoices: InvoiceData[] = [
    {
      companyName: "FOREST GARDEN RESORT",
      companyAddress: "Muguga-Thika (Garissa Road)",
      companyPhone: "+254721784629",
      tillNo: "5323643",
      date: "28/09/2024",
      customerName: "MaryHill Girls Form 2 DELTA Team Building",
      items: [
        {
          quantity: 60,
          description: "Ground, Tent and Nature Walk",
          unitPrice: 100,
        },
        {
          quantity: 1,
          description:
            "Mbuzi Choma, Chicken dry fry, Beef Stew, Chapati, Chips, Vegetable rice, Greens, Fruits, Soda, Water",
          unitPrice: 1100,
        },
        { quantity: 1, description: "4pm tea and snack", unitPrice: 100 },
      ],
      total: 78000,
      amountInWords: "Seventy Eight Thousand Only",
    },
    {
      companyName: "FOREST GARDEN RESORT",
      companyAddress: "Muguga-Thika (Garissa Road)",
      companyPhone: "+254721784629",
      tillNo: "5323643",
      date: "02/10/2024",
      customerName: "Green Valley High School Science Club",
      items: [
        {
          quantity: 30,
          description: "Ground, Tent, and Team Building Activities",
          unitPrice: 150,
        },
        {
          quantity: 1,
          description: "Lunch Buffet with Grilled Chicken, Rice, and Salad",
          unitPrice: 900,
        },
        { quantity: 1, description: "Afternoon Tea and Snacks", unitPrice: 80 },
      ],
      total: 32900,
      amountInWords: "Thirty Two Thousand Nine Hundred Only",
    },
    {
      companyName: "FOREST GARDEN RESORT",
      companyAddress: "Muguga-Thika (Garissa Road)",
      companyPhone: "+254721784629",
      tillNo: "5323643",
      date: "15/10/2024",
      customerName: "Tech Innovators Kenya Meetup",
      items: [
        {
          quantity: 80,
          description: "Conference Hall and Projector Rental",
          unitPrice: 200,
        },
        {
          quantity: 1,
          description: "Buffet Lunch and Refreshments",
          unitPrice: 1200,
        },
        {
          quantity: 1,
          description: "Evening Coffee and Pastries",
          unitPrice: 120,
        },
      ],
      total: 41200,
      amountInWords: "Forty One Thousand Two Hundred Only",
    },
  ];
