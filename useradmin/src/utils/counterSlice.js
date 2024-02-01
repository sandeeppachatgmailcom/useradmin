import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    item: 5,
  },
  reducers: {
    increment: (state) => {
      state.item = state.item + 1;
    },
    decrement: (state, action) => {
      state.item = state.item - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
