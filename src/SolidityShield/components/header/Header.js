"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CustomButton from "../common/CustomButton";
import { toast } from "react-toastify";
import {
  getCommonSelector,
  setScanNowModal,
  setSideBar,
} from "../../redux/commonSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CustomDivider from "../common/CustomDivider";
import { scanSubmit } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";

const Header = () => {
  const { showSideBar, scanNowModal } = useSelector(getCommonSelector);
  const auth = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useRouter();

  return (
    <div className="sss-header-container">
      <div className="sss-header">
        <div className="sss-header-left">
          {!showSideBar && (
            <div
              onClick={() => dispatch(setSideBar(true))}
              className="sss-header-sidebar-opener"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
          )}
          {/* <div className="sss-header-search-container">
            <div className="sss-header-search">
              <div className="sss-header-search-icon">
                <img layout="intrinsic"   layout="intrinsic"   
                  src="/assets/images/solidity-shield-scan/search-icon.svg"
                  alt="Search Icon"
                />
              </div>
              <input
                placeholder="Search..."
                className="sss-header-search-input"
              />
            </div>
          </div> */}
          <div>
            {typeof window !== "undefined" &&
              window.width > 1024 &&
              "Solidity Shield to protect the heart of your Web3 project"}
          </div>
        </div>
        <div className="sss-header-center">
          <img
            layout="intrinsic"
            className="w-1/3"
            src="/assets/images/securedapp-logo-light.svg"
            alt="SecureDapp"
          />
        </div>
        <div className="sss-header-right">
          {/* <div className="sss-header-right-calendar">
            <img layout="intrinsic"   layout="intrinsic"   
              src="/assets/images/solidity-shield-scan/header-calendar.svg"
              alt="Calendar Logo"
            />
            <div className="sss-header-right-calendar-text">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="sss-header-right-notifications">
            <img layout="intrinsic"   layout="intrinsic"   
              src="/assets/images/solidity-shield-scan/header-notif.svg"
              alt="Notification Logo"
            />
          </div> */}
          <div className="sss-header-right-button">
            <CustomButton
              onClick={() =>
                auth.user.email
                  ? dispatch(setScanNowModal(true))
                  : navigate.push("/solidity-shield-scan/auth")
              }
              className={
                "w-[100px] sm:w-[125px] px-1 sm:px-3 py-1 sm:py-2 rounded-xl bg-tertiary text-black active:bg-white active:border active:border-tertiary active:text-black"
              }
              text={"Scan Now"}
            />
          </div>
        </div>
      </div>
      <CustomDivider classname={"w-full"} />
    </div>
  );
};

export default Header;
