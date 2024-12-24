import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { Provider } from "react-redux";
import store from "@/components/Redux/Store";
import index from ".";
import CheckoutPage from "@/components/Checkout/Checkout";
import Payment from "@/components/Payment/Payment";
import SplashScreen from "react-native-splash-screen";

export default function TabLayout() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainTabs"
              component={index}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingleProduct"
              component={SingleProduct}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={CheckoutPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </Provider>
  );
}
