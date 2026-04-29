"use client";

import React, { useEffect } from "react";
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
import RequestQuoteModal from "../../components/modal/RequestQuoteModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkMode, isLargeScreen, isRequestModalOpen } =
    useSelector(getHomeSelector);

  const navigate = useRouter();
  let nextPath;

  const currentPath = navigate.asPath;

  switch (currentPath) {
    case "/solidity-shield":
      nextPath = "/solidity-shield-scan";
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
    default:
      nextPath = null;
  }

  const handleNavigation = () => {
    if (nextPath) typeof window !== "undefined" && window.open(nextPath);
    else {
      dispatch(setIsRequestModalOpen(true));
    }
  };

  const setModeDark = () => {
    document.body.classList.add("dark");
    dispatch(setDarkMode(true));
    localStorage.theme = "dark";
  };

  const setModeLight = () => {
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

  return (
    <div className="absolute z-10 top-0 left-0 right-0">
      {isRequestModalOpen && <RequestQuoteModal />}
      {isLargeScreen ? (
        <NavbarLargeScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      ) : (
        <NavbarSmallScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  );
};

export default Navbar;
