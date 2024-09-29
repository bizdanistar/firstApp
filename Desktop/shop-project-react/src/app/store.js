import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; // Corrected import
import CartSlice from "./Features/Cart/CartSlice";
import CategorySlice from "./Features/Category/CategorySlice";
import ProductSlice from "./Features/Product/ProductSlice";

let initialState = {};

let store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: ProductSlice,
    carts: CartSlice,
  },
});

// Setup listeners to enable refetching and background refreshes for queries
setupListeners(store.dispatch);

// Enable Redux DevTools extension if available
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  window.__REDUX_DEVTOOLS_EXTENSION__();
}

export default store;
