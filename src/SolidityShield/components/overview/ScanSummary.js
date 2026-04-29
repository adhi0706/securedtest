import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import ChartCard from "./ChartCard";
import {
  getOverviewSelector,
  setDateFilter,
} from "../../redux/dashboard/scanSummarySlice";
import { getUserData } from "../../redux/auth/authSlice";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CustomButton from "../common/CustomButton";
import { getScanHistoryData, getScanSummaryData } from "../../functions";
import {
  getCommonSelector,
  setScanNowModal,
  setSideBar,
} from "../../redux/commonSlice";

const scanSummaryTimeFilter = ["Monthly", "Weekly", "Today"];

const GradientCircularProgressbar = ({ value, text }) => {
  let gradientTransform = `rotate(${120})`;

  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient
            id={"circularGradient"}
            gradientTransform={gradientTransform}
          >
            <stop offset="0%" stopColor={"#12D576"} />
            <stop offset="100%" stopColor={"#6BFFB7"} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbarWithChildren
        value={value * 10}
        circleRatio={0.75}
        strokeWidth={12}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          pathTransition: "stroke-dashoffset 1s ease 0s",
          strokeLinecap: "butt",
          trailColor: "#F0F0F0",
          pathColor: "url(#circularGradient)",
        })}
      >
        <div className="sss-scan-summary-progress-value-container">
          <div className="sss-scan-summary-progress-value">{text}</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

const FigureComponent = ({ value, text, color }) => {
  return (
    <div
      style={{ border: `2px solid ${color}` }}
      className="sss-figure-component-container"
    >
      <div className="sss-figure-component">
        <div className="sss-figure-component-figure">{value}</div>
        <div className="sss-figure-component-text">{text}</div>
      </div>
    </div>
  );
};

const ScanSummary = ({ firstTime }) => {
  const { dateFilter, scanSummary } = useSelector(getOverviewSelector);
  const scanHistory = useSelector(getScanHistory);
  const dispatch = useDispatch();
  const navigate = useRouter();

  const auth = useSelector(getUserData);

  useEffect(() => {
    const fetch = async () => {
      await getScanSummaryData({
        email: localStorage.getItem("UserEmail"),
        dispatch,
      });
      // console.log(scanSummary);
    };
    fetch();
  }, [!scanSummary && scanSummary]);

  return (
    <div className="flex-1 w-full">
      <ChartCard>
        <div className="sss-overview-scan-summary-container">
          <div className="sss-overview-scan-summary">
            <div className="sss-overview-scan-summary-header">
              <div className="sss-overview-scan-summary-header-left">
                <div className="sss-overview-scan-summary-header-left-title">
                  Scan Summary
                </div>
                <div className="sss-overview-scan-summary-header-left-desc">
                  Summary of your latest scan
                </div>
              </div>
              {/* <div className="sss-overview-scan-summary-header-right">
                {scanSummaryTimeFilter.map((time) => {
                  return (
                    <div
                      onClick={() => dispatch(setDateFilter(time))}
                      className="sss-overview-scan-summary-header-right-item-container"
                    >
                      <div
                        className={`sss-overview-scan-summary-header-right-item ${
                          time === dateFilter &&
                          "sss-scan-summary-selected-date-filter"
                        }`}
                      >
                        {time}
                      </div>
                      <div
                        className={`sss-scan-summary-date-filter-under ${
                          time === dateFilter &&
                          "sss-scan-summary-date-filter-under-selected"
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div> */}
            </div>
            <div className="sss-scan-summary-body">
              <div className="sss-scan-summary-body-chart-container">
                <div className="sss-scan-summary-body-chart">
                  <GradientCircularProgressbar
                    value={scanSummary.percentageValue}
                    text={`${scanSummary.percentageValue} / 10`}
                  />
                  <p style={{ textAlign: "center" }}>Audit Score</p>
                </div>
              </div>
              <div className="sss-scan-summary-body-cards">
                {scanSummary.values.map((item) => [
                  <FigureComponent
                    value={item.value}
                    text={item.name}
                    color={item.color}
                  />,
                ])}
              </div>
              <div className="sss-scan-summary-body-result">
                <div className="sss-scan-summary-body-result-title">
                  {firstTime ? "No Scan found" : "Summary"}
                </div>
                <div className="sss-scan-summary-body-result-description">
                  {firstTime
                    ? "Start with your first scan now"
                    : scanSummary.summary}
                </div>
                <div className="sss-scan-summary-body-result-button">
                  {firstTime ? (
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
                  ) : (
                    <CustomButton
                      text={"More Details"}
                      className={
                        "bg-[#12D576] rounded-3xl text-[#ffffff] py-3 w-[150px] active:bg-white active:border active:border-tertiary active:text-black"
                      }
                      onClick={() =>
                        navigate.push(
                          `/solidity-shield-scan/report?id=${
                            scanHistory.history.reduce((max, item) => {
                              return item.id > max.id ? item : max;
                            }, scanHistory.history[0]).id
                          }`
                        )
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ChartCard>
    </div>
  );
};

export default ScanSummary;
