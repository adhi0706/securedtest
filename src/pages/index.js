"use client";
import MetaTags from "../components/common/MetaTags";
import { useDispatch } from "react-redux";
import Home from "../pageComponents/home/HomePage";
import { useRouter } from "next/router";
import {
  getHomeSelector,
  setIsLargeScreen,
} from "../redux/slices/main/homeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ChatWidget from "../components/chat/ChatWidget";

export default function Index() {
  const dispatch = useDispatch();
  const { isLargeScreen, isRequestModalOpen } = useSelector(getHomeSelector);
  const router = useRouter();
  const pathname = router.pathname;

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
      <ChatWidget bottomOffset={100} rightOffset={16} mobileBottomOffset={160} />
    </div>
  );
}
