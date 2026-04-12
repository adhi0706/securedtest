import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // default falling back, will be synced in _app.js
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
