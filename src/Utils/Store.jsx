import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import languageSlice from "./languageSlice"
import modeSlice from "./modeSlice";
import allVideosSlice from "./allVideosSlice";

const store = configureStore({
  reducer:{
    app: appSlice,
    language: languageSlice,
    mode: modeSlice,
    allVideos: allVideosSlice
  }
})

export default store