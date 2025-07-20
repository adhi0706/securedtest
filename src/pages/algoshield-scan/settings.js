import Settings from "../../AlgoShield/pages/settings/Settings";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function SettingsPage() {
  return (
    <AlgoShield>
      <MainLayout>
        <Settings />
      </MainLayout>
    </AlgoShield>
  );
} 