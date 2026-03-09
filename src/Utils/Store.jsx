import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import languageSlice from "./languageSlice"
import modeSlice from "./modeSlice";

const store = configureStore({
  reducer:{
    app: appSlice,
    language: languageSlice,
    mode: modeSlice
  }
})

export default store