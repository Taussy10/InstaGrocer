



// alwasy create slice in this way
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] ,

  //  {
  //   cart: [],
  // },
  
  // state can be 20 and you do action and add 1 = 21
  reducers: {
    addToCart: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );
      if (isAvailable) {
        actions.payload["quantity"] += 1; // increase quantity by one
      } else {
        // we have added quanity name object in array of initalState that is later used for inrement purposes 
        state.push({ ...actions.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, actions) => {
      const newList = state.filter(
        (value) => value.name != actions.payload.name
      );
      return (state = newList);
    },

    incrementQty: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name === actions.payload.name
      );

      if (isAvailable) {
        isAvailable.quantity++;
      } else {
        console.log("not available");
      }
    },
    decrementQty: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );

      if (isAvailable.quantity == 1) {
        isAvailable.quantity = 1;
      } else {
        isAvailable.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;

// we are exporting cartSlice reducer not cartSlice whole file
export default cartSlice.reducer;













