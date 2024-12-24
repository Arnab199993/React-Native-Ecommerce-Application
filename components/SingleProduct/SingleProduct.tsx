import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Product } from "../Entity/Product";
import { useDispatch } from "react-redux";
import CartManagement from "../Redux/CartMenagement";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SingleProduct = (props: any) => {
  const { params }: any = useRoute();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/${params?.productId}`
      );
      const data = await res?.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params?.productId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found!</Text>
      </View>
    );
  }

  const handleAddToCart = (Product: Product) => {
    dispatch(CartManagement.actions.addProductToCart(Product));
    ToastAndroid.show(
      "Product has been added to the cart successfully",
      ToastAndroid.LONG
    );
  };

  const handleGotoCart = (Product: Product) => {
    props.navigation.navigate("Checkout");
    dispatch(CartManagement.actions.addProductToCart(Product));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(product)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleGotoCart(product)}
            style={styles.buyNowBtn}
          >
            <Text style={styles.addToCartText}>Buy Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "contain",
    objectFit: "contain",
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e90ff",
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buyNowBtn: {
    marginTop: 5,
    backgroundColor: "#FDDA0D",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 40,
  },
});

export default SingleProduct;
