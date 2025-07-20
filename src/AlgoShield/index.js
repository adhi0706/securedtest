import React from "react";
import { Provider } from "react-redux";
import { algoShieldStore } from "./redux/store";
import ScanNowModal from "./components/modal/ScanNowModal";
import PaymentModal from "./components/modal/PaymentModal";
import RequestQuoteModal from "./components/modal/RequestQuoteModal";

const AlgoShield = ({ children }) => {
  return (
    <Provider store={algoShieldStore}>
      <div>
        <ScanNowModal />
        <PaymentModal />
        <RequestQuoteModal />
        {children}
      </div>
    </Provider>
  );
};

export default AlgoShield;
