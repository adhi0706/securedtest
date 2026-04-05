import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/main/homeSlice";
import commonReducer from "../SolidityShield/redux/commonSlice";
import authReducer from "../SolidityShield/redux/auth/authSlice";
import scanSummaryReducer from "../SolidityShield/redux/dashboard/scanSummarySlice";
import issuesReducer from "../SolidityShield/redux/dashboard/issuesSlice";
import historyReducer from "../SolidityShield/redux/dashboard/historySlice";
import scanHistoryReducer from "../SolidityShield/redux/scanHistory/scanHistorySlice";
import paymentReducer from "../SolidityShield/redux/dashboard/paymentSlice";
import themeReducer from "./slices/themeSlice";

export const mainStore = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    home: homeReducer,
    scanSummary: scanSummaryReducer,
    issues: issuesReducer,
    history: historyReducer,
    scanHistory: scanHistoryReducer,
    payment: paymentReducer,
    theme: themeReducer,
  },
});
