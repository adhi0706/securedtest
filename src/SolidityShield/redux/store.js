import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";
import authReducer from "./auth/authSlice";
import scanSummaryReducer from "./dashboard/scanSummarySlice";
import issuesReducer from "./dashboard/issuesSlice";
import historyReducer from "./dashboard/historySlice";
import scanHistoryReducer from "./scanHistory/scanHistorySlice";
import paymentReducer from "./dashboard/paymentSlice";

export const solidityShieldScanStore = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    scanSummary: scanSummaryReducer,
    issues: issuesReducer,
    history: historyReducer,
    scanHistory: scanHistoryReducer,
    payment: paymentReducer,
  },
});
