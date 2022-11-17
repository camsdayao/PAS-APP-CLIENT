import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: "welcome",
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});
export const { setDisplay } = menuSlice.actions;
export default menuSlice.reducer;
