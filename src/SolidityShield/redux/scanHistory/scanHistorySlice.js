import { createSelector, createSlice } from "@reduxjs/toolkit";

const scanHistory = {
  history: [],
};

const scanHistorySlice = createSlice({
  name: "scanHistory",
  initialState: scanHistory,
  reducers: {
    setScanHistory(state, action) {
      state.history = action.payload;
    },
  },
});

export const getScanHistory = createSelector(
  (state) => state.scanHistory,
  (state) => state
);

export const { setScanHistory } = scanHistorySlice.actions;

export default scanHistorySlice.reducer;
