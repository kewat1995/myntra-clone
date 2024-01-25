import { createSlice } from "@reduxjs/toolkit";
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToitems: (state, action) => {
      state.push(action.payload);
    },
    removeFromitems: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
export const bagSliceActions = bagSlice.actions;
export default bagSlice;
