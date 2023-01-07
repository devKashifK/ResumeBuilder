import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: "selected",
  initialState: {
    resume: 0,
  },
  reducers: {
    resumeChange: (state, action) => {
      state.resume = action.payload;
    },
  },
});

export default selectedSlice;

export const selectedActions = selectedSlice.actions;
