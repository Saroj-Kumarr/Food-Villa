import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice/ItemSlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});

export default store;
