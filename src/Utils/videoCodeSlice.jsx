import { createSlice } from "@reduxjs/toolkit";

const videoCodeSlice = createSlice({
    name: "videoDetails",
    initialState:{ name: "Nthg", code: 0 },
    reducers: {
        addVideoCodeDetails:(state, action) => {
          return action.payload
        }
    }
})

export const {addVideoCodeDetails} = videoCodeSlice.actions

export default videoCodeSlice.reducer