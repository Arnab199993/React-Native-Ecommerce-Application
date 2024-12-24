import { Product } from "@/components/Entity/Product";
import CartManagement from "@/components/Redux/CartMenagement";
import React from "react";
import { View, Text, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { IconButton, Button, Divider, Card } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

const CheckoutCardAD = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.CartManagement.products);
  const handleIncrement = (id: Product["id"]) => {
    dispatch(CartManagement.actions.incrementProductQuantity(id));
  };

  const handleDecrement = (id: Product["id"]) => {
    dispatch(CartManagement.actions.decrementProductQuantity(id));
  };

  const handleRemove = (product: Product) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () =>
            dispatch(CartManagement.actions.removeProduct(product.id)),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      {products.map((item: Product & { quantity: number }) => (
        <Card key={item.id} style={styles.card}>
          <Image source={{ uri: item.thumbnail }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>
              ${item.price * item.quantity}
            </Text>
            <View style={styles.quantityContainer}>
              <IconButton
                icon="minus"
                mode="outlined"
                onPress={() => handleDecrement(item.id)}
                style={styles.iconButton}
              />
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <IconButton
                icon="plus"
                mode="outlined"
                onPress={() => handleIncrement(item.id)}
                style={styles.iconButton}
              />
            </View>
          </View>
          <Divider style={styles.divider} />
          <Button
            mode="contained"
            onPress={() => handleRemove(item)}
            style={styles.removeButton}
            labelStyle={styles.buttonLabel}
          >
            Remove from Cart
          </Button>
        </Card>
      ))}
    </View>
  );
};

export default CheckoutCardAD;

const styles = StyleSheet.create({
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

  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
