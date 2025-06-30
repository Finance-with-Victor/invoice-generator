export type Item = {
  description: string;
  quantity: number;
  price: number;
};

export type InvoiceDetails = {
  date: string;
  recipient: string;
  items: Item[];
  total: number;
  amountInWords: string;
};


export interface InvoiceItem {
  quantity: number
  description: string
  unitPrice: number
}

export interface InvoiceData {
  companyName: string
  companyAddress: string
  companyPhone: string
  tillNo: string
  date: string
  customerName: string
  items: InvoiceItem[]
  total: number
  amountInWords: string;
  notes?: string;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  companyName?: string;
  address?: string;
  logoUrl?: string;
}

export interface Invoice {
  id?: string; // Firestore ID
  userId: string;
  clientName: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  createdAt: any; // Use Firestore Timestamp for queries
}
