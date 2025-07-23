import React from "react";
import { useRouter } from "next/router";
import AlgoShield from "../AlgoShield";
import { MainLayout } from "../AlgoShield/components/sidebar/Layout";
import OverviewScreen from "../AlgoShield/pages/overview/Overview";

export default function AlgoShieldScan() {
  const router = useRouter();
  
  // Get the current path from the router
  const currentPath = router.asPath.replace('/algoshield-scan', '') || '/';
  
  // For now, just show the overview with main layout
  return (
    <AlgoShield>
      <MainLayout>
        <OverviewScreen />
      </MainLayout>
    </AlgoShield>
  );
} 