import LoginScreen from "../../AlgoShield/pages/auth/LoginScreen";
import { NoSidebarLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function LoginPage() {
  return (
    <AlgoShield>
      <NoSidebarLayout>
        <LoginScreen />
      </NoSidebarLayout>
    </AlgoShield>
  );
} 