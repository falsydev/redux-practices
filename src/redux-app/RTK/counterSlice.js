import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterRTK",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
