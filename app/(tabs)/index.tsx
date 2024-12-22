import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsList from "@/components/Products/ProductsList";
import SingleProduct from "@/components/SingleProduct/SingleProduct";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductsList">
          <Stack.Screen
            name="ProductsList"
            component={ProductsList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SingleProduct"
            component={SingleProduct}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
