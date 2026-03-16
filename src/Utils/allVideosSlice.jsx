import { createSlice } from "@reduxjs/toolkit";

const allVideosSlice = createSlice({
    name: "allVideos",
    initialState: {
        videos: [],
    },
    reducers: {
        setAllVideos: (state, action) => {
            state.videos = action.payload;
            if (state.videos.length > 200) {
                state.videos = state.videos.slice(state.videos.length - 150);
            }
        },
        // Append more videos to the existing list (used for infinite scroll)
        appendVideos: (state, action) => {
            state.videos = [...state.videos, ...action.payload];
            if (state.videos.length > 200) {
                state.videos = state.videos.slice(state.videos.length - 150);
            }
        }
    }
})

export const { setAllVideos, appendVideos } = allVideosSlice.actions;
export default allVideosSlice.reducer;