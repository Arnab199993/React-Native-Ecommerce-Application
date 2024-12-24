import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { Product } from "../Entity/Product";
import CheckoutCardAD from "../Core/Control/Card/PaymentCardAD";
import PaymentCardAD from "../Core/Control/Card/PaymentCardAD";

const { width } = Dimensions.get("window");

const Payment = () => {
  const products = useSelector((state: any) => state.CartManagement.products);

  const calculateTotal = () => {
    return products
      .reduce(
        (total: number, product: any) =>
          total + product.price * product.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Payment Page</Text>

      <View style={styles.summary}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <PaymentCardAD />

        <Text style={styles.totalAmount}>Total: ${calculateTotal()}</Text>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  summary: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    elevation: 5,
    width: width * 0.9,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a9d8f",
    marginTop: 10,
  },
  payButton: {
    backgroundColor: "#FFB74D",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Payment;
