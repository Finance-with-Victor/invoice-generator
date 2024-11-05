import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  text: { fontSize: 12, marginBottom: 5 },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 },
});

type Props = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  data: any;
};

// PDF Document component
const MyDocument: React.FC<Props> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>RECEIPT</Text>
      <Text style={styles.subtitle}>{data.companyName}</Text>
      <Text style={styles.text}>{data.companyAddress}</Text>
      <Text style={styles.text}>
        TEL: {data.companyPhone} TILL NO: {data.tillNo}
      </Text>
      <Text style={styles.text}>DATE: {data.date}</Text>
      <Text style={styles.text}>M/S: {data.customerName}</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>QTY</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Description</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>@ Ksh</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Total</Text>
          </View>
        </View>
        {data.items.map((item: any, index: any) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.quantity}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.description}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.unitPrice}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {item.quantity * item.unitPrice}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={styles.text}>TOTAL: {data.total}</Text>
      <Text style={styles.text}>Amount in words: {data.amountInWords}</Text>
    </Page>
  </Document>
);

export default MyDocument;