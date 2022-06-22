import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./textSlice/textSlice";

export const store = configureStore({
  reducer: {
    markdown: textReducer,
  },
});
