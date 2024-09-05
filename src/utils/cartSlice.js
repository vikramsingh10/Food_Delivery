import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // items in the format { id, name, price, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1);
      }
    },
    decrementItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decrementItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
