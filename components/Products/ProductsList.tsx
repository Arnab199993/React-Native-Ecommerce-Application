import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import ProductCardAD from "../Core/Control/Card/ProductCardAD";
import ProductDataService from "../DataAccess/ProductDataAccess";
import { Product } from "../Entity/Product";
import { SearchProduct } from "../Core/Control/Search";

const ProductsList = ({ navigation }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    const res = await ProductDataService.GetAll();
    setProducts(res);
    setFilteredProducts(res);
  };

  const handleSearch = (text: string) => {
    const filtered = SearchProduct(products, text);
    setFilteredProducts(filtered);
  };

  const renderProduct = ({ item }: any) => (
    <ProductCardAD product={item} navigation={navigation} />
  );

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.upperDiv}>
        <Text style={styles.shopText}>Shop</Text>
        <View style={styles.searchBarContainer}>
          <TextInput
            onChangeText={handleSearch}
            placeholder="Search"
            style={styles.searchBarPadding}
          />
        </View>
      </View>

      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://imgs.search.brave.com/2pKKJdUemBpSunCqMJZ9Uqj0YfquQwAjKc7jV1GmaK0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ5LzUwLzE1/LzM2MF9GXzI0OTUw/MTU0MV9YbVdkZkFm/VWJXQXZHeEJ3QU0w/YmEyYVlUMzZudGxw/SC5qcGc",
          }}
          style={styles.bannerImage}
        />
      </View>

      <Text style={styles.HeaderText}>Shop your favorite product</Text>

      <FlatList
        data={filteredProducts} // Use filteredProducts instead of products
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  banner: {
    alignItems: "center",
    marginVertical: 10,
  },
  bannerImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  upperDiv: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  shopText: {
    fontSize: 30,
    fontWeight: "800",
  },
  searchBarContainer: {
    height: 40,
    flex: 1,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: "#d5dbdb",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  searchBarPadding: {
    fontSize: 16,
  },
  HeaderText: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 10,
  },
  productsContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
});

export default ProductsList;
