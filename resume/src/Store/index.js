import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./chnageColor";
import FormSlice from "./form-slice";
import selectedSlice from "./SelectedResume";
import userSlice from "./user-info";

const store = configureStore({
  reducer: {
    form: FormSlice.reducer,
    user: userSlice.reducer,
    colors: colorSlice.reducer,
    selected : selectedSlice.reducer,
  },
});

export default store;
