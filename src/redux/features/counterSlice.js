import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 5;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incresByAmout: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const { increment, decrement,incresByAmout } = counterSlice.actions;
export default counterSlice.reducer;
