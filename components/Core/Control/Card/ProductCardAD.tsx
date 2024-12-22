import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Card } from "@rneui/base";
import { textShortener } from "../TextShortener";

export interface ProductProps {
  product: {
    id: string;
    title: string;
    image: string;
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
      <TouchableNativeFeedback onPress={handlePress}>
        <Card containerStyle={styles.card}>
          <Card.Image
            source={{ uri: product.image }}
            style={styles.cardImage}
          />
          <Card.Title style={styles.cardTitle}>
            {product?.title?.length > 37
              ? textShortener(product.title) + "..."
              : product.title}
          </Card.Title>
          <Card.Title style={[styles.cardTitle, styles.priceTitle]}>
            {`$${product.price}`}
          </Card.Title>
        </Card>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 300,
    width: 170,
    borderRadius: 10,
    padding: 10,
    margin: 8,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    objectFit: "contain",
  },
  cardTitle: {
    fontSize: 14,
    marginTop: 10,
  },
  priceTitle: {
    marginTop: -10,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ProductCardAD;
