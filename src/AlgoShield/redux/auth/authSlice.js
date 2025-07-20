import { createSelector, createSlice } from "@reduxjs/toolkit";

const auth = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: auth,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
  },
});

export const getUserData = createSelector(
  (state) => state.auth,
  (state) => state
);

export const { login } = authSlice.actions;

export default authSlice.reducer;
