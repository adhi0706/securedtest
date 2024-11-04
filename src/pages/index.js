"use client";
import MetaTags from "../components/common/MetaTags";
import { useDispatch } from "react-redux";
import Home from "../pageComponents/home/HomePage";
import { usePathname } from "next/navigation";
import {
  getHomeSelector,
  setIsLargeScreen,
} from "../redux/slices/main/homeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Index() {
  const dispatch = useDispatch();
  const { isLargeScreen, isRequestModalOpen } = useSelector(getHomeSelector);
  const pathname = usePathname();

  useEffect(() => {
    const isSolidityShieldScan = pathname.startsWith("/solidity-shield-scan");

    // Only manipulate the DOM on the client side
    if (isSolidityShieldScan && isLargeScreen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isLargeScreen, pathname]);

  return (
    <div className="bg-primary dark:bg-secondary text-secondary dark:text-primary">
      <Home />
    </div>
  );
}
