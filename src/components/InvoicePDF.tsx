// components/InvoicePDF.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Item } from "@types";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCell: {
    margin: "auto",
  },
  totalText: {
    textAlign: "right",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  amountInWords: {
    marginTop: 10,
    fontStyle: "italic",
  },
});

type PageData = {
  date: string;
  recipient: string;
  items: Item[];
  amountInWords: string;
};

type Props = {
  data: PageData;
};

// InvoicePDF Component
const InvoicePDF: React.FC<Props> = ({ data }) => {
  // Destructure data for easy access
  const { date, recipient, items, amountInWords } = data;

  // Calculate item total prices
  const calculateTotal = () => {
    return items.reduce(
      (sum: number, item: Item) => sum + item.quantity * item.price,
      0
    );
  };

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header */}
        <Text style={styles.header}>INVOICE</Text>

        {/* Date and Recipient */}
        <View style={styles.section}>
          <Text>Date: {date}</Text>
          <Text>Recipient: {recipient}</Text>
        </View>

        {/* Items Table */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.tableCell]}>Description</Text>
            <Text style={[styles.tableCol, styles.tableCell]}>Quantity</Text>
            <Text style={[styles.tableCol, styles.tableCell]}>Price (Ksh)</Text>
            <Text style={[styles.tableCol, styles.tableCell]}>Total (Ksh)</Text>
          </View>
          {items.map((item: Item, index: number) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCol}>{item.description}</Text>
              <Text style={styles.tableCol}>{item.quantity}</Text>
              <Text style={styles.tableCol}>{item.price}</Text>
              <Text style={styles.tableCol}>{item.quantity * item.price}</Text>
            </View>
          ))}
        </View>

        {/* Total and Amount in Words */}
        <Text style={styles.totalText}>Total: Ksh {calculateTotal()}</Text>
        <Text style={styles.amountInWords}>
          Amount in Words: {amountInWords}
        </Text>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
