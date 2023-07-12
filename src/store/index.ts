import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";
export default configureStore({
  reducer: {
    // Here we will be adding reducers
    user: userSlice.reducer,
  },
});