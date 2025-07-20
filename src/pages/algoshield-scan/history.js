import ScanHistory from "../../AlgoShield/pages/history/ScanHistory";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function HistoryPage() {
  return (
    <AlgoShield>
      <MainLayout>
        <ScanHistory />
      </MainLayout>
    </AlgoShield>
  );
} 