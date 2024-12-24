import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/Entity/Product";

interface CartState {
  products: (Product & { quantity: number })[];
  count: number;
}

const initialState: CartState = {
  products: [],
  count: 0,
};

const CartManagement = createSlice({
  name: "CartManagement",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.count += 1;
    },
    removeProduct: (state, action: PayloadAction<Product["id"]>) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );

      if (productToRemove) {
        state.count -= productToRemove.quantity;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    incrementProductQuantity: (state, action: PayloadAction<Product["id"]>) => {
      const product = state.products.find((item) => item.id === action.payload);

      if (product) {
        product.quantity += 1;
        state.count += 1;
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<Product["id"]>) => {
      const product = state.products.find((item) => item.id === action.payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.count -= 1;
      } else if (product && product.quantity === 1) {
        product.quantity = 1;
        state.count -= 1;
      }
    },
  },
});

export default CartManagement;
