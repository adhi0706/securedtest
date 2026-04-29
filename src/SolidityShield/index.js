import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import AuthScreen from "./pages/auth/AuthScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import ContactUs from "./pages/contactUs/ContactUs";
import OverviewScreen from "./pages/overview/Overview";
import { Provider } from "react-redux";
import { solidityShieldScanStore } from "./redux/store";
import "./index.css";
import { MainLayout, NoSidebarLayout } from "./components/sidebar/Layout";
import ScanHistory from "./pages/history/ScanHistory";
import BillingScreen from "./pages/billing/Billing";
import Pricing from "./pages/pricing/Pricing";
import ScanNowModal from "./components/modal/ScanNowModal";
import PaymentModal from "./components/modal/PaymentModal";
import VulnerabilityScan from "./pages/vulnerabilityScan/VulnerabilityScan";
import ScanReport from "./pages/scanReport/ScanReport";
import { ToastContainer } from "react-toastify";
import RegisterScreen from "./pages/auth/RegisterScreen";
import AuditCertificate from "./pages/auditCertificate/AuditCertificate";
import Settings from "./pages/settings/Settings";
import TxStatus from "./pages/txStatus/txStatus";
import { useSelector } from "react-redux";
import { getCommonSelector } from "./redux/commonSlice";
import RequestQuoteModal from "./components/modal/RequestQuoteModal";

const SolidityShield = () => {
  const isRequestModalOpen = useSelector(getCommonSelector);
  return (
    <Provider store={solidityShieldScanStore}>
      <div>
        <ScanNowModal />
        <PaymentModal />
        {!isRequestModalOpen && <RequestQuoteModal />}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<OverviewScreen />} />
            <Route path="overview" element={<OverviewScreen />} />
            <Route path="history" element={<ScanHistory />} />
            {/* <Route path="vulnerability-scans" element={<VulnerabilityScan />} />
            <Route path="audit-certificate" element={<AuditCertificate />} /> */}
            <Route path="settings" element={<Settings />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="report/:id" element={<ScanReport />} />
            <Route path="payment" element={<BillingScreen />} />
            <Route path="txn-status/:id" element={<TxStatus />} />
          </Route>
          <Route element={<NoSidebarLayout />}>
            <Route path="auth" element={<AuthScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="register" element={<RegisterScreen />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default SolidityShield;
