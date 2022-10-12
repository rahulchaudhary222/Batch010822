import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    name: "rahul",
    age: 30,
  },
  reducers: {
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAge, updateName } = userSlice.actions;

export default userSlice.reducer;
