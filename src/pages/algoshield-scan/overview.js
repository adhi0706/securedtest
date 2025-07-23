import OverviewScreen from "../../AlgoShield/pages/overview/Overview";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function OverviewPage() {
  return (
    <AlgoShield>
      <MainLayout>
        <OverviewScreen />
      </MainLayout>
    </AlgoShield>
  );
} 