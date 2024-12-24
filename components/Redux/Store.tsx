import { configureStore } from "@reduxjs/toolkit";
import CartManagement from "./CartMenagement";
const store = configureStore({
  reducer: {
    CartManagement: CartManagement.reducer,
  },
});
export default store;
