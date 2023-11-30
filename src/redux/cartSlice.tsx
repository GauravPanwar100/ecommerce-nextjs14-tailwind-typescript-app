import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";

import { ProductTypes } from "@/types/product";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  } as any,
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      const existingItem = state.items.find(
        (item: ProductTypes) => item.id === action.payload.id
      );

      if (existingItem) {
        toast("Item already in cart.");
        return;
      }

      state.items.push(action.payload);
      //setting in localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      toast.success("Item added to cart.");
    },
    removeItem: (state, action) => {
      const withoutItem = state.items.filter(
        (item: ProductTypes) => item.id !== action.payload.id
      );
      // state.items.pop();
      state.items = withoutItem;
      //setting in localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      toast.success("Item removed from cart.");
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []
      //setting in localstorage
      localStorage.removeItem("cartItems");
      toast.success("Cart become empty.");
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item: ProductTypes) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity + 1;
      }

      //setting in localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));

      toast.success(
        `Quantity increased for ${action.payload.title} successfully.`
      );
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item: ProductTypes) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity - 1;
      }

      //setting in localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));

      toast.success(
        `Quantity decreased for ${action.payload.title} successfully.`
      );
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
