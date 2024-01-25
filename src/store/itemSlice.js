import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/item";

const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});
export const itemSliceActions = itemSlice.actions;
export default itemSlice;
