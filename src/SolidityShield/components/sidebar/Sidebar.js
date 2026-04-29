"use client";

import { useSelector } from "react-redux";
import {
  getCommonSelector,
  setSelectedSidebarItem,
  setSideBar,
} from "../../redux/commonSlice";
import { setIsRequestModalOpen } from "../../redux/commonSlice.js";
import { useDispatch } from "react-redux";
import CustomDivider from "../../components/common/CustomDivider";
import { sidebarItems } from "./sidebar.data.js";
import { useRouter } from "next/router";
import CustomButton from "../common/CustomButton.js";
import ProgressBar from "@ramonak/react-progress-bar";
import { getUserData } from "../../redux/auth/authSlice.js";
import { logout } from "../../functions.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import Image from "next/image";

export const Sidebar = () => {
  const { showSideBar, selectedSidebarItem, creditsRemaining } =
    useSelector(getCommonSelector);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const dispatch = useDispatch();
  const navigate = useRouter();
  const totalCredits = 20;

  const auth = useSelector(getUserData);

  const selectMenuItem = (index) => {
    navigate.push("/solidity-shield-scan/" + sidebarItems[index].to);
    dispatch(setSelectedSidebarItem(sidebarItems[index].name));
    isMobile && dispatch(setSideBar(false));
  };

  const handleLogout = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      //title: "Are you sure?",
      text: "Are you sure you want to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
      background: "#f4f4f4",
      customClass: {
        title: "text-danger",
        popup: "custom-popup-class", // You can define your own class for further customization
      },
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  const handleRequest = () => {
    dispatch(setIsRequestModalOpen(true));
  };

  return (
    showSideBar && (
      <div className="sss-sidebar-container">
        <div className="sss-sidebar">
          <div className="sss-sidebar-upper">
            <div className="sss-sidebar-header">
              <img
                layout="intrinsic"
                className="sss-sidebar-header-logo"
                src="/assets/images/securedapp-logo-light.svg"
                alt="SecureDApp Logo"
              />
              <img
                layout="intrinsic"
                onClick={() => dispatch(setSideBar(false))}
                src="/assets/images/solidity-shield-scan/sidebar-menu.svg"
                alt="Sidebar Toggle"
                className="cursor-pointer"
              />
            </div>
            <CustomDivider classname={"w-full pt-5"} />
            <div className="sss-body">
              <div className="sss-body-header">
                <div className="">MAIN MENUS</div>
              </div>
              <div className="sss-body-navigation">
                {sidebarItems.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        if (item.name === "Log Out") {
                          handleLogout();
                        } else {
                          selectMenuItem(index);
                        }
                      }}
                      className={`sss-sidebar-item-container ${
                        selectedSidebarItem === item.name &&
                        "selected-sss-sidebar-item"
                      }`}
                    >
                      <div className="sss-sidebar-item">
                        <div className="sss-sidebar-item-logo">
                          <item.image
                            fill={"none"}
                            stroke={
                              selectedSidebarItem === item.name
                                ? "#12D576"
                                : "#B2ABAB"
                            }
                          />
                        </div>
                        <div className="sss-sidebar-item-text">{item.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ width: "calc(100% - 30px)", margin: "15px" }}>
                <CustomButton
                  onClick={handleRequest}
                  className={
                    "w-full border border-tertiary text-black bg-[#12D576] py-2 rounded-xl active:bg-white"
                  }
                  text={"Request Manual Audit"}
                />
              </div>
            </div>
          </div>
          <div className="sss-sidebar-lower">
            <div className="sss-sidebar-credits-card">
              <div className="">Remaining Credits</div>
              <div className="sss-sidebar-credits-container">
                <div className="">
                  <ProgressBar
                    completed={
                      ((auth.user.credits - auth.user.remainingCredits) /
                        auth.user.credits) *
                      100
                    }
                    height={"10px"}
                    bgColor="#12D576"
                    isLabelVisible={false}
                    baseBgColor="#CDCDCD"
                  />
                </div>
                <div className="sss-sidebar-credits-text">
                  {auth.user.remainingCredits}/{auth.user.credits}
                </div>
              </div>
              <CustomButton
                text={"Upgrade Now"}
                className="w-full border border-tertiary text-black bg-[#12D576] py-2 rounded-xl active:bg-white"
                onClick={() => navigate.push("/solidity-shield-scan/pricing")}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
