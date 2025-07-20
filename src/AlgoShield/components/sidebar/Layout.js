import { useRouter } from "next/router";
import Header from "../header/Header";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSelectedSidebarItem } from "../../redux/commonSlice";

const capitalizePath = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const MainLayout = ({ children }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (router.asPath) {
      const pathName = router.asPath.split("/")[2];
      if (pathName) {
        if (pathName === "vulnerability-scans" || pathName === "scan-report") {
          dispatch(setSelectedSidebarItem("Vulnerability Scans"));
        } else if (pathName === "pricing") {
          dispatch(setSelectedSidebarItem("Payment"));
        } else if (pathName === "audit-certificate") {
          dispatch(setSelectedSidebarItem("Audit Certificate"));
        } else {
          dispatch(setSelectedSidebarItem(capitalizePath(pathName)));
        }
      }
    }
  }, [router.asPath]);

  return (
    <div className="sss-product">
      <Sidebar />
      <div className="sss-product-with-header">
        <Header />
        {children}
      </div>
    </div>
  );
};

export const NoSidebarLayout = ({ children }) => {
  return <div className="py-4 h-screen overflow-y-auto">{children}</div>;
};
