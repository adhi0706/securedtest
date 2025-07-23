import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import ChartCard from "./ChartCard";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  getIssuesSelector,
  setDateFilter,
} from "../../redux/dashboard/issuesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getIssuesChartData } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";

const issuesTimeFilter = ["All", "Monthly", "Weekly", "Today"];
const issuesChartHeaderOptions = [
  "High level issues",
  "Medium level issues",
  "Low level issues",
];

const CustomAreaChart = ({ data }) => (
  <ResponsiveContainer className="w-1/2 text-xs" width="100%" height={350}>
    <AreaChart
      margin={{
        left: -30,
      }}
      data={data}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12D576" stopOpacity={1} />
          <stop offset="100%" stopColor="#12D576" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="value" />
      <Tooltip
        formatter={(value) => new Intl.NumberFormat("en").format(value)}
      />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#47EF9E"
        fill="url(#colorUv)"
        strokeWidth={3}
      />
    </AreaChart>
  </ResponsiveContainer>
);

const IssuesChart = () => {
  const { issuesData, dateFilter } = useSelector(getIssuesSelector);
  const [dropDown, setDropDown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState("High level issues");
  const dispatch = useDispatch();

  const auth = useSelector(getUserData);

  useEffect(() => {
    async function fetch() {
      await getIssuesChartData({
        dispatch,
        email: localStorage.getItem("UserEmail"),
      });
      console.log(issuesData);
    }
    fetch();
  }, [!issuesData && issuesData]);

  // const toggleDropDown = () => {
  //   setDropDown(!dropDown);
  // };

  return (
    <div className="flex-1 w-full">
      <ChartCard>
        <div className="sss-overview-issues-card-container">
          <div className="sss-overview-issues-card">
            <div className="sss-overview-issues-card-header">
              <div className="sss-overview-issues-header-left">
                <div className="sss-overview-issues-header-left-title">
                  Issues
                </div>
                <div className="sss-overview-issues-header-left-desc">
                  Issues found you in your scans
                </div>
              </div>
              {/* <div className="sss-overview-issues-header-right">
                <div
                  onClick={toggleDropDown}
                  className="sss-overview-issues-header-right-dropdown"
                >
                  <div className="sss-overview-issues-header-right-dropdown-content">
                    {dateFilter}
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  {dropDown && (
                    <div className="sss-overview-issues-header-right-dropdown-options">
                      {issuesTimeFilter.map((filter) => {
                        return (
                          <div
                            onClick={() => dispatch(setDateFilter(filter))}
                            className="sss-overview-issues-header-right-dropdown-option-container"
                          >
                            <div className="sss-overview-issues-header-right-dropdown-option">
                              {filter}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div> */}
            </div>
            <div className="sss-overview-issues-card-body">
              {/* <div className="sss-overview-issues-card-chart-header">
                <div className="sss-overview-issues-card-chart-header-text">
                  <img layout="intrinsic"   layout="intrinsic"   
                    src="/assets/images/securedapp-logo-light.svg/issues-chart-header-icon.svg"
                    alt="Issues Chart Header Icon"
                  />
                  <div className="sss-overview-issues-card-chart-header-right">
                    <div className="text-xs text-[#969BA0]">Income</div>
                    <div className="text-lg font-semibold">Lorem Ipsum</div>
                  </div>
                </div>
                <div className="sss-overview-issues-card-chart-header-options">
                  {issuesChartHeaderOptions.map((option) => {
                    return (
                      <div
                        onClick={() => setSelectedOptions(option)}
                        className={`sss-overview-issues-card-chart-header-option ${
                          option === selectedOptions
                            ? "border-[#12D576] text-black"
                            : "border-black"
                        }`}>
                        {option}
                      </div>
                    );
                  })}
                </div>
              </div> */}
              <div className="sss-overview-issues-card-chart-main">
                <CustomAreaChart data={issuesData} />
              </div>
            </div>
          </div>
        </div>
      </ChartCard>
    </div>
  );
};

export default IssuesChart;
