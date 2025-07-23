import React from "react";
import AlgoShield from "../../AlgoShield";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import BillingScreen from "../../AlgoShield/pages/billing/Billing";

export default function AlgoShieldPayment() {
  return (
    <AlgoShield>
      <MainLayout>
        <BillingScreen />
      </MainLayout>
    </AlgoShield>
  );
} 