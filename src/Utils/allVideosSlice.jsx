import { createSlice } from "@reduxjs/toolkit";

const allVideosSlice = createSlice({
    name: "allVideos",
    initialState: {
        videos: [],
    },
    reducers: {
        setAllVideos: (state, action) => {
            state.videos = [...state.videos, ...action.payload];
            if (state.videos.length > 200) {
                state.videos = state.videos.slice(state.videos.length - 150);
            }
        }
    }
})

export const { setAllVideos } = allVideosSlice.actions;
export default allVideosSlice.reducer;