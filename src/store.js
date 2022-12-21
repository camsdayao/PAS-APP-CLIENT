import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import modalSlice from "./features/modalSlice";
import policypromptSlice from "./features/accountpromptSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    menu: menuSlice,
    prompt: policypromptSlice,
  },
});
