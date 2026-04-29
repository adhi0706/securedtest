import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialIssuesState = {
  dateFilter: "Today",
  issuesData: [
    { name: "Issue1", value: 10 },
    { name: "Issue2", value: 8 },
    { name: "Issue3", value: 0 },
    { name: "Issue4", value: 11 },
    { name: "Issue5", value: 15 },
  ],
};

const issuesSlice = createSlice({
  name: "issues",
  initialState: initialIssuesState,
  reducers: {
    setDateFilter(state, action) {
      state.dateFilter = action.payload;
    },
    setIssuesData(state, action) {
      state.issuesData = action.payload;
    },
  },
});

export const getIssuesSelector = createSelector(
  (state) => state.issues,
  (state) => state
);

export const { setDateFilter, setIssuesData } = issuesSlice.actions;

export default issuesSlice.reducer;
