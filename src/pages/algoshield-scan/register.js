import RegisterScreen from "../../AlgoShield/pages/auth/RegisterScreen";
import { NoSidebarLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function RegisterPage() {
  return (
    <AlgoShield>
      <NoSidebarLayout>
        <RegisterScreen />
      </NoSidebarLayout>
    </AlgoShield>
  );
} 