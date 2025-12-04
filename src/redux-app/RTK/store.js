import { configureStore } from "@reduxjs/toolkit";
import counterReducerRTK from "./counterSlice";

export const store = configureStore({
  reducer: {
    counterRTK: counterReducerRTK,
  },
});
