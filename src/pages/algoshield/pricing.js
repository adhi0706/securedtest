import React from "react";
import AlgoShield from "../../AlgoShield";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import PricingScreen from "../../AlgoShield/pages/pricing/Pricing";

export default function AlgoShieldPricing() {
  return (
    <AlgoShield>
      <MainLayout>
        <PricingScreen />
      </MainLayout>
    </AlgoShield>
  );
} 