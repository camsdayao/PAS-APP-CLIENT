import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  promptShow: true,
  accNumResult: "",
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
    setAccountPrompt: (state, action) => {
      state.promptShow = action.payload;
    },
    setaccNumResult: (state, action) => {
      state.accNumResult = action.payload;
    },
  },
});
export const { openPrompt, closePrompt, setAccountPrompt, setaccNumResult } =
  policypromptSlice.actions;
export default policypromptSlice.reducer;
