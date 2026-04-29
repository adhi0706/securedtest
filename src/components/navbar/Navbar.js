"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getHomeSelector,
  setIsRequestModalOpen,
  setDarkMode,
  setIsLargeScreen,
} from "../../redux/slices/main/homeSlice";
import AOS from "aos";
import RequestQuoteModal from "../modal/RequestQuoteModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkMode, isLargeScreen, isRequestModalOpen } =
    useSelector(getHomeSelector);

  const navigate = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  let nextPath;

  const currentPath = navigate.asPath;

  switch (currentPath) {
    case "/smart-contract-audit":
      nextPath = "/solidity-shield-scan/auth";
      break;
    case "/real-time-blockchain-threat-monitoring":
      nextPath = "https://securewatch.securedapp.io/login";
      break;
    case "/blockchain-forensic-investigation-tool":
      nextPath = "https://securetrace.securedapp.io/";
      break;
    case "/secure-pad":
      nextPath = "https://securepad.xyz/";
      break;
    case "/auditexpress/home":
      nextPath = "/auditexpress/home";
      break;
    case "/web3-kyc":
      nextPath = "/web3-kyc";
      break;
    case "/consent-management-platform":
      nextPath = "https://cms-app.securedapp.io/";
      break;
    default:
      nextPath = null;
  }

  const handleNavigation = () => {
    if (nextPath) {
      if (nextPath.startsWith("http")) {
        typeof window !== "undefined" && window.open(nextPath, "_blank");
      } else {
        typeof window !== "undefined" && window.open(nextPath, "_self");
      }
    } else {
      dispatch(setIsRequestModalOpen(true));
    }
  };

  const setModeDark = () => {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
    dispatch(setDarkMode(true));
    localStorage.theme = "dark";
  };

  const setModeLight = () => {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
    dispatch(setDarkMode(false));
    localStorage.theme = "light";
  };

  const toggleTheme = () => {
    if (darkMode === true) {
      setModeLight();
    } else {
      setModeDark();
    }
  };

  useEffect(() => {
    setIsMounted(true);
    if (localStorage.theme) {
      if (localStorage.theme === "dark") {
        setModeDark();
      } else if (localStorage.theme === "light") {
        setModeLight();
      }
    } else {
      if (darkMode) {
        setModeDark();
      } else {
        setModeLight();
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        dispatch(setIsLargeScreen(window.innerWidth >= 1024));
      }
    };
    handleResize();
    AOS.init();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [dispatch]);

  const buttonText = 
    currentPath?.includes("/consent-management-platform") ? "Try it now" : 
    (currentPath === "/" || currentPath?.includes("/quantumvault.tech/enterprise-hsm-key-management") ? "Request Quote" : "Login");

  return (
    <div className="absolute z-[999] w-full top-0 left-0 right-0 pointer-events-none">
      <div className="pointer-events-auto relative">
      {isRequestModalOpen && <RequestQuoteModal />}
      {!isMounted || isLargeScreen ? (
        <NavbarLargeScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          buttonText={buttonText}
          isMainPage={true}
        />
      ) : (
        <NavbarSmallScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          buttonText={buttonText}
          isMainPage={true}
        />
      )}
      </div>
    </div>
  );
};

export default Navbar;
