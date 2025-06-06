import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // console.log(current(state)) //to see the current state for debugging
      // console.log(state);
      // state = [];
      // console.log(state);
      // state = []; //this will not work as we are not mutating the state it wont change the original state  

      // state.items.length = 0;

      //RTK - Either mutate the existing state or return a new state
      return {items : [] }; //this will work as we are returning a new state 
      //this new[] will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
