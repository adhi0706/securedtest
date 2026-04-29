"use client";

import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialCommonState = {
  showSideBar:
    typeof window !== "undefined" && window.innerWidth < 840 ? false : true,
  selectedSidebarItem: "Overview",
  isRequestModalOpen: false,
  creditsRemaining: 10,
  scanNowModal: false,
  isLoading: false,
  sourceType: "Github",
  chainType: "Ethereum Mainnet",
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialCommonState,
  reducers: {
    setSideBar(state, action) {
      state.showSideBar = action.payload;
    },
    setSelectedSidebarItem(state, action) {
      state.selectedSidebarItem = action.payload;
    },
    setIsRequestModalOpen(state, action) {
      state.isRequestModalOpen = action.payload;
    },
    setCreditsRemaining(state, action) {
      state.creditsRemaining = action.payload;
    },
    setScanNowModal(state, action) {
      state.scanNowModal = action.payload;
    },
    setLoader(state, action) {
      state.isLoading = action.payload;
    },
    setSourceType(state, action) {
      state.sourceType = action.payload;
    },
    setChainType(state, action) {
      state.chainType = action.payload;
    },
  },
});

export const getCommonSelector = createSelector(
  (state) => state.common,
  (state) => state
);

export const {
  setSideBar,
  setSelectedSidebarItem,
  setCreditsRemaining,
  setScanNowModal,
  setLoader,
  setSourceType,
  setChainType,
  setIsRequestModalOpen,
} = commonSlice.actions;

export default commonSlice.reducer;
