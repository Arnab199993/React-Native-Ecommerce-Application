import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "@/components/Entity/Product";
import { useSelector } from "react-redux";
const PaymentCardAD = () => {
  const products = useSelector((state: any) => state.CartManagement.products);
  console.log("productssssChex", products);
  return (
    <View>
      {products.map((product: Product) => (
        <View key={product.id} style={styles.card}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
            <Text style={styles.productQuantity}>
              Quantity: {product.quantity}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PaymentCardAD;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    elevation: 5,
    marginBottom: 10,
    width: "100%",
    marginHorizontal: "auto",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 10,
  },
  productDetails: {
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  productQuantity: {
    fontSize: 14,
    color: "#888",
  },
});
