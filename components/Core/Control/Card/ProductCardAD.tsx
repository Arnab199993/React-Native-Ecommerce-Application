import React from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Text,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import { textShortener } from "../TextShortener";

interface ProductProps {
  product: {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
  };
  navigation: any;
}

const ProductCardAD = ({ product, navigation }: ProductProps) => {
  const handlePress = () => {
    navigation.navigate("SingleProduct", { productId: product.id });
  };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={handlePress}
        accessibilityLabel={`View details for ${product.title}`}
      >
        <Card style={styles.card}>
          <Image source={{ uri: product.thumbnail }} style={styles.cardImage} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>
              {product?.title.length > 36
                ? textShortener(product.title) + "..."
                : product.title}
            </Text>
            <Text style={styles.priceTitle}>{`$${product.price.toFixed(
              2
            )}`}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  card: {
    height: 280,
    width: 170,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: {
    height: 180,
    width: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a73e8",
    marginBottom: 4,
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default ProductCardAD;
