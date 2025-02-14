import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialScanSummaryState = {
  dateFilter: "Today",
  scanSummary: {
    percentageValue: 0,
    values: [],
    summary: "",
    id: 0,
  },
};

const scanSummarySlice = createSlice({
  name: "scanSummary",
  initialState: initialScanSummaryState,
  reducers: {
    setDateFilter(state, action) {
      state.dateFilter = action.payload;
    },
    setScanSummary(state, action) {
      state.scanSummary = action.payload;
    },
  },
});

export const getOverviewSelector = createSelector(
  (state) => state.scanSummary,
  (state) => state
);

export const { setDateFilter, setScanSummary } = scanSummarySlice.actions;

export default scanSummarySlice.reducer;
