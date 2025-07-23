import React from "react";
import AlgoShield from "../../AlgoShield";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import HistoryScreen from "../../AlgoShield/pages/history/ScanHistory";

export default function AlgoShieldHistory() {
  return (
    <AlgoShield>
      <MainLayout>
        <HistoryScreen />
      </MainLayout>
    </AlgoShield>
  );
} 