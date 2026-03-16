import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import languageSlice from "./languageSlice"
import modeSlice from "./modeSlice";
import allVideosSlice from "./allVideosSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoCodeSlice from "./videoCodeSlice"

const store = configureStore({
  reducer:{
    app: appSlice,
    language: languageSlice,
    mode: modeSlice,
    allVideos: allVideosSlice,
    search: searchSlice,
    chat: chatSlice,
    videoCode: videoCodeSlice
  }
})

export default store