import React from "react";
import AlgoShield from "../../AlgoShield";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import SettingsScreen from "../../AlgoShield/pages/settings/Settings";

export default function AlgoShieldSettings() {
  return (
    <AlgoShield>
      <MainLayout>
        <SettingsScreen />
      </MainLayout>
    </AlgoShield>
  );
} 