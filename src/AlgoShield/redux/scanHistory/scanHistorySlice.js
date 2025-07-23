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

export const getScanHistory = (state) => state.scanHistory;

export const { setScanHistory } = scanHistorySlice.actions;

export default scanHistorySlice.reducer;
