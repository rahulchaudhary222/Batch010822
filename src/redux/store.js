import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";
import userSlice from "./reducer2";
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
  },
});
