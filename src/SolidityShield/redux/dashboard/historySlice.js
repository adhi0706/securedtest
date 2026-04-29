import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialHistorySliceState = {
  statusFilter: "All",
};

const historySlice = createSlice({
  name: "history",
  initialState: initialHistorySliceState,
  reducers: {
    setHistoryStatusFilter(state, action) {
      state.statusFilter = action.payload;
    },
  },
});

export const getHistorySelector = createSelector(
  (state) => state.history,
  (state) => state
);

export const { setHistoryStatusFilter } = historySlice.actions;

export default historySlice.reducer;
