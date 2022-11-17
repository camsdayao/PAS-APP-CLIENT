import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  promptShow: true,
};

const policypromptSlice = createSlice({
  name: "prompt",
  initialState: initialState,
  reducers: {
    openPrompt: (state) => {
      state.promptShow = true;
    },
    closePrompt: (state) => {
      state.promptShow = false;
    },
  },
});
export const { openPrompt, closePrompt } = policypromptSlice.actions;
export default policypromptSlice.reducer;
