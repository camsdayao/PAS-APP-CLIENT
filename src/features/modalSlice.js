import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountCreatedShow: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openAccountCreatedModal: (state) => {
      state.accountCreatedShow = true;
    },
    closeAccountCreatedModal: (state) => {
      state.accountCreatedShow = false;
    },
  },
});
export const { openAccountCreatedModal, closeAccountCreatedModal } = 
  modalSlice.actions;
export default modalSlice.reducer;
