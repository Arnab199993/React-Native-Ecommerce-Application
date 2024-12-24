import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";

import CheckoutCardAD from "../Core/Control/Card/CheckoutCardAD";

const CheckoutPage = (props: any) => {
  const handleProceedToPayment = () => {
    props.navigation.navigate("Payment");
  };

  return (
    <ScrollView style={styles.container}>
      <CheckoutCardAD />

      <Button
        mode="contained"
        onPress={() => handleProceedToPayment()}
        style={styles.checkoutButton}
        labelStyle={styles.buttonLabel}
      >
        Proceed to Checkout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginTop: 40,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    objectFit: "contain",
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  productDescription: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2a9d8f",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    backgroundColor: "#e9ecef",
    borderRadius: 24,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
  },
  removeButton: {
    backgroundColor: "#e63946",
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: "#264653",
    borderRadius: 8,
    marginBottom: 40,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CheckoutPage;
