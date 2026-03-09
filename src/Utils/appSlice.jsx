import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpened: true
    },
    reducers: {
      toggleMenu: (state) => {
        state.isMenuOpened = !state.isMenuOpened
      }
    }
})

export const {toggleMenu} = appSlice.actions

export default appSlice.reducer;