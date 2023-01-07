import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "Color",
  initialState: {
    color: "#376092",
  },
  reducers: {
    colorChange: (state, action) => {
      state.color = action.payload;
    },
  },
});

export default colorSlice;

export const colorActions = colorSlice.actions;
