import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "Form",
  initialState: {
    data: [],
    image: "",
  },
  reducers: {
    userData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    userImage: (state, action) => {
      state.image = [action.payload];
    },
  },
});

export default FormSlice;

export const formActions = FormSlice.actions;
