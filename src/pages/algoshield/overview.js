import React from "react";
import AlgoShield from "../../AlgoShield";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import OverviewScreen from "../../AlgoShield/pages/overview/Overview";

export default function AlgoShieldOverview() {
  return (
    <AlgoShield>
      <MainLayout>
        <OverviewScreen />
      </MainLayout>
    </AlgoShield>
  );
} 