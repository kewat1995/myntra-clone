import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./FetchingStatusSlice";

const itemStore = configureStore({
  reducer: {
    item: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default itemStore;
