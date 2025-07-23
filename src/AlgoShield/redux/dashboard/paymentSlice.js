import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialPaymentState = {
  paymentModal: false,
  selectedPlan: 1,
  couponCode: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialPaymentState,
  reducers: {
    setPaymentModal(state, action) {
      state.paymentModal = action.payload;
    },
    setPlan(state, action) {
      state.selectedPlan = action.payload;
    },
    setCouponCode(state, action) {
      state.couponCode = action.payload;
    },
  },
});

export const getPaymentSelector = createSelector(
  (state) => state.payment,
  (state) => state
);

export const { setPaymentModal, setPlan, setCouponCode } = paymentSlice.actions;

export default paymentSlice.reducer;
