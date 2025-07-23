import BillingScreen from "../../AlgoShield/pages/billing/Billing";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function PaymentPage() {
  return (
    <AlgoShield>
      <MainLayout>
        <BillingScreen />
      </MainLayout>
    </AlgoShield>
  );
} 