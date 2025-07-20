import TxStatus from "../../../AlgoShield/pages/txStatus/txStatus";
import { MainLayout } from "../../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../../AlgoShield";

export default function TxnStatusPage() {
  return (
    <AlgoShield>
      <MainLayout>
        <TxStatus />
      </MainLayout>
    </AlgoShield>
  );
} 