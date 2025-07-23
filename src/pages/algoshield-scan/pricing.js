import Pricing from "../../AlgoShield/pages/pricing/Pricing";
import { MainLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function PricingPage() {
  return (
    <AlgoShield>
      <MainLayout>
        <Pricing />
      </MainLayout>
    </AlgoShield>
  );
} 