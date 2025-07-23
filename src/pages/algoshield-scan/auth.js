import AuthScreen from "../../AlgoShield/pages/auth/AuthScreen";
import { NoSidebarLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function AuthPage() {
  return (
    <AlgoShield>
      <NoSidebarLayout>
        <AuthScreen />
      </NoSidebarLayout>
    </AlgoShield>
  );
} 